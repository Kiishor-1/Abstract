import { useState, useEffect } from "react";
import axios from "axios";
import Logo from '../assets/images/Logo.png'
import { FOOTER_ENDPOINTS } from "../services/api";

const {FOOTER_DATA} = FOOTER_ENDPOINTS;

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await axios.get(FOOTER_DATA);
        setFooterData(response.data.data);
      } catch (err) {
        console.error("Failed to fetch footer data:", err);
      }
    };

    fetchFooterData();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="bg-black text-white py-2">
      <div className="max-w-[1450px] min-h-[250px] py-4 px-3 mx-auto flex flex-wrap">
        <div className="footer-item px-4" style={{ flex: "0 0 17%" }}>
          <h2>Abstract</h2>
          <ul>
            {footerData.abstract.map((item, index) => (
              <li key={index} className="decoration-none">{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-item px-4" style={{ flex: "0 0 17%" }}>
          <h2>Resources</h2>
          <ul>
            {footerData.resources.map((item, index) => (
              <li key={index} className="decoration-none">{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-item px-4" style={{ flex: "0 0 17%" }}>
          <h2>Community</h2>
          <ul>
            {footerData.community.map((item, index) => (
              <li key={index} className="decoration-none">{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-item px-4" style={{ flex: "0 0 17%" }}>
          <h2>Company</h2>
          <ul>
            {footerData.company.map((item, index) => (
              <li key={index} className="decoration-none">{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 gap-1 self-end lex-col px-4 mb-4 text-sm" >
          <img src={Logo} alt="Logo" className="w-[25px] rounded-md" />
          <p>Copyright @ {new Date().getFullYear()}</p>
          <p>Abstract Studio Design, Inc</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}









// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Footer() {
//   const [footerData, setFooterData] = useState(null);

//   useEffect(() => {
//     const fetchFooterData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/footer");
//         setFooterData(response.data.data);
//       } catch (err) {
//         console.error("Failed to fetch footer data:", err);
//       }
//     };

//     fetchFooterData();
//   }, []);

//   if (!footerData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <footer className="bg-black text-white">
//       <div className="max-w-[1450px] min-h-[250px] py-4 px-3 mx-auto flex flex-wrap justify-between">
//         <div className="footer-item px-4 mb-4">
//           <h2>Abstract</h2>
//           <ul>
//             {footerData.abstract.map((item, index) => (
//               <li key={index} className="decoration-none">{item}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="footer-item px-4 mb-4">
//           <h2>Resources</h2>
//           <ul>
//             {footerData.resources.map((item, index) => (
//               <li key={index} className="decoration-none">{item}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="footer-item px-4 mb-4">
//           <h2>Community</h2>
//           <ul>
//             {footerData.community.map((item, index) => (
//               <li key={index} className="decoration-none">{item}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="footer-item px-4 mb-4">
//           <h2>Company</h2>
//           <ul>
//             {footerData.company.map((item, index) => (
//               <li key={index} className="decoration-none">{item}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="footer-item px-4 mb-4 flex flex-col items-center">
//           <img src="/path/to/logo.png" alt="Logo" className="w-24 mb-2" />
//           <p className="text-sm">© {new Date().getFullYear()} Abstract. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
