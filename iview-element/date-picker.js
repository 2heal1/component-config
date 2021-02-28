module.exports = {
  // 目标tag
  tag: 'el-date-picker',
  logTiming:['format'],
  attribute: {
    replacedNames: {
      'options': 'picker-options'
    },
    replacedValue: {
      'size': {
        'large': 'medium'
      }
    },
    removed: ['placement', 'open', 'confirm'],
  }
};
  
