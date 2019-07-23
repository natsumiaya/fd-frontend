<template>
    <nav class="navbar-container">
        <ul class="nav-menu">
            <li class="nav-items" v-for="nav in nav_items">
                <a v-bind:href="nav.link">{{nav.menu}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'PageHeader',
    data: function(){
        return {
            nav_items: [
                { 'menu': 'skincare',
                'link': '#' },
                { 'menu': 'make up',
                'link': '#' },
                { 'menu': 'body',
                'link': '#' },
                { 'menu': 'hair',
                'link': '#' },
                { 'menu': 'fragrance',
                'link': '#' },
                { 'menu': 'nails',
                'link': '#' },
                { 'menu': 'tools',
                'link': '#' },
                { 'menu': 'brands',
                'link': '#' },
                ]
        }
    },
}
</script>
