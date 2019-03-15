import Animate from './animate'
import { easeOutCubic, easeInOutCubic } from './utils'
const TEMPLATE = `
<div class="scroller-component" data-role="component">
  <div class="scroller-mask" data-role="mask"></div>
  <div class="scroller-indicator" data-role="indicator"></div>
  <div class="scroller-content" data-role="content"></div>
</div>
`
class Scroller {
  constructor (container) {
    this.__init(container)
    this.__initEvent()
  }

  __init (container) {
    this.__container = document.querySelector(container)
    let tempContainer = document.createElement('div')
    tempContainer.innerHTML = TEMPLATE

    this.__component = tempContainer.querySelector('[data-role=component]')
    this.__content = this.__component.querySelector('[data-role=content]')
    this.__indicator = this.__component.querySelector('[data-role=indicator]')

    let data = [
      { value: 1, name: 1 },
      { value: 2, name: 2 },
      { value: 3, name: 3 },
      { value: 4, name: 4 },
      { value: 5, name: 5 }
    ]
    let html = ''
    data.forEach(function (row) {
      html += '<div class="scroller-item" data-value=' + JSON.stringify({ value: encodeURI(row.value) }) + '>' + row.name + '</div>'
    })
    this.__content.innerHTML = html

    this.__container.appendChild(this.__component)

    this.__startTouchTop = 0
    this.__scrollTop = 0
    this.__maxScrollTop = this.__component.clientHeight / 2 // 滚动最大值
    this.__minScrollTop = -(this.__content.offsetHeight - this.__maxScrollTop) // 滚动最小值
    this.__isAnimating = false // 是否开启动画

    this.__lastTouchMove = 0 // 最后滚动时间记录
    this.__positions = [] // 记录位置和时间

    this.__deceleratingMove = 0 // 减速运动速度
    this.__isDecelerating = false // 是否开启减速状态

    this.__itemHeight = parseFloat(window.getComputedStyle(this.__indicator).height)
  }

  __initEvent () {
    let that = this
    let touchStartHandler = (e) => {
      that.__touchStartHandler(e)
    }
    let touchMoveHandler = (e) => {
      that.__touchMoveHandler(e)
    }
    let touchEndHandler = (e) => {
      that.__touchEndHandler(e)
    }
    this.__component.addEventListener('touchstart', touchStartHandler)

    this.__component.addEventListener('touchmove', touchMoveHandler)

    this.__component.addEventListener('touchend', touchEndHandler)
  }

  __callback (top) {
    const distance = top
    this.__content.style.transform = 'translate3d(0, ' + distance + 'px, 0)'
  }
  __publish (top, animationDuration) {
    let that = this
    if (animationDuration) {
      let oldTop = that.__scrollTop
      let diffTop = top - oldTop
      let wasAnimating = that.__isAnimating

      let step = function (percent) {
        that.__scrollTop = oldTop + (diffTop * percent)
        that.__callback(that.__scrollTop)
      }
      let verify = function (id) {
        return that.__isAnimating === id
      }
      let completed = function (renderedFramesPerSecond, animationId, wasFinished) {
        if (animationId === that.__isAnimating) {
          that.__isAnimating = false
        }
      }
      that.__isAnimating = Animate.start(step, verify, completed, animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic)
    } else {
      that.__scrollTop = top
      that.__callback(top)
    }
  }
  // 滚动到正确位置的方法
  __scrollTo (top) {
    top = Math.round((top / this.__itemHeight).toFixed(5)) * this.__itemHeight
    let newTop = Math.max(Math.min(this.__maxScrollTop, top), this.__minScrollTop)
    if (top !== newTop) {
      if (newTop >= this.__maxScrollTop) {
        top = newTop - this.__itemHeight / 2
      } else {
        top = newTop + this.__itemHeight / 2
      }
    }
    this.__publish(top, 250)
  }
  // 开始减速动画
  __startDeceleration () {
    let that = this
    let step = () => {
      let scrollTop = that.__scrollTop + that.__deceleratingMove
      let scrollTopFixed = Math.max(Math.min(that.__maxScrollTop, scrollTop), that.__minScrollTop) // 不小于最小值，不大于最大值
      if (scrollTopFixed !== scrollTop) {
        scrollTop = scrollTopFixed
        that.__deceleratingMove = 0
      }
      if (Math.abs(that.__deceleratingMove) <= 1) {
        if (Math.abs(scrollTop % that.__itemHeight) < 1) {
          that.__deceleratingMove = 0
        }
      } else {
        that.__deceleratingMove *= 0.95
      }
      that.__publish(scrollTop)
    }
    let minVelocityToKeepDecelerating = 0.5
    let verify = () => {
      // 保持减速运行需要多少速度
      let shouldContinue = Math.abs(that.__deceleratingMove) >= minVelocityToKeepDecelerating
      return shouldContinue
    }
    let completed = function (renderedFramesPerSecond, animationId, wasFinished) {
      that.__isDecelerating = false
      if (that.__scrollTop <= that.__minScrollTop || that.__scrollTop >= that.__maxScrollTop) {
        that.__scrollTo(that.__scrollTop)
      }
    }
    that.__isDecelerating = Animate.start(step, verify, completed)
  }
  __touchStartHandler (e) {
    e.preventDefault()
    const target = e.touches ? e.touches[0] : e
    this.__startTouchTop = target.pageY
  }
  __touchMoveHandler (e) {
    const target = e.touches ? e.touches[0] : e
    let currentTouchTop = target.pageY
    let moveY = currentTouchTop - this.__startTouchTop
    let scrollTop = this.__scrollTop
    scrollTop = scrollTop + moveY
    if (scrollTop > this.__maxScrollTop || scrollTop < this.__minScrollTop) {
      if (scrollTop > this.__maxScrollTop) {
        scrollTop = this.__maxScrollTop
      } else {
        scrollTop = this.__minScrollTop
      }
    }
    if (this.__positions.length > 40) {
      this.__positions.splice(0, 20)
    }
    this.__positions.push(scrollTop, e.timeStamp)

    this.__publish(scrollTop)

    this.__startTouchTop = currentTouchTop
    this.__lastTouchMove = e.timeStamp
  }
  __touchEndHandler (e) {
    if (e.timeStamp - this.__lastTouchMove < 100) { // 如果抬起时间和最后移动时间小于 100 证明快速滚动过
      let positions = this.__positions
      let endPos = positions.length - 1
      let startPos = endPos
      // 由于保存的时候位置跟时间都保存了， 所以 i -= 2
      // positions[i] > (self.__lastTouchMove - 100) 判断是从什么时候开始的快速滑动
      for (let i = endPos; i > 0 && positions[i] > (this.__lastTouchMove - 100); i -= 2) {
        startPos = i
      }
      if (startPos !== endPos) {
        // 计算这两点之间的相对运动
        let timeOffset = positions[endPos] - positions[startPos] // 快速开始时间 - 结束滚动时间
        let movedTop = this.__scrollTop - positions[startPos - 1] // 最终距离 - 快速开始距离
        // 基于50ms计算每个渲染步骤的移动
        this.__deceleratingMove = movedTop / timeOffset * (1000 / 60) // 移动距离是用分钟来计算的

        let minVelocityToStartDeceleration = 4 // 开始减速的最小速度
        // 只有速度大于最小加速速度时才会出现下面的动画
        if (Math.abs(this.__deceleratingMove) > minVelocityToStartDeceleration) {
          this.__startDeceleration()
        }
      }
    }
    if (!this.__isDecelerating) {
      this.__scrollTo(this.__scrollTop)
    }

    this.__positions.length = 0
  }
}

export default Scroller
