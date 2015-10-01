angular.module('movie').filter('tmdbImgUrl', function (TMDB_IMG_PATH) {
    return function (moviePath, isBackground) {
        return (isBackground ? TMDB_IMG_PATH.background : TMDB_IMG_PATH.thumbnail) + moviePath;
    }
})
