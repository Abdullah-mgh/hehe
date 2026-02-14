document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    var images = document.querySelectorAll(".image1");

  // Ensure any leftover yes-modal (model2) is removed and the no-modal starts hidden
  var leftoverModel2 = document.getElementById("model2");
  if (leftoverModel2) leftoverModel2.remove();
  var noModel = document.getElementById("model");
  if (noModel) noModel.style.display = "none";
  
    // Function to set random position for an element
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  
    // Set random position for each image
    images.forEach(function (image) {
      setRandomPosition(image);
    });
  });
  
  function angry() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  
    absImg.style.display = "flex";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
  }
  function happy() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
  }
  
  const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  ];
  
  const blackmail = [
    "C’mon Mimi… I promise it’ll be fun 😏",
    "You know you want to… 😜",
    "Fine, but you’ll miss the flower show 🌸",
    "No? Ok, but I’ll be sad… 😢",
    "Last chance, Mimi 😎",
  ];
  
  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }
  
  let counter = 0;
  
  function no() {
    counter++;
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    if (happyMusic && typeof happyMusic.pause === "function") happyMusic.pause();
    if (sadMusic && typeof sadMusic.play === "function") sadMusic.play();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
  
  function yes() {
    if (counter >= 3) {
      let sadMusic = document.getElementById("sadMusic");
      if (sadMusic && typeof sadMusic.pause === "function") sadMusic.pause();
      const wedate = document.getElementById("wedate");
      const btns = document.getElementById("btns");
      if (btns) btns.style.display = "none";
      // hide any visible modal (restore proper closing behavior)
      const model = document.getElementById("model");
      if (model) model.style.display = "none";
      if (wedate) wedate.innerText = "My forever valentine, Mimi <3";
      // keep navigation to flower screen
      window.open("index1.html", "_blank");
    } else {
      alert("Don't say yes right away, cutie. Play around a bit 😉😘");
    }
  }

  
  // Removed ly2() since the yes-modal (model2) was removed
  
