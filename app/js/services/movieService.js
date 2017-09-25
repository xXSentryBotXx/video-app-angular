(function () {
  App.service('movieService', ['$http', 'storageService', function ($http, storageService) {
    let movies = [];
    let historyMovies = [];
    let activeMovie = {};

    function getMovies () {
      return $http({
    		url: 'https://demo2697834.mockable.io/movies',
    		method: "GET"
    	}).then(function(response){
    		movies = response.data.entries;
        movies = movies.map( movie => {
          movie.date = (new Date(movie.publishedDate)).toLocaleDateString();
          return movie;
        });
        activeMovie = movies[0];
        return movies;
    	}).catch(function(err){
    		console.log(err);
    	});
    }

    function getMoviesHistory () {
      let ids = storageService.getHistoryIds();
      return movies.filter( movie => ids.indexOf(movie.id) >= 0);
    }

    function getActiveMovie () {
      return activeMovie;
    }

    function setActiveMovie (movie) {
      activeMovie = movie;
    }

    return {
      getMovies,
      getMoviesHistory,
      getActiveMovie,
      setActiveMovie
    }
  }]);
})();
