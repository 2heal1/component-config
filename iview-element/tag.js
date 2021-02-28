module.exports = {
  // 目标tag
  tag: 'el-tag',
  attribute: {
    removed: ['name'],
  },
  events:{
    replacedNames: {
      'on-close': 'close',
    }
  }
};
  
