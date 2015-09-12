/**
 * Created by chris on 9/12/15.
 */
var mainApplicationModuleName = 'bjjTeamMateFinder';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute']);
mainApplicationModule.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(true);
    }
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainApplicationModuleName]);
});