const componentsConfig = require('./components-config')

module.exports = {
  "dir": [
    "src"
  ],
  "script": {
    "extension": [
      "vue",
      "js"
    ],
    "removePackage": [],
    "installPackage": [],
    "npmOption": [],
    "registry": "https://registry.npmjs.org/"
  },
  "style": {
    "extension": [
      "css",
      "less",
      "scss"
    ]
  },
  "mode": "normal",
  "tag": {
    "old": "i-",
    "replece": "el-"
  },
  components:componentsConfig,
}