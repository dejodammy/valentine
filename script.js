document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("yes").addEventListener("click", function () {
    var valentineImage = document.getElementById("valentineImage");
    valentineImage.src = "images/excited-dog.gif";

    // Hide the Yes and No buttons
    document.getElementById("message").innerText = "DEJO LOVES YOU ❤️";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    showAlert();
  });

  function showAlert() {
    alert("Love you bae! See you soon <3");
  }

  var yes = document.getElementById("yes");
  var no = document.getElementById("no");
  var valentineImage = document.getElementById("valentineImage");

  var noTexts = [
    "Are you sure?",
    "Please give me a chance pookie",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry",
  ];
  var imageSources = [
    (src = "images/dog2.jpg"),
    (src = "images/dog3.jpg"),
    (src = "images/dog4.jpg"),
    (src = "images/cat1.jpg"),
    (src = "images/cat3.jpg"),
    (src = "images/cat2.jpg"),
  ];

  no.addEventListener("click", change);

  function change() {
    var randomIndex = Math.floor(Math.random() * noTexts.length);
    var randomText = noTexts[randomIndex];
    no.innerText = randomText;

    var i = Math.floor(Math.random() * 1000) + 1;
    var j = Math.floor(Math.random() * 700) + 1;
    no.style.left = i + "px";
    no.style.top = j + "px";

    var currentWidth = yes.offsetWidth;
    var currentHeight = yes.offsetHeight;
    yes.style.width = currentWidth + 30 + "px";
    yes.style.height = currentHeight + 10 + "px";

    var randomImageIndex = Math.floor(Math.random() * imageSources.length);
    valentineImage.src = imageSources[randomImageIndex];
  }
});
