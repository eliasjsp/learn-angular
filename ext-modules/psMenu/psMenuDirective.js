"use strict";

angular.module("psMenu").directive("psMenu", ['$timeout', function ($timeout) {
    return {
        scope: {
            
        },
        transclude : true,
        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope, el, attr) {
            $timeout(function () {
                var item = el.find('.ps-selectable-item:first');
                item.trigger('click');
            },100);
        }
    }
}]);