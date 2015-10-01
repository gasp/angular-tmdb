angular.module('movies').factory('Movies', function ($http, $q, TMDB_API) {
    var TMDB_URL = TMDB_API.url;
    var TMDB_KEY = TMDB_API.key;

    var popularMovies = null;

    var service = {
        popular: function () {
            if (popularMovies) return $q.resolve(popularMovies);

            return $http.get(TMDB_URL, { params: { api_key: TMDB_KEY } })
                .then(function (res) {
                    popularMovies = res.data.results;
                    return popularMovies;
                });
        }
    };

    return service;
});
