let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/danielpalmer63/repos?sort=updated_at&direction=desc", true);
request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status == 200) {
        //BLOG PREVIEW    
        let rowNum = 0;
        let colNum = 0;
        let cardNum = 0;
        let bodyNum = 0;
        for (let i = 0; i < data.length; i++) {

            let rowDiv = document.createElement("div");
            rowDiv.setAttribute("class", "row");
            rowDiv.setAttribute("id", "cardRow" + rowNum);
            document.querySelector("#projectCards").appendChild(rowDiv);
            
            let colDiv = document.createElement("div");
            colDiv.setAttribute("class", "col-sm-4");
            colDiv.setAttribute("id", "cardCol" + colNum);
            document.querySelector("#cardRow" + rowNum).appendChild(colDiv);

            let card = document.createElement("div");
            card.setAttribute("class", "card mt-4 mb-4 shadow");
            card.setAttribute("style", "width: 18rem; margin-left:auto; margin-right:auto;");
            card.setAttribute("id", "card" + cardNum);
            document.querySelector("#cardCol" + colNum).appendChild(card);

            let cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            cardBody.setAttribute("id", "cardBody" + bodyNum);
            document.querySelector("#card" + cardNum).appendChild(cardBody);

            let cardTitle = document.createElement("h5");
            let titleText = document.createTextNode(data[i].name);
            cardTitle.setAttribute("class", "card-title");
            cardTitle.appendChild(titleText);
            document.querySelector("#cardBody" + bodyNum).appendChild(cardTitle);

        //    var year = Number(data[i].updated_at.substring(0, 4));
        //    var month = Number(data[i].updated_at.substring(5, 7))-1;
        //    var date = new Date(year, month, day);
        //    let monthName = date.toLocaleDateString('default',{month: 'long'});          
        //    var day = Number(data[i].updated_at.substring(8, 10));
        //    console.log(year);
        //    console.log(monthName);
        //    console.log(day);

            let cardContent = document.createElement("p");
            let contentText = document.createTextNode(data[i].description);
            cardContent.setAttribute("class", "card-text");
            cardContent.appendChild(contentText);
            document.querySelector("#cardBody" + bodyNum).appendChild(cardContent);

            let btn = document.createElement("a");
            let btnText = document.createTextNode("Go to Project");
            btn.setAttribute("class", "btn btn-outline-primary");
            btn.setAttribute("href", data[i].html_url);
            btn.appendChild(btnText);
            document.querySelector("#cardBody" + bodyNum).appendChild(btn);
            
            colNum++;
            cardNum++;
            bodyNum++
            if (i + 1 % 4 == 0) {
                rowNum++;
            }

        }
    }
    else {
        console.log("An error occured" + " " + request.status);
    }
}
request.send();