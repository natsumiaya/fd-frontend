<template>
    <div class="review-card">
        <div class="review-card">
            <a href="#">
                <img />
            </a>
            <div class="product-title">
                <h4></h4>
                <p></p>
            </div>
        </div>
        <div class="review-stars">
            <StarRating :rating='product_rating' :id='this.$props.id' />
            <span class="review-date"></span>
        </div>
        <a href="#">
            <span>Read More</span>
        </a>
        <div class="review-user">
            <div class="user-img-container">
                <img src="" />
            </div>
            <a class="review-user-name"></a>
            <p class="review-user-profile">

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
            product_desc: ''
        }
    },
    props: ['data', 'id'],
    mounted(){
        if (this.$props.data){
            this.product_rating = this.$props.data.star
            console.log(this.$props.data)
        }
    }
}
</script>