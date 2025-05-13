const convertButton = document.querySelector(".convert-button") //botão mapeado//
const currencySelect = document.querySelector(".currency-select") //select2 mapeado moeda que o usuario vai escolher//

function convertvalues() {
    const iputCurrencyValue = document.querySelector(".input-currency").value   //valor que sera digitado//

    const currencyValueToconvert = document.querySelector(".currency-value-to-convert")  //valor Real//
    const currencyValueConverted = document.querySelector(".currency-value")    //outras moedas//

    /*valores e tipos de moedas*/
    const dolarToday = 5.65
    const euroToday = 6.37
    const libraToday = 7.51
    const bitcoinToday = 581494.51



    if (currencySelect.value == "dolar") {
        //se for selecionado no select DÓLAR ele executa aqui//
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(iputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        //se for selecionado no slect EURO ele executa aqui//
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(iputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        //se for selecionado no select LIBRA ele executa aqui//
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(iputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "Bitcoin") {
        //se for selecionado no select BITCOIN  ele vai executar aqui//
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
        }).format(iputCurrencyValue / bitcoinToday)
    }


    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        //*******formatando o valor em moeda BRL que o usuario digitou********//
        style: "currency",
        currency: "BRL"
    }).format(iputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-id") //texto de outras moedas mapeado//
    const currencyImg = document.querySelector(".currancyimagem") //img mapeada//

    if (currencySelect.value == "dolar") {
        //se o valor do select for DOLAR ele executa aqui//
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "assets/eua.png"
    }

    if (currencySelect.value == "euro") {
        //se o valor do select for EURO ele executa aqui//
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/euro.png "
    }
    if (currencySelect.value == "libra") {
        //se o valor do select for LIBRA ele executa aqui//
        currencyName.innerHTML = "Libra"
        currencyImg.src = "assets/libra.png"
    }
    if (currencySelect.value == "Bitcoin") {
        //se valor do selec for BITCOIN ele executa aqui//
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "assets/bitcoin.png"
    }

    convertvalues()
}

currencySelect.addEventListener("change", changeCurrency)
//select configurado com um ouvinte (*addEventListener*) para quando// 
//o select trocar de valor executar a funçao (*changeCurrency*)//

convertButton.addEventListener("click", convertvalues)
//Botão configurado para chamar a função com o click//