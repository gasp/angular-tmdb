angular.module('movie').factory('Movie', function (Movies) {
    var service = {
        firstById: function (movieId) {
            return Movies.popular().then(function (movies) {
                var foundMovie = null;
                movies.forEach(function (movie) {
                    if (movie.id == movieId) foundMovie = movie;
                });
                return foundMovie;
            });
        }
    };

    return service;
});
