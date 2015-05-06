﻿angularFormsApp.controller('mfController',
    function mfController($scope, AreaFactory, DataService) {
        $scope.message = DataService.message;

        $scope.editableMessage = angular.copy($scope.message);

        // -- Type varsel --
        $scope.floodWarning = {
            // flomvarsel
            Gult: false,
            Orange: false,
            Rød: false
        };

        $scope.landslideWarning = {
            // jordskredvarsel
            Gult: false,
            Orange: false,
            Rød: false
        };

        $scope.avalancheWarning = {
            // snøskredvarsel
            Gult: false,
            Orange: false,
            Rød: false
        };

        $scope.enableCounties = function () {
            for (var i in $scope.floodWarning)
            {
                if ($scope.floodWarning[i]) {
                    return true;
                }
            }

            for (var o in $scope.landslideWarning) {
                if ($scope.landslideWarning[o]) {
                    return true;
                }
            }

            return false;
        };

        $scope.enableAvalancheRegions = function () {
            for (var o in $scope.avalancheWarning) {
                if ($scope.avalancheWarning[o]) {
                    return true;
                }
            }

            return false;
        };

        //--



        // -- Område --
        $scope.avalancheRegions = [
            {
                Id: 06,
                name: "Alta",
                checked: false
            },
            {
                Id: 07,
                name: "Kåfjord",
                checked: false
            },
            {
                Id: 08,
                name: "Tromsø",
                checked: false
            }
        ];


        $scope.counties = [
            {
                Id: 01,
                name: "Østfold",
                checked: false
            },
            {
                Id: 02,
                name: "Akershus",
                checked: false
            },
            {
                Id: 03,
                name: "Oslo",
                checked: false
            },
            {
                Id: 04,
                name: "Hedemark",
                checked: false
            },
            {
                Id: 05,
                name: "Oppland",
                checked: false
            },
            {
                Id: 06,
                name: "Buskerud",
                checked: false
            },
            {
                Id: 07,
                name: "Vestfold",
                checked: false
            },
            {
                Id: 08,
                name: "Telemark",
                checked: false
            },
            {
                Id: 09,
                name: "Aust-Agder",
                checked: false
            },
            {
                Id: 10,
                name: "Vest-Agder",
                checked: false
            },
            {
                Id: 11,
                name: "Rogaland",
                checked: false
            },
            {
                Id: 12,
                name: "Hordaland",
                checked: false
            },
            {
                Id: 14,
                name: "Sogn og Fjordane",
                checked: false
            },
            {
                Id: 15,
                name: "Møre og Romsdal ",
                checked: false
            },
            {
                Id: 16,
                name: "Sør-Trøndelag ",
                checked: false
            },
            {
                Id: 17,
                name: "Nord-Trøndelag ",
                checked: false
            },
            {
                Id: 18,
                name: "Nordland",
                checked: false
            },
            {
                Id: 19,
                name: "Troms",
                checked: false
            },
            {
                Id: 20,
                name: "Finnmark",
                checked: false
            }
        ];


        var councilDetailsPromise = AreaFactory.Councils.details();
        councilDetailsPromise.then(function (data) {
            $scope.councilDetails = data.features;
        });

        $scope.selectedCounties = [];
        $scope.currentCountyId = [];
        $scope.getCouncils = function (county) {

            if (county.checked) {
                console.log('checked');

                $scope.currentCountyId.push(county.Id);
                console.log($scope.currentCountyId);


                if ($scope.currentCountyId.length > 0) {
                    angular.forEach($scope.councilDetails, function (value, key) {
                        angular.forEach($scope.currentCountyId, function (v, k) {
                            if (value.attributes.FY_NR == v) {
                                $scope.selectedCounties.push(value.attributes);
                            }
                        });
                    });
                }


            } else {
                console.log('unchecked');

                var i = $scope.currentCountyId.indexOf(county.Id);
                console.log('remove: ' + i);
                if (i != -1) {
                    angular.forEach($scope.councilDetails, function (value, key) {
                        angular.forEach($scope.currentCountyId, function (v, k) {
                            if (value.attributes.FY_NR == v) {
                                $scope.selectedCounties.splice(i, 1);
                            }
                        });
                    });

                    $scope.currentCountyId.splice(i, 1);
                }
            }

            console.log($scope.currentCountyId);


        };

        require(["esri/map", "dojo/domReady!"], function (Map) {
            $scope.map = new Map("map", {
                center: [10.703076, 59.930652],
                zoom: 10,
                basemap: "topo"
            });
        });
        
        //--


        $scope.period_ispermanent = {
            Alltid: true
        };

        $scope.timespan_ispermanent = {
            Alltid: true
        };


        $scope.dtFrom = new Date();
        $scope.dtTo = new Date();
        var now = new Date();
        $scope.startTime = now.setHours(8, 0, 0, 0);
        $scope.endTime = now.setHours(16, 0, 0, 0);

        $scope.recipients = {
            Brannsjef: false,
            Lensmann: false,
            Fylkesmann: false
        };

        $scope.messagetype = {
            SMS: false,
            Email: true
        };



        $scope.messageUpdate = {
            SMS: false,
            Email: true
        };


        $scope.messageDegradeSMS = {
            // flomvarsel
            Gult: false,
            Orange: false,
            Rød: false
        };

        $scope.messageDegradeEmail = {
            // flomvarsel
            Gult: false,
            Orange: false,
            Rød: false
        };

        $scope.submitForm = function () {
            console.log('subitform');

            console.log($scope.floodWarning.value);
            for (var key in $scope.floodWarning) {
                var value = $scope.floodWarning[key].value;
                console.log(value);
            }

            $scope.message = angular.copy($scope.editableMessage);

            $scope.alerts.push({ type: 'success', msg: 'Varsel lagret' });
        };

        $scope.cancelForm = function () {
            //window.history.back();
            console.log('cancelform');
        }

        $scope.alerts = [
        ];

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    });

angularFormsApp.factory('AreaFactory', ['$http',
  function ($http) {
      var councilServiceUrl = "http://gis3.nve.no/map/rest/services/Mapservices/Administrasjon/MapServer/3/query?where=1%3D1&outFields=*&returnGeometry=false&f=pjson&callback=JSON_CALLBACK"

      var councils = {
          details: function () {
              return $http({
                  url: councilServiceUrl,
                  method: "JSONP",
              })
                .then(function (response) {
                    return response.data;
                });
          }
      };

      return {
          Councils: councils // kommuner
      };
  }
]);

