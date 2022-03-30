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
  div.setAttribute("class", "col-md-4");
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
  div.setAttribute("class", "col-md-3");
  var img = document.createElement("img");
  img.src = ele;
  div.append(img);
  document.querySelector("#sanitized").append(div);
});
