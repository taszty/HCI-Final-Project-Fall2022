fetch('https://api.twelvedata.com/quote?symbol=AAPL&apikey=60c2faf9f35740b7830c1fcdc3e12a8c')
.then(res=>res.json()).then(data=>console.log(data));