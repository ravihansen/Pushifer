angularFormsApp.directive('reportsForm', // gets translated to snake-case 'message-from', used in index.html
    function () {
        return {
            restrict: 'E', // use only as an emelement
            templateUrl: 'app/ReportsForm/repTemplate.html'
        }
    });