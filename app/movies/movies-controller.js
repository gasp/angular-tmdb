movies.controller('MoviesController', function ($scope, Movies) {
    Movies.popular().then(function (movies) {
        $scope.movies = movies;
    });
});
