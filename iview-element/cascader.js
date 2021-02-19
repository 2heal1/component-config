module.exports = {
  // 目标tag
  tag: 'el-cascader',
  attribute: {
    replacedNames: {
      'data': 'options',
      'trigger': 'expandTrigger',
      'change-on-select': 'checkStrictly',
    },
    replacedValue: {
      'size': {
        'large': 'medium'
      },
      'type': {
        'error': 'danger'
      }
    },
    removed: ['render-format'],
  },
  events: {
    // 什么情况下 需要记录文件位置，方便后续手动修改
    logTiming: ['on-change']
  }
};
  
