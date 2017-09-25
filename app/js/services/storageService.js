(function () {
  App.service('storageService', ['$http', '$window', function ($http, $window) {
    let historyMovies = {
      movieIds: []
    };

    const KEY = 'HISTORY_IDS';

    function addMovieId (movieId) {
      historyMovies.movieIds.push(movieId);
      $window.localStorage.setItem(KEY, JSON.stringify(historyMovies));
    }

    function getHistoryIds () {
      return historyMovies.movieIds;
    }

    function init () {
      let dataStored = $window.localStorage.getItem(KEY);
      historyMovies =  dataStored ? JSON.parse(dataStored) : historyMovies;
    }

    init();

    return {
      addMovieId,
      getHistoryIds
    }
  }]);
})();
