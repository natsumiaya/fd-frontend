<template>
    <div class="ads-container" v-bind:style="{height: this.$props.height, width: this.$props.width}">
        <!-- for future ads change src into specific sources -->
        <img :src="'https://via.placeholder.com/'+this.$props.width+'x'+this.$props.height+'.png?text='+this.$props.text" />
    </div>
</template>
<script>
export default {
    // for future ads use src instead of text
    props: ['height', 'width', 'text']
}
</script>
