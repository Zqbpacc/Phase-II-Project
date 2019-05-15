define(['jquery'], $ =>{
    function Header(){
        this.container = $("#header-container");
        this.load().then(() =>{
            this.search();
            this.calcCartNum();
        });
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
        },
        search(){
            $('#search-input').on('keyup',function(){
                let keyWords = $(this).val();
                $.getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd='+ keyWords, data =>{
                    console.log(data);
                })
            })
        },
        calcCartNum(){
            // let cart = localStorage.getItem('cart');
            // let num = 0;
            // if(cart){
            //     cart.JSON.parse(cart);
            //     num = cart.reduce((n,shop) =>{
            //         n += shop.num;
            //         return n;
            //     },0)
            // }
            // $('#car-num').html(num);
            
        }
    })
    return new Header();
});