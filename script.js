
  // night mode
// function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let themeButton = document.getElementById("theme-button");

  if (element.classList.contains("dark-mode")) {
      themeButton.classList.remove("fa-moon");
      themeButton.classList.add("fa-sun");
  } else {
      themeButton.classList.remove("fa-sun");
      themeButton.classList.add("fa-moon");
  }
}  
// FAQS

const faqItems = document.querySelectorAll(".faq");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.querySelector(".answer").style.display = "block";
    });
});


  // map
function initMap() {
  var options= {
    zoom:20,
    center:{lat:9.67384902843599,lng:80.02121670696229}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), options);
}


// var url = 'btn btn-success py-3';
// function UrlExists(url) {
//     var http = new XMLHttpRequest();
//     http.open('HEAD', url, false);
//     http.send();
//     if (http.status != 404)
//         //  do something
  
//         window.location.reload();
// }

//image gallery
function filterGallery(category) {
    const items = document.querySelectorAll('.product');
  
    items.forEach(item => {
      item.style.display = 'none';
  
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      }
    });
  }
