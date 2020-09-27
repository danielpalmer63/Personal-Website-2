let request = new XMLHttpRequest();
request.open("GET", "https://palmtreedevapi.herokuapp.com/getAll", true);
request.onload = function () {
  let data = JSON.parse(this.response);
  if (request.status == 200) {
    let i = data.length - 1;
    for (var x = 0; x < 3; x++) {
      document.getElementById('spinner' + x).setAttribute("style", "display: none");
      var imgID = '#blogImage' + x;   
      let img = document.createElement("img");
      img.setAttribute("src", data[i].image);
      img.setAttribute("class", "card-img-top");
      document.querySelector(imgID).appendChild(img);

      var titleID = 'blogTitle' + x;
      var textID = 'blogText' + x;      
      document.getElementById(titleID).innerHTML = data[i].title;
      document.getElementById(textID).innerHTML = data[i].content.replace(/!n/g,"").substring(0, 71) + "...";
      
      var blogLink = '#blogLink' + x;
      var blogURL = 'http://palmtreedev.com/blog/blogPost/index.php?blogNum=' + i;
      let btnText = document.createTextNode("Read More");
      let btn = document.createElement("a");
      btn.setAttribute("class", "btn btn-primary text-light");
      btn.setAttribute("href", blogURL);
      btn.appendChild(btnText);
      document.querySelector(blogLink).appendChild(btn);
      
      var dateID = 'blogDate' + x;
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
      i--;
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

