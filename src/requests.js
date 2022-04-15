const Api_Key = "4c2143678cd572b0bc2a32ef19a1fd60";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en_US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
};

export default requests;
