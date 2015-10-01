var app = angular.module('app', [
    'movies',
    'movie'
]);

app.constant('TMDB_API', {
    url: 'http://api.themoviedb.org/3/movie/popular',
    key: '' // YOUR API KEY
});

app.constant('TMDB_IMG_PATH', {
    thumbnail: 'http://image.tmdb.org/t/p/w185',
    background: 'http://image.tmdb.org/t/p/w1280'
});

app.run(function ($rootScope) {
    $rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams, err) {
        console.warn('$stateChangeError', err);
    });
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        abstract: true,
        views: {
            '@': {
                templateUrl: '/app.html',
                controller: 'AppController'
            },
            'header@app': {
                templateUrl: '/header/header.html',
                controller: 'HeaderController'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
});
