define(['jquery'], $ =>{
    function Header(){
        this.container = $("#header-container");
        this.load();
    }
    //对象合并
    $.extend(Header.prototype,{
        load(){
            //加载header.html
            return new Promise(resolve =>{
                this.container.load('/html/module/header.html',()=>{
                    resolve();
                })
            })
        }

    })
    return new Header();
});