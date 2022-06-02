<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div class="nav-item" v-for="nav in navigations" :key="nav.name">
        <RouterLink class="nav-link" active-class="active" :to="nav.href">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
export default {
  data() {
    return {
      navigations: [
        {
          name: "Search",
          href: "/",
        },
        {
          name: "Movie",
          href: "/movie",
        },
        {
          name: "About",
          href: "/about",
        },
      ],
    };
  },
  components: {
    Logo,
  },
};
</script>

<style scoped lang="scss">
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
}
</style>