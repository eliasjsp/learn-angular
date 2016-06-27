/**
 * Created by Elias on 25/06/2016.
 */
"use strict";

angular.module("psFramework").directive("psFramework", function () {
    return {
        transclude : false,
        scope : {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller : "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    };
});