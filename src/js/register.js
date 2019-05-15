require(['require.config'],() =>{
    require(['url','header'],(url) =>{
        class Register{
            constructor(){
                this.usernameInput = $('#username');
                this.btn = $('#submit');
                this.bindEvents();
            }
            bindEvents(){
                this.btn.on("click",() =>{
                    let username = this.usernameInput.val();
                    $.ajax({
                        url:url.phpBaseUrl + "user/register.php",
                        type:"post",
                        date:{username},
                        success:data =>{
                            if(data.res_code === 1){
                                alert(data.res_message + ",即将跳转登陆页");
                                location.href = 'login.html'
                            }
                        },
                        dataType:'json'
                    })
                })
            }
        }
        new Register();
    })
})