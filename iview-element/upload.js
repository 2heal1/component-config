module.exports = {
  // 目标tag
  tag: 'el-upload',
  logTiming: ['type','format','max-size','on-format-error','on-exceeded-size'],
  attribute: {
    replacedNames: {
      'show-upload-list': 'show-file-list',
      'default-file-list': 'file-list',
    },
    removed: ['type', 'format', 'max-size', 'on-format-error', 'on-exceeded-size'],
  }
};
  
