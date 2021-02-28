module.exports = {
  // 目标tag
  tag: 'el-popover',
  logTiming: ['confirm','slot','on-'],
  attribute: {
    replacedNames: {
      'delay': 'open-delay'
    },
    removed: ['ok-text', 'cancel-text'],
  },
  events:{
    replacedNames: {
      'on-popper-show': 'show',
      'on-popper-hide': 'hide',
    }
  }
};
  
