module.exports = {
  // 目标tag
  tag: 'el-transfer',
  attribute: {
    replacedNames: {
      'targetKeys': 'value',
      'render-format': 'render-content',
      'operations': 'button-texts',
    },
    removed: ['selected-keys', 'list-style', 'not-found-text'],
  },
  events: {
    // 什么情况下 需要记录文件位置，方便后续手动修改
    logTiming: ['on-change']
  }
};
  
