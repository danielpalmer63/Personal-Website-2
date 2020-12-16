let request = new XMLHttpRequest();
request.open("GET", "./blogPost/allblogs.json", true);
request.onload = function () {
  let data = JSON.parse(this.response);
  if (request.status == 200) {
   
    document.getElementById('spinner').setAttribute("style", "display: none");

    for(var i = data.length-1; i >= 0; i--) { 
        let div0 = document.createElement("div");
        let div1 = document.createElement("div");
        let a0 = document.createElement("a");
        let h3 = document.createElement("h3");
        let p0 = document.createElement("p");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let strong = document.createElement("strong");
        let blogURL = "./blogPost/index.php?blogNum=" + i;

        a0.setAttribute("id","blogContent" + i);
        a0.setAttribute("class","disableLinkStyle");
        a0.setAttribute("href",blogURL);

        document.querySelector("#blogList").appendChild(a0);

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

        var year = Number(data[i].date.substring(0, 4));
        var month = Number(data[i].date.substring(5, 7)) - 1;
        var day = Number(data[i].date.substring(8, 10)); 
  
        let date = new Date(year, month, day);
        let monthName = date.toLocaleDateString('default',{month: 'long'});

        let dateText = document.createTextNode(monthName + " " + day + ", " + year);
        p1.appendChild(dateText);
        document.querySelector("#borderBox" + i).appendChild(p1);

        let prev = "";
        for(let j = 0; j < data[i].content.length; j++) {
          if (data[i].content.replace(/!n/g,"").charAt(j) == "." || data[i].content.replace(/!n/g,"").charAt(j) == "!" || data[i].content.replace(/!n/g,"").charAt(j) == "?") {        
            prev = prev + data[i].content.replace(/!n/g,"").charAt(j);   
            break;          
          }
          else {
            prev = prev + data[i].content.replace(/!n/g,"").charAt(j);   
          }
        }

        let content = document.createTextNode(prev);
        p2.appendChild(content);
        document.querySelector("#borderBox" + i).appendChild(p2);
    }
  }
  else {
    console.log("An error occured" + " " + request.status);
  }
}
request.send();