# ondo
Event Emitter

No dependencies. Works everywhere.

**on** something **do** something

Get it from [CDN](https://unpkg.com/ondo@latest)
Try it on [RunKit](https://runkit.com/58e8a7572e03700014c19610/58e8a7572e03700014c19611)

.on(*event*, *callback*, *context*)

.do(*event*, *context*)

```js
let event = require("ondo")();

event.on('hello',() => console.log('hello'));
event.on('world',() => console.log('world'));
event.do('hello').do('world'); //hello .. world

event.on('greet', function(){ this.do('hello').do('world') });
event.do('greet'); //hello .. world

event.off('greet');
event.do('greet'); //"No 'greet' event registered"


event.on("withContext", function(){ console.log(this) }, {"installed": "context"});
event.do("withContext"); //Object { "installed": "context" }
event.do("withContext", {"modified": "context"}); //Object { "modified": "context" }
```