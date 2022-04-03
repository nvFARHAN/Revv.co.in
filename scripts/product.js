var myEmail = localStorage.getItem("#user", myEmail) || "";
if (myEmail != "") {
  document.querySelector("#button3").innerText = myEmail;
}

// console.log("hey product");

let dataFrom = JSON.parse(localStorage.getItem("allCars"));
// console.log(dataFrom);

setTimeout(() => {
  var gif = document.querySelector("#gif");
  gif.style.display = "none";

  var diva = document.createElement("div");
  diva.setAttribute("class", "card");

  var img = document.createElement("img");
  img.src = "https://www.revv.co.in/imgs/plp_banner_web.png";
  img.style.height = "100%";

  diva.append(img);
  document.querySelector(".carsection").append(diva);

  dataFrom.map(function (data, i) {
    //   console.log(dataFrom[i]);
    var type1 = dataFrom[i].type[0].transtype;
    var type2 = dataFrom[i].type[1].fueltype;
    var type3 = dataFrom[i].type[2].seatcapacity;
    //  console.log(type2)

    var prkm1 = dataFrom[i].prkm[0].kms;
    var prkm2 = dataFrom[i].prkm[1].kms;
    var prkm3 = dataFrom[i].prkm[2].kms;

    var prkm1a = prkm1.split("\n")[0];
    var prkm1b = prkm1.split("\n")[1];
    var prkm2a = prkm2.split("\n")[0];
    var prkm2b = prkm2.split("\n")[1];
    var prkm3a = prkm3.split("\n")[0];
    var prkm3b = prkm3.split("\n")[1];

    // console.log(prkm1a);

    var div = document.createElement("div");
    div.setAttribute("class", "card");
    div.style.width = "auto";
    div.innerHTML = `<div class = "card-top">
            <h5 class="card-title">${dataFrom[i].name}</h5>
            <img src="${dataFrom[i].img}" class="card-img-top" alt="${dataFrom[i].name}">
            <div id = "type" >
                <p> <img src = "https://www.revv.co.in/imgs/car-card/automatic.svg"/> ${type1}</p>
                <p><img src = "https://www.revv.co.in/imgs/car-card/petrol.svg"/> ${type2}</p>
                <p> <img src = "https://www.revv.co.in/imgs/car-card/seat.svg"/> ${type3}</p>
            </div>
    
        </div>   
    <div class="card-body">
    
    <div id = "kms">
        <div id = "kms1">
            <div class = "a">${prkm1a}</div>
            <div class = "b">${prkm1b}</div>
        </div>
        <div id = "kms1">
            <div class = "a">${prkm2a}</div>
            <div class = "b">${prkm2b}</div>
        </div>
        <div id = "kms1">
            <div class = "a" >${prkm3a}</div>
            <div class = "b" >${prkm3b}</div>
        </div>
        
    </div>
     
    </div>`;
    var last = document.createElement("div");
    last.setAttribute("id", "last");
    var p = document.createElement("p");
    p.innerHTML = dataFrom[i].exkm;
    // console.log(dataFrom);

    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.innerText = "Book";
    btn.addEventListener("click", () => bookfunctions(data));

    last.append(p, btn);
    div.append(last);

    document.querySelector(".carsection").append(div);
  });
}, 1000);

function change() {
  document.querySelector(".carsection").innerHTML = "";

  var menu = document.querySelector(".dropdown-menu1");
  // console.log(menu.value);

  if (menu.value == "lth") {
    dataFrom.sort((a, b) => {
      var prkm2 = a.prkm[1].kms;

      var prkm2a = prkm2.split("\n")[0];

      var prkm22 = b.prkm[1].kms;

      var prkm2A = prkm22.split("\n")[0];

      return +prkm2a - +prkm2A;

      // console.log(prkm2a,prkm2A);
    });
  } else if (menu.value == "htl") {
    dataFrom.sort((a, b) => {
      var prkm2 = a.prkm[1].kms;

      var prkm2a = prkm2.split("\n")[0];

      var prkm22 = b.prkm[1].kms;

      var prkm2A = prkm22.split("\n")[0];

      return +prkm2A - +prkm2a;
    });
  } else if (menu.value == "elth") {
    dataFrom.sort((a, b) => {
      var extra = a.exkm.split(" ");

      var splited = extra[extra.length - 1];
      // console.log(splited);
      var last = splited.split("/");
      // console.log(last);
      var excharge = last[0];

      var extrab = b.exkm.split(" ");

      var splitedb = extrab[extrab.length - 1];

      var lastb = splitedb.split("/");

      var exchargeb = lastb[0];

      return +excharge - +exchargeb;
    });
  } else if (menu.value == "ehtl") {
    dataFrom.sort((a, b) => {
      var extra = a.exkm.split(" ");

      var splited = extra[extra.length - 1];
      // console.log(splited);
      var last = splited.split("/");
      // console.log(last);
      var excharge = last[0];

      var extrab = b.exkm.split(" ");

      var splitedb = extrab[extrab.length - 1];

      var lastb = splitedb.split("/");

      var exchargeb = lastb[0];

      return +exchargeb - +excharge;
    });
  }
  render(dataFrom);
}

function segement() {
  document.querySelector(".carsection").innerHTML = "";

  var segment = document.querySelector(".id").value;
  // console.log(segment)
  var filterseg = dataFrom.filter(function (dataFrom) {
    return dataFrom.segment == segment;
  });
  // console.log(filterseg)
  render(filterseg);
}

function sedansegement() {
  document.querySelector(".carsection").innerHTML = "";

  var segments = document.querySelector(".sedan").value;
  console.log(segments);
  var filtersedseg = dataFrom.filter(function (dataFrom) {
    return dataFrom.segment == segments;
  });
  // console.log(filtersedseg)
  render(filtersedseg);
}

function suvsegement() {
  document.querySelector(".carsection").innerHTML = "";

  var suvsegment = document.querySelector(".suv").value;
  console.log(suvsegment);

  var filtersuv = dataFrom.filter(function (dataFrom) {
    return dataFrom.segment == suvsegment;
  });
  console.log(filtersuv);
  render(filtersuv);
}

function muvsegment() {
  document.querySelector(".carsection").innerHTML = "";

  var muvsegment = document.querySelector(".muv").value;

  var filtermuv = dataFrom.filter(function (dataFrom) {
    return dataFrom.segment == muvsegment;
  });
  console.log(filtermuv);
  render(filtermuv);
}

function fueltypediesel() {
  document.querySelector(".carsection").innerHTML = "";

  var dieseltype = document.querySelector(".diesel").value;

  var filterdiesel = dataFrom.filter(function (dataFrom) {
    return dataFrom.type[1].fueltype == dieseltype;
  });
  console.log(filterdiesel);
  render(filterdiesel);
}

function fueltypepetrol() {
  document.querySelector(".carsection").innerHTML = "";
  var petroltype = document.querySelector(".petrol").value;

  var filterpetrol = dataFrom.filter(function (dataFrom) {
    return dataFrom.type[1].fueltype == petroltype;
  });
  console.log(filterpetrol);
  render(filterpetrol);
}

function maruti() {
  var maruticheck = document.querySelector(".maruti");

  //  console.log(maruticheck.checked);
  if (maruticheck.checked) {
    document.querySelector(".carsection").innerHTML = "";

    var maruti = document.querySelector(".maruti").value;

    var filtermaruti = dataFrom.filter(function (dataFrom) {
      var name = dataFrom.name.split(" ");
      var brname = name[0];
      // console.log(brname)
      return brname == maruti;
    });
    console.log(filtermaruti);
    render(filtermaruti);
  } else {
    document.querySelector(".carsection").innerHTML = "";
    render(dataFrom);
  }
}

function hyundai() {
  var hyundaicheck = document.querySelector(".hyundai");
  if (hyundaicheck.checked) {
    document.querySelector(".carsection").innerHTML = "";

    var hyundai = document.querySelector(".hyundai").value;

    var filterhyundai = dataFrom.filter(function (dataFrom) {
      var name = dataFrom.name.split(" ");
      var brname = name[0];
      // console.log(brname)
      return brname == hyundai;
    });
    console.log(filterhyundai);
    render(filterhyundai);
  } else {
    document.querySelector(".carsection").innerHTML = "";
    render(dataFrom);
  }
}

function mahindra() {
  var mahindracheck = document.querySelector(".mahindra");

  if (mahindracheck.checked) {
    document.querySelector(".carsection").innerHTML = "";

    var mahindra = document.querySelector(".mahindra").value;

    var filtermahindra = dataFrom.filter(function (dataFrom) {
      var name = dataFrom.name.split(" ");
      var brname = name[0];
      // console.log(brname)
      return brname == mahindra;
    });
    console.log(filtermahindra);
    render(filtermahindra);
  } else {
    document.querySelector(".carsection").innerHTML = "";
    render(dataFrom);
  }
}

function honda() {
  var hondacheck = document.querySelector(".honda");

  if (hondacheck.checked) {
    document.querySelector(".carsection").innerHTML = "";

    var honda = document.querySelector(".honda").value;

    var filterhonda = dataFrom.filter(function (dataFrom) {
      var name = dataFrom.name.split(" ");
      var brname = name[0];
      // console.log(brname)
      return brname == honda;
    });
    console.log(filterhonda);
    render(filterhonda);
  } else {
    document.querySelector(".carsection").innerHTML = "";
    render(dataFrom);
  }
}

function toyta() {
  var toytacheck = document.querySelector(".toyta");

  if (toytacheck.checked) {
    document.querySelector(".carsection").innerHTML = "";

    var toyta = document.querySelector(".toyta").value;

    var filtertoyta = dataFrom.filter(function (dataFrom) {
      var name = dataFrom.name.split(" ");
      var brname = name[0];
      // console.log(brname)
      return brname == toyta;
    });
    console.log(filtertoyta);
    render(filtertoyta);
  } else {
    document.querySelector(".carsection").innerHTML = "";
    render(dataFrom);
  }
}

function ford() {
  var fordcheck = document.querySelector(".ford");
  if (fordcheck.checked) {
    document.querySelector(".carsection").innerHTML = "";

    var ford = document.querySelector(".ford").value;

    var filterford = dataFrom.filter(function (dataFrom) {
      var name = dataFrom.name.split(" ");
      var brname = name[0];
      // console.log(brname)
      return brname == ford;
    });
    console.log(filterford);
    render(filterford);
  } else {
    document.querySelector(".carsection").innerHTML = "";
    render(dataFrom);
  }
}

function auto() {
  document.querySelector(".carsection").innerHTML = "";

  var auto = document.querySelector(".auto").value;

  var filterauto = dataFrom.filter(function (dataFrom) {
    return dataFrom.type[0].transtype == auto;
  });
  console.log(filterauto);
  render(filterauto);
}

function manual() {
  document.querySelector(".carsection").innerHTML = "";

  var manual = document.querySelector(".manual").value;

  var filtermanual = dataFrom.filter(function (dataFrom) {
    return dataFrom.type[0].transtype == manual;
  });
  console.log(filtermanual);
  render(filtermanual);
}

function fiveseats() {
  document.querySelector(".carsection").innerHTML = "";

  var fiveseats = document.querySelector(".fiveseats").value;

  var filterfiveseats = dataFrom.filter(function (dataFrom) {
    return dataFrom.type[2].seatcapacity == fiveseats;
  });
  console.log(filterfiveseats);
  render(filterfiveseats);
}

function sevenseats() {
  document.querySelector(".carsection").innerHTML = "";

  var sevenseats = document.querySelector(".sevenseats").value;

  var filtersevenseats = dataFrom.filter(function (dataFrom) {
    return dataFrom.type[2].seatcapacity == sevenseats;
  });
  console.log(filtersevenseats);
  render(filtersevenseats);
}

var reset = document
  .querySelector(".res")
  .addEventListener("click", resetfunction);

function resetfunction() {
  document.querySelector(".carsection").innerHTML = "";

  console.log("inside");
  render(dataFrom);
}

// var bookedcar = [];
function bookfunctions(data) {
  // bookedcar.push(data);
  // console.log(bookedcar);

  localStorage.setItem("bookedcar", JSON.stringify(data));

  window.location.href = "summary.html";
}

function render(dataFrom) {
  var gif = document.querySelector("#gif");
  gif.style.display = "none";

  var diva = document.createElement("div");
  diva.setAttribute("class", "card");

  var img = document.createElement("img");
  img.src = "https://www.revv.co.in/imgs/plp_banner_web.png";
  img.style.height = "100%";

  diva.append(img);
  document.querySelector(".carsection").append(diva);

  for (var i = 0; i < dataFrom.length; i++) {
    //   console.log(dataFrom[i]);
    var type1 = dataFrom[i].type[0].transtype;
    var type2 = dataFrom[i].type[1].fueltype;
    var type3 = dataFrom[i].type[2].seatcapacity;
    //  console.log(type1)

    var prkm1 = dataFrom[i].prkm[0].kms;
    var prkm2 = dataFrom[i].prkm[1].kms;
    var prkm3 = dataFrom[i].prkm[2].kms;

    var prkm1a = prkm1.split("\n")[0];
    var prkm1b = prkm1.split("\n")[1];
    var prkm2a = prkm2.split("\n")[0];
    var prkm2b = prkm2.split("\n")[1];
    var prkm3a = prkm3.split("\n")[0];
    var prkm3b = prkm3.split("\n")[1];

    // console.log(prkm1a);

    var div = document.createElement("div");
    div.setAttribute("class", "card");
    div.style.width = "20rem";
    div.innerHTML = `<div class = "card-top">
              <h5 class="card-title">${dataFrom[i].name}</h5>
              <img src="${dataFrom[i].img}" class="card-img-top" alt="${dataFrom[i].name}">
              <div id = "type" >
                  <p> <img src = "https://www.revv.co.in/imgs/car-card/automatic.svg"/> ${type1}</p>
                  <p><img src = "https://www.revv.co.in/imgs/car-card/petrol.svg"/> ${type2}</p>
                  <p> <img src = "https://www.revv.co.in/imgs/car-card/seat.svg"/> ${type3}</p>
              </div>
      
          </div>   
      <div class="card-body">
      
      <div id = "kms">
          <div id = "kms1">
              <div class = "a">${prkm1a}</div>
              <div class = "b">${prkm1b}</div>
          </div>
  
          <div id = "kms1">
              <div class = "a">${prkm2a}</div>
              <div class = "b">${prkm2b}</div>
          </div>
          <div id = "kms1">
  
              <div class = "a" >${prkm3a}</div>
              <div class = "b" >${prkm3b}</div>
          </div>
          
      </div>
   
       <div id = "last">
       <p>${dataFrom[i].exkm}</p>
       <a href="#" class="btn btn-primary">Book</a>
       </div>
       
      </div>`;

    document.querySelector(".carsection").append(div);
  }
}

var book = JSON.parse(localStorage.getItem("booking"));
document.querySelector("#input1").value = book.city;
document.querySelector("#input2").value = book.start;
document.querySelector("#input3").value = book.end;
document.querySelector("#cityTop").innerText = book.city;
