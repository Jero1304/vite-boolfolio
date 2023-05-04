<template>
    <header class="bg-success">
        <div class="container py-4 nav">
            <router-link class="router" :to="{ name: 'home' }">
                <h1>Boolfolio</h1>
            </router-link>

            <ul class="nav-menu">
                <li>
                    <router-link class="router" :to="{ name: 'home' }">Home</router-link>
                </li>

                <li>
                    <router-link class="router" :to="{ name: 'about' }">About</router-link>
                </li>

                <li>
                    <router-link class="router" :to="{ name: 'project' }">Project</router-link>
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
    justify-content: space-between;
    gap: 2rem;
    list-style: none;


    .nav-menu {
        margin: auto 0;
        display: flex;
        align-items: center;



    }

}

.router {
    text-decoration: none;
    color: currentColor;
    display: flex;
    align-items: center;
}
</style>