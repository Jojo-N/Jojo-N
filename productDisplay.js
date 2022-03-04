app.component('product-display',{
    props: {
        premium: {
          type: Boolean,
          required: true
        }
      },
    template:
    /*html*/ 
    `<div class="product-display">
        <div class="product-container">
            
        
          <div class="product-image">
            <img :src='image'>
          </div>
          <div class="product-info">
            <h1>{{title}}</h1>
             <p>{{description}}</p>
            <!-- <a :href="url">readmore</a> -->
            <!-- <p v-if="invetory>20">In stock</p>  -->
            <p v-if="onSale">{{ saleMessage }}</p>
            <p v-if="inStock">In stock</p>
            <p v-else :class="{outofstockimg:!inStock}">out of stock</p>
            <p>shipping:{{shipping}}</p>
            <div class='color-circle' v-for='(variant, index) in variants':key='variant.id' @mouseover='updateVariants(index)' :style='{backgroundColor:variant.color}'></div>
            <button :disabled="!inStock" :class="{disabledButton :!inStock}" v-if class="button" @click='addToCart'>Add to Cart</button>
            <button class="button":class="{ disabledButton: !inStock }" :disabled="!inStock" @click="removeFromCart">Remove Item</button>
            <review-list :reviews="reviews"></review-list>

            <review-form @review-submitted="addReview"></review-form>
  
        </div>
            
            
    
        </div>
      </div>`,
      data(){
        return {
            product: 'socks',
            brand:'pretty',
            selectedVariant: 0,
            url: 'test.nl',
            invetory: 120,
            onSale: true,
            // inStock: false,
            

            details: [
                "50%cotton",
                "30% wool",
                "20% polyester"

            ],
            variants:[
                {
                    id: 2234, color: 'green', image:'./assets/images/socks_green.jpg',description: 'Green socks',quantity: 90
                },
                {id: 2235, color: 'blue',image:'./assets/images/socks_blue.jpg', description: 'Blue socks',quantity: 0}
            ],
            reviews: []

           
        }
        
        
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        
        updateVariants(index){
            this.selectedVariant= index
        },

        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title(){
        return this.brand + ' '  +this.product
            
        },
        image(){
        return this.variants[this.selectedVariant].image
        },

       
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
       
        saleMessage() {
            if (this.onSale) {
                return this.variants[this.selectedVariant].description + ' are on sale.'
            }
            
        },
        shipping() {
            if (this.premium) {
                return ' '+ 'free'
                
                
            }
            return + ' '+ 2.99

        }

    }

})