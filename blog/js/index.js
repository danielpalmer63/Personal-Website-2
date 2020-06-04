let request = new XMLHttpRequest();
request.open("GET", "https://palmtreedevapi.herokuapp.com/getAll", true);
request.onload = function () {
  let data = JSON.parse(this.response);
  if (request.status == 200) {
//BLOG PREVIEW    
    document.getElementById('spinner').setAttribute("style", "display: none");

    for(var i = 0; i < data.length; i++) { 
        let div0 = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let h3 = document.createElement("h3");
        let p0 = document.createElement("p");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let strong = document.createElement("strong");

        div2.setAttribute("id","blogContent" + i);
        document.querySelector("#blogList").appendChild(div2);

        div0.setAttribute("class", "mt-3 border-bottom");
        div0.setAttribute("id", "borderBox" + i);
        document.querySelector("#blogContent" + i).appendChild(div0);

        let titleText = document.createTextNode(data[i].title);
        h3.appendChild(titleText);
        document.querySelector("#borderBox" + i).appendChild(h3);
        
        p0.setAttribute("id", "name" + i);
        document.querySelector("#borderBox" + i).appendChild(p0);

        let name = document.createTextNode("By Daniel Palmer");
        strong.appendChild(name);
        document.querySelector("#name" + i).appendChild(strong);

        div1.setAttribute("class", "small");
        div1.setAttribute("id", "date" + i);
        document.querySelector("#borderBox" + i).appendChild(div1);

        let month = Number(data[i].date.substring(0, 2)) - 1;
        let day = Number(data[i].date.substring(2, 4));
        let year = Number(data[i].date.substring(4, 8));
  
        let date = new Date(year, month, day);
        let monthName = date.toLocaleDateString('default',{month: 'long'});

        let dateText = document.createTextNode(monthName + " " + day + ", " + year);
        p1.appendChild(dateText);
        document.querySelector("#borderBox" + i).appendChild(p1);

        let content = document.createTextNode(data[i].content);
        p2.appendChild(content);
        document.querySelector("#borderBox" + i).appendChild(p2);
    }
  }
  else {
    console.log("An error occured" + " " + request.status);
  }
}
request.send();