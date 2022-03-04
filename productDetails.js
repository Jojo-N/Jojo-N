app.component('product-details',{
    props: {
        details: {
          type: Array,
          required: true
        }
    },

    template:
    /*html*/ 
    `<ul>
        <li v-for="details in details">{{details}}</li>
    </ul>`,
    data(){
        return {
           
            details: [
                "50%cotton",
                "30% wool",
                "20% polyester",
                "10% lether"

            ]
           
        }
    
    },
    
})
