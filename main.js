const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            description: 'Some dam nice shocks',
            url: 'file:///F:/VUE3%20Projects/Intro-to-Vue-3/index.html',
            inventory: 2,
            onSale: true,
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
            sizes: ['small','medium','large'],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
    }
})
