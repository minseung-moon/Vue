<template>
  <div>{{ movie.Title }}</div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      deafult: () => ({}),
    },
  },
};
</script>