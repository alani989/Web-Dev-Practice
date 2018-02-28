(function () {
  var myNode = document.querySelectorAll("#img-container img");
  console.log(myNode);
  for (var i = 0; i < myNode.length; i++) {
    myNode[i].addEventListener("click", function (e) {
      if (e.target.tagName == 'IMG') {
        document.getElementById("viewingImage").src = e.target.src;
      }
    }, false);
  }
})();