<template>
    <div class="page-wrapper">
        <page-header></page-header>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import PageHeader from '@/views/layouts/PageHeader'

require('@/assets/css/style.css');
require('@/assets/css/font-awesome.min.css');
export default {
    name: 'Main',
    components:{
        PageHeader
    },
    data: function(){
        return{

        }
    },
    computed: {

    },
}
</script>


