let request = new XMLHttpRequest();
request.open("GET", "http://127.0.0.1:3000/getAll", true);
request.onload = function() {
    let data = JSON.parse(this.response);
    if(request.status == 200) {
        document.getElementById("blogTitle0").innerHTML = data[0].title;
        document.getElementById("blogText0").innerHTML = data[0].content;
        document.getElementById("blogTitle1").innerHTML = data[1].title;
        document.getElementById("blogText1").innerHTML = data[1].content;
        document.getElementById("blogTitle2").innerHTML = data[2].title;
        document.getElementById("blogText2").innerHTML = data[2].content;
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
}
request.send();