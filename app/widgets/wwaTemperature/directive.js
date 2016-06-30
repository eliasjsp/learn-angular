"use strict";

angular.module('app').directive('wwaTemperature',
    ['dataService',
    function (dataService) {
        return {
              templateUrl: 'app/widgets/wwaTemperature/template.html',
            link: function (scope, el, attrs) {
                scope.isLoaded = false;
                scope.hasError = false;
                scope.selectedLocation = null;
                scope.loadLocation = function () {
                    dataService.getLocation(scope.item.widgetSettings.id)
                        .then(function (data) {
                            scope.selectedLocation = data;
                            scope.isLoaded = true;
                            scope.hasError = false;
                        }, function () {
                            scope.hasError = true;
                        });
                };
                scope.loadLocation();
            }
        };
    }
]);