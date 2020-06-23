const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogNum = urlParams.get('blogNum');

let request = new XMLHttpRequest();
request.open("GET", "https://palmtreedevapi.herokuapp.com/getAll", true);
request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status == 200) {
        document.getElementById("title").textContent = data[blogNum].title;

        let month = Number(data[blogNum].date.substring(0, 2)) - 1;
        let day = Number(data[blogNum].date.substring(2, 4));
        let year = Number(data[blogNum].date.substring(4, 8));
        let date = new Date(year, month, day);
        let monthName = date.toLocaleDateString('default',{month: 'long'});

        document.getElementById("date").textContent = monthName + " " + day + ", " + year;

        let img = document.createElement("img");
        img.setAttribute("src",data[blogNum].image);
        img.setAttribute("width","75%");
        document.querySelector("#image").appendChild(img);

        document.getElementById("content").textContent = data[blogNum].content;
    }
    else {
        console.log("An error occured" + " " + request.status);
    }
}
request.send();