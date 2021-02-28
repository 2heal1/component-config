module.exports = {
  tag: 'el-dialog',
  logTiming: ['scrollable', 'ok-text', 'cancel-text', 'style','slot','on-ok'],
  attribute: {
    replacedNames: {
      'closable': 'show-close',
      'mask-closable': 'close-on-click-modal',
      ':loading': 'v-loading',
      'class-name': 'custom-class',
      'v-model':':visible.sync'
    },
  },
  events: {
    replacedNames: {
      'on-cancel': 'close'
    },
    removed: ['on-ok']
  }
};
  
