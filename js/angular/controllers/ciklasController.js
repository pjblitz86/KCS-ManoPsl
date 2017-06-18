app.controller('ciklasController', function($scope) {
    $scope.masyvas = [1,2,3,4,5,6,7,8,9];
    $scope.masyvas2 = [
                        {vardas:"Jonas", pavarde:"Jonaitis"},
                        {vardas:"Petras"},
                        {vardas:"Zigmas"}
                        ];

    $scope.masyvas3 = [
                    {title: "Titulinis", url:"index.html"},
                    {title: "Info", url: "Info.html"},
                    {title: "Hobiai", url: "Hobiai.html"}
    ];


});
