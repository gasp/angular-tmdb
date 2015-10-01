var movies = angular.module('movies', [ 'ui.router', 'movie' ]);

movies.config(function ($stateProvider) {
    $stateProvider.state('movies', {
        parent: 'app',
        url: '/',
        templateUrl: '/movies/movies.html',
        controller: 'MoviesController'
    });
});
