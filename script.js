// alert("Welcome to my site!");

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


let asdTest = document.getElementById("asd");

asdTest.addEventListener("click", function() {
  this.classList.add("clicked");
  setTimeout(() =>{
    this.classList.remove("clicked");
  }, 300);
});

let mySiteIntro = document.getElementById("nav-name");

mySiteIntro.addEventListener("click", function () {
  this.innerHTML = "Thanks for Visiting";
  setTimeout(() => {
    this.classList.add("clicked-test");
  }, 3000);
});