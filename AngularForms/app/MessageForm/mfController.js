angularFormsApp.controller('mfController',
    function mfController($scope, DataService) {
        $scope.message = DataService.message;

        $scope.editableMessage = angular.copy($scope.message);

        $scope.floodWarning = { // flomvarsel
            Gult: false,
            Orange: false,
            Rød: false
        };

        $scope.landslideWarning = { // jordskredvarsel
            Gult: false,
            Orange: false,
            Rød: false
        };

        $scope.avalancheWarning = { // snøskredvarsel
            Gult: false,
            Orange: false,
            Rød: false
        };
        //--

        $scope.messagetype = {
            SMS: false,
            Email: true
        };


        $scope.county = [
            "Oslo",
            "Akershus",
            "Østfold"
        ];

        $scope.council = [
            "Oslo",
            "Bærum",
            "Halden"
        ];

        //$scope.levels = [ // dropdown
        //    "Gult",
        //    "Orange",
        //    "Rød"
        //];



        $scope.submitForm = function() {
            console.log('subitform');

            console.log($scope.floodWarning.value);
            for (var key in $scope.floodWarning) {
                var value = $scope.floodWarning[key].value;
                console.log(value);
            }
            

            $scope.message = angular.copy($scope.editableMessage);
        };

        $scope.cancelForm = function () {
            //window.history.back();
            console.log('cancelform');
        }
    });