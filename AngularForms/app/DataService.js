angularFormsApp.factory('DataService',
    function() {
        return {
            message: {
                messagetype: null,
                warningtype: "Flom",
                county: "Oslo",
                council: "Oslo",
                levels: "Gult",
                details: null,
                information : ""
            }
        }
    });