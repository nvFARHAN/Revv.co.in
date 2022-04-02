// console.log("hello");
var data = [
  {
    name: "Hyundai Santro AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvSANTRO.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2016\n144 kms",
      },
      {
        kms: "2808\n264 kms",
      },
      {
        kms: "4560\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 9/km",
    segment: "Hatchback",
  },
  {
    name: "Hyundai Santro MT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvSANTRO.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1728\n144 kms",
      },
      {
        kms: "2400\n264 kms",
      },
      {
        kms: "3936\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 9/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Ciaz",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/CiazWEBPAGE.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2328\n144 kms",
      },
      {
        kms: "3216\n264 kms",
      },
      {
        kms: "5376\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 14/km",
    segment: "Sedan",
  },
  {
    name: "Maruti Ciaz AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/CiazWEBPAGE.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2952\n144 kms",
      },
      {
        kms: "4104\n264 kms",
      },
      {
        kms: "6696\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 14/km",
    segment: "Sedan",
  },
  {
    name: "Maruti Swift",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/swift.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1776\n144 kms",
      },
      {
        kms: "2472\n264 kms",
      },
      {
        kms: "4128\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Brezza",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/brezza.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "3072\n144 kms",
      },
      {
        kms: "4248\n264 kms",
      },
      {
        kms: "6960\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 15/km",
    segment: "SUV",
  },
  {
    name: "Maruti Wagon R",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvWebsite+WAGON.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1704\n144 kms",
      },
      {
        kms: "2352\n264 kms",
      },
      {
        kms: "3864\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 9/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Baleno",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/baleno.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2280\n144 kms",
      },
      {
        kms: "3144\n264 kms",
      },
      {
        kms: "5208\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Hatchback",
  },
  {
    name: "Hyundai Creta",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/Creta.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "3336\n144 kms",
      },
      {
        kms: "4632\n264 kms",
      },
      {
        kms: "7584\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 16/km",
    segment: "SUV",
  },
  {
    name: "Hyundai Eon",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Eon1.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1536\n144 kms",
      },
      {
        kms: "2016\n264 kms",
      },
      {
        kms: "3360\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 8/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Swift AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/swift.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2184\n144 kms",
      },
      {
        kms: "2880\n264 kms",
      },
      {
        kms: "4728\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Hyundai Xcent",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/XcentWEBPAGE.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2304\n144 kms",
      },
      {
        kms: "3168\n264 kms",
      },
      {
        kms: "5256\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Sedan",
  },
  {
    name: "Maruti Swift Dzire",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/dzire.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2136\n144 kms",
      },
      {
        kms: "2784\n264 kms",
      },
      {
        kms: "4416\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Sedan",
  },
  {
    name: "Maruti Alto K10",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Altok10.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1464\n144 kms",
      },
      {
        kms: "1920\n264 kms",
      },
      {
        kms: "3216\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 8/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Celerio",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/celerio.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1968\n144 kms",
      },
      {
        kms: "2736\n264 kms",
      },
      {
        kms: "4512\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Ritz",
    img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/MAruti-Suzuki-Ritz_for-Web.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1560\n144 kms",
      },
      {
        kms: "2040\n264 kms",
      },
      {
        kms: "3480\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Mahindra XUV",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/xuv.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "7 seats",
      },
    ],
    prkm: [
      {
        kms: "4152\n144 kms",
      },
      {
        kms: "5808\n264 kms",
      },
      {
        kms: "9336\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 16/km",
    segment: "SUV",
  },
  {
    name: "Maruti Ertiga",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/ertiga.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "7 seats",
      },
    ],
    prkm: [
      {
        kms: "3360\n144 kms",
      },
      {
        kms: "4680\n264 kms",
      },
      {
        kms: "7656\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 16/km",
    segment: "MUV",
  },
  {
    name: "Hyundai Grand i10",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/grand_i10.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2160\n144 kms",
      },
      {
        kms: "3000\n264 kms",
      },
      {
        kms: "4920\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Toyota Innova Crysta",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/InnovaWEBPAGE.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "7 seats",
      },
    ],
    prkm: [
      {
        kms: "4440\n144 kms",
      },
      {
        kms: "6192\n264 kms",
      },
      {
        kms: "9960\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 17/km",
    segment: "MUV",
  },
  {
    name: "Mahindra Scorpio",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/scorpio.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "7 seats",
      },
    ],
    prkm: [
      {
        kms: "3096\n144 kms",
      },
      {
        kms: "4296\n264 kms",
      },
      {
        kms: "7080\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 16/km",
    segment: "SUV",
  },
  {
    name: "Toyota Etios Liva",
    img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/TOYOTA-ETIOS-LIVA-GD_Web-450-X-281-px.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1968\n144 kms",
      },
      {
        kms: "2544\n264 kms",
      },
      {
        kms: "4008\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Swift Dzire Tour",
    img: "https://revvselfdrivecar.s3.us-west-2.amazonaws.com/450+(1).png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2592\n144 kms",
      },
      {
        kms: "3360\n264 kms",
      },
      {
        kms: "4896\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Sedan",
  },
  {
    name: "Mahindra XUV300",
    img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/RevvMahindraXUV300.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2928\n144 kms",
      },
      {
        kms: "4056\n264 kms",
      },
      {
        kms: "6672\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 15/km",
    segment: "SUV",
  },
  {
    name: "Mahindra KUV100",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/KUV-100.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1752\n144 kms",
      },
      {
        kms: "2424\n264 kms",
      },
      {
        kms: "4056\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Honda Amaze (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/amaze.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2136\n144 kms",
      },
      {
        kms: "2784\n264 kms",
      },
      {
        kms: "4632\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Sedan",
  },
  {
    name: "Hyundai Verna AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvWebsiteVERNA+.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2688\n144 kms",
      },
      {
        kms: "3720\n264 kms",
      },
      {
        kms: "6120\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 14/km",
    segment: "Sedan",
  },
  {
    name: "Hyundai Elite i20 AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/i20.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2448\n144 kms",
      },
      {
        kms: "3216\n264 kms",
      },
      {
        kms: "5328\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Swift Dzire AT (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/dzire.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2544\n144 kms",
      },
      {
        kms: "3504\n264 kms",
      },
      {
        kms: "5760\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Sedan",
  },
  {
    name: "Mahindra XUV300 (P)",
    img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/RevvMahindraXUV300.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "3360\n144 kms",
      },
      {
        kms: "4680\n264 kms",
      },
      {
        kms: "7608\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 15/km",
    segment: "SUV",
  },
  {
    name: "Hyundai Grand i10 AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/grand_i10.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2160\n144 kms",
      },
      {
        kms: "2880\n264 kms",
      },
      {
        kms: "4728\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Baleno AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/baleno.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2136\n144 kms",
      },
      {
        kms: "2928\n264 kms",
      },
      {
        kms: "4896\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Hatchback",
  },
  {
    name: "Hyundai Elite i20",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/i20.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1992\n144 kms",
      },
      {
        kms: "2736\n264 kms",
      },
      {
        kms: "4608\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Brezza AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/brezza.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "3504\n144 kms",
      },
      {
        kms: "4872\n264 kms",
      },
      {
        kms: "7896\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 15/km",
    segment: "SUV",
  },
  {
    name: "Hyundai Verna MT (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvWebsiteVERNA+.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2448\n144 kms",
      },
      {
        kms: "3384\n264 kms",
      },
      {
        kms: "5616\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 14/km",
    segment: "Sedan",
  },
  {
    name: "Hyundai Venue AT",
    img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/Hyundai-Venue_For-Web.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2472\n144 kms",
      },
      {
        kms: "3408\n264 kms",
      },
      {
        kms: "5688\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 15/km",
    segment: "SUV",
  },
  {
    name: "Maruti Alto 800",
    img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/alto_800_white.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1464\n144 kms",
      },
      {
        kms: "2016\n264 kms",
      },
      {
        kms: "3360\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 8/km",
    segment: "Hatchback",
  },
  {
    name: "Mahindra Marazzo",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Marazzo_white.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "7 seats",
      },
    ],
    prkm: [
      {
        kms: "3312\n144 kms",
      },
      {
        kms: "4392\n264 kms",
      },
      {
        kms: "7224\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 16/km",
    segment: "MUV",
  },
  {
    name: "Hyundai Creta AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/Creta.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "3432\n144 kms",
      },
      {
        kms: "4536\n264 kms",
      },
      {
        kms: "7440\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 16/km",
    segment: "SUV",
  },
  {
    name: "Maruti Baleno (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/baleno.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2184\n144 kms",
      },
      {
        kms: "2832\n264 kms",
      },
      {
        kms: "4608\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Swift Dzire (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/dzire.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2136\n144 kms",
      },
      {
        kms: "2784\n264 kms",
      },
      {
        kms: "4632\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Sedan",
  },
  {
    name: "Ford EcoSport (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/ecosport.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2832\n144 kms",
      },
      {
        kms: "3744\n264 kms",
      },
      {
        kms: "6192\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 15/km",
    segment: "SUV",
  },
  {
    name: "Honda City (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/honda+city.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2568\n144 kms",
      },
      {
        kms: "3384\n264 kms",
      },
      {
        kms: "5616\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 14/km",
    segment: "Sedan",
  },
  {
    name: "Maruti Wagon R AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvWebsite+WAGON.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1824\n144 kms",
      },
      {
        kms: "2520\n264 kms",
      },
      {
        kms: "4128\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 9/km",
    segment: "Hatchback",
  },
  {
    name: "Maruti Swift (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/swift.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1536\n144 kms",
      },
      {
        kms: "1992\n264 kms",
      },
      {
        kms: "2904\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Hyundai Verna MT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvWebsiteVERNA+.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2448\n144 kms",
      },
      {
        kms: "3384\n264 kms",
      },
      {
        kms: "5616\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 14/km",
    segment: "Sedan",
  },
  {
    name: "Honda City AT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/honda+city.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2808\n144 kms",
      },
      {
        kms: "3720\n264 kms",
      },
      {
        kms: "6120\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 14/km",
    segment: "Sedan",
  },
  {
    name: "Hyundai Grand i10 (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/grand_i10.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1512\n144 kms",
      },
      {
        kms: "1968\n264 kms",
      },
      {
        kms: "2856\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Hyundai Creta (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/Creta.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "3168\n144 kms",
      },
      {
        kms: "4224\n264 kms",
      },
      {
        kms: "6960\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 16/km",
    segment: "SUV",
  },
  {
    name: "Hyundai Elite i20 (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/i20.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2088\n144 kms",
      },
      {
        kms: "2736\n264 kms",
      },
      {
        kms: "4608\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 13/km",
    segment: "Hatchback",
  },
  {
    name: "Hyundai Venue MT",
    img: "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/Hyundai-Venue_For-Web.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Diesel",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2112\n144 kms",
      },
      {
        kms: "2736\n264 kms",
      },
      {
        kms: "4008\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 15/km",
    segment: "SUV",
  },
  {
    name: "Maruti Celerio MT",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/celerio.png",
    type: [
      {
        transtype: "Manual",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1608\n144 kms",
      },
      {
        kms: "2232\n264 kms",
      },
      {
        kms: "3768\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Hatchback",
  },
  {
    name: "Toyota Etios AT",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOP-U04ET09idsTKlNznETpJJl7vx9bs99g&usqp=CAU",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "1608\n144 kms",
      },
      {
        kms: "2232\n264 kms",
      },
      {
        kms: "3768\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 10/km",
    segment: "Sedan",
  },
  {
    name: "Ford Puma (P)",
    img: "https://m.atcdn.co.uk/vms/media/w768/0b6b1183b32647d4a82cc00b3ce78909.jpg",
    type: [
      {
        transtype: "Aitomatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2832\n144 kms",
      },
      {
        kms: "4544\n264 kms",
      },
      {
        kms: "6192\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 16/km",
    segment: "Hatchback",
  },
  {
    name: "Ford EcoSport (P)",
    img: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/ecosport.png",
    type: [
      {
        transtype: "Automatic",
      },
      {
        fueltype: "Petrol",
      },
      {
        seatcapacity: "5 seats",
      },
    ],
    prkm: [
      {
        kms: "2832\n144 kms",
      },
      {
        kms: "3744\n264 kms",
      },
      {
        kms: "6192\n480 kms",
      },
    ],
    exkm: "Extra km charge @ ₹ 15/km",
    segment: "SUV",
  },
];

let carsData = JSON.parse(localStorage.getItem("allCars"));

if (!carsData) {
  localStorage.setItem("allCars", JSON.stringify(data));
}
