module.exports = {
  tag: 'el-dialog',
  attribute: {
    replacedNames: {
      'closable': 'show-close',
      'mask-closable': 'close-on-click-modal',
      ':loading': 'v-loading',
      'class-name': 'custom-class',
    },
    logTiming: ['scrollable', 'ok-text', 'cancel-text', 'style']
  },
  events: {
    replacedNames: {
      'on-cancel': 'close'
    },
    removed: ['on-ok']
  }
};
  
