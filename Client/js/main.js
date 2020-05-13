let request = new XMLHttpRequest();
request.open("GET", "http://127.0.0.1:3000/getAll", true);
request.onload = function() {
    let data = JSON.parse(this.response);
    if(request.status == 200) {
        //Blog card 0 title
        let blogTitle0 = document.createElement("h5");
        let blogTitle0Text = document.createTextNode(data[0].title);
        blogTitle0.setAttribute('class', 'card-title');
        blogTitle0.appendChild(blogTitle0Text);
        document.querySelector("#blogTitle0").appendChild(blogTitle0);

        //Blog card 0 text
        let blogText0 = document.createElement("p");
        let blogText0Text = document.createTextNode(data[0].content);
        blogText0.setAttribute('class', 'card-text');
        blogText0.appendChild(blogText0Text);
        document.querySelector("#blogText0").appendChild(blogText0);


        //Blog card 1 title
        let blogTitle1 = document.createElement("h5");
        let blogTitle1Text = document.createTextNode(data[1].title);
        blogTitle1.setAttribute('class', 'card-title');
        blogTitle1.appendChild(blogTitle1Text);
        document.querySelector("#blogTitle1").appendChild(blogTitle1);
        
        //Blog card 1 text
        let blogText1 = document.createElement("p");
        let blogText1Text = document.createTextNode(data[1].content);
        blogText1.setAttribute('class', 'card-text');
        blogText1.appendChild(blogText1Text);
        document.querySelector("#blogText1").appendChild(blogText1);


        //Blog card 2 title
        let blogTitle2 = document.createElement("h5");
        let blogTitle2Text = document.createTextNode(data[2].title);
        blogTitle2.setAttribute('class', 'card-title');
        blogTitle2.appendChild(blogTitle2Text);
        document.querySelector("#blogTitle2").appendChild(blogTitle2);

        //Blog card 2 text
        let blogText2 = document.createElement("p");
        let blogText2Text = document.createTextNode(data[2].content);
        blogText2.setAttribute('class', 'card-text');
        blogText2.appendChild(blogText2Text);
        document.querySelector("#blogText2").appendChild(blogText2);
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
}
request.send();