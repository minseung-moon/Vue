import axios from "axios";

export default {
  namespace : '',
  state : () => ({
    movies: [],
    message : '',
    loading : false
  }),
  getters : {},
  mutations : {
    updateState(state, payload) {
      // 객체데이터의 속성이름만으로 새로운 배열을 만들어줌
      // ['movies], 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      })
    },
    resetMovies(state) {
      state.movies = [];
    }
  },
  actions : {
    async searchMovies(context, payload) {
      const {title, type, number, year} = payload;
      const OMDB_API_KEY = "7035c60c";
      
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`
      );
      const { Search, totalResult } = res.data;
      context.commit('updateState', {
        movies : Search
      });
    }
  }
}