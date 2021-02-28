module.exports = {
  // 目标tag
  tag: 'el-menu',
  logTiming: ['open','ref'],
  attribute: {
    replacedNames: {
      'active-name': 'default-active',
      'open-names': 'default-openeds'
    },
    replacedValue: {
      'theme': {
        'light': 'default'
      }
    },
    removed: ['width'],
    logTiming: []
  }
};
  
