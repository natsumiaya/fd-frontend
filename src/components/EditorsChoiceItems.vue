<template>
<div class="editor-card">
     <div class="eci-header">
         <div class="eci-header-img-container">
            <img :src='default_avatar'>
         </div>
        <div class="header-name">
            <p class="editor-name">{{editor}}</p>
            <p class="editor-role">{{role}}</p>
        </div>
    </div>
    <div class="eci-product">
        <div class="eci-img-container">
            <img :src="product_image" class="eci-product-image">
        </div>
        <div class="eci-rating">
            <p class="product-card-editor-rating">
                <span class="product-card-editor-rating-average">{{product_rating}}</span>
                <StarRating :rating='product_rating' :id='this.$props.id' />
                <span>(5)</span>
            </p>
        </div>
        <div class="eci-item-detail">
            <a class="product-card-editor-brand">{{product_name}}</a>
            <a class="product-card-editor-title">{{product_description}}</a>
            <p class="product-card-editor-shade">{{product_variant}}</p>
        </div>
    </div>
</div>  
</template>
<script>
import StarRating from '@/components/StarRating'
export default {
    data:function(){
        return{
            editor: '',
            role: '',
            product_name : '',
            product_description: '',
            product_variant: '',
            image: '',
            product_rating: 0,
            product_image: '',
            default_avatar : require('../assets/images/default-avatar.png')
        }
    },
    components: {
        StarRating
    },
    props: ['data', 'id'],
    mounted(){
        if (this.$props.data){
            this.editor =  this.$props.data.editor
            this.role =  this.$props.data.role
            this.product_name =  this.$props.data.product.name
            this.product_description = this.$props.data.product.description
            this.product_variant = this.$props.data.product.variant
            this.product_image = this.$props.data.product.image
            this.product_rating = this.$props.data.product.rating
        }
    }
}
</script>
