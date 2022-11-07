var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var bnb = document.getElementById("binancecoin");
var doge = document.getElementById("dogecoin");

var liveprice =
{
    "async": true,
    "scroosdomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cdogecoin&vs_currencies=usd&include_last_updated_at=false",
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    bnb.innerHTML = response.binancecoin.usd;
    doge.innerHTML = response.dogecoin.usd;

});