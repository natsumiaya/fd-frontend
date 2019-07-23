<template>
    <div class="article-card">
        <img :src='images'/>
        <a href="#" target="__blank" class="article-title">{{title}}</a>
        <p class="article-author"><a>{{author}}</a> | <span>{{date}}</span></p>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            images: '',
            title: '',
            author: '',
            date: ''
        }
    },
    props: ['data', 'id'],
    mounted(){
        if (this.$props.data){
            this.images = this.$props.data.image
            this.title = this.$props.data.title
            this.date = this.$props.data.published_at
            this.author = this.$props.data.author
        }
    }
}
</script>
