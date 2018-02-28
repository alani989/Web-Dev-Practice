(function () {
    // creating page header
    var pageHeaderDiv = document.createElement("div");
    pageHeaderDiv.className = "navbar navbar-expand-lg navbar-dark bg-dark";
    pageHeaderDiv.style.color = "white";

    var brandName = document.createElement("h1");
    brandName.textContent = "HighOnCoding"
    var homeLink = document.createElement("a");
    homeLink.textContent = "Home";
    homeLink.style.marginLeft = "30px";
    homeLink.setAttribute('href', "#")
    homeLink.style.color = "white";

    var catLink = document.createElement("a");
    catLink.textContent = "Categories";
    catLink.style.marginLeft = "30px";
    catLink.setAttribute('href', "#")
    catLink.style.color = "white";
    
    pageHeaderDiv.appendChild(brandName);
    pageHeaderDiv.appendChild(homeLink);
    pageHeaderDiv.appendChild(catLink);

    //creating page body
    //creating content container 1
    var contentDiv1 = document.createElement("div");
    contentDiv1.style.color = "black";
    contentDiv1.style.background = "lightgrey";
    contentDiv1.style.padding = "20px"
    //creating content title
    var contentTitle = document.createElement("h2");
    contentTitle.textContent = "What is Lorem Ipsum?";
    contentDiv1.appendChild(contentTitle);
    //creating content paragraph
    var contentPara = document.createElement("p");
    contentPara.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    contentDiv1.appendChild(contentPara);
    //padding for container 1
    var paddingContainer = document.createElement("div");
    paddingContainer.appendChild(contentDiv1);
    paddingContainer.style.padding = "30px";
    //creating content container 2
    var contentDiv2 = document.createElement("div");
    contentDiv2.style.color = "black";
    contentDiv2.style.background = "white";
    contentDiv2.style.padding = "20px"
    //creating content title 2
    var contentTitle2 = document.createElement("h3");
    contentTitle2.textContent = "Why do we use it?";
    contentTitle2.style.color = "blue";
    contentDiv2.appendChild(contentTitle2);
    //creating content paragraph 2
    var contentPara2 = document.createElement("p");
    contentPara2.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    contentDiv2.appendChild(contentPara2);
    //likes and comments container
    var likesDiv = document.createElement("div");
    likesDiv.style.color = "white";
    likesDiv.style.background = "orange";
    contentDiv2.appendChild(likesDiv);

    var comments = document.createElement("a");
    comments.textContent = "120 comments";
    comments.style.marginLeft = "20px";
    var likes = document.createElement("a");
    likes.textContent = "256 likes";
    likes.style.marginLeft = "20px";

    likesDiv.appendChild(comments);
    likesDiv.appendChild(likes);
    // assembling page (adding all elements to the body) 
    var myContainer = document.querySelector('.container');
    myContainer.appendChild(pageHeaderDiv);
    myContainer.appendChild(paddingContainer);
    myContainer.appendChild(contentDiv2);

})();