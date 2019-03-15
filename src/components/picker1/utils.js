// 开始快后来慢的渐变曲线
let easeOutCubic = (pos) => {
  return (Math.pow((pos - 1), 3) + 1)
}
// 以满足开始和结束的动画
let easeInOutCubic = (pos) => {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3)
  }
  return 0.5 * (Math.pow((pos - 2), 3) + 2)
}

export {
  easeOutCubic, easeInOutCubic
}
