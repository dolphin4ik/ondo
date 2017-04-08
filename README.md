# ondo
**on** something **do** something

Get it from [CDN](https://unpkg.com/ondo@latest)
Try it on [RunKit](https://runkit.com/58e8a7572e03700014c19610/58e8a7572e03700014c19611)

```js
let e = ondo();

e.on('hello', function(){ console.log('hello'); })
 .on('world', function(){ console.log('world'); })
 .on('greet',function(){ this.do('hello').do('world'); });
 
e.do('greet'); // -> hello world
```
.on(*event*, *callback*,*context*)

.do(*event*, *context*)