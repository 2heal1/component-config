module.exports = {
  // 目标tag
  tag: 'el-transfer',
  logTiming: ['on-change','selected-keys','list-style','not-found-tex'],
  attribute: {
    replacedNames: {
      'targetKeys': 'value',
      'render-format': 'render-content',
      'operations': 'button-texts',
    },
    removed: ['selected-keys', 'list-style', 'not-found-text'],
  }
};
  
