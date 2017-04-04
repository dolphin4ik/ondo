# ondo
**on** something **do** something

Get it from [CDN](https://unpkg.com/ondo@latest)

```js
let e = ondo();

e.on('hello', function(){ console.log('hello'); })
 .on('world', function(){ console.log('world'); })
 .on('greet',function(){ this.do('hello').do('world'); });
 
e.do('greet'); // -> hello world
```
.on(*event*, *callback*,*context*)
.do(*event*, *context*)

.**emit** == .**do**
