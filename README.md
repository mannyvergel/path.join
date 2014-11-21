path.join
===========

Node JS function to join paths that always returns forward slashes (uniform for unix and windows). A replacement to path.join

###Installation:
```npm install path.join```

###Usage:
```
var joinPath = require('path.join');

var onlyPath = joinPath('path', '//to/', '/my', 'heart');
//expected value for both UNIX and Windows: path/to/my/heart
```
