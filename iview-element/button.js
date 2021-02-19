module.exports = {
  // 目标tag
  tag: 'el-button',
  attribute: {
    replacedNames: {
      'active-name': 'default-active'
    },
    replacedValue: {
      'size': {
        'large': 'medium'
      },
      'type': {
        'error': 'danger'
      }
    },
    removed: ['width'],
    logTiming: ['type', 'shape', 'long', 'htmlType']
  }
};
  
