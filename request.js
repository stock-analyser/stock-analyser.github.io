const request = new XMLHttpRequest();
request.open("GET", "https://q.stock.sohu.com/hisHq?code=cn_601766&start=20150601&end=20210414");
request.send();
request.onload = () => {
    if (request.status === 200) {
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request}`);
    }
}