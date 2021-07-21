const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'Some dam nice shocks',
            url: 'file:///F:/VUE3%20Projects/Intro-to-Vue-3/index.html',
            inventory: 2,
            onSale: true,
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    }
})
