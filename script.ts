const msg: string = "Hello";
alert(msg);


// index.ts

var link = document.getElementById("lnk");

const head = document.head;



var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");


if(button1){

    button1.addEventListener("click", function() {
        if(link){
            link.remove();
        }

        var linkk = document.getElementById("lnk");

        if(linkk){
            linkk.remove();
        }
        const newStyle = document.createElement('link');
        newStyle.rel = 'stylesheet';
        newStyle.type = 'text/css';
        newStyle.href = "style1.css";
        newStyle.id = 'lnk';
        head.appendChild(newStyle);
        // if(link){
        //     link.setAttribute("href","style1.css");
        // }
    });
}
else{
    alert("Error");
}

if(button2){

    button2.addEventListener("click", function() {
        if(link){
            link.remove();
        }

        var linkk = document.getElementById("lnk");

        if(linkk){
            linkk.remove();
        }
        const newStyle = document.createElement('link');
        newStyle.rel = 'stylesheet';
        newStyle.type = 'text/css';
        newStyle.href = "style2.css";
        newStyle.id = 'lnk';
        head.appendChild(newStyle);

        // if(link){
        //     link.setAttribute("href","style2.css");
        // }
    });
}
else{
    alert("Error");
}

