
angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        { nome: "a1", telefone: "123" },
        { nome: "a2", telefone: "456" },
        { nome: "a3", telefone: "789" },
        { nome: "a4", telefone: "0258" },
        { nome: "a5", telefone: "147" }
    ];

    $scope.operadoras = [
        { nome: "Oi", codigo: 14 },
        { nome: "Vivo", codigo: 15 },
        { nome: "Tim", codigo: 41 }
    ];

    $scope.adicionarContato = function (nome, telefone) {
        console.log($scope.nome);
        console.log($scope.telefone);

        $scope.contatos.push({ nome: nome, telefone: telefone });
    };
    $scope.adicionarContato2 = function (contato) {
        console.log(contato);
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };

});