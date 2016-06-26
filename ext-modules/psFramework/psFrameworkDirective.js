/**
 * Created by Elias on 25/06/2016.
 */
"use strict";
console.log("aquui directive");
angular.module("psFramework").directive("psFramework", function () {
    return {
        transclude : true,
        scope : {

        },
        controller : "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    };
});