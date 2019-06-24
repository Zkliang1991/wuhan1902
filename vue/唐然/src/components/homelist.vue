<template>
    <div>
        <ul>
            <li v-for=" (good,i) in goods " :key="i">
                <Item :good="good"></Item>
            </li>
        </ul>
    </div>
</template>

<script>
    import Item from "./Item.vue"
    export default {
        props: {
            goods: {
                type: Array
            }
        },
        components: {
            Item
        },
    }
</script>

<style scoped>

</style>