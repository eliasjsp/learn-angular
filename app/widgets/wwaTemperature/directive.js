"use strict";

angular.module('app').directive('wwaTemperature',
    ['dataService',
    function (dataService) {
        return {
              templateUrl: 'app/widgets/wwaTemperature/template.html',
            link: function (scope, el, attrs) {
                dataService.getLocation(scope.item.widgetSettings.id)
                    .then(function (data) {
                        scope.selectedLocation = data;
                    });
            }
        };
    }
]);