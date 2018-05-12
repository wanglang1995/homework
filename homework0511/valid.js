; (function (win) {
    var el;
    win.valid = function (option) {
        // console.log(option.el)   //查看对象的属性名
        el = document.getElementById(option.el);
        // console.log(el.username)
        for (var item in option.rules) {     //循环验证规则
            // console.log(el[item].value);
            if(option.rules[item].reg){
                var reg = option.rules[item].reg
            }
             var  message = option.rules[item].message,
                value = el[item].value,
            messageTag = option.rules[item].messageTag; //将messageTag保存下来
            // console.log(el.password.value);
            if (reg.test(value) === false) {
                var mes = document.getElementById(messageTag);
                mes.style.color='red';
                if(mes){
                    mes.innerHTML=message;//输入有误的时候输入错误提示
                }
                return
            }else {
                var mes = document.getElementById(messageTag);
                if(mes){
                    mes.innerHTML='√';//输入正确显示√
                    mes.style.color='green'
                }
            }
           if(el.password.value!==""){
               if(el.password.value===el.passwordclone.value&&el.passwordclone.value!==""){
                   passwordclonemsg.innerHTML='√';//输入正确显示√
                   passwordclonemsg.style.color='green';
               }else {
                   passwordclonemsg.innerHTML='两次密码输入的必须完全一致';//输入有误的时候输入错误提示
                   passwordclonemsg.style.color='red';
               }
           }
            // console.log(reg)
        }
    }


})(window);//传递window是的被封装的模块不影响其他变量,不污染全局