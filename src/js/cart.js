require(['require.config'],() =>{
    require(['url','template','header','footer'],(url,template) =>{
        class Cart{
            constructor(){
                this.init();
            }
            init(){
                let id = Number(location.search.slice(4));
                $.get(url.rapBaseUrl + "cart", {id}, res => {
                    if(res.res_code === 1) {
                        let {data} = res.res_body;
                        data = {...data, id}; 
                        this.data = data;
                        this.render(data);
                    }
                })
            }
            render (data) {
                $("#cart").html(template("cart-template", { data }));
            }
        }
        new Cart;
    })
})