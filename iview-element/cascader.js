module.exports = {
  // 目标tag
  tag: 'el-cascader',
  logTiming: ['on-change','render-format'],
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
  }
};
  
