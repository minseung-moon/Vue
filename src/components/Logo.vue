<template>
  <!--
    RouterLink(router-link) == a tag
  -->
  <RouterLink to="/" class="logo"> <span>OMDbAPI</span>.COM </RouterLink>
</template>

<style scoped lang="scss">
@import "../scss/main";
.logo {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>