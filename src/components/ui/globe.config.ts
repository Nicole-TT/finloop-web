/** 地球视觉配置。保存后开发页面自动更新；颜色支持 CSS 色值。 */
export const globeConfig = {
  backOpacity: 0.3, // 背面线条和点阵透明度；0 隐藏背面，1 与正面相同
  oceanColor: 'transparent', // 球面底色；透明可用 'transparent'
  outlineColor: '#C8CCD5', // 球体外轮廓
  outlineWidth: 0.8, // 以下线宽、点半径以球半径 240px 为基准，随球体缩放
  gridColor: '#C8CCD5', // 经纬线
  gridWidth: 1,
  gridOpacity: 0.25, // 0–1，设为 0 隐藏经纬线
  landColor: '#C8CCD5', // 陆地轮廓
  landWidth: 1,
  dotColor: '#E3E7ED', // 陆地点阵
  dotRadius: 0.8,
  dotSpacing: 1.4, // 经纬度间距；越小越密，计算量越大，请保持大于 0
  radiusRatio: 0.5, // 球半径 / 画布较短边；越大球体越大
  rotationSpeed: 10, // 每秒旋转角度；0 停止，负数反向
  initialRotation: [0, 0] as [number, number], // 初始经度、纬度旋转角度
};
