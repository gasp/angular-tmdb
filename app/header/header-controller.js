angular.module('app').controller('HeaderController', function ($scope) {
    $scope.searchForm = { title: '' };

    $scope.$watch('searchForm.title', function (newFilter) {
        if (!newFilter || newFilter.length < 3) $scope.search.title = '';
        else $scope.search.title = newFilter;
    });
});
