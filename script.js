
  // night mode
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}
// FAQS

const faqItems = document.querySelectorAll(".faq");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.querySelector(".answer").style.display = "block";
    });
});
//    map
// function initMap() {
//     var options= {
//       zoom:20,
//       center:{lat:9.6676221560376,lng:80.01508414321516}
//     }
//     var googlemap = new google.maps.Map(document.getElementById("map"), options);
//   }

  // map
function initMap() {
  var options= {
    zoom:20,
    center:{lat:9.611751,lng:80.029907}
  }
  var googlemap = new google.maps.Map(document.getElementById("map"), options);
}
