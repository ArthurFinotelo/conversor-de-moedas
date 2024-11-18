const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyConvertSelect = document.querySelector(".currency-convert-select")

const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

// ALGORITIMO
//  Ao trocar de moeda no currencyConvertSelect, mudar o input para o valor da moeda

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value


    // SE FOR EM REAL
    if (currencyConvertSelect.value == "real") {

        const dolarToday = 5.2
        const euroToday = 6.2

        // VALOR EM REAL
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

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

        if (currencySelect.value == "real") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)

        }

    }

    // SE FOR EM DÓLAR
    if (currencyConvertSelect.value == "dolar") {

        const realToday = 0.17
        const euroToday = 1.06

        // VALOR EM DÓLAR
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        // MUDANDO SEGUNDO VALOR PARA OUTRA MOEDA
        if (currencySelect.value == "dolar") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)

        } 
        if (currencySelect.value == "euro") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)

        }

        if (currencySelect.value == "real") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realToday)

        }

    }

    // SE FOR EM EURO
    if (currencyConvertSelect.value == "euro") {

        const realToday = 0.16
        const dolarToday = 0.94

        // VALOR EM EURO
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

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
            }).format(inputCurrencyValue)

        }

        if (currencySelect.value == "real") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realToday)

        }

    }
    
}

function changeSelect() {

    const currency2Img = document.querySelector(".currency2-img")
    const currency2Name = document.querySelector("#currency2-name")

    if (currencySelect.value == "dolar") {
        currency2Img.src = "./assets/dolar.png"
        currency2Name.innerHTML = "Dólar Americano"
        currencyValueConverted.innerHTML = "US$ 0.00"
    }

    if (currencySelect.value == "euro") {
        currency2Img.src = "./assets/euro.png"
        currency2Name.innerHTML = "Euro"
        currencyValueConverted.innerHTML = "€ 0,00"
    }

    if (currencySelect.value == "real") {
        currency2Img.src = "./assets/real.png"
        currency2Name.innerHTML = "Real"
        currencyValueConverted.innerHTML = "R$ 0,00"
    }

    convertValues()

}

function changeConvertSelect() {

    const currencyImg = document.querySelector(".currency-img")
    const currencyName = document.querySelector("#currency-name")

    const inputCurrency = document.querySelector(".input-currency")

    if (currencyConvertSelect.value == "real") {
        inputCurrency.placeholder = "R$ 10.000,00"
        currencyImg.src = "./assets/real.png"
        currencyName.innerHTML = "Real"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(0)
    } 

    if (currencyConvertSelect.value == "dolar") {
        inputCurrency.placeholder = "US$ 10.000,00"
        currencyImg.src = "./assets/dolar.png"
        currencyName.innerHTML = "Dólar Americano"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(0)
    }

    if (currencyConvertSelect.value == "euro") {
        inputCurrency.placeholder = "€ 10.000,00"
        currencyImg.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(0)
    }
}


currencySelect.addEventListener("change", changeSelect)
currencyConvertSelect.addEventListener("change", changeConvertSelect)
convertButton.addEventListener("click", convertValues)