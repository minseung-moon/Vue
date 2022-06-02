<template>
  <div class="container">
    <input
      type="text"
      v-model="title"
      placeholder="Search for Movies, Series & more"
      class="form-control"
      @keyup.enter="apply"
    />
    <div class="selects">
      <select
        v-for="filter in filters"
        :key="filter.name"
        class="form-select"
        v-model="$data[filter.name]"
      >
        <option v-if="filter.name === 'year'" value="">All Years</option>
        <option v-for="item in filter.items" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary" @click="apply">Apply</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      type: "movie",
      number: 10,
      year: "",
      filters: [
        {
          name: "type",
          items: ["movie", "series", "episode"],
        },
        {
          name: "number",
          items: [10, 20, 30],
        },
        {
          name: "year",
          items: (() => {
            const years = [];
            const thisYear = new Date().getFullYear();
            for (let i = thisYear; i >= 1985; i -= 1) {
              years.push(i);
            }
            return years;
          })(),
        },
      ],
    };
  },
  methods: {
    async apply() {
      this.$store.dispatch("movie/searchMovies", {
        title: this.title,
        type: this.type,
        numer: this.number,
        year: this.year,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style>