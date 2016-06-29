"use strict";

angular.module('app').directive('wwaInventory',
    ['dataService',
        function (dataService) {
            return {
                templateUrl: 'app/widgets/wwaInventory/template.html',
                link: function (scope, el, attrs) {
                    dataService.getLocation(scope.item.widgetSettings.id)
                        .then(function (data) {
                            scope.selectedLocation = data;
                        });
                }
            };
        }
    ]
);