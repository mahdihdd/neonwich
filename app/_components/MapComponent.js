// ? show the location and scroll down to picture
//
// "use client";
// import { useState, useRef, useEffect, useMemo } from "react";
// import dynamic from "next/dynamic";
// import { motion } from "framer-motion";
// import { TbHandClick } from "react-icons/tb";
// import "leaflet/dist/leaflet.css";

// // بارگذاری MapContainer و سایر کامپوننت‌های leaflet فقط در کلاینت
// const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
// const Tooltip = dynamic(() => import("react-leaflet").then((mod) => mod.Tooltip), { ssr: false });

// const locations = [
//   {
//     id: 1,
//     name: "برج میلاد",
//     lat: 35.744,
//     lng: 51.375,
//     image: "/images/milad.jpg",
//   },
//   {
//     id: 2,
//     name: "میدان آزادی",
//     lat: 35.7,
//     lng: 51.337,
//     image: "/images/azadi.jpg",
//   },
//   {
//     id: 3,
//     name: "پل طبیعت",
//     lat: 35.757,
//     lng: 51.403,
//     image: "/images/tabiat.jpg",
//   },
// ];

// export default function MapComponent() {
//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);
//   const imageRef = useRef(null);
//   const [L, setL] = useState(null);

//   // بارگذاری leaflet در کلاینت
//   useEffect(() => {
//     import("leaflet").then((leaflet) => {
//       setL(leaflet);
//     });
//   }, []);

//   const customIcon = useMemo(() => {
//     if (!L) return null;
//     return L.icon({
//       iconUrl: "/marker-icon.png",
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//     });
//   }, [L]);

//   const handleMarkerClick = (loc) => {
//     setSelectedLocation(loc);
//     setTimeout(() => {
//       imageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
//     }, 200);
//   };

//   return (
//     <div className="flex flex-col items-center py-5 mt-10">
//       <div className="flex flex-row-reverse gap-2 justify-center w-full">
//         <p className="mb-5 text-2xl">بر روی علامت های مشخص شده کلیک کنید</p>
//         <TbHandClick className="mt-2" />
//       </div>

//       {L && (
//         <MapContainer
//           center={[35.7, 51.4]}
//           zoom={12}
//           className="w-full h-96 md:w-3/4 rounded-lg shadow-md z-20"
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {locations.map((loc) => (
//             <Marker
//               key={loc.id}
//               position={[loc.lat, loc.lng]}
//               eventHandlers={{ click: () => handleMarkerClick(loc) }}
//               icon={customIcon}
//             >
//               <Popup>{loc.name}</Popup>
//               <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
//                 <span className="font-bold text-sm">{loc.name}</span>
//               </Tooltip>
//             </Marker>
//           ))}
//         </MapContainer>
//       )}

//       {selectedLocation && (
//         <div ref={imageRef} key={selectedLocation.id} className="mt-4 p-4 border border-green-500 rounded-lg shadow-md">
//           <h2 dir="rtl" className="text-lg font-bold text-right">
//             تصویر {selectedLocation.name}
//           </h2>
//           <motion.img
//             src={selectedLocation.image}
//             alt={selectedLocation.name}
//             className="w-64 h-40 rounded-lg mt-2"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// ? show the all image and name
// "use client";
// import { useState, useEffect, useMemo } from "react";
// import dynamic from "next/dynamic";
// import { TbHandClick } from "react-icons/tb";
// import "leaflet/dist/leaflet.css";
// import { useMap } from "react-leaflet";
// import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// // بارگذاری داینامیک کامپوننت‌های Leaflet
// const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });

// const locations = [
//   {
//     id: 1,
//     name: "برج میلاد",
//     lat: 35.744,
//     lng: 51.375,
//     image: "/images/milad.jpg",
//   },
//   {
//     id: 2,
//     name: "میدان آزادی",
//     lat: 35.7,
//     lng: 51.337,
//     image: "/images/azadi.jpg",
//   },
//   {
//     id: 3,
//     name: "پل طبیعت",
//     lat: 35.757,
//     lng: 51.403,
//     image: "/images/tabiat.jpg",
//   },
// ];

// // کامپوننت مارکر سفارشی برای نمایش تصویر + نام مکان
// const CustomMarker = ({ location }) => {
//   const map = useMap();
//   const L = require("leaflet");

//   const imageIcon = useMemo(() => {
//     return L.divIcon({
//       html: `
//         <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
//           <img src="${location.image}" alt="${location.name}"
//             style="width:100px; height:80px; border-radius:8px; border:2px solid #4CAF50;" />
//           <span style="background: rgba(0, 0, 0, 0.7); color: white; padding: 2px 5px; border-radius: 4px; font-size: 12px; margin-top: 4px;">
//             ${location.name}
//           </span>
//         </div>`,
//       className: "custom-image-marker",
//       iconSize: [100, 100], // افزایش ارتفاع برای نمایش متن
//       iconAnchor: [50, 110],
//     });
//   }, [location]);

//   return <Marker position={[location.lat, location.lng]} icon={imageIcon} />;
// };

// export default function MapComponent() {
//   const [L, setL] = useState(null);

//   useEffect(() => {
//     import("leaflet").then((leaflet) => {
//       setL(leaflet);
//     });
//   }, []);

//   const customIcon = useMemo(() => {
//     if (!L) return null;
//     return L.icon({
//       iconUrl: markerIconPng,
//       shadowUrl: markerShadowPng,
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//       shadowSize: [41, 41],
//     });
//   }, [L]);

//   return (
//     <div className="flex flex-col items-center py-5 mt-10">
//       <div className="flex flex-row-reverse gap-2 justify-center w-full">
//         <p className="mb-5 text-2xl">بر روی علامت های مشخص شده کلیک کنید</p>
//         <TbHandClick className="mt-2" />
//       </div>

//       {L && (
//         <MapContainer center={[35.7, 51.4]} zoom={12} className="w-full h-96 md:w-3/4 rounded-lg shadow-md z-20">
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {locations.map((loc) => (
//             <CustomMarker key={loc.id} location={loc} />
//           ))}
//         </MapContainer>
//       )}
//     </div>
//   );
// }

// ? all of this code is correct but show the text with image
// "use client";
// import { useState, useEffect, useMemo } from "react";
// import dynamic from "next/dynamic";
// import { TbHandClick } from "react-icons/tb";
// import "leaflet/dist/leaflet.css";
// import { useMap } from "react-leaflet";
// import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// // بارگذاری داینامیک کامپوننت‌های Leaflet
// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
//   ssr: false,
// });
// const Tooltip = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Tooltip),
//   { ssr: false }
// );

// const locations = [
//   {
//     id: 1,
//     name: "برج میلاد",
//     lat: 35.744,
//     lng: 51.375,
//     image: "/images/milad.jpg",
//   },
//   {
//     id: 2,
//     name: "میدان آزادی",
//     lat: 35.7,
//     lng: 51.337,
//     image: "/images/azadi.jpg",
//   },
//   {
//     id: 3,
//     name: "پل طبیعت",
//     lat: 35.757,
//     lng: 51.403,
//     image: "/images/tabiat.jpg",
//   },
// ];

// // نمایش تصویر فقط زمانی که کاربر روی نشانگر کلیک کند
// const ImageOverlay = ({ location }) => {
//   const map = useMap();
//   const L = require("leaflet");

//   const imageIcon = useMemo(() => {
//     return L.divIcon({
//       html: `<img src="${location.image}" alt="${location.name}"
//         style="width:120px; height:100px; border-radius:8px; border:2px solid #4CAF50;" />`,
//       className: "custom-image-marker",
//       iconSize: [120, 100],
//       iconAnchor: [60, 140],
//     });
//   }, [location]);

//   return <Marker position={[location.lat, location.lng]} icon={imageIcon} />;
// };

// export default function MapComponent() {
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [L, setL] = useState(null);

//   useEffect(() => {
//     import("leaflet").then((leaflet) => {
//       setL(leaflet);
//     });
//   }, []);

//   const customIcon = useMemo(() => {
//     if (!L) return null;
//     return L.icon({
//       iconUrl: markerIconPng,
//       shadowUrl: markerShadowPng,
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//       shadowSize: [41, 41],
//     });
//   }, [L]);

//   return (
//     <div className="flex flex-col items-center py-5 mt-10">
//       <div className="flex flex-row-reverse gap-2 justify-center w-full">
//         <p className="mb-5 text-2xl">بر روی علامت های مشخص شده کلیک کنید</p>
//         <TbHandClick className="mt-2" />
//       </div>

//       {L && (
//         <MapContainer
//           center={[35.7, 51.4]}
//           zoom={12}
//           className="w-full h-96 md:w-3/4 rounded-lg shadow-md z-20"
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {locations.map((loc) => (
//             <Marker
//               key={loc.id}
//               position={[loc.lat, loc.lng]}
//               eventHandlers={{ click: () => setSelectedLocation(loc) }}
//               icon={customIcon}
//             >
//               <Popup>{loc.name}</Popup>
//               <Tooltip permanent direction="bottom" offset={[0, 10]}>
//                 {/* <span className="text-sm font-semibold bg-white px-2 py-1 rounded shadow-md"> */}
//                   {loc.name}
//                 {/* </span> */}
//               </Tooltip>
//             </Marker>
//           ))}
//           {selectedLocation && <ImageOverlay location={selectedLocation} />}
//         </MapContainer>
//       )}
//     </div>
//   );
// }

// ?  more correct code
// "use client";
// import { useState, useEffect, useMemo } from "react";
// import dynamic from "next/dynamic";
// import { TbHandClick } from "react-icons/tb";
// import "leaflet/dist/leaflet.css";
// import { useMap } from "react-leaflet";
// import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// // بارگذاری داینامیک کامپوننت‌های Leaflet
// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
//   ssr: false,
// });

// const locations = [
//   {
//     id: 1,
//     name: "برج میلاد",
//     lat: 35.744,
//     lng: 51.375,
//     image: "/images/milad.jpg",
//   },
//   {
//     id: 2,
//     name: "میدان آزادی",
//     lat: 35.7,
//     lng: 51.337,
//     image: "/images/azadi.jpg",
//   },
//   {
//     id: 3,
//     name: "پل طبیعت",
//     lat: 35.757,
//     lng: 51.403,
//     image: "/images/tabiat.jpg",
//   },
// ];

// // کامپوننت برای نمایش تصویر همراه با ویژگی alt
// const ImageOverlay = ({ location }) => {
//   const map = useMap();
//   const L = require("leaflet");

//   const imageIcon = useMemo(() => {
//     return L.divIcon({
//       html: `<img src="${location.image}" alt="${location.name}"
//         style="width:300px; height:169px; border-radius:8px; border:2px solid #4CAF50;" unoptimized />`,
//       className: "custom-image-marker",
//       iconSize: [100, 80],
//       iconAnchor: [145, 263],
//     });
//   }, [location]);

//   return <Marker position={[location.lat, location.lng]} icon={imageIcon} />;
// };

// export default function MapComponent() {
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [L, setL] = useState(null);

//   useEffect(() => {
//     import("leaflet").then((leaflet) => {
//       setL(leaflet);
//     });
//   }, []);

//   const customIcon = useMemo(() => {
//     if (!L) return null;
//     return L.icon({
//       iconUrl: markerIconPng,
//       shadowUrl: markerShadowPng,
//       iconSize: [25, 41],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//       shadowSize: [41, 41],
//     });
//   }, [L]);

//   return (
//     <div id="sample" className="flex flex-col items-center py-5 mt-10">
//       <div className="flex flex-row-reverse gap-2 justify-center w-full">
//         <p className="mb-5 text-2xl">بر روی علامت های مشخص شده کلیک کنید</p>
//         <TbHandClick className="mt-2" />
//       </div>

//       {L && (
//         <MapContainer
//           center={[35.7, 51.4]}
//           zoom={12}
//           className="w-full h-96 md:w-3/4 rounded-lg shadow-md z-20"
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {locations.map((loc) => (
//             <Marker
//               key={loc.id}
//               position={[loc.lat, loc.lng]}
//               eventHandlers={{ click: () => setSelectedLocation(loc) }}
//               icon={customIcon}
//             >
//               <Popup>{loc.name}</Popup>
//             </Marker>
//           ))}
//           {selectedLocation && <ImageOverlay location={selectedLocation} />}
//         </MapContainer>
//       )}
//     </div>
//   );
// }
// !testing:
"use client";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { TbHandClick } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6"; // آیکون مکان‌یابی
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";

// بارگذاری داینامیک کامپوننت‌های Leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const locations = [
  {
    id: 1,
    name: "املاک ارنجک",
    lat: 36.29272088266685,
    lng: 50.0417610773156,
    image: "/images/mapimage/p1.jpg",
  },
  {
    id: 2,
    name: "لوازم اداری تاکستان",
    lat: 36.07089603642682,
    lng: 49.68459699720314,
    image: "/images/mapimage/p2.jpg",
  },
  {
    id: 3,
    name: "مبل فروشی",
    lat: 36.13873960468656,
    lng: 49.21016837021873,
    image: "/images/mapimage/p3.jpg",
  },
  {
    id: 4,
    name: "لباس فروشی",
    lat: 36.13861565479312,
    lng: 49.20989930360064,
    image: "/images/mapimage/p4.jpg",
  },
  {
    id: 5,
    name: "تعمیرات موبایل",
    lat: 36.27411592121117,
    lng: 50.00789590654823,
    image: "/images/mapimage/p5.jpg",
  },
  {
    id: 7,
    name: "کافه صابر",
    lat: 36.30893657296333,
    lng: 50.03078055693048,
    image: "/images/mapimage/p7.jpg",
  },
  {
    id: 8,
    name: "سیسمونی کیدو",
    lat: 36.27942901199246,
    lng: 50.00412364174851,
    image: "/images/mapimage/p8.jpg",
  },
  {
    id: 9,
    name: "تبلیغات محیطی",
    lat: 36.296101,
    lng:  50.018208,
    image: "/images/mapimage/p9.jpg",
  },
  {
    id: 10,
    name: "مبلمان فروشی",
    lat: 36.268983440143614,
    lng: 49.99295491551958,
    image: "/images/mapimage/p10.jpg",
  },{
    id: 11,
    name: "ساندویچ فروشی",
    lat: 36.313900,
    lng: 49.974200,
    image: "/images/mapimage/p11.jpg",
  },
  {
    id: 12,
    name: "کانتر فروش",
    lat: 36.278917,
    lng: 50.006733,
    image: "/images/mapimage/p12.jpg",
  },
  {
    id: 13,
    name: "لگوی شرکت",
    lat: 36.69294344525551,
    lng: 45.14365218180361,
    image: "/images/mapimage/p13.jpg",
  },
  {
    id: 14,
    name: "سوپر مارکت",
    lat:36.315742,
    lng: 36.315742,
    image: "/images/mapimage/p14.jpg",
  },
  {
    id: 15,
    name: "سوپر مارکت",
    lat: 36.315700,
    lng: 50.033900,
    image: "/images/mapimage/p15.jpg",
  },
  {
    id: 16,
    name: "بکلایت لگوی آرایشگاه",
    lat: 36.281414,
    lng: 50.020453,
    image: "/images/mapimage/p16.jpg",
  },
  {
    id: 17,
    name: "ساندویچ فروشی",
    lat: 36.314394,
    lng: 49.972294,
    image: "/images/mapimage/p17.jpg",
  },
  {
    id: 18,
    name: "لگوی مجتمع رفاهی",
    lat: 36.269100,
    lng: 50.008981,
    image: "/images/mapimage/p18.jpg",
  },
  {
    id: 19,
    name: "لگوی قبلی خومون",
    lat: 36.268997,
    lng: 50.009000,
    image: "/images/mapimage/p19.jpg",
  },

  {
    id: 20,
    name: "بوتیک مردونه",
    lat: 36.269211,
    lng: 50.008910,
    image: "/images/mapimage/p20.jpg",
  },
  {
    id: 21,
    name: "بوتیک زنونه",
    lat:36.275658,
    lng: 50.009300,
    image: "/images/mapimage/p21.jpg",
  },
  
  {
    id: 22,
    name: "دکوراتیو نئونی",
    lat: 36.274217,
    lng: 50.006414,
    image: "/images/mapimage/p22.jpg",
  },
  {
    id: 23,
    name: "کتونی فروشی",
    lat: 36.268925,
    lng: 49.989475,
    image: "/images/mapimage/p23.jpg",
  },
  {
    id: 24,
    name: "لگو و دکوراتیو فروشگاه",
    lat: 36.298328,
    lng: 50.019567,
    image: "/images/mapimage/p24.jpg",
  },
  {
    id: 25,
    name: "لگوی ال‌استار",
    lat: 36.289400,
    lng: 50.012597,
    image: "/images/mapimage/p25.jpg",
  },



  
  {
    id: 26,
    name: " لگوی تنباکو",
    lat: 36.267728,
    lng: 49.996469,
    image: "/images/mapimage/p26.jpg",
  },




  {
    id: 27,
    name: "کادوی تولد",
    lat: 35.83953227970359, 
    lng: 51.016527238298366,
    image: "/images/mapimage/p27.jpg",
  },


  {
    id: 28,
    name: "لگو فروشگاه",
    lat: 35.809811233192825,
    lng: 51.40083544252982,
    image: "/images/mapimage/p28.jpg",
  },




  {
    id: 29,
    name: "لگوی فروشگاه",
    lat: 36.269064,
    lng: 50.008975,
    image: "/images/mapimage/p29.jpg",
  },



  // {
  //   id: 30,
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p30.jpg",
  // },

  // {
  //   id: 31,
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p31.jpg",
  // },


  // {
  //   id: 32,
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p32.jpg",
  // },
  // {
  //   id: 33,
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p33.jpg",
  // },
  // {
  //   id: 34,
    
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p34.jpg",
  // },
  // {
  //   id: 35,
    
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p35.jpg",
  // },
  // {
  //   id: 36,
    
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p36.jpg",
  // },
  // {
  //   id: 37,
    
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p37.jpg",
  // },

  // {
  //   id: 38,
    
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p38.jpg",
  // },

  // {
  //   id: 39,
    
  //   name: "",
  //   lat: ,
  //   lng: ,
  //   image: "/images/mapimage/p39.jpg",
  // },

  // {
  //   id: 40,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p40.jpg",
  // },
  // {
  //   id: 41,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p41.jpg",
  // },
  // {
  //   id: 42,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p42.jpg",
  // },

  // {
  //   id: 43,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p43.jpg",
  // },

  // {
  //   id: 44,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p44.jpg",
  // },

  // {
  //   id: 45,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p45.jpg",
  // },

  // {
  //   id: 46,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p46.jpg",
  // },

  // {
  //   id: 47,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p47.jpg",
  // },

  // {
  //   id: 48,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p48.jpg",
  // },

  // {
  //   id: 49,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p49.jpg",
  // },

  // {
  //   id: 50,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p50.jpg",
  // },
  // {
  //   id: 51,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p51.jpg",
  // },
  // {
  //   id: 52,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p52.jpg",
  // },

  // {
  //   id: 53,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p53.jpg",
  // },
  // {
  //   id: 54,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p54.jpg",
  // },

  // {
  //   id: 55,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p55.jpg",
  // },

  // {
  //   id: 56,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p56.jpg",
  // },

  // {
  //   id: 57,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p57.jpg",
  // },

  // {
  //   id: 58,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p58.jpg",

   
  // },

  // {
  //   id: 59,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p59.jpg",
  // },
  // {
  //   id: 60,
    
  //   name: "",
  //   lat:,
  //   lng: ,
  //   image: "/images/mapimage/p60.jpg",
  // },





];

// کامپوننت برای نمایش تصویر همراه با ویژگی alt
const ImageOverlay = ({ location }) => {
  const map = useMap();
  const L = require("leaflet");

  const imageIcon = useMemo(() => {
    return L.divIcon({
      html: `<img src="${location.image}" alt="${location.name}" 
        style="width:300px; height:169px; border-radius:8px; border:2px solid #4CAF50;" unoptimized />`,
      className: "custom-image-marker",
      iconSize: [100, 80],
      iconAnchor: [145, 263],
    });
  }, [location]);

  return <Marker position={[location.lat, location.lng]} icon={imageIcon} />;
};

export default function MapComponent() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [L, setL] = useState(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  const customIcon = useMemo(() => {
    if (!L) return null;
    return L.divIcon({
      html: `<div style="
            width: 30px; height: 30px; 
            display: flex; justify-content: center; align-items: center; 
            background-color: white; border-radius: 50%; box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
          ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="green">
            <path d="M12 2C8.14 2 5 5.14 5 9c0 4.42 5.89 11.23 6.16 11.52a1 1 0 0 0 1.68 0C13.11 20.23 19 13.42 19 9c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>`,
      className: "custom-marker",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
  }, [L]);

  return (
    <div id="sample" className="flex flex-col items-center py-5 mt-10">
      <div className="flex flex-row-reverse gap-2 justify-center w-full">
        <p className="mb-5 text-2xl text-right">
          بر روی علامت های مشخص شده کلیک کنید
        </p>
        <TbHandClick className="mt-2" />
      </div>

      {L && (
        <MapContainer
        center={[36.2688, 50.0041]}
          zoom={15}
          className="w-full h-96 md:w-3/4 rounded-lg shadow-md z-20"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
              eventHandlers={{ click: () => setSelectedLocation(loc) }}
              icon={customIcon}
            >
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
          {selectedLocation && <ImageOverlay location={selectedLocation} />}
        </MapContainer>
      )}
    </div>
  );
}
