;(function (root, factory, name){
    if (typeof define === 'function' && define.amd){
        define([], factory);
    }else if(typeof module === 'object' && module.exports){
        module.exports = factory();
    }else{
        root[name] = factory();
    }
})(this, function (){
    return function(){

    	var events = {};
    	var ondo = {
    		on: function(name, handler, context){
    			(events[name] || (events[name] = [])).push({
    				"handler": handler || false,
    				"context": context || this
    			});
    		return this;
    		},
    		do: function(name, context){
    			if(!events[name]){
    				throw "No '" + name + "' event registered.";
    			} else {
    				var args = [].slice.call(arguments, 1);
    				events[name].forEach(function(e){
    					if(e.handler){
    						e.handler.apply((context || e.context), args);
    					}
    				});
    			}
    			return this;
    		},
    		off: function(name){
    			delete events[name];
    			return this;
    		},
            emit: function(name, context){
                return this.do(name, context);
            }
    	}
    	return ondo;

    }
}, "ondo");