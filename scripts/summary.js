var myEmail = localStorage.getItem("#user", myEmail) || "";
if (myEmail != "") {
  document.querySelector("#button3").innerText = myEmail;
}

var bookedcar = JSON.parse(localStorage.getItem("bookedcar"));
var book = JSON.parse(localStorage.getItem("booking"));
// console.log(bookedcar);

document.querySelector(".card-img-top").src = bookedcar.img;
document.querySelector("#name").innerText = bookedcar.name;
document.querySelector("#seats").innerText = bookedcar.type[2].seatcapacity;
document.querySelector("#type").innerText = bookedcar.type[0].transtype;
document.querySelector("#fuel").innerText = bookedcar.type[1].fueltype;
document.querySelector("#cityTop").innerText = book.city;
document.querySelector("#start").innerText = book.start.split("T").join(" ");
document.querySelector("#end1").innerText = book.end.split("T").join(" ");

document.querySelector("#apply").addEventListener("click", () => {
  var key = document.querySelector(
    "#undefined-undefined-Promocode-34148"
  ).value;
  if (key == "masai30") {
    document.querySelector("#totalHead").innerText = "Total(after discount)";
    document.querySelector("#total").innerText = "3639";
  }
});
