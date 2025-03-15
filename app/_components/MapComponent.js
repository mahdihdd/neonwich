
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
"use client";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { TbHandClick } from "react-icons/tb";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

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
    name: "برج میلاد",
    lat: 35.744,
    lng: 51.375,
    image: "/images/milad.jpg",
  },
  {
    id: 2,
    name: "میدان آزادی",
    lat: 35.7,
    lng: 51.337,
    image: "/images/azadi.jpg",
  },
  {
    id: 3,
    name: "پل طبیعت",
    lat: 35.757,
    lng: 51.403,
    image: "/images/tabiat.jpg",
  },
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
    return L.icon({
      iconUrl: markerIconPng,
      shadowUrl: markerShadowPng,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  }, [L]);

  return (
    <div id="sample" className="flex flex-col items-center py-5 mt-10">
      <div className="flex flex-row-reverse gap-2 justify-center w-full">
        <p className="mb-5 text-2xl">بر روی علامت های مشخص شده کلیک کنید</p>
        <TbHandClick className="mt-2" />
      </div>

      {L && (
        <MapContainer
          center={[35.7, 51.4]}
          zoom={12}
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
