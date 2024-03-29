const tableField = document.querySelector("#table")


let initialData = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "BTC", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

let tableHeader = `
    <tr>
        <th class="name">Название</th>
        <th class="ticker">Тикер </th>
        <th class="value"> Цена </th>
        <th class="change"> Изменение за 24 часа </th>
    </tr>
`


function tableFill(data){
    let tableBody = ``;
    for (let i=0;i<data.length;i++){
        tableBody+=`
        <tr class="row">
            <td>${data[i].name}</td>
            <td>${data[i].ticker}</td>
            <td>${data[i].value}</td>
            <td>${data[i].change}</td>
        </tr>
        `
    }
    
    tableField.innerHTML =  tableHeader + tableBody;
}

tableFill(initialData);


// data = data.filter(a=>a.name === "BTC" || a.ticker==="BTC")
// console.log('data',data);


document.querySelector(".btn").addEventListener("click",()=>{
    let data = initialData.filter(a=>a.name === "BTC" || a.ticker==="BTC")
    tableFill(data);
})



