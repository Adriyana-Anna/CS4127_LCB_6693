
//JavaScript Number 1
//Search bar for attraction page
const searchInput = document.getElementById("attractionSearch");
const attractions = document.querySelectorAll(".attraction-feature");
 if  (searchInput) {
 searchInput.addEventListener("input", function() {
    const searchValue = searchInput.value.toLowerCase();
    attractions.forEach(function (attraction) {
    const attractionText = attraction.textContent.toLowerCase();

    if (attractionText.includes(searchValue)) {
        attraction.style.display = "";
    } else {
        attraction.style.display = "none";
    }
    });
  });
}

// JavaScript Number 2
// BACK TO TOP BUTTON 
const backToTop = document.getElementById("backToTop");
if (backToTop) {
// Shows the button when scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
// Helps scrolling smoothly to the top
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
}

// JavaScript Number 3
// READ MORE BUTTONS FOR THE DISCOVER HTML
// First Read More Button (Intro section)
function toggleText() {
    const extraText = document.getElementById("moreText");
    const btn = document.getElementById("readMoreBtn");

    if (extraText.style.display === "none") {
        extraText.style.display = "inline"; 
        btn.innerText = "Read Less";
    } else {
        extraText.style.display = "none";
        btn.innerText = "Read More";
    }
}
// Second Read More Button (About Brunei section)
function toggleText2() {
    const extraText = document.getElementById("moreText2");
    const btn = document.getElementById("readMoreBtn2");

    if (extraText.style.display === "none") {
        extraText.style.display = "block"; 
        btn.innerText = "Read Less";
    } else {
        extraText.style.display = "none";
        btn.innerText = "Read More";
    }
}