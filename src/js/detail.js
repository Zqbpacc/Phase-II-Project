require(['require.config'],() =>{
    require(['url','template','header','footer','zoom','fly'],(url,template,header) =>{
        class Detail{
            constructor(){
                this.init();
                this.addCart();
            }
            init (){
                let id = Number(location.search.slice(4));
                $.get(url.rapBaseUrl + "detail", {id}, res => {
                    if(res.res_code === 1) {
                        let {data} = res.res_body;
                        data = {...data, id}; 
                        this.data = data;
                        this.render(data);
                    }
                })
            }
            render (data){
                $("#detail").html(template("detail-template", { data }));
                this.zoom();
            }
            zoom (){
                $(".zoom-img").elevateZoom({
                  gallery:'gal1',
                  cursor: 'pointer',
                  galleryActiveClass: 'active',
                  borderSize:'1',    
                  borderColor:'#888'
                });
            }
            addCart (){
                $("#detail").on('click','#add-car',e =>{
                    // fly加购物车
                    $(`<img src='${this.data.imgs[0]}' style='width:30px;height:30px'>`).fly({
                        start:{
                            left: e.clientX,
                            top: e.clientY
                        },
                        end:{
                            left:$('#car-num').offset().left,
                            top:$('#car-num').offset().top
                        },
                        onEnd: function (){
                            this.destroy();
                            header.calcCartNum();
                        }
                    });

                    let cart = localStorage.getItem('cart');
                    if(cart){
                        cart = JSON.parse(cart);
                        let index = -1;
                        if(cart.some((shop,i) =>{
                            index = i;
                            return shop.id === this.data.id;
                        })){
                            cart[index].num++;
                        }else{
                            cart.push({...this.data,num:1});
                        }
                    }else{
                        cart = [{...this.data,num:1}]
                    }
                    localStorage.setItem('cart',JSON.stringify(cart));
                })
            }
        }
        new Detail();
    })
})