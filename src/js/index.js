require(['require.config'],() =>{
    require(['swiper','header','footer'],(Swiper) =>{
        class Index{
            constructor(){
                this.banner();
            }
            banner(){
                var mySwiper = new Swiper ('.swiper-container', {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay : {
                        delay: 2500,
                    },
                    loop: true, 
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                })
            }
        }
        new Index();
    })
})