<template>
    <Blank class="h-screen">
        <div class="container">
            <h2><span>404 Page not found!</span></h2>
        </div>
    </Blank>
</template>

<script>
import Blank from '../layouts/Blank.vue';
export default {
    components: {
        Blank,
    }

}
</script>

<style lang="scss" scoped>

.h-screen{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: white;

    h2{
        font-size: 48px;
    }

}

</style>