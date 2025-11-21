        // --- FUNÇÕES DE FORMATAÇÃO BRL ---

        function formatarBRL(valor) {
            valor = parseFloat(valor);
            if (isNaN(valor)) return 'R$ 0,00';
            
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(valor);
        }

        function desformatarBRL(texto) {
            if (typeof texto === 'string') {
                texto = texto.replace(/[R$ ]/g, ''); 
                texto = texto.replace(/\./g, '');    
                texto = texto.replace(/,/g, '.');    
            }
            return parseFloat(texto) || 0;
        }
        
        function formatarInput(inputElement) {
            let valor = desformatarBRL(inputElement.value);
            inputElement.value = new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(valor).replace('R$', '').trim();
        }
        
        function desformatarInput(inputElement) {
            let valor = desformatarBRL(inputElement.value);
            inputElement.value = valor.toFixed(2).replace('.', ','); 
            inputElement.select(); 
        }
        
        // --- LÓGICA DO SIMULADOR ---
        
       // A função de alerta será ajustada no script para garantir a legibilidade.

// CORRIGIDO: Exibe o alerta do regime com quebra de linha adequada
function exibirAlertaRegime() {
    const regime = document.getElementById('regimeBens').value;
    const alerta = document.getElementById('alertaRegime');
    
    // Altera a classe de fundo para o alerta dinâmico (usa alerta-regime para cores específicas)
    alerta.className = 'alerta-regime'; 

    if (regime === 'separacao' || regime === 'separacao-obrigatoria') {
        alerta.style.display = 'block';
        alerta.innerHTML = `
            ℹ️ **Atenção ao Regime de Separação:** Todos os bens são tratados como **exclusivos** do falecido e compõem 100% da **BASE DE HERANÇA**.
        `;
    } else if (regime === 'universal') {
         alerta.style.display = 'block';
         alerta.innerHTML = `
            ℹ️ **Atenção ao Regime Universal:** Não existe bem particular. Os **Bens Particulares** digitados serão **SOMADOS** aos Bens Comuns para o cálculo da meação total (50%) e da herança (50% restante). O cônjuge **NÃO** concorre com descendentes na herança.
        `;
    } 
    else {
        alerta.style.display = 'none';
    }
}
        
        function calcularITCMD(valorQuinhao) {
            let aliquota = 0;
            let imposto = 0;
            
            if (valorQuinhao <= 50000) {
                aliquota = 0;
            } else if (valorQuinhao <= 250000) {
                aliquota = 0.02; // 2%
            } else if (valorQuinhao <= 500000) {
                aliquota = 0.04; // 4%
            } else {
                aliquota = 0.06; // 6%
            }

            imposto = valorQuinhao * aliquota;

            return { aliquota: (aliquota * 100).toFixed(2), imposto: imposto };
        }
        
        function gerarCamposNomes() {
            const numComuns = parseInt(document.getElementById('numDescComuns').value) || 0;
            const numExclusivos = parseInt(document.getElementById('numDescExclusivos').value) || 0;
            const numColaterais = parseInt(document.getElementById('numColaterais').value) || 0;
            const divDescendentes = document.getElementById('nomesDescendentes');
            const divColaterais = document.getElementById('nomesColaterais');
            
            // 1. PRESERVAR VALORES ATUAIS
            let nomesSalvos = new Map();
            let i = 1;
            while (document.getElementById(`descNome${i}`)) {
                nomesSalvos.set(`descNome${i}`, document.getElementById(`descNome${i}`).value);
                i++;
            }
            i = 1;
            while (document.getElementById(`colatNome${i}`)) {
                nomesSalvos.set(`colatNome${i}`, document.getElementById(`colatNome${i}`).value);
                i++;
            }
            
            // GERAÇÃO DOS NOVOS CAMPOS DE DESCENDENTES
            let htmlDesc = '<h4>Filhos (Descendentes):</h4><div class="desc-grid">';
            let totalDesc = 0;
            for (let i = 1; i <= numComuns; i++) {
                totalDesc++;
                const id = `descNome${totalDesc}`;
                const nomeSalvo = nomesSalvos.get(id) || `Filho Comum ${i}`;
                htmlDesc += `<div class="input-group"><label for="${id}">Filho Comum ${i}:</label><input type="text" id="${id}" value="${nomeSalvo}"></div>`;
            }
            for (let i = 1; i <= numExclusivos; i++) {
                totalDesc++;
                const id = `descNome${totalDesc}`;
                const nomeSalvo = nomesSalvos.get(id) || `Filho Exclusivo ${i}`;
                htmlDesc += `<div class="input-group"><label for="${id}">Filho Exclusivo ${i}:</label><input type="text" id="${id}" value="${nomeSalvo}"></div>`;
            }
            htmlDesc += '</div>';
            
            if (totalDesc === 0) {
                divDescendentes.innerHTML = `<p style="margin-top: 10px; color: #777;">Nenhum descendente cadastrado.</p>`;
            } else {
                divDescendentes.innerHTML = htmlDesc;
            }

            // GERAÇÃO DOS NOVOS CAMPOS DE COLATERAIS (Irmãos)
            let htmlColat = '<h4>Irmãos (Colaterais):</h4><div class="desc-grid">';
            for (let i = 1; i <= numColaterais; i++) {
                const id = `colatNome${i}`;
                const nomeSalvo = nomesSalvos.get(id) || `Irmão ${i}`;
                htmlColat += `<div class="input-group"><label for="${id}">Irmão ${i}:</label><input type="text" id="${id}" value="${nomeSalvo}"></div>`;
            }
            htmlColat += '</div>';

            if (numColaterais === 0) {
                 divColaterais.innerHTML = `<p style="margin-top: 10px; color: #777;">Nenhum colateral cadastrado.</p>`;
            } else {
                divColaterais.innerHTML = htmlColat;
            }
        }
        
        function inicializarInputs() {
            const inputsValor = ['bensComuns', 'bensParticulares', 'dividas'];
            inputsValor.forEach(id => {
                const input = document.getElementById(id);
                formatarInput(input);
            });
            exibirAlertaRegime();
        }

        document.addEventListener('DOMContentLoaded', () => {
             gerarCamposNomes();
             inicializarInputs();
        });


        function calcularPartilhaCompleta() {
            // Coleta de Dados: TODOS OS VALORES DE INPUT SÃO DESFORMATADOS PARA O CÁLCULO
            const nomeSobrevivente = document.getElementById('nomeSobrevivente').value.trim() || (document.getElementById('tipoRelacao').value === 'conjuge' ? 'Cônjuge Sobrevivente' : 'Companheiro(a) Sobrevivente');
            const tipoRelacao = document.getElementById('tipoRelacao').value;
            const regime = document.getElementById('regimeBens').value;
            
            // DADOS DESFORMATADOS PARA CÁLCULO
            let bensComunsBruto = desformatarBRL(document.getElementById('bensComuns').value);
            let bensParticularesBruto = desformatarBRL(document.getElementById('bensParticulares').value);
            const dividas = desformatarBRL(document.getElementById('dividas').value);
            
            const numDescComuns = parseInt(document.getElementById('numDescComuns').value) || 0;
            const numDescExclusivos = parseInt(document.getElementById('numDescExclusivos').value) || 0;
            const numAscendentes = parseInt(document.getElementById('paisVivos').value) || 0;
            const numColaterais = parseInt(document.getElementById('numColaterais').value) || 0;

            const totalDescendentes = numDescComuns + numDescExclusivos;

            const tabelaCorpo = document.getElementById('tabelaCorpo');
            const tabelaITCMD = document.getElementById('tabelaITCMD');
            const resultadoDiv = document.getElementById('resultado');
            const infoDeducoes = document.getElementById('infoDeducoes');
            const infoPatrimonio = document.getElementById('infoPatrimonio');
            const infoHeranca = document.getElementById('infoHeranca');
            const totalImpostoElement = document.getElementById('totalImposto');
            
            // Variáveis de Saída
            let partilha = []; 
            let meacaoCnjValor = 0;
            let herancaLiquida = 0;
            let bensComunsLiquido = 0;
            let bensParticularesLiquido = 0;

            // --- TRATAMENTO INICIAL PARA COERÊNCIA LEGAL ---
            let totalEspolioBruto = bensComunsBruto + bensParticularesBruto;
            
            if (regime === 'universal') {
                // CORREÇÃO: Força tudo a ser "comum" para fins de cálculo de meação e herança.
                bensComunsBruto = totalEspolioBruto;
                bensParticularesBruto = 0;
            }
            // A variável totalEspolioBruto continua a soma inicial para a base do percentual

            // --- FASE 1: TRATAMENTO DE DÍVIDAS (Dedução) ---
            
            if (totalEspolioBruto < dividas) {
                alert('As dívidas são maiores que o Espólio Bruto. Não há herança líquida.');
                infoDeducoes.innerHTML = `**Espólio Total: ${formatarBRL(totalEspolioBruto)}**. **Dívidas: ${formatarBRL(dividas)}**. Não há herança líquida.`;
                resultadoDiv.style.display = 'block';
                tabelaCorpo.innerHTML = '';
                tabelaITCMD.innerHTML = '';
                return;
            }

            // Garante que o cálculo das dívidas usa a nova base de bensComunsBruto e bensParticularesBruto
            const ratioComum = bensComunsBruto / totalEspolioBruto;
            const ratioParticular = bensParticularesBruto / totalEspolioBruto;

            const divComum = dividas * ratioComum;
            const divParticular = dividas * ratioParticular;

            bensComunsLiquido = bensComunsBruto - divComum;
            bensParticularesLiquido = bensParticularesBruto - divParticular;
            
            const totalEspolioLiquido = bensComunsLiquido + bensParticularesLiquido;

            infoDeducoes.innerHTML = `**Dívidas (${formatarBRL(dividas)})** deduzidas. Espólio Líquido total: **${formatarBRL(totalEspolioLiquido)}** (Comuns: ${formatarBRL(bensComunsLiquido)} | Particulares: ${formatarBRL(bensParticularesLiquido)})`;

            // --- FASE 2: CÁLCULO DA MEAÇÃO ---
            
            switch (regime) {
                case 'universal':
                    // Agora, bensComunsLiquido É O TOTAL.
                    meacaoCnjValor = bensComunsLiquido / 2;
                    herancaLiquida = bensComunsLiquido - meacaoCnjValor; 
                    infoPatrimonio.innerHTML = `Regime Universal: Meação de **${formatarBRL(meacaoCnjValor)}** (50% do Espólio Líquido).`;
                    break;

                case 'parcial':
                    meacaoCnjValor = bensComunsLiquido / 2;
                    herancaLiquida = (bensComunsLiquido / 2) + bensParticularesLiquido;
                    infoPatrimonio.innerHTML = `Regime Parcial: Meação de **${formatarBRL(meacaoCnjValor)}** (50% dos Comuns Líquidos).`;
                    break;

                case 'separacao':
                    meacaoCnjValor = 0;
                    herancaLiquida = totalEspolioLiquido;
                    infoPatrimonio.innerHTML = `Regime Separação Total Convencional: **Não há meação**.`;
                    break;
                
                case 'separacao-obrigatoria':
                    meacaoCnjValor = 0;
                    herancaLiquida = totalEspolioLiquido;
                    infoPatrimonio.innerHTML = `<span class="alerta">Regime Separação Obrigatória: **Não há meação legal**. Contudo, bens adquiridos por esforço comum (Súmula 377) podem gerar meação (aqui calculados na herança).</span>`;
                    break;
            }

            // --- FASE 3: ORDEM DE VOCAÇÃO HEREDITÁRIA (Cálculo da Herança) ---
            
            let cnjHerancaValor = 0;
            let herancaDistribuir = herancaLiquida;
            let classeHerdeira = "Nenhuma";

            partilha = [];
            
            function getDescendenteNome(index) {
                return document.getElementById(`descNome${index}`).value.trim() || `Descendente ${index}`;
            }
            function getColateralNome(index) {
                return document.getElementById(`colatNome${index}`).value.trim() || `Irmão ${index}`;
            }

            // 3.1 - Concorrência com Descendentes (1ª Classe)
            if (totalDescendentes > 0) {
                
                let concorreHeranca = 0; 
                let herancaPuraDescendentes = 0; // Herança que não tem concorrência do cônjuge

                if (regime === 'universal' || regime === 'separacao-obrigatoria') {
                    // Cônjuge NÃO CONCORRE com descendentes (Art. 1829, I). 100% da herança líquida vai para os descendentes.
                    herancaPuraDescendentes = herancaLiquida; 
                    classeHerdeira = "Descendentes (S/ Cônjuge - Universal/Sep. Obrigatória)"; 
                } 
                else if (regime === 'parcial') {
                    const herancaBensParticulares = bensParticularesLiquido;
                    herancaPuraDescendentes = bensComunsLiquido / 2; // 50% dos bens comuns do falecido
                    
                    if (herancaBensParticulares === 0) {
                        concorreHeranca = 0; // Cônjuge só concorre se houver bens particulares
                        classeHerdeira = "Descendentes (S/ Cônjuge - Parcial S/ Particulares)";
                    } else {
                        concorreHeranca = herancaBensParticulares; // Herança sobre os particulares, com concorrência
                        classeHerdeira = "Descendentes (Cônjuge Conc. em Particulares)";
                    }
                } else if (regime === 'separacao') {
                    concorreHeranca = herancaLiquida; // Cônjuge concorre sobre 100%
                    classeHerdeira = "Descendentes (Cônjuge Conc. - Separação Total)";
                }
                
                // Distribuição da herança Pura para Descendentes
                if (herancaPuraDescendentes > 0) {
                    const quinhaoPuro = herancaPuraDescendentes / totalDescendentes;
                    for (let i = 1; i <= totalDescendentes; i++) {
                        partilha.push({ nome: getDescendenteNome(i), tipo: 'Herança Total/Comum', valor: quinhaoPuro });
                    }
                    herancaDistribuir -= herancaPuraDescendentes; 
                }

                // Cálculo da concorrência (se o cônjuge tiver direito - Parcial com particulares, ou Separação Total)
                if (concorreHeranca > 0) {
                    let totalHerdeirosConcorrentes = totalDescendentes + 1; 
                    let quinhaoFilhoConcorrente = 0;
                    
                    if (numDescExclusivos >= 1 && totalHerdeirosConcorrentes >= 4) {
                        cnjHerancaValor = concorreHeranca * 0.25;
                        let herancaFilhos = concorreHeranca - cnjHerancaValor;
                        quinhaoFilhoConcorrente = herancaFilhos / totalDescendentes;
                    } else {
                        cnjHerancaValor = concorreHeranca / totalHerdeirosConcorrentes;
                        quinhaoFilhoConcorrente = cnjHerancaValor;
                    }
                    
                    // Adiciona a herança concorrente aos descendentes (somando ao que já pode ter sido herdado)
                    for (let i = 1; i <= totalDescendentes; i++) {
                        const descIndex = partilha.findIndex(p => p.nome === getDescendenteNome(i));
                        if(descIndex !== -1) {
                            partilha[descIndex].valor += quinhaoFilhoConcorrente;
                        } else {
                             // Caso em que o herdeiro só herdou por concorrência (teoricamente não deve ocorrer)
                            partilha.push({ nome: getDescendenteNome(i), tipo: 'Herança (Concorrência)', valor: quinhaoFilhoConcorrente });
                        }
                    }
                    
                    herancaDistribuir -= concorreHeranca;
                }

                if (cnjHerancaValor > 0) {
                    partilha.push({ nome: nomeSobrevivente, tipo: 'Herança (Concorrência)', valor: cnjHerancaValor });
                }
                
                // Verifica se houve distribuição completa para Descendentes (necessário após a refatoração)
                if (partilha.length === 0 && herancaLiquida > 0 && totalDescendentes > 0) {
                     // Isso só deve acontecer se herancaPuraDescendentes for herancaLiquida (Universal/Sep. Obrigatória)
                     const quinhaoDescendente = herancaLiquida / totalDescendentes;
                     for (let i = 1; i <= totalDescendentes; i++) {
                          partilha.push({ nome: getDescendenteNome(i), tipo: 'Herança Total', valor: quinhaoDescendente });
                     }
                     herancaDistribuir = 0;
                }
            }

            // 3.2 - Concorrência com Ascendentes (2ª Classe)
            else if (numAscendentes > 0) {
                classeHerdeira = "Ascendentes (Cônjuge Conc.)";
                
                let quinhaoCnj = 0;
                if (numAscendentes === 2) { 
                    quinhaoCnj = herancaDistribuir / 3;
                    let herancaAscendentes = herancaDistribuir * (2 / 3);
                    
                    const quinhaoAscendente = herancaAscendentes / numAscendentes;
                    partilha.push({ nome: `Ascendente 1 (Pai/Mãe)`, tipo: 'Herança', valor: quinhaoAscendente });
                    partilha.push({ nome: `Ascendente 2 (Pai/Mãe)`, tipo: 'Herança', valor: quinhaoAscendente });
                } else { 
                    quinhaoCnj = herancaDistribuir / 2;
                    partilha.push({ nome: `Ascendente 1 (Pai ou Mãe)`, tipo: 'Herança', valor: quinhaoCnj });
                } 
                
                cnjHerancaValor = quinhaoCnj;
                herancaDistribuir = 0;
                
                partilha.push({ nome: nomeSobrevivente, tipo: 'Herança (Concorrência)', valor: cnjHerancaValor });

            }
            
            // 3.3 - Apenas Cônjuge/Companheiro (3ª Classe)
            else if (tipoRelacao !== 'nenhum') { 
                classeHerdeira = tipoRelacao === 'conjuge' ? "Cônjuge (Herança Total)" : "Companheiro(a) (Herança Total)";
                cnjHerancaValor = herancaDistribuir;
                herancaDistribuir = 0;
                
                partilha.push({ nome: nomeSobrevivente, tipo: 'Herança (Total)', valor: cnjHerancaValor });
            }

            // 3.4 - Colaterais (4ª Classe)
            else if (numColaterais > 0) {
                classeHerdeira = "Colaterais (Irmãos)";
                const quinhaoColateral = herancaDistribuir / numColaterais;
                for (let i = 1; i <= numColaterais; i++) {
                    partilha.push({ nome: getColateralNome(i), tipo: 'Herança', valor: quinhaoColateral });
                }
                herancaDistribuir = 0;
            }
            
            // Informação de Herança (mantida)
            infoHeranca.innerHTML = `**Ordem de Vocação Hereditária:** ${classeHerdeira}. Herança Líquida a distribuir: **${formatarBRL(herancaLiquida)}** (foi distribuído **${formatarBRL(herancaLiquida - herancaDistribuir)}**).`;


            // --- FASE 4: MONTAGEM DA TABELA DE PARTILHA E CÁLCULO DO ITCMD ---
            
            tabelaCorpo.innerHTML = '';
            tabelaITCMD.innerHTML = '';
            let totalDistribuido = meacaoCnjValor;
            let totalITCMD = 0;

            // 4.1. Adiciona a linha da Meação (se houver)
            if (meacaoCnjValor > 0) {
                const meacaoPercentual = (meacaoCnjValor / totalEspolioBruto) * 100;
                tabelaCorpo.innerHTML += `
                    <tr class="meacao">
                        <td>**${nomeSobrevivente}**</td>
                        <td>Meação (Direito Próprio)</td>
                        <td>${formatarBRL(meacaoCnjValor)}</td>
                        <td>${meacaoPercentual.toFixed(2)}%</td>
                        <td>R$ 0,00 (Não Tributável)</td>
                    </tr>
                `;
            }

            // 4.2. Adiciona as linhas da Herança e Calcula o ITCMD
            partilha.forEach(item => {
                const itemPercentual = (item.valor / totalEspolioBruto) * 100;
                const valorTributavel = item.valor; 
                
                const resultadoITCMD = calcularITCMD(valorTributavel);
                const impostoDevido = resultadoITCMD.imposto;
                const aliquotaAplicada = resultadoITCMD.aliquota;

                totalDistribuido += item.valor;
                totalITCMD += impostoDevido;

                // Tabela de Partilha (1)
                tabelaCorpo.innerHTML += `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.tipo}</td>
                        <td>${formatarBRL(item.valor)}</td>
                        <td>${item.valor > 0 ? itemPercentual.toFixed(2) + '%' : '0.00%'}</td>
                        <td>${formatarBRL(valorTributavel)}</td>
                    </tr>
                `;

                // Tabela de ITCMD (2)
                tabelaITCMD.innerHTML += `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${formatarBRL(valorTributavel)}</td>
                        <td>${aliquotaAplicada}%</td>
                        <td>${formatarBRL(impostoDevido)}</td>
                    </tr>
                `;
            });
            
            // 4.3. Linha Total
             const totalPercentual = (totalDistribuido / totalEspolioBruto) * 100;
             tabelaCorpo.innerHTML += `
                <tr class="heranca-total">
                    <td>**TOTAL**</td>
                    <td></td>
                    <td>**${formatarBRL(totalDistribuido)}**</td>
                    <td>**${totalPercentual.toFixed(2)}%**</td>
                    <td></td>
                </tr>
            `;
            
            // 4.4. Total do Imposto
            totalImpostoElement.innerHTML = `**Total Estimado de ITCMD/SE (a ser recolhido pelo Espólio/Herdeiros): ${formatarBRL(totalITCMD)}**`;


            resultadoDiv.style.display = 'block';
        }
