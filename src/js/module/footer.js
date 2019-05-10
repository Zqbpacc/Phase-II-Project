define(['jquery'], $ =>{
    function Footer(){
        this.container = $("#footer-container");
        this.load();
    }
    //对象合并
    $.extend(Footer.prototype,{
        load(){
            //加载footer.html
            return new Promise(resolve =>{
                this.container.load('/html/module/footer.html',()=>{
                    resolve();
                })
            })
        }

    })
    return new Footer();
});