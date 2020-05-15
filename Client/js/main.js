let request = new XMLHttpRequest();
request.open("GET", "http://127.0.0.1:3000/getAll", true);
request.onload = function () {
  let data = JSON.parse(this.response);
  if (request.status == 200) {
//BLOG PREVIEW    
    for (var i = 0; i < 3; i++) {
      var titleID = 'blogTitle' + i;
      var textID = 'blogText' + i;      
      document.getElementById(titleID).innerHTML = data[i].title;
      document.getElementById(textID).innerHTML = data[i].content;
      
      var dateID = 'blogDate' + i;
      var month = Number(data[i].date.substring(0, 2)) - 1;
      var day = Number(data[i].date.substring(2, 4));
      var year = Number(data[i].date.substring(4, 8));7
      var hour = Number(data[i].date.substring(8, 10));
      var min = Number(data[i].date.substring(10));

      var date = new Date(year, month, day, hour, min);
      var currentDate = new Date();
      var dateAge = currentDate.getTime() - date.getTime();

      if(dateAge / 31104000000 >= 1 && dateAge / 31104000000 < 2) {
        document.getElementById(dateID).innerHTML = 'Last updated 1 year ago';
      }
      else if (dateAge / 31104000000 < 1) {
        if (dateAge / 2629743833 >= 1 && dateAge / 2629743833 < 2) {
          document.getElementById(dateID).innerHTML = 'Last updated 1 month ago';
        }
        else if (dateAge / 2629743833 < 1) {
          if (dateAge / 86400000 >= 1 && dateAge / 86400000 < 2) {
            document.getElementById(dateID).innerHTML = 'Last updated 1 day ago';
          }
          else if (dateAge / 86400000 < 1) {
            if(dateAge / 3600000 >= 1 && dateAge / 3600000 < 2) {
              document.getElementById(dateID).innerHTML = 'Last updated 1 hour ago';
            }
            else if (dateAge / 3600000 < 1) {
              if (dateAge / 60000 >= 1 && dateAge / 60000 < 2) {
                document.getElementById(dateID).innerHTML = 'Last updated 1 min ago';
              }
              else if (dateAge / 60000 < 1) {
                document.getElementById(dateID).innerHTML = 'Last updated just now';
              }
              else {
                document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 60000) + ' mins ago';
              }
            }
            else {
              document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 3600000) + ' hours ago';
            }
          }
          else {
            document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 86400000) + ' days ago';
          }
        }
        else {
          document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 2629743833) + ' months ago';
        }
      }
      else {
        document.getElementById(dateID).innerHTML = 'Last updated ' + Math.floor(dateAge / 31104000000) + ' years ago';
      }
    }
  }
  else {
    console.log("An error occured" + " " + request.status);
  }
}
request.send();