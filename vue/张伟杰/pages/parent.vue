<template>
    <div>
        <h2>parent--parent--parent</h2>
        <nuxt-link to="/parent/one">One</nuxt-link>
        <nuxt-link to="/parent/two">two</nuxt-link>
        <h2>***********************</h2>
        <nuxt-child keep-alive></nuxt-child> //路由出口
    </div>
</template>