module.exports = {
  // 目标tag
  tag: 'el-menu',
  attribute: {
    replacedNames: {
      'active-name': 'default-active'
    },
    replacedValue: {
      'theme': {
        'light': 'default'
      }
    },
    removed: ['width'],
    logTiming: []
  },
  events: {
    // 什么情况下 需要记录文件位置，方便后续手动修改
    logTiming: ['open']
  }
};
  
