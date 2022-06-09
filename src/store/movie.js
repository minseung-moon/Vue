import axios from "axios";
import _unionBy from "lodash/uniqBy";

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
      const { Search, totalResults } = res.data;
      context.commit('updateState', {
        movies : _unionBy(Search, 'imdbID')
      });
      console.log(totalResults); // 304
      console.log(typeof totalResults); // string

      const total = parseInt(totalResults, 10);
      console.log(total);
      console.log(typeof total);
      const pageLength = Math.ceil(total/10);
      console.log(pageLength);
      console.log("number : "+number);

      // 추가요청
      if(pageLength > 1) {
        for(let page = 2; page <= pageLength; page++) {
          if(page > (number / 10)) break;
          const res = await axios.get(
            `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
          );
          const {Search} = res.data;
          context.commit('updateState', {
            movies : _unionBy([...context.state.movies, ...Search], 'imdbID')
          })
        }
      }
    }
  }
}