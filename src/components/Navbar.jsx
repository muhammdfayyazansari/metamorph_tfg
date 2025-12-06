import Menu from "./ui/Menu";

export default function Navbar() {
  return (
    // <header className="fixed top-0 z-40 flex justify-between items-center py-8 lg:px-16 w-full backdrop-blur-md">
    <header className="fixed top-0 z-40 flex justify-between items-center py-8 px-16 w-full">
        <img src="/images/logo.svg" className="object-contain w-48" />
        <Menu />
    </header>
  );
}

// // import React, { useEffect, useState, useRef } from "react";
// // import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
// // import FilledButton from "./ui/buttons/filledButton/FilledButton";
// // import gsap from "gsap";
// // import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   // const navigate = useNavigate();
//   // const [isScrolled, setIsScrolled] = useState(false);
//   // const [menuOpen, setMenuOpen] = useState(false);
//   // const [solutionsOpen, setSolutionsOpen] = useState(false);
//   // const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
//   // const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
//   // const [hoveredParent, setHoveredParent] = useState(null);
//   // const navRef = useRef(null);
//   // const dropdownRef = useRef(null);
//   // const timeoutRef = useRef(null);

//   // // Menu structure with parents and children
//   // const menuItems = [
//   //   {
//   //     name: "Online Invoicing System",
//   //     route: "/online-invoicing-system",
//   //     children: [],
//   //   },
//   //   {
//   //     name: "Credit Card Processing",
//   //     route: "/credit-card-processing",
//   //     children: [
//   //       {
//   //         name: "Retail Credit Card Processing",
//   //         route: "/retail-credit-card-processing",
//   //       },
//   //       {
//   //         name: "Mobile Credit Card Payments",
//   //         route: "/mobile-credit-card-payments",
//   //       },
//   //       {
//   //         name: "Zero-cost Credit Card Processing",
//   //         route: "/zero-cost-credit-card-processing",
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     name: "Online Payment Processing",
//   //     route: "/online-payment-processing",
//   //     children: [
//   //       {
//   //         name: "ACH Payment Processing",
//   //         route: "/ach-payment-processing",
//   //       },
//   //       {
//   //         name: "Crypto Payment Processing",
//   //         route: "/crypto-payment-processing",
//   //       },
//   //       {
//   //         name: "e-check Payment Processing",
//   //         route: "/e-check-payment-processing",
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     name: "Chargeback Services",
//   //     route: "/chargeback-services",
//   //     children: [
//   //       {
//   //         name: "Chargeback Representment",
//   //         route: "/chargeback-representment",
//   //       },
//   //       {
//   //         name: "Real-time Chargeback Alerts",
//   //         route: "/real-time-chargeback-alerts",
//   //       },
//   //       {
//   //         name: "Reduce Manage and Win Chargebacks",
//   //         route: "/reduce-manage-and-win-chargebacks",
//   //       },
//   //       {
//   //         name: "Stop and Prevent Fraud",
//   //         route: "/stop-and-prevent-fraud",
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     name: "Analytical Reports",
//   //     route: "/analytical-reports",
//   //     children: [],
//   //   },
//   //   {
//   //     name: "Merchant Account Analysis",
//   //     route: "/merchant-account-analysis",
//   //     children: [],
//   //   },
//   //   {
//   //     name: "Industries",
//   //     route: "/industries",
//   //     children: [],
//   //   },
//   // ];

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const scrolled = window.scrollY > 50;
//   //     setIsScrolled(scrolled);
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   // // Animate fade in/out of shadow and backdrop using GSAP
//   // useEffect(() => {
//   //   if (navRef.current) {
//   //     if (isScrolled) {
//   //       gsap.to(navRef.current, {
//   //         background:
//   //           "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(66,168,252,0.55) 100%)",
//   //         boxShadow: "0 2px 20px rgba(0, 0, 0, 0.08)",
//   //         backdropFilter: "blur(15px)",
//   //         transform: "translateX(0)",
//   //         duration: 0.6,
//   //         ease: "power2.out",
//   //       });
//   //     } else {
//   //       gsap.to(navRef.current, {
//   //         background: "transparent",
//   //         boxShadow: "0 0 0 rgba(0,0,0,0)",
//   //         backdropFilter: "blur(0px)",
//   //         duration: 0.5,
//   //         ease: "power2.inOut",
//   //       });
//   //     }
//   //   }
//   // }, [isScrolled]);

//   // const handleMouseEnter = () => {
//   //   if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   //   setSolutionsOpen(true);
//   // };

//   // const handleMouseLeave = () => {
//   //   timeoutRef.current = setTimeout(() => {
//   //     setSolutionsOpen(false);
//   //     setHoveredParent(null);
//   //   }, 200);
//   // };

//   // const handleNavigation = (route) => {
//   //   navigate(route);
//   //   setSolutionsOpen(false);
//   //   setMenuOpen(false);
//   //   setMobileSolutionsOpen(false);
//   //   setExpandedMobileMenus({});
//   //   setHoveredParent(null);
//   // };

//   // const toggleMobileMenuItem = (index) => {
//   //   setExpandedMobileMenus((prev) => ({
//   //     ...prev,
//   //     [index]: !prev[index],
//   //   }));
//   // };

//   return (
//     // <nav
//     //   ref={navRef}
//     //   className="fixed top-0 left-0 w-full z-[9999] transition-all duration-500"
//     // >
//     //   <div
//     //     className={`mx-auto flex items-center justify-between py-[18px] transition-all duration-500 ${
//     //       menuOpen ? "pb-0" : ""
//     //     } ${"lg:w-[80%] md:w-[92%] sm:w-[92%] w-[92%]"}`}
//     //   >
//     //     {/* Left: Logo */}
//     //     <div className="flex items-center">
//     //       <h3
//     //         className="text-[26px] font-semibold bg-gradient-text-two cursor-pointer"
//     //         onClick={() => handleNavigation("/")}
//     //       >
//     //         Paylinkly
//     //       </h3>
//     //     </div>

//     //     {/* Center: Menus */}
//     //     <div className="flex gap-4">
//     //       <div className="hidden lg:flex items-center gap-[30px] text-black font-medium">
//     //         <button
//     //           onClick={() => handleNavigation("/")}
//     //           className="hover:text-blue-700 transition cursor-pointer"
//     //         >
//     //           Home
//     //         </button>
//     //         <button
//     //           onClick={() => handleNavigation("/about")}
//     //           className="hover:text-blue-700 transition cursor-pointer"
//     //         >
//     //           About
//     //         </button>

//     //         {/* Solutions Dropdown */}
//     //         <div
//     //           className="relative"
//     //           onMouseEnter={handleMouseEnter}
//     //           onMouseLeave={handleMouseLeave}
//     //         >
//     //           <button className="hover:text-blue-700 transition flex items-center gap-1 cursor-pointer">
//     //             Solutions
//     //             <ChevronDown
//     //               size={16}
//     //               className={`transition-transform duration-300 ${
//     //                 solutionsOpen ? "rotate-180" : ""
//     //               }`}
//     //             />
//     //           </button>

//     //           {/* Dropdown Menu */}
//     //           {solutionsOpen && (
//     //             <div
//     //               ref={dropdownRef}
//     //               className="absolute top-full left-0 mt-3 w-[280px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-2 animate-fadeIn"
//     //               style={{
//     //                 boxShadow:
//     //                   "0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 3px 3px 0 rgba(0, 0, 0, 0.04), 0 100px 80px 0 rgba(26, 0, 108, 0.05), 0 41.778px 33.422px 0 rgba(26, 0, 108, 0.05), 0 22.336px 17.869px 0 rgba(26, 0, 108, 0.04), 0 12.522px 10.017px 0 rgba(26, 0, 108, 0.04), 0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #DFDEFB inset",
//     //               }}
//     //             >
//     //               {menuItems.map((item, index) => (
//     //                 <div
//     //                   key={index}
//     //                   className="relative"
//     //                   onMouseEnter={() =>
//     //                     item.children.length > 0 && setHoveredParent(index)
//     //                   }
//     //                   onMouseLeave={() =>
//     //                     item.children.length > 0 && setHoveredParent(null)
//     //                   }
//     //                 >
//     //                   <button
//     //                     onClick={() => handleNavigation(item.route)}
//     //                     className="cursor-pointer w-full px-4 py-2.5 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 flex items-center justify-between group"
//     //                   >
//     //                     <span className="text-[15px] text-gray-700 group-hover:text-blue-600 font-medium transition-colors">
//     //                       {item.name}
//     //                     </span>
//     //                     {item.children.length > 0 && (
//     //                       <ChevronRight
//     //                         size={16}
//     //                         className="text-gray-400 group-hover:text-blue-600 transition-colors"
//     //                       />
//     //                     )}
//     //                   </button>

//     //                   {/* Submenu */}
//     //                   {item.children.length > 0 && hoveredParent === index && (
//     //                     <div
//     //                       className="absolute left-full -top-3 w-[280px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-2 animate-fadeIn"
//     //                       style={{
//     //                         boxShadow:
//     //                           "0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 3px 3px 0 rgba(0, 0, 0, 0.04), 0 100px 80px 0 rgba(26, 0, 108, 0.05), 0 41.778px 33.422px 0 rgba(26, 0, 108, 0.05), 0 22.336px 17.869px 0 rgba(26, 0, 108, 0.04), 0 12.522px 10.017px 0 rgba(26, 0, 108, 0.04), 0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #DFDEFB inset",
//     //                       }}
//     //                     >
//     //                       {item.children.map((child, childIndex) => (
//     //                         <button
//     //                           key={childIndex}
//     //                           onClick={() => handleNavigation(child.route)}
//     //                           className="cursor-pointer w-full px-4 py-2.5 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 group"
//     //                         >
//     //                           <span className="text-[14px] text-gray-600 group-hover:text-blue-600 font-medium transition-colors">
//     //                             {child.name}
//     //                           </span>
//     //                         </button>
//     //                       ))}
//     //                     </div>
//     //                   )}
//     //                 </div>
//     //               ))}
//     //             </div>
//     //           )}
//     //         </div>
//     //       </div>

//     //       {/* Right: Buttons (Desktop) */}
//     //       <div className="hidden lg:flex gap-[15px]">
//     //         <FilledButton
//     //           buttonText="Tired Of Chargebacks?"
//     //           textColor="bg-gradient-text-two"
//     //           bgColor="bg-white"
//     //           height="h-[44px]"
//     //           rounded="rounded-xl"
//     //           fontSize="text-[15px]"
//     //           width="w-auto"
//     //           type="button"
//     //           fontWeight="font-semibold"
//     //           px="px-[18px]"
//     //           onClick={() => {
//     //             navigate("/contact");
//     //           }}
//     //         />
//     //         <FilledButton
//     //           buttonText="Schedule Consultation"
//     //           textColor="text-white"
//     //           bgImage="var(--color-button-gradient)"
//     //           height="h-[44px]"
//     //           rounded="rounded-xl"
//     //           fontSize="text-[15px]"
//     //           width="w-auto"
//     //           type="button"
//     //           fontWeight="font-semibold"
//     //           px="px-[18px]"
//     //           onClick={() => {
//     //             navigate("/contact");
//     //           }}
//     //         />
//     //       </div>
//     //     </div>

//     //     {/* Right: Hamburger Menu (Mobile/Tablet) */}
//     //     <button
//     //       className="flex lg:hidden text-gray-800 hover:text-gray-900"
//     //       onClick={() => setMenuOpen(!menuOpen)}
//     //     >
//     //       {menuOpen ? <X size={26} /> : <Menu size={26} />}
//     //     </button>
//     //   </div>

//     //   {/* Mobile Menu Dropdown */}
//     //   {menuOpen && (
//     //     <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg lg:hidden animate-fadeIn max-h-[80vh] overflow-y-auto">
//     //       <div className="flex flex-col items-start gap-2 p-5 text-gray-800 font-medium">
//     //         <button
//     //           onClick={() => handleNavigation("/")}
//     //           className="hover:text-primary transition w-full text-left py-2"
//     //         >
//     //           Home
//     //         </button>
//     //         <button
//     //           onClick={() => handleNavigation("/about")}
//     //           className="hover:text-primary transition w-full text-left py-2"
//     //         >
//     //           About
//     //         </button>

//     //         {/* Mobile Solutions Accordion */}
//     //         <div className="w-full">
//     //           <button
//     //             onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
//     //             className="hover:text-primary transition w-full text-left py-2 flex items-center justify-between"
//     //           >
//     //             Solutions
//     //             <ChevronDown
//     //               size={16}
//     //               className={`transition-transform duration-300 ${
//     //                 mobileSolutionsOpen ? "rotate-180" : ""
//     //               }`}
//     //             />
//     //           </button>

//     //           {mobileSolutionsOpen && (
//     //             <div className="ml-4 mt-2 space-y-1">
//     //               {menuItems.map((item, index) => (
//     //                 <div
//     //                   key={index}
//     //                   className="border-b border-gray-100 last:border-b-0"
//     //                   onClick={() => {
//     //                     if (item.children.length === 0) {
//     //                       handleNavigation(item.route);
//     //                     }
//     //                   }}
//     //                 >
//     //                   {/* Parent Menu Item */}
//     //                   <div className="flex items-center justify-between">
//     //                     <button
//     //                       onClick={() => {
//     //                         if (item.children.length > 0) {
//     //                           toggleMobileMenuItem(index);
//     //                         }
//     //                       }}
//     //                       className="flex-1 text-[14px] text-gray-700 hover:text-blue-600 transition text-left py-2 font-medium"
//     //                     >
//     //                       {item.name}
//     //                     </button>

//     //                     {/* Show chevron only if item has children */}
//     //                     {item.children.length > 0 && (
//     //                       <button
//     //                         // onClick={() => toggleMobileMenuItem(index)}
//     //                         className="p-2 hover:bg-gray-100 rounded-lg transition"
//     //                       >
//     //                         <ChevronDown
//     //                           size={16}
//     //                           className={`text-gray-500 transition-transform duration-300 ${
//     //                             expandedMobileMenus[index] ? "rotate-180" : ""
//     //                           }`}
//     //                         />
//     //                       </button>
//     //                     )}
//     //                   </div>

//     //                   {/* Child Menu Items - Only show if expanded */}
//     //                   {item.children.length > 0 &&
//     //                     expandedMobileMenus[index] && (
//     //                       <div className="ml-4 space-y-1 pb-2">
//     //                         {item.children.map((child, childIndex) => (
//     //                           <button
//     //                             key={childIndex}
//     //                             onClick={() => handleNavigation(child.route)}
//     //                             className="text-[13px] text-gray-500 hover:text-blue-600 transition w-full text-left py-1.5 pl-2 hover:bg-blue-50 rounded"
//     //                           >
//     //                             • {child.name}
//     //                           </button>
//     //                         ))}
//     //                       </div>
//     //                     )}
//     //                 </div>
//     //               ))}
//     //             </div>
//     //           )}
//     //         </div>

//     //         <div className="flex flex-col gap-3 w-full mt-3 pt-3 border-t border-gray-200">
//     //           <FilledButton
//     //             buttonText="Tired Of Chargebacks?"
//     //             textColor="bg-gradient-text-two"
//     //             bgColor="bg-white"
//     //             height="h-[44px]"
//     //             rounded="rounded-xl"
//     //             fontSize="text-[15px]"
//     //             width="w-full"
//     //             type="button"
//     //             fontWeight="font-semibold"
//     //             px="px-[18px]"
//     //             onClick={() => {
//     //               navigate("/contact");
//     //             }}
//     //           />
//     //           <FilledButton
//     //             buttonText="Schedule Consultation"
//     //             textColor="text-white"
//     //             bgImage="var(--color-button-gradient)"
//     //             height="h-[44px]"
//     //             rounded="rounded-xl"
//     //             fontSize="text-[15px]"
//     //             width="w-full"
//     //             type="button"
//     //             fontWeight="font-semibold"
//     //             px="px-[18px]"
//     //             onClick={() => {
//     //               navigate("/contact");
//     //             }}
//     //           />
//     //         </div>
//     //       </div>
//     //     </div>
//     //   )}
//     // </nav>

// //     <h1>
// //       nav
// //     </h1>
// //   );
// // };

// // export default Navbar;
