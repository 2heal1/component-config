module.exports = {
  // 目标tag
  tag: 'el-carousel',
  attribute: {
    replacedNames: {
      'autoplay-speed': 'interval',
      'dots': 'indicator-position',
    },
    removed: ['easing', 'value', 'v-model'],
    logTiming: ['confirm']
  }
};
  
