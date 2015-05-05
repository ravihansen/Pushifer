angularFormsApp.directive('userProfileForm', // gets translated to snake-case 'message-from', used in index.html
    function () {
        return {
            restrict: 'E', // use only as an emelement
            templateUrl: 'app/UserProfileForm/upTemplate.html'
        }
    });