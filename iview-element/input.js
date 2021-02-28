module.exports = {
  // 目标tag
  tag: 'el-input',
  logTiming:['on-enter','on-click','on-change'],
  attribute: {
    replacedNames: {
      'icon': 'suffix-icon'
    },
    replacedValue: {
      'size': {
        'large': 'medium'
      }
    },
    removed: ['number'],
  },
  events:{
    replacedNames: {
      'on-focus': 'focus',
      'on-blur': 'blur',
    },
    replacedNames: {
      'on-enter': 'keyup.enter.native',
      'on-search': 'keyup.enter.native',
    },
  }
};
  
