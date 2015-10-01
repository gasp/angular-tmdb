var movie = angular.module('movie', [ 'ui.router', 'movies' ]);

movie.config(function ($stateProvider) {
    $stateProvider.state('movie', {
        parent: 'app',
        url: '/movie/:movieId',
        templateUrl: '/movie/movie.html',
        controller: 'MovieController'
    });
});
