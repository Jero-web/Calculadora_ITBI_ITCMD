document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Assume-se que 'total1' é o ID do botão que chama a função calc
        document.getElementById('total1').click(); 
    }
});


// Função auxiliar CORRIGIDA para obter o valor numérico a partir do input formatado em Reais (R$ 1.000.000,00)
function parseCurrency(value) {
    if (!value) {
        return 0;
    }
    const cleanedValue = value.replace('R$', '').replace(/\./g, '').replace(',', '.').trim();
    return parseFloat(cleanedValue) || 0;
}


// Função para formatar o valor em formato de moeda
function formatCurrency(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value) {
        value = parseFloat(value) / 100;
        input.value = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
        input.value = '';
    }
}

// Função para autocompletar o valor do registro com base no valor do imóvel
function autocompleteRegistro() {
    // CORREÇÃO APLICADA: Usando a nova função parseCurrency para garantir a leitura correta de 1.000.000,00
    let valorImovel = parseCurrency(document.getElementById('valorImovel').value);

    let valorRegistro;
    switch (true) {
        case (valorImovel <= 5999.99):
            valorRegistro = 346.94;
            break;
        case (valorImovel <= 12999.99):
            valorRegistro = 587.24;
            break;
        case (valorImovel <= 25000.00):
            valorRegistro = 810.98;
            break;
        case (valorImovel <= 30000.00):
            valorRegistro = 864.86;
            break;
        case (valorImovel <= 35000.00):
            valorRegistro = 918.74;
            break;
        case (valorImovel <= 40000.00):
            valorRegistro = 972.62;
            break;
        case (valorImovel <= 45000.00):
            valorRegistro = 1026.50;
            break;
        case (valorImovel <= 50000.00):
            valorRegistro = 1080.38;
            break;
        case (valorImovel <= 55000.00):
            valorRegistro = 1134.26;
            break;
        case (valorImovel <= 60000.00):
            valorRegistro = 1188.14;
            break;
        case (valorImovel <= 65000.00):
            valorRegistro = 1242.02;
            break;
        case (valorImovel <= 70000.00):
            valorRegistro = 1295.90;
            break;
        case (valorImovel <= 75000.00):
            valorRegistro = 1349.78;
            break;
        case (valorImovel <= 80000.00):
            valorRegistro = 1403.66;
            break;
        case (valorImovel <= 85000.00):
            valorRegistro = 1457.54;
            break;
        case (valorImovel <= 90000.00):
            valorRegistro = 1511.42;
            break;
        case (valorImovel <= 95000.00):
            valorRegistro = 1565.30;
            break;
        case (valorImovel <= 100000.00):
            valorRegistro = 1619.18;
            break;
        case (valorImovel <= 105000.00):
            valorRegistro = 1673.06;
            break;
        case (valorImovel <= 110000.00):
            valorRegistro = 1726.94;
            break;
        case (valorImovel <= 115000.00):
            valorRegistro = 1780.82;
            break;
        case (valorImovel <= 120000.00):
            valorRegistro = 1834.70;
            break;
        case (valorImovel <= 125000.00):
            valorRegistro = 1888.58;
            break;
        case (valorImovel <= 130000.00):
            valorRegistro = 1942.46;
            break;
        case (valorImovel <= 135000.00):
            valorRegistro = 1996.34;
            break;
        case (valorImovel <= 140000.00):
            valorRegistro = 2050.22;
            break;
        case (valorImovel <= 145000.00):
            valorRegistro = 2104.10;
            break;
        case (valorImovel <= 150000.00):
            valorRegistro = 2157.98;
            break;
        case (valorImovel <= 155000.00):
            valorRegistro = 2211.86;
            break;
        case (valorImovel <= 160000.00):
            valorRegistro = 2265.74;
            break;
        case (valorImovel <= 165000.00):
            valorRegistro = 2319.62;
            break;
        case (valorImovel <= 170000.00):
            valorRegistro = 2373.50;
            break;
        case (valorImovel <= 175000.00):
            valorRegistro = 2427.38;
            break;
        case (valorImovel <= 180000.00):
            valorRegistro = 2481.26;
            break;
        case (valorImovel <= 185000.00):
            valorRegistro = 2535.14;
            break;
        case (valorImovel <= 190000.00):
            valorRegistro = 2589.02;
            break;
        case (valorImovel <= 195000.00):
            valorRegistro = 2642.90;
            break;
        case (valorImovel <= 200000.00):
            valorRegistro = 2696.78;
            break;
        case (valorImovel <= 205000.00):
            valorRegistro = 2750.66;
            break;
        case (valorImovel <= 210000.00):
            valorRegistro = 2804.54;
            break;
        case (valorImovel <= 215000.00):
            valorRegistro = 2858.42;
            break;
        case (valorImovel <= 220000.00):
            valorRegistro = 2912.30;
            break;
        case (valorImovel <= 225000.00):
            valorRegistro = 2966.18;
            break;
        case (valorImovel <= 230000.00):
            valorRegistro = 3020.06;
            break;
        case (valorImovel <= 235000.00):
            valorRegistro = 3073.94;
            break;
        case (valorImovel <= 240000.00):
            valorRegistro = 3127.82;
            break;
        case (valorImovel <= 245000.00):
            valorRegistro = 3181.70;
            break;
        case (valorImovel <= 250000.00):
            valorRegistro = 3235.58;
            break;
        case (valorImovel <= 255000.00):
            valorRegistro = 3289.46;
            break;
        case (valorImovel <= 260000.00):
            valorRegistro = 3343.34;
            break;
        case (valorImovel <= 265000.00):
            valorRegistro = 3397.22;
            break;
        case (valorImovel <= 270000.00):
            valorRegistro = 3451.10;
            break;
        case (valorImovel <= 275000.00):
            valorRegistro = 3504.98;
            break;
        case (valorImovel <= 280000.00):
            valorRegistro = 3558.86;
            break;
        case (valorImovel <= 285000.00):
            valorRegistro = 3612.74;
            break;
        case (valorImovel <= 290000.00):
            valorRegistro = 3666.62;
            break;
        case (valorImovel <= 295000.00):
            valorRegistro = 3720.50;
            break;
        case (valorImovel <= 300000.00):
            valorRegistro = 3774.38;
            break;
        case (valorImovel <= 305000.00):
            valorRegistro = 3828.26;
            break;
        case (valorImovel <= 310000.00):
            valorRegistro = 3882.14;
            break;
        case (valorImovel <= 315000.00):
            valorRegistro = 3936.02;
            break;
        case (valorImovel <= 320000.00):
            valorRegistro = 3989.90;
            break;
        case (valorImovel <= 325000.00):
            valorRegistro = 4043.78;
            break;
        case (valorImovel <= 330000.00):
            valorRegistro = 4097.66;
            break;
        case (valorImovel <= 335000.00):
            valorRegistro = 4151.54;
            break;
        case (valorImovel <= 340000.00):
            valorRegistro = 4205.42;
            break;
        case (valorImovel <= 345000.00):
            valorRegistro = 4259.30;
            break;
        case (valorImovel <= 350000.00):
            valorRegistro = 4313.18;
            break;
        case (valorImovel <= 355000.00):
            valorRegistro = 4367.06;
            break;
        case (valorImovel <= 360000.00):
            valorRegistro = 4420.94;
            break;
        case (valorImovel <= 365000.00):
            valorRegistro = 4474.82;
            break;
        case (valorImovel <= 370000.00):
            valorRegistro = 4528.70;
            break;
        case (valorImovel <= 375000.00):
            valorRegistro = 4582.58;
            break;
        case (valorImovel <= 380000.00):
            valorRegistro = 4636.46;
            break;
        case (valorImovel <= 385000.00):
            valorRegistro = 4690.34;
            break;
        case (valorImovel <= 390000.00):
            valorRegistro = 4744.22;
            break;
        case (valorImovel <= 395000.00):
            valorRegistro = 4798.10;
            break;
        case (valorImovel <= 400000.00):
            valorRegistro = 4851.98;
            break;
        case (valorImovel <= 405000.00):
            valorRegistro = 4905.86;
            break;
        case (valorImovel <= 410000.00):
            valorRegistro = 4959.74;
            break;
        case (valorImovel <= 415000.00):
            valorRegistro = 5013.62;
            break;
        case (valorImovel <= 420000.00):
            valorRegistro = 5067.50;
            break;
        case (valorImovel <= 425000.00):
            valorRegistro = 5121.38;
            break;
        case (valorImovel <= 430000.00):
            valorRegistro = 5175.26;
            break;
        case (valorImovel <= 435000.00):
            valorRegistro = 5229.14;
            break;
        case (valorImovel <= 440000.00):
            valorRegistro = 5283.02;
            break;
        case (valorImovel <= 445000.00):
            valorRegistro = 5336.90;
            break;
        case (valorImovel <= 450000.00):
            valorRegistro = 5390.78;
            break;
        case (valorImovel <= 455000.00):
            valorRegistro = 5444.66;
            break;
        case (valorImovel <= 460000.00):
            valorRegistro = 5498.54;
            break;
        case (valorImovel <= 465000.00):
            valorRegistro = 5552.42;
            break;
        case (valorImovel <= 470000.00):
            valorRegistro = 5606.30;
            break;
        case (valorImovel <= 475000.00):
            valorRegistro = 5660.18;
            break;
        case (valorImovel <= 480000.00):
            valorRegistro = 5714.06;
            break;
        case (valorImovel <= 485000.00):
            valorRegistro = 5767.94;
            break;
        case (valorImovel <= 490000.00):
            valorRegistro = 5821.82;
            break;
        case (valorImovel <= 495000.00):
            valorRegistro = 5875.70;
            break;
        case (valorImovel <= 500000.00):
            valorRegistro = 5929.58;
            break;
        case (valorImovel <= 505000.00):
            valorRegistro = 5983.46;
            break;
        case (valorImovel <= 510000.00):
            valorRegistro = 6037.34;
            break;
        case (valorImovel <= 515000.00):
            valorRegistro = 6091.22;
            break;
        case (valorImovel <= 520000.00):
            valorRegistro = 6145.10;
            break;
        case (valorImovel <= 525000.00):
            valorRegistro = 6198.98;
            break;
        case (valorImovel <= 530000.00):
            valorRegistro = 6252.86;
            break;
        case (valorImovel <= 535000.00):
            valorRegistro = 6306.74;
            break;
        case (valorImovel <= 540000.00):
            valorRegistro = 6360.62;
            break;
        case (valorImovel <= 545000.00):
            valorRegistro = 6414.50;
            break;
        case (valorImovel <= 550000.00):
            valorRegistro = 6468.38;
            break;
        case (valorImovel <= 555000.00):
            valorRegistro = 6522.26;
            break;
        case (valorImovel <= 560000.00):
            valorRegistro = 6576.14;
            break;
        case (valorImovel <= 565000.00):
            valorRegistro = 6630.02;
            break;
        case (valorImovel <= 570000.00):
            valorRegistro = 6683.90;
            break;
        case (valorImovel <= 575000.00):
            valorRegistro = 6737.78;
            break;
        case (valorImovel <= 580000.00):
            valorRegistro = 6803.66;
            break;
        case (valorImovel <= 585000.00):
            valorRegistro = 6845.54;
            break;
        case (valorImovel <= 590000.00):
            valorRegistro = 6899.42;
            break;
        case (valorImovel <= 595000.00):
            valorRegistro = 6953.30;
            break;
        case (valorImovel <= 600000.00):
            valorRegistro = 7007.18;
            break;
        case (valorImovel <= 605000.00):
            valorRegistro = 7061.06;
            break;
        case (valorImovel <= 610000.00):
            valorRegistro = 7114.94;
            break;
        case (valorImovel <= 615000.00):
            valorRegistro = 7168.82;
            break;
        case (valorImovel <= 620000.00):
            valorRegistro = 7222.70;
            break;
        case (valorImovel <= 625000.00):
            valorRegistro = 7276.58;
            break;
        case (valorImovel <= 630000.00):
            valorRegistro = 7330.46;
            break;
        case (valorImovel <= 635000.00):
            valorRegistro = 7384.34;
            break;
        case (valorImovel <= 640000.00):
            valorRegistro = 7438.22;
            break;
        case (valorImovel <= 645000.00):
            valorRegistro = 7492.10;
            break;
        case (valorImovel <= 650000.00):
            valorRegistro = 7545.98;
            break;
        case (valorImovel <= 655000.00):
            valorRegistro = 7599.86;
            break;
        case (valorImovel <= 660000.00):
            valorRegistro = 7653.74;
            break;
        case (valorImovel <= 665000.00):
            valorRegistro = 7707.62;
            break;
        case (valorImovel <= 670000.00):
            valorRegistro = 7761.50;
            break;
        case (valorImovel <= 675000.00):
            valorRegistro = 7815.38;
            break;
        case (valorImovel <= 680000.00):
            valorRegistro = 7869.26;
            break;
        case (valorImovel <= 685000.00):
            valorRegistro = 7923.14;
            break;
        case (valorImovel <= 690000.00):
            valorRegistro = 7977.02;
            break;
        case (valorImovel <= 695000.00):
            valorRegistro = 8030.90;
            break;
        case (valorImovel <= 700000.00):
            valorRegistro = 8084.78;
            break;
        case (valorImovel <= 705000.00):
            valorRegistro = 8138.66;
            break;
        case (valorImovel <= 710000.00):
            valorRegistro = 8192.54;
            break;
        case (valorImovel <= 715000.00):
            valorRegistro = 8246.42;
            break;
        case (valorImovel <= 720000.00):
            valorRegistro = 8300.30;
            break;
        case (valorImovel <= 725000.00):
            valorRegistro = 8354.18;
            break;
        case (valorImovel <= 730000.00):
            valorRegistro = 8408.06;
            break;
        case (valorImovel <= 735000.00):
            valorRegistro = 8461.94;
            break;
        case (valorImovel <= 740000.00):
            valorRegistro = 8515.82;
            break;
        case (valorImovel <= 745000.00):
            valorRegistro = 8569.70;
            break;
        case (valorImovel <= 750000.00):
            valorRegistro = 8623.58;
            break;
        case (valorImovel <= 755000.00):
            valorRegistro = 8677.46;
            break;
        case (valorImovel <= 760000.00):
            valorRegistro = 8731.34;
            break;
        case (valorImovel <= 765000.00):
            valorRegistro = 8785.22;
            break;
        case (valorImovel <= 770000.00):
            valorRegistro = 8839.10;
            break;
        case (valorImovel <= 775000.00):
            valorRegistro = 8892.98;
            break;
        case (valorImovel <= 780000.00):
            valorRegistro = 8946.86;
            break;       
        case (valorImovel <= 785000.00):
            valorRegistro = 9000.74; 
            break;
        case (valorImovel <= 790000.00):
            valorRegistro = 9054.62;
            break;
        case (valorImovel <= 795000.00):
            valorRegistro = 9108.50;
            break;
        case (valorImovel <= 800000.00):
            valorRegistro = 9162.38;
            break;
        case (valorImovel <= 805000.00):
            valorRegistro = 9216.26;
            break;
        case (valorImovel <= 810000.00):
            valorRegistro = 9270.14;
            break;
        case (valorImovel <= 815000.00):
            valorRegistro = 9324.02;
            break;
        case (valorImovel <= 820000.00):
            valorRegistro = 9377.90;
            break;
        case (valorImovel <= 825000.00):
            valorRegistro = 9431.78;
            break;
        case (valorImovel <= 830000.00):
            valorRegistro = 9485.66;
            break;
        case (valorImovel <= 835000.00):
            valorRegistro = 9539.54;
            break;
        case (valorImovel <= 840000.00):
            valorRegistro = 9593.42;
            break;
        case (valorImovel <= 845000.00):
            valorRegistro = 9647.30;
            break;
        case (valorImovel <= 850000.00):
            valorRegistro = 9701.18;
            break;
        case (valorImovel <= 855000.00):
            valorRegistro = 9755.06;
            break;
        case (valorImovel <= 860000.00):
            valorRegistro = 9808.94;
            break;
        case (valorImovel <= 865000.00):
            valorRegistro = 9862.82;
            break;
        case (valorImovel <= 870000.00):
            valorRegistro = 9916.70;
            break;
        case (valorImovel <= 875000.00):
            valorRegistro = 9970.58;
            break;
        case (valorImovel <= 880000.00):
            valorRegistro = 10024.46;
            break;
        case (valorImovel <= 885000.00):
            valorRegistro = 10078.34;
            break;
        case (valorImovel <= 890000.00):
            valorRegistro = 10132.22;
            break;
        case (valorImovel <= 895000.00):
            valorRegistro = 10186.10;
            break;
        case (valorImovel <= 900000.00):
            valorRegistro = 10239.98;
            break;
        case (valorImovel <= 905000.00):
            valorRegistro = 10293.86;
            break;
        case (valorImovel <= 910000.00):
            valorRegistro = 10347.74;
            break;
        case (valorImovel <= 915000.00):
            valorRegistro = 10401.62;
            break;
        case (valorImovel <= 920000.00):
            valorRegistro = 10455.50;
            break;
        case (valorImovel <= 925000.00):
            valorRegistro = 10509.38;
            break;
        case (valorImovel <= 930000.00):
            valorRegistro = 10563.26;
            break;
        case (valorImovel <= 935000.00):
            valorRegistro = 10617.14;
            break;
        case (valorImovel <= 940000.00):
            valorRegistro = 10671.02;
            break;
        case (valorImovel <= 945000.00):
            valorRegistro = 10724.90;
            break;
        case (valorImovel <= 950000.00):
            valorRegistro = 10778.78;
            break;
        case (valorImovel <= 955000.00):
            valorRegistro = 10832.66;
            break;
        case (valorImovel <= 960000.00):
            valorRegistro = 10886.54;
            break;
        case (valorImovel <= 965000.00):
            valorRegistro = 10940.42;
            break;
        case (valorImovel <= 970000.00):
            valorRegistro = 10994.30;
            break;
        case (valorImovel <= 975000.00):
            valorRegistro = 11048.18;
            break;
        case (valorImovel <= 980000.00):
            valorRegistro = 11102.06;
            break;
        case (valorImovel <= 985000.00):
            valorRegistro = 11155.94;
            break;
        case (valorImovel <= 990000.00):
            valorRegistro = 11209.82;
            break;
        case (valorImovel <= 995000.00):
            valorRegistro = 11263.70;
            break;
        case (valorImovel <= 1000000.00):
            valorRegistro = 11317.58;
            break;
        case (valorImovel <= 1005000.00):
            valorRegistro = 11371.46;
            break;
        case (valorImovel <= 1010000.00):
            valorRegistro = 11425.34;
            break;
        case (valorImovel <= 1015000.00):
            valorRegistro = 11479.22;
            break;
        case (valorImovel <= 1020000.00):
            valorRegistro = 11533.10;
            break;
        case (valorImovel <= 1025000.00):
            valorRegistro = 11586.98;
            break;
        case (valorImovel <= 1030000.00):
            valorRegistro = 11640.86;
            break;
        case (valorImovel <= 1035000.00):
            valorRegistro = 11694.74;
            break;
        case (valorImovel <= 1040000.00):
            valorRegistro = 11748.62;
            break;
        case (valorImovel <= 1045000.00):
            valorRegistro = 11802.50;
            break;
        case (valorImovel <= 1050000.00):
            valorRegistro = 11856.38;
            break;
        case (valorImovel <= 1055000.00):
            valorRegistro = 11910.26;
            break;
        case (valorImovel <= 1060000.00):
            valorRegistro = 11964.14;
            break;
        case (valorImovel <= 1065000.00):
            valorRegistro = 12018.02;
            break;
        case (valorImovel <= 1070000.00):
            valorRegistro = 12071.90;
            break;
        case (valorImovel <= 1075000.00):
            valorRegistro = 12125.78;
            break;
        case (valorImovel <= 1080000.00):
            valorRegistro = 12179.66;
            break;
        case (valorImovel <= 1085000.00):
            valorRegistro = 12233.54;
            break;
        case (valorImovel <= 1090000.00):
        default:
            valorRegistro = 12244.60;
            break;
    }
     // Aumentar o valorRegistro referente reajuste anual da tambela de emoumento 
     // (multiplicar por 1.04825) valor atualizado do ano 2025
    valorRegistro = valorRegistro * 1.04825; 

    // O valor resultante será usado para preencher os campos de registro e notas.

    // **********************************************
    // 2. ATRIBUIÇÃO: Preencher os campos com o novo valor majorado (formatado)
    // **********************************************
    document.getElementById('registro').value = valorRegistro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('notas').value = valorRegistro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para calcular o total
function calc() {
    // CORREÇÃO APLICADA: Usando a nova função parseCurrency para obter valores numéricos
    let valorImovel = parseCurrency(document.getElementById('valorImovel').value);
    let registro = parseCurrency(document.getElementById('registro').value);
    let notas = parseCurrency(document.getElementById('notas').value);
    
    // O campo percentual não deve estar formatado como moeda, então a leitura original é aceitável, mas padronizada para segurança:
    let percentual = parseFloat(document.getElementById('percentual').value.replace(',', '.')) || 0; 

    // Calculando o valor da porcentagem aplicada ao valor do imóvel
    let valorPercentual = (valorImovel * percentual) / 100;

    // Calculando o total somando os valores adicionais
    let total = valorPercentual + registro + notas;

    // Exibindo o resultado no campo de total
    document.getElementById('total').value = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('valorPercentual').value = valorPercentual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

