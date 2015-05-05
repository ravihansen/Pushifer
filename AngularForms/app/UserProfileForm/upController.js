angularFormsApp.controller('upController',
    function upController($scope, DataService) {

        $scope.additionalContent = [
            {
                id: 01,
                name: "Ekstremvarsel fra Met.no",
                checked: false
            },
            {
                id: 02,
                name: "Nyhetssaker fra Varsom",
                checked: false
            }
        ];



    });