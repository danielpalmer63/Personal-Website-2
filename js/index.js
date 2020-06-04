let request = new XMLHttpRequest();
request.open("GET", "https://palmtreedevapi.herokuapp.com/getAll", true);
request.onload = function () {
  let data = JSON.parse(this.response);
  if (request.status == 200) {
//BLOG PREVIEW    
    for (var i = 0; i < 3; i++) {
      document.getElementById('spinner' + i).setAttribute("style", "display: none");
      var imgID = '#blogImage' + i;   
      let img = document.createElement("img");
      img.setAttribute("src", data[i].image);
      img.setAttribute("class", "card-img-top");
      document.querySelector(imgID).appendChild(img);

      var titleID = 'blogTitle' + i;
      var textID = 'blogText' + i;      
      document.getElementById(titleID).innerHTML = data[i].title;
      document.getElementById(textID).innerHTML = data[i].content;
      
      var dateID = 'blogDate' + i;
      var month = Number(data[i].date.substring(0, 2)) - 1;
      var day = Number(data[i].date.substring(2, 4));
      var year = Number(data[i].date.substring(4, 8));
      var hour = Number(data[i].date.substring(8, 10));
      var min = Number(data[i].date.substring(10));

      var date = new Date(year, month, day, hour, min);
      var currentDate = new Date();
      var dateAge = currentDate.getTime() - date.getTime();

      if(dateAge / 31104000000 >= 1 && dateAge / 31104000000 < 2) {
        document.getElementById(dateID).innerHTML = 'Last updated 1 year ago';
      }  else if (dateAge / 31104000000 < 1) {
        if (dateAge / 2629743833 >= 1 && dateAge / 2629743833 < 2) {
          document.getElementById(dateID).innerHTML = 'Last updated 1 month ago';
        } else if (dateAge / 2629743833 < 1) {
          if (dateAge / 86400000 >= 1 && dateAge / 86400000 < 2) {
            document.getElementById(dateID).innerHTML = 'Last updated 1 day ago';
          } else if (dateAge / 86400000 < 1) {
            if(dateAge / 3600000 >= 1 && dateAge / 3600000 < 2) {
              document.getElementById(dateID).innerHTML = 'Last updated 1 hour ago';
            } else if (dateAge / 3600000 < 1) {
              if (dateAge / 60000 >= 1 && dateAge / 60000 < 2) {
                document.getElementById(dateID).innerHTML = 'Last updated 1 min ago';
              } else if (dateAge / 60000 < 1) {
                document.getElementById(dateID).innerHTML = 'Last updated just now';
              } else {
                document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 60000) + ' mins ago';
              }
            } else {
              document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 3600000) + ' hours ago';
            }
          } else {
            document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 86400000) + ' days ago';
          }
        } else {
          document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 2629743833) + ' months ago';
        }
      } else {
        document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 31104000000) + ' years ago';
      }
    }
  }
  else {
    console.log("An error occured" + " " + request.status);
  }
}
request.send();

let request1 = new XMLHttpRequest();
request1.open("GET", "https://api.github.com/users/danielpalmer63", true);
request1.onload = function () {
  let data = JSON.parse(this.response);
  if (request1.status == 200) {
    //BLOG PREVIEW    
    let gitImg = document.createElement("img");
    gitImg.setAttribute("src", data.avatar_url);
    gitImg.setAttribute("class", "card-img");
    document.querySelector("#gitHubImage").appendChild(gitImg);
  }
  else {
    console.log("An error occured" + " " + request1.status);
  }
}
request1.send();

let request2 = new XMLHttpRequest();
request2.open("GET", "https://api.github.com/users/danielpalmer63/repos", true);
request2.onload = function () {
  let data = JSON.parse(this.response);
  if (request2.status == 200) {
//BLOG PREVIEW    
    for(let i = 0; i < data.length; i++) {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("style", "width: 18rem;");
      card.setAttribute("id", "card");
      document.querySelector("#projectCards").appendChild(card);

      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      cardBody.setAttribute("id", "cardBody");
      document.querySelector("#card").appendChild(cardBody);

      let cardTitle = document.createElement("h5");
      let titleText = document.createTextNode(data[i].name);
      cardTitle.setAttribute("class", "card-title");
      cardTitle.appendChild(titleText);
      document.querySelector("#cardBody").appendChild(cardTitle);

      let cardContent = document.createElement("h5");
      let contentText = document.createTextNode(data[i].description);
      cardContent.setAttribute("class", "card-text");
      cardContent.appendChild(contentText);
      document.querySelector("#cardBody").appendChild(cardContent);


    }
  }
  else {
    console.log("An error occured" + " " + request2.status);
  }
}
request2.send();

