let currentPage = "Home"

/* Page Tabs ---- */

function onload() {
  setPage("Home");
}

function setPage(page) {
  currentPage = page;
  hideTabs();
  if(page === "Home") {
    tab1.classList.remove("hidden");
  }
  if(page === "Gallery") {
    tab2.classList.remove("hidden");
  }
  if(page === "Contact") {
    tab3.classList.remove("hidden");
  }
}

function hideTabs() {
  tab1.classList.add("hidden");
  tab2.classList.add("hidden");
  tab3.classList.add("hidden");
}

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

function show1() {
tab1.classList.toggle("hidden")
}

function show2() {
tab2.classList.toggle("hidden")
}

function show3() {
tab3.classList.toggle("hidden")
}

/* Submit Button ---- */ 

function myFunction() {
  var inputVal = document.getElementById("name").value;
  alert("Sorry! We are not currently taking inquiries yet. Please come back soon " +inputVal);
}

