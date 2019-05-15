require(['require.config'],() =>{
    require(['url',"jquery","cookie"],(url,$) =>{
        class Login{
            constructor(){
                this.usernameInput = $('#username');
                this.btn = $('#login-btn');
                this.remember = $('remember');
                this.bindEvents();
            }
            bindEvents(){
                this.btn.on('click',() =>{
                    let username = this.usernameInput;
                    $.ajax({
                        url:url.phpBaseURL + "user/login.php",
                        type:"post",
                        data:{username},
                        success:data =>{
                            if(data.res_code === 1){
                                this.loginSuccess(username);
                            }
                        },
                        dataType:'json'
                    })
                })
            }
            loginSuccess(username){
                let expires = this.remember.prop('checked') ? {expires:10} : {};
                expires = Object.assign({path:"/"},{expires});
                console.log(expires);
                $.cookie('username',username,expires);
                alert('登陆成功即将跳转首页');
                location href = "/"
            }
        }
        new Login();
    })
})