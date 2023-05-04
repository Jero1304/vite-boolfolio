<template>
    <NavBar />
    <main>
        <slot />
    </main>

    <footer class="footer bg-dark-subtle">
        <div class="container">
            <div class="footer-body">
                <h3>footer</h3>
            </div>
        </div>
    </footer>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        NavBar,
    }
}
</script>

<style lang="scss">
.footer {
    
    .footer-body {
        // padding-top: 30px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

}
</style>