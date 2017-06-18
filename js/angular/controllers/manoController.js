
app.controller('manoController', function($scope) {
    $scope.vardas= "Paulius";
    $scope.pavarde= "Juknis";
    $scope.busena = false;

    function keisti() {
        $scope.vardas = 'Juknis';
    }
        $scope.keistiVarda = keisti;

});
