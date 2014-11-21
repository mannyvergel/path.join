joinPath-js
===========

Function to join paths that always returns forward slashes (uniform for unix and windows). A replacement to path.join

###Installation:
```npm install joinPath```

###Usage:
```
var joinPath = require('joinPath');

var onlyPath = joinPath('path', '//to/', '/my', 'heart');
//expected value for both UNIX and Windows: path/to/my/heart
```
