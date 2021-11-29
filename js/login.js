

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username == "admin" && password == "12345") {
        // alert("logged in");
        window.location.href(home.html);
        
        // return true;
        // window.location.replace("index.html");
        // window.open("index.html");
        // window.location.assign("index.html");

    }
    else {
        // alert("login failed");
        event.preventDefault();
    }
}

const submit = document.getElementById("submit");

submit.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const userNameField = document.getElementById("username");
  let valid = true;

  if (!userNameField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    userNameField.classList.add("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);

  }


  return valid;
}




