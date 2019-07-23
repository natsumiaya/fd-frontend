<template>
    <div :id='this.$props.id' class="star-rating-container">
        <span v-bind:style="{width: parseFloat(this.$props.rating)*20 +'%'}"></span>
    </div>
</template>

<script>
export default {
    props: ['rating', 'id'],
}
</script>
