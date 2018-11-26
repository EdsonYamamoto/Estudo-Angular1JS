
angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        { nome: "a1", telefone: "123", cor: "black" },
        { nome: "a2", telefone: "456", cor: "yellow" },
        { nome: "a3", telefone: "789", cor: "white" },
        { nome: "a4", telefone: "0258", cor: "brown" },
        { nome: "a5", telefone: "147", cor: "aqua" }
    ];

    $scope.operadoras = [
        { nome: "Oi", codigo: 14, categoria: "celular" },
        { nome: "Vivo", codigo: 15, categoria: "celular" },
        { nome: "Tim", codigo: 41, categoria: "celular" },
        { nome: "GVT", codigo: 25, categoria: "fixo" },
        { nome: "Embratel", codigo: 21, categoria: "fixo" }
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
    $scope.classe = "selecionado";
    $scope.apagarContatos = function (contatos) {
        var contatoSelecionado = contatos.filter(function (contato) {
            if (!contato.selecionado)
                return contato;
        });
        $scope.contatos = contatoSelecionado;
        console.log(contatoSelecionado);
    }
    $scope.isContatoSelecionado = function (contatos) {
        var contatosSelecionado = !contatos.some(function (contato) {
            return contato.selecionado;
        })
        console.log(contatosSelecionado);
        return contatosSelecionado;
    }
});