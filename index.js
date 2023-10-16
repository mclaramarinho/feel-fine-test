// var xValuesC1 = ["Difficulty", "No difficulty"];
var yValuesC1 = [21.9, 78.1];
var barColorsC1 = [
    "#540375",
    "#FBCB0A"
];
new Chart("chart-1", {
    type: "pie",
    data: {
        // labels: xValues,
        datasets: [{
            backgroundColor: barColorsC1,
            data: yValuesC1
        }]
    }
});

var yValuesC2 = [40, 60];
var barColorsC2 = [
    "#540375",
    "#FBCB0A"
];
new Chart("chart-2", {
    type: "pie",
    data: {
        // labels: xValues,
        datasets: [{
            backgroundColor: barColorsC2,
            data: yValuesC2
        }]
    }
});

var yValuesC3 = [100, 0];
var barColorsC3 = [
    "#540375",
    "#FBCB0A"
];
new Chart("chart-3", {
    type: "pie",
    data: {
        // labels: xValues,
        datasets: [{
            backgroundColor: barColorsC3,
            data: yValuesC3
        }]
    }
});

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animation');
      }
    });
  });
  
  const images = document.querySelectorAll('.img-to-animate');
  images.forEach(image => {
    observer.observe(image);
  });