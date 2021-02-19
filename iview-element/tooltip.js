module.exports = {
  // 目标tag
  tag: 'el-tooltip',
  attribute: {
    replacedNames: {
      'delay': 'open-delay'
    },
    removed: ['always'],
  },
  events: {
    removed: ['on-popper-hide'],
  }
};
  
