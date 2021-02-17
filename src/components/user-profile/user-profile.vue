<template>
  <img :src="src" alt="用户画像" class="user-profile img-thumbnail">
</template>

<style scoped>
.user-profile {
  min-width: 350px;
  height: 90vh;
}
</style>

<script>
export default {
    props: {
        src: {
            type: String,
            defaults: ''
        }
    }
}
</script>

