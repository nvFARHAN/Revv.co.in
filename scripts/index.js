var featured = [
  "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png",
  "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png",
  "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_02-min.jpg",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_03-min.jpg",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg",
];

featured.map((ele) => {
  var div = document.createElement("div");
  div.setAttribute("class", "col-6 col-md-4");
  var img = document.createElement("img");
  img.src = ele;
  div.append(img);
  document.querySelector("#featured").append(div);
});

var sanitized = [
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg",
  "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_04-min.jpg",
];

sanitized.map((ele) => {
  var div = document.createElement("div");
  div.setAttribute("class", "col-6 col-md-3");
  var div1 = document.createElement("div");
  var img = document.createElement("img");
  img.src = ele;
  div1.append(img);
  div.append(div1);
  document.querySelector("#sanitized").append(div);
});

var customers = [
  {
    name: "Prateek Srivastava",
    review:
      "Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth and the packages are pocket friendly. Overall an amazing experience. Would highly recommend😄",
  },
  {
    name: "Roshan Raval",
    review:
      "The car delivery was done on time and we were satisfied with the entire booking entire experience. We also got instant refund and the overall service was Revv",
  },
  {
    name: "Sanjib Sarkar",
    review:
      "Very good service. I could not expect that I can get a car at 4.30 in the morning. Even they have paid for fuel which I filled more. Very transparent ❤️",
  },
  {
    name: "Arijit Sarkar",
    review:
      "Sanitized car was provided. The delivery and pickup boy was very polite and helpful. This company is honest with their customers",
  },
  {
    name: "Vijay",
    review:
      "Booked for 4 days for a family trip. Car was water washed and sanitized when I recieved it. Trip and the process were very comfortable and hassle-free. Best self-drive car service provider. I strongly recommend Revv. Looking forward to using Revv car again",
  },
  {
    name: "Rohit Ray",
    review:
      "The app is as user friendly as the policies. The process is as easy as nursury rhyme. Nicely maintaied cars",
  },
  {
    name: "Sanjeev Rawat",
    review:
      "Booked one during new year time, for an outstation trip. Were really happy with the clean, sanitized, mileage friendly, and well maintained car. All papers were intact which saved us from any hassles from traffic or border- post related checks",
  },
];

customers.map((ele) => {
  var div = document.createElement("div");
  div.setAttribute("class", "col-sm-6 col-md-3");
  var div1 = document.createElement("div");
  var h4 = document.createElement("h4");
  h4.innerText = ele.name;
  h4.setAttribute("class", "sub-heading px-4 pt-4");
  var hr = document.createElement("hr");
  var p = document.createElement("p");
  p.innerText = ele.review;
  p.setAttribute("class", "para px-4");
  var img = document.createElement("img");
  img.src =
    "https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/icons/left-quote.png";
  div1.append(h4, hr, p, img);
  div.append(div1);
  document.querySelector("#happyCustomers").append(div);
});

var city = document.querySelectorAll(".city");
for (var i = 0; i < city.length; i++) {
  city[i].addEventListener("click", () => {
    var display = document.querySelector("#display");
    display.innerText = event.target.innerText;
    event.target.innerText += "        ✔";
    event.target.style.color = "#0dbaba";
    event.target.style.backgroundColor = "#cbe3e8";
  });
}

// var left = document.querySelector("#right");
// left.addEventListener("click", () => {
//   console.log("*");
//   var div = document.querySelector("#featured");
//   console.log(div);
//   div.
// });
