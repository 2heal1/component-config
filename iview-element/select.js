module.exports = {
  // 目标tag
  tag: 'el-select',
  logTiming: ['label-in-value','ref'],
  attribute: {
    replacedNames: {
      'not-found-text': 'no-data-text'
    },
    replacedValue: {
      'size': {
        'large': 'medium'
      }
    }
  },
  events:{
    replacedNames: {
      'on-change': 'change',
      'on-clear': 'clear',
    }
  }
};
  
