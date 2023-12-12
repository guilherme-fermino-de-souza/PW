function calculoDiarias() {
    //Obter os valores dos campos de texto.
    var suiteSelecionada = document.getElementById("suite").value;
    var numDiarias = Number(document.getElementById("numDiarias").value);
    var valDiariosGer = 0;
    var total = 0;

    //Verificar se os valores são numéricos.
    if (isNaN(numDiarias)) {
        alert("Por favor, insira números válidos.");
        return; //Adicionado um retorno para evitar a execução do código restante em caso de erro.
    }

    //Obter valores do tipo "select" marcado.
    switch (suiteSelecionada) {
        case "rahat":
            valDiariosGer += 1500;
            break;
        case "grote":
            valDiariosGer += 3000;
            break;
        case "vedere":
            valDiariosGer += 9000;
            break;
        default:
            valDiariosGer += 0;
    }

    //Obter os valores das checkboxes.
    var servicosAd = document.getElementsByName("servicos");
    for (var repet = 0; repet < servicosAd.length; repet++) {
        if (servicosAd[repet].checked) {
         //Atribuir valores aos serviços adicionais.
            switch (servicosAd[repet].value) {
                case "lazer":
                    valDiariosGer += 375;
                    break;
                case "refeicao":
                    valDiariosGer += 620;
                    break;
                case "lavanderia":
                    valDiariosGer += 220;
                    break;
                case "tour":
                    total += 1135;
                    break;
                default:
                    valDiariosGer += 0;
                //Adicione outros serviços conforme necessário (Só isso já tá bão.).
            }
        }
    }

    // Calcular resultado com base em valores diários e únicos.
    total += (valDiariosGer * numDiarias);

    // Exibir a mensagem no campo de texto predefinido.
    document.getElementById("total").value = 'R$' + total.toFixed(2) + ' totais.';
}