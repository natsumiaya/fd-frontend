<template>
<div>
    <AdsBox text="TOP+FRAME+banner+970x50" height='50' width='970'/>
    <AdsBox text="BILLBOARD+banner+970x250" height='250' width='970'/>
    <div class="editor-choice-section container">
        <div class="section-title">
            <h2>Editor's Choice</h2>
            <h4>Currated with love</h4>
        </div>
        <div class="editor-choice container-item">
            <div class="editor-choice-item-container item" v-for="(items, index) in this.$store.state.datahome.editorchoice">
                <EditorChoices :data='items' :id='index' />
            </div>
        </div>
    </div>
    <div class="background-banner">
        <div class="banner-section">
            <div class="banner-container">
                <p class="banner-title">Psst! We give product matches that will be perfect for you!</p>
                <p class="banner-desc">They will fit your skin, hair, body, AND they solve your beauty concerns at the same time. Sign up and complete your Beauty ID now!</p>
                <a id="btn_login" class="button-banner" href="#">Log In / Sign Up</a>
            </div>
        </div>
    </div>
    <AdsBox text="BILLBOARD+banner+970x250" height='250' width='970'/>
    <div class="latest-article-section container">
        <div class="section-title">
            <h2>Latest Articles</h2>
            <h4>Unravel more beauty</h4>
        </div>
        <div class="latest-article container-item">
            <div class="article-container item" v-for="(items,index) in this.$store.state.datahome.latest_articles">
                <LatestArticle :data='items' :id='index' />
            </div>
        </div>
    </div>
    <div class="latest-review-section container">
        <div class="section-title">
            <h2>Latest Reviews</h2>
            <h4>So you can make better purchase decision</h4>
        </div>
        <div class="latest-review container-item">
            <div class="review-container item" v-for="(items,index) in this.$store.state.datahome.latest_review">
                <LatestReview :data='items' :id='index' />
            </div>
        </div>
    </div>
</div>
</template>
<script>
import EditorChoices from '@/components/EditorsChoiceItems.vue'
import LatestArticle from '@/components/LatestArticleItems.vue'
import LatestReview from '@/components/LatestReviewsItems.vue'
import AdsBox from '@/components/AdsBox.vue'

import { mapActions } from 'vuex';
export default {
    components: {
        EditorChoices,
        LatestArticle,
        LatestReview,
        AdsBox
    },
    mounted(){
        this.$store.dispatch('datahome/GET_DATAHOME')
    },
    computed: {
        ...mapActions([
            "datahome/GET_DATAHOME"
        ])
    },
}
</script>
