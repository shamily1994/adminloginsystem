function ajax() {
    // creating an object
    var xhttp = new XMLHttpRequest();
    // eventListener
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "";
            // console.log(output);
            for (var i = 0; i < response.length; i++) {
                output += "<li>" + response[i].title + "</li>";
            }
            document.getElementById("myUL").innerHTML = output;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
var checkOut=0;
list.addEventListener('click', function (ev) {
    // if (ev.target.tagName === 'LI' ) {
        if (ev.target.classList =='') {
        ev.target.classList.toggle('checked');
        checkOut++;
        // alert(checkOut);
        }
    else if(ev.target.classList=='checked'){
        ev.target.classList.remove('checked');
        checkOut--;
        // alert(checkOut);
 
     }// console.log(checkOut);
     if(checkOut==5)
     {
     alert("“ Congrats. 5 Tasks have been Successfully Completed");
 }
    }, false);
    
function logout(){
    window.location.href="index.html";
} 

// function myFunction() {
//     // Get the checkbox
//     var checkBox = document.getElementById("myCheck");
//     // Get the output text
//     var text = document.getElementById("text");

//     // If the checkbox is checked, display the output text
//     if (checkBox.checked == true) {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }

// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }


