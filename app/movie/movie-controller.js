movie.controller('MovieController', function ($scope, $stateParams, Movie) {
    Movie.firstById($stateParams.movieId).then(function (movie) {
        $scope.movie = movie;
    });
});
