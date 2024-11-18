const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.2
    const euroToday = 6.2

    // MUDANDO PRIMEIRO VALOR PARA BRL
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) // converter valor para BRL certinho


    // MUDANDO SEGUNDO VALOR PARA OUTRA MOEDA
    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    } 
    if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    
}

function changeFlag() {

    const currencyImg = document.querySelector(".currency-img")
    const currencyName = document.querySelector("#currency-name")

    if (currencySelect.value == "dolar") {
        currencyImg.src = "./assets/dolar.png"
        currencyName.innerHTML = "Dólar Americano"
        currencyValueConverted.innerHTML = "US$ 0.00"
    }

    if (currencySelect.value == "euro") {
        currencyImg.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
        currencyValueConverted.innerHTML = "€ 0,00"
    }

    convertValues()

}


currencySelect.addEventListener("change", changeFlag)
convertButton.addEventListener("click", convertValues)