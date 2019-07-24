<template>
    <div class="review-card">
        <div class="review-product-card">
            <div class="review-card-header">
                <a href="#" class="review-product-img">
                    <img :src='product_image'/>
                </a>
                <div class="product-title">
                    <h4>{{product_name}}</h4>
                    <p>{{product_desc}}</p>
                </div>
            </div>
            <div class="review-stars">
                <StarRating :rating='product_rating' :id='this.$props.id' />
                <span class="review-date">5 minutes ago</span>
            </div>
            <p>
                {{comment}}...
                <span><a href="">Read More</a></span>
            </p>
        </div>
        <div class="review-user">
            <div class="user-img-container">
                <img :src='default_avatar' />
            </div>
            <a class="review-user-name">{{username}}</a>
            <p class="review-user-profile">
                {{profile}}
            </p>
        </div>
    </div>
</template>
<script>
import StarRating from '@/components/StarRating'
export default {
    data: function(){
        return {
            product_rating : 0,
            username: '',
            profile: '',
            comment: '',
            product_image: '',
            product_name: '',
            product_desc: '',
            default_avatar : require('../assets/images/default-avatar.png')
        }
    },
    props: ['data', 'id'],
    components: {
        StarRating
    },
    mounted(){
        if (this.$props.data){
            this.product_rating = this.$props.data.star
            this.username = this.$props.data.user
            this.profile = this.$props.data.profile.toString()
            this.comment = this.$props.data.comment
            this.product_image = this.$props.data.product.image
            this.product_name = this.$props.data.product.name
            this.product_desc = this.$props.data.product.desc
        }
    }
}
</script>