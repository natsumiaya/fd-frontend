<template>
<header class="page-header">
    <div class="top-bar">
        <div class="top-bar-left">
            <button><i class="fa fa-bars"></i></button>
            <img class="brand" src="https://via.placeholder.com/149x27?text=logo"/>
        </div>
        <div class="top-bar-search">
            <form class="top-bar-search-input-form">
                <i class="fa fa-search"></i>
                <input placeholder="Search products, articles, topics, brands, etc"/>
            </form>
        </div>
        <div class="top-bar-login">
            <a>LOGIN/SIGNUP</a>
        </div>
    </div>
    <nav class="navbar-container">
        <ul class="nav-menu">
            <li class="nav-items" v-for="nav in nav_items">
                <a v-bind:href="nav.link">{{nav.menu}}</a>
            </li>
        </ul>
    </nav>
</header>
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
