;(function(win){
    win.$={};
    $.els=null;
    $.on = function(eventName,selector,callback){
        var oELs=document.querySelectorAll(selector);
        oELs=$.toArray(oELs);
        document.addEventListener(eventName,function (event) {
            if (oELs.indexOf(event.target)>=0){
                callback.call(event.target,event)
            }
        },false)
    };

    $.q=function(selector){
        $.els = document.querySelectorAll(selector);
        return $
    };
    $.style = function(key,value){
        $.els.forEach(function (el) {
            el.style[key]=value;
        });
        return $
    };
    /*
        调用:$.toArray(Object,Number)
        描述:将伪数组转换为数组
        参数:(Object)obj  伪数组
             (Number)    num ...
        返回值:(Array) 数组
    */
    $.toArray=function (obj) {
        var arr=[];
        for (var i=0;i<obj.length;i++){
            arr.push(obj[i])
        }
        return arr;
    };

    $.typeOf=function (obj) {
        if(obj!==obj){
            return 'NaN'
        }
        switch (obj){
            case null:
                return 'null';
                break;
            case undefined:
                return undefined;
                break;

        }

        switch (true){
            case obj instanceof Array:
                return 'Array';
                break;
            case obj instanceof RegExp:
                return 'RegExp';
                break;
            case obj instanceof Function:
                return 'Function';
                break;
            case obj instanceof Object:
                return 'Object';
                break;

        }

        return (typeof  obj)

    }
})(window||{});