module.exports = {
  // 目标tag
  tag: 'el-time-picker',
  logTiming: ['type','on-open-change','on-ok','on-clear'],
  attribute: {
    replacedValue: {
      'size': {
        'large': 'medium'
      }
    },
    removed: ['open', 'confirm']
  }
};
  
