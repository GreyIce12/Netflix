const API_KEY = "e4e8f4ae75324add88930bb41b53967a";

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchComedy:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAction:`/discover/movie?api_key=${API_KEY}&with_genres=28`,

}

export default requests;