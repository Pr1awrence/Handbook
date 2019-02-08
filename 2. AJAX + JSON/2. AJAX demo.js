//in this task we change with AJAX text in div element (send data and get response)
//onreadystatechange* = Defines a function to be called when the readyState property changes
//*this property to be called 4 times

// code for old IE browsers
//xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

/* HTML
<div id="demo">
    <h2>Let AJAX change this text</h2>
<button type="button" onclick="loadDoc()">Change Content</button>
</div>*/

//JS

function loadDoc() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            //responseText = get response data as a string
            document.getElementById('demo').innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "URL", true);
    xmlhttp.send();
}