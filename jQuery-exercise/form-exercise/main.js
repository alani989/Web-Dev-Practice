// with jQuery
(function () {

    $("#login").submit(function (e) {
        e.preventDefault();
        var $email = $("#username").val();
        alert("Welcome " + $email)
    })
})();


// with javascript
// (function () {
//     var loginForm = document.getElementById("login");
//     loginForm.addEventListener("submit",function(e){
//         e.preventDefault();
//         var elements = this.elements;
//         var userName = elements.username.value;
//         alert("Welcome "+ userName);
//     },false)
// })();

