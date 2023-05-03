<template>
    <header>
        <div class="container nav">
            <h1>Nav bar</h1>
            <router-link :to="{ name: 'home' }">Boolfolio</router-link>

            <ul class="nav-menu">
                <li>
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'about' }">About</router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'project' }">Project</router-link>
                </li>

            </ul>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nav,
.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;

    .nav-menu {
        margin-left: auto;
    }

}
</style>