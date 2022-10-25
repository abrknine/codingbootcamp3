console.log("fbbbb");
const box1 = document.querySelector(".co1");
const box2 = document.querySelector(".co2");
const box3 = document.querySelector(".co3");
const box4 = document.querySelector(".co4");
const box5 = document.querySelector(".co5");
const stepcounter1 = document.querySelector("#step1");
const stepcounter2 = document.querySelector("#step2");
const stepcounter3 = document.querySelector("#step3");
const stepcounter4 = document.querySelector("#step4");
const stepcounter5 = document.querySelector("#step5");
let count = "a";
let get = false;
box1.addEventListener("click", () => {
  stepcounter1.style.background = "#F9AF00";
  
  if (count != "a") {
    alert("attempt level 1 first");
  }
  count = "b";
  // localStorage.setItem("b", true);
  window.open("https://scratch.mit.edu/projects/13701368/")
  // localStorage.clear()
});

box2.addEventListener("click", () => {
  if (count != "b") {
    alert("attempt level 1 first");
  } else {
    stepcounter2.style.background = "#F9AF00";
    count = "c";
    // localStorage.setItem("c", true);
    window.open("https://scratch.mit.edu/projects/13701368/")
      // localStorage.clear()
  }
});

box3.addEventListener("click", () => {
  if (count != "c") {
    alert("attempt level 2 first");
  } else {
    stepcounter3.style.background = "#F9AF00";
    count = "d";
    // localStorage.setItem("d", true);
    window.open("https://scratch.mit.edu/projects/13701368/")

      // localStorage.clear()
  }
});
box4.addEventListener("click", () => {
  if (count != "d") {
    alert("attempt level 3 first");
  } else {
    stepcounter4.style.background = "#F9AF00";
    count = "e";
    // localStorage.setItem("e", true);
    window.open("https://scratch.mit.edu/projects/13701368/")

    //  localStorage.clear();
  }
});
box5.addEventListener("click", () => {
  if (count != "e") {
    alert("attempt level 4 first");
  } else {
    stepcounter5.style.background = "#F9AF00";
    count = "f";
    // localStorage.setItem("f", true);
    window.open("https://scratch.mit.edu/projects/13701368/")
    get = true;
    //  localStorage.clear()
   alert("Successfully Completed all the courses.Download Your Certificate");
  window.document.querySelector('.cert').disabled=false;
  window.document.querySelector('.cert').style.cursor='pointer';
  window.document.querySelector('.con').style.cursor='pointer';
  }
});

// const b = localStorage.getItem("b");

// if (b) {
//   stepcounter1.style.background = "green";
// }

// const c = localStorage.getItem("c");

// if (c) {
//   stepcounter2.style.background = "green";
// }

// const d = localStorage.getItem("d");

// if (d) {
//   stepcounter3.style.background = "green";
// }

// const e = localStorage.getItem("e");

// if (e) {
//   stepcounter4.style.background = "green";
// }

// const f = localStorage.getItem("f");

// if (f) {
//   stepcounter5.style.background = "green";
 
// }


// console.log("the values of", a)//

function copyUrl(text) {
  var inputc = document.body.appendChild(document.createElement("input"));
  var copyText = document.getElementById("myInput");
  copyText .select();
  document.execCommand('copy');
  inputc.parentNode.removeChild(inputc);
  let v=document.querySelector('.popup').style.display="block";
  }
  
