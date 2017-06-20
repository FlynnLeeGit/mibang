<template>
    <div class="container jumbotron">
        <h1 class="display-4">选择需要培训的内容</h1>
        <ul class="list-group">
            <li class="list-group-item" v-for='item in list'>
                <router-link :to='item.to'>{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { name: '饭团配方培训', to: '/recipe' }
            ]
        }
    }
}
</script>
<style lang="scss">

</style>


      