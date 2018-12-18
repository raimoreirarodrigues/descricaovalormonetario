unidades = {
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez",
    11: "onze",
    12: "doze",
    13: "treze",
    14: "quatorze",
    15: "quinze",
    16: "dezesseis",
    17: "dezessete",
    18: "dezoito",
    19: "dezenove"
};
dezenas = {
    1: "dez",
    2: "vinte",
    3: "trinta",
    4: "quarenta",
    5: "cinqüenta",
    6: "sessenta",
    7: "setenta",
    8: "oitenta",
    9: "noventa"
};
centenas = {
    1: "cento",
    2: "duzentos",
    3: "trezentos",
    4: "quatrocentos",
    5: "quinhentos",
    6: "seiscentos",
    7: "setecentos",
    8: "oitocentos",
    9: "novecentos"
};

function verificaMilhares(tamanho, primeiroDigito) {
    if (tamanho >= 4 || tamanho <= 5) {
        return "mil ";
    } else if (tamanho >= 6 || tamanho < 9) {
        if (primeiroDigito == 1) {
            return "milhão ";
        } else {
            return "milhões ";
        }
    } else {
        if (primeiroDigito == 1) {
            return "bilhão ";
        } else {
            return "bilhões ";
        }
    }
}

function verificarUnidades(valor) {
    for (var k in this.unidades) {
        if (this.unidades.hasOwnProperty(valor)) {
            return this.unidades[valor];
        }
    }
}

function verificarDezenas(valor) {
    for (var k in this.dezenas) {
        if (this.dezenas.hasOwnProperty(valor)) {
            return this.dezenas[valor];
        }
    }
}

function verificarCentenas(valor) {
    for (var k in this.centenas) {
        if (this.centenas.hasOwnProperty(valor)) {
            return this.centenas[valor];
        }
    }
}

function formatarUnidades(parteInteira) {
    return this.verificarUnidades(parteInteira);
}

function formatarDezenas(parteInteira) {
    var valorUnidade = '';
    var valorDezena = '';
    valorDezena = this.verificarDezenas(parteInteira[0]);
    valorUnidade = '';
    if (!(parteInteira[1] == 0)) {
        valorUnidade = " e " + this.verificarUnidades(parteInteira[1]);
    }
    return valorDezena + valorUnidade;
}

function formatarCentenas(parteInteira) {
    var valorUnidade = '';
    var valorDezena = '';
    var valorCentena = '';

    if (parteInteira == 100) {
        return "cem";
    } else {
        valorCentena = this.verificarCentenas(parteInteira[0]);
        if (!(parteInteira[1] == 0)) { //Verifica se a dezena nao e zero
            var dezena = parteInteira[1] + parteInteira[2];
            if (dezena >= 20 && dezena < 100) {
                valorDezena = " e " + this.verificarDezenas(parteInteira[1]);
                if (!(parteInteira[2] == 0)) {
                    valorUnidade = " e " + this.verificarUnidades(parteInteira[2]);
                }
            } else {
                if (dezena >= 10 && dezena <= 20) {
                    if (!(parteInteira[2] == 0)) {
                        valorUnidade = " e " + this.verificarUnidades(parteInteira[1] + parteInteira[2]);
                    }
                } else {
                    if (!(parteInteira[2] == 0)) {
                        valorUnidade = " e " + this.verificarUnidades(parteInteira[2]);
                    }
                }
            }
        } else {
            if (!(parteInteira[2] == 0)) {
                valorUnidade = " e " + this.verificarUnidades(parteInteira[2]);
            }

        }
        return valorCentena + valorDezena + valorUnidade;
    }

}

function formatarMilhares4Partes(parteInteira) {
    var valorUnidade = '';
    var valorDezena = '';
    var valorCentena = '';
    var valorMilhar = '';
    if (parteInteira[0] == 1) {
        valorMilhar = this.verificaMilhares(parteInteira[0], parteInteira.length);
    } else {
        valorMilhar = this.formatarUnidades(parteInteira[0]) + " " + this.verificaMilhares(parteInteira[0], parteInteira.length);
    }

    if (!(parteInteira[1] == 0)) {
        valorCentena = this.formatarCentenas(parteInteira[1] + parteInteira[2] + parteInteira[3]);
        if (parteInteira[2] == 0 && parteInteira[3]) {
            if (parteInteira[2] == 0 && parteInteira[3] != 0) return valorMilhar + valorCentena;
            else if (parteInteira[2] == 0 && parteInteira[3] == 0) return valorMilhar + " e " + valorCentena;
            else return valorMilhar + " e " + valorCentena;
        }
        return valorMilhar + valorCentena;
    } else if (!(parteInteira[2] == 0)) {
        if (parteInteira[2] + parteInteira[3] < 20) {
            valorUnidade = this.formatarUnidades(parteInteira[2] + parteInteira[3]);
            return valorMilhar + " e " + valorUnidade;
        } else {
            valorDezena = this.formatarDezenas(parteInteira[2] + parteInteira[3]);
            return valorMilhar + " e " + valorDezena;
        }
    } else if (!(parteInteira[3] == 0)) {
        valorUnidade = this.formatarUnidades(parteInteira[3]);
        return valorMilhar + " e " + valorUnidade;
    } else {
        return valorMilhar;
    }
}

function formatarMilhares5Partes(parteInteira) {
    var valorUnidade = '';
    var valorDezena = '';
    var valorCentena = '';
    var valorMilhar = '';
    if (parteInteira[0] + parteInteira[1] > 20) {
        valorMilhar = this.formatarDezenas(parteInteira[0] + parteInteira[1]) + " " + this.verificaMilhares(parteInteira[0], parteInteira.length);
    } else {
        valorMilhar = this.formatarUnidades(parteInteira[0] + parteInteira[1]) + " " + this.verificaMilhares(parteInteira[0], parteInteira.length);
    }

    if (!(parteInteira[2] == 0)) {
        valorCentena = this.formatarCentenas(parteInteira[2] + parteInteira[3] + parteInteira[4]);
        if (parteInteira[3] == 0 && parteInteira[4]) {
            if (parteInteira[3] == 0 && parteInteira[4] != 0) return valorMilhar + valorCentena;
            else if (parteInteira[3] == 0 && parteInteira[4] == 0) return valorMilhar + " e " + valorCentena;
            else return valorMilhar + " e " + valorCentena;
        }
        return valorMilhar + valorCentena;
    } else if (!(parteInteira[3] == 0)) {
        if (parteInteira[3] + parteInteira[4] < 20) {
            valorUnidade = this.formatarUnidades(parteInteira[3] + parteInteira[4]);
            return valorMilhar + " e " + valorUnidade;
        } else {
            valorDezena = this.formatarDezenas(parteInteira[3] + parteInteira[4]);
            return valorMilhar + " e " + valorDezena;
        }
    } else if (!(parteInteira[4] == 0)) {
        valorUnidade = this.formatarUnidades(parteInteira[4]);
        return valorMilhar + " e " + valorUnidade;
    } else {
        return valorMilhar;
    }

}


function formatarMilhares6Partes(parteInteira) {
    var valorUnidade = '';
    var valorDezena = '';
    var valorCentena = '';
    var valorMilhar = '';
    valorMilhar = this.formatarCentenas(parteInteira[0] + parteInteira[1] + parteInteira[2]) + " " + this.verificaMilhares(parteInteira[0], parteInteira.length);
    if (!(parteInteira[3] == 0)) {
        valorCentena = this.formatarCentenas(parteInteira[3] + parteInteira[4] + parteInteira[5]);
        if (parteInteira[4] == 0 && parteInteira[5]) {
            if (parteInteira[4] == 0 && parteInteira[5] != 0) return valorMilhar + valorCentena;
            else if (parteInteira[4] == 0 && parteInteira[5] == 0) return valorMilhar + " e " + valorCentena;
            else return valorMilhar + " e " + valorCentena;
        }
        return valorMilhar + valorCentena;
    } else if (!(parteInteira[4] == 0)) {
        if (parteInteira[4] + parteInteira[5] < 20) {
            valorUnidade = this.formatarUnidades(parteInteira[4] + parteInteira[5]);
            return valorMilhar + " e " + valorUnidade;
        } else {
            valorDezena = this.formatarDezenas(parteInteira[4] + parteInteira[5]);
            return valorMilhar + " e " + valorDezena;
        }
    } else if (!(parteInteira[5] == 0)) {
        valorUnidade = this.formatarUnidades(parteInteira[5]);
        return valorMilhar + " e " + valorUnidade;
    } else {
        return valorMilhar;
    }
}

function formatarMilhares(parteInteira) {
    var valorUnidade = '';
    var valorDezena = '';
    var valorCentena = '';
    var valorMilhar = '';
    if (parteInteira == 1000) {
        return "mil";
    } else {
        if (parteInteira.length == 4) {
            return this.formatarMilhares4Partes(parteInteira);
        } else if (parteInteira.length == 5) {
            return this.formatarMilhares5Partes(parteInteira);
        } else if (parteInteira.length == 6) {
            return this.formatarMilhares6Partes(parteInteira);
        }
    }
} //fim milhares


function converterValorMonetarioParaExtenso(valor) {
    var quebrarValor = valor.toString().split('.');
    var parteInteira = quebrarValor[0];
    var parteDecimal = quebrarValor[1];
    if (parteInteira == 0) {
        return "VALOR INTEIRO";
    }
    var valorFinal = '';
    var valorUnidade = '';
    var valorDezena = '';
    var valorCentena = '';
    var valorMilhar = '';
    var valorDecimal = '';
    if (parteInteira < 20) {
        valorUnidade = formatarUnidades(parteInteira);
        if (valorUnidade == "um") valorFinal = valorUnidade + " real";
        else valorFinal = valorUnidade + " reais";
    } else if (parteInteira >= 20 && parteInteira < 100) {
        valorFinal = formatarDezenas(parteInteira) + " reais";

    } else if (parteInteira > 99 && parteInteira <= 999) {
        valorFinal = formatarCentenas(parteInteira) + " reais";

    } else if (parteInteira > 999 && parteInteira <= 999999) {
        valorFinal = formatarMilhares(parteInteira) + " reais";
    }
    if (parteDecimal != undefined) {
        var primeiroDigito = parteDecimal[0];
        var segundoDigito = parteDecimal[1];
        if (!(parteDecimal[0] == 0)) {

            if (primeiroDigito != 0) {
                if (segundoDigito != undefined) {
                    if (primeiroDigito + segundoDigito < 20) {
                        valorDecimal = " e " + this.formatarUnidades(primeiroDigito + segundoDigito) + " centavos";
                    } else {
                        valorDecimal = " e " + this.formatarDezenas(primeiroDigito + segundoDigito) + " centavos";
                    }
                } else {
                    segundoDigito = 0;
                    var soma = primeiroDigito + segundoDigito;
                    valorDecimal = " e " + this.formatarDezenas(soma) + " centavos";
                }
            } else {
                if (segundoDigito != 0 && segundoDigito != undefined) {
                    valorDecimal = " e " + this.formatarUnidades(segundoDigito) + " centavos";
                }
            }
        } else {
            if (segundoDigito != 0 && segundoDigito != undefined) {
                valorDecimal = " e " + this.formatarUnidades(segundoDigito) + " centavos";
            }
        }
    }

    return valorFinal + valorDecimal;

}