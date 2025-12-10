import FilledButton from './ui/buttons/filledButton/FilledButton'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    // const navigate = useNavigate();

    const quickLinks = [
        { name: 'Telegram', path: '/telegram' },
        { name: 'Twitter', path: '/twitter' },
        { name: 'Instagram', path: '/instagram' },
        { name: 'Facebook', path: '/facebook' },
        //   { name: "About", path: "/about" },
        //   { name: "FAQs", path: "/faqs" },
        //   { name: "Blogs", path: "/blogs" },
        //   { name: "Privacy Policy", path: "/privacy-policy" },
        //   { name: "Terms of Service", path: "/terms-of-service" },
    ]

    return (
        // <footer className="relative w-full overflow-hidden ">
        //   {/* === Background Image === */}
        //   <img
        //     src="/images/footer-bg.webp"
        //     alt="footer background"
        //     className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom pointer-events-none"
        //   />

        //   {/* === Content Container === */}
        //   <div
        //     className="relative z-10 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto flex flex-col justify-center items-start gap-[20px] py-[60px] pb-[20px]  backdrop-blur-md rounded-t-2xl"
        //     style={{
        //       borderTop: "1px solid",
        //       borderImageSource:
        //         "linear-gradient(90deg, rgba(3, 68, 157, 0) 0%, rgba(3, 68, 157, 0.5) 50%, rgba(3, 68, 157, 0) 100%)",
        //       borderImageSlice: 1,
        //     }}
        //   >
        //     {/* === Top Section (Left + Right Columns) === */}
        //     <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:gap-[40px] gap-[40px]">
        //       {/* === Left Side === */}
        //       <div className="w-full lg:w-[45%] flex flex-col gap-3">
        //         <h3 className="text-[28px] font-semibold bg-gradient-text-one">
        //           Paylinkly
        //         </h3>
        //         <p className="leading-tight bg-gradient-text-description max-w-[410px]">
        //           Get merchant services and start processing payments instantly. We
        //           can design a custom package for your business and integrate with
        //           your existing website.
        //         </p>
        //         <div className="mt-6">
        //           <FilledButton
        //             buttonText="Schedule Consultation"
        //             textColor="text-white"
        //             bgImage="var(--color-button-gradient)"
        //             height="h-[50px]"
        //             rounded="rounded-xl"
        //             fontSize="text-[16px]"
        //             width="w-[250px]"
        //             type="button"
        //             fontWeight="font-medium"
        //             px="px-[20px]"
        //             onClick={() => {
        //               navigate("/contact");
        //             }}
        //           />
        //         </div>
        //       </div>

        //       {/* === Right Side (3 Columns) === */}
        //       <div className="w-full lg:w-[55%] flex flex-col sm:flex-col md:flex-row md:flex-wrap justify-between gap-[30px] sm:gap-[30px]">
        //         {/* === Quicklinks === */}
        //         <div className="flex flex-col gap-2 min-w-[120px]">
        //           <h4 className="text-[18px] font-semibold bg-gradient-text-one">
        //             Quicklinks
        //           </h4>
        //           <ul className="bg-gradient-text-description flex flex-col gap-1">
        //             {quickLinks.map((item, i) => (
        //               <li
        //                 key={i}
        //                 onClick={() => navigate(item.path)}
        //                 className="hover:underline cursor-pointer transition-all duration-150"
        //               >
        //                 {item.name}
        //               </li>
        //             ))}
        //           </ul>
        //         </div>

        //         {/* === Gateways === */}
        //         <div className="flex flex-col gap-2 min-w-[120px]">
        //           <h4 className="text-[18px] font-semibold bg-gradient-text-one">
        //             Gateways
        //           </h4>
        //           <ul className="bg-gradient-text-description flex flex-col gap-1">
        //             {["NMI", "Authorize.net", "Payarc"].map((item, i) => (
        //               <li key={i} className="hover:underline cursor-pointer">
        //                 {item}
        //               </li>
        //             ))}
        //           </ul>
        //         </div>

        //         {/* === Contact Info === */}
        //         <div className="flex flex-col gap-2 min-w-[150px]">
        //           <h4 className="text-[18px] font-semibold bg-gradient-text-one">
        //             Contact Info
        //           </h4>
        //           <ul className="bg-gradient-text-description flex flex-col gap-1">
        //             <li>
        //               <a
        //                 href="tel:8888849931"
        //                 className="hover:underline cursor-pointer"
        //               >
        //                 (888) 884-9931
        //               </a>
        //             </li>
        //             <li>
        //               <a
        //                 href="mailto:info@paylinkly.com"
        //                 className="hover:underline cursor-pointer"
        //               >
        //                 info@paylinkly.com
        //               </a>
        //             </li>
        //             <li>
        //               <a
        //                 href="https://www.google.com/maps?q=11133+Shady+Trail,+Dallas,+TX+75229"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className="hover:underline cursor-pointer"
        //               >
        //                 11133 Shady Trail, Dallas, TX 75229
        //               </a>
        //             </li>
        //           </ul>
        //         </div>
        //       </div>
        //     </div>

        //     {/* === Bottom Section === */}
        //     <div className="w-full flex flex-col sm:flex-row justify-between items-center text-center bg-gradient-text-description text-[14px] gap-2 mt-6">
        //       <p>Copyright © 2020 Paylinkly.com All Rights Reserved.</p>
        //     </div>
        //   </div>
        // </footer>

        <footer className="relative overflow-hidden pt-20 text-white">
            {/* Decorative Gradient Graphic (Positioned Absolute) */}
            <div className="pointer-events-none absolute right-0 bottom-0 z-0 h-full w-1/2">
                {/*
          NOTE: To include the complex background graphic, you must use a
          placeholder or apply it via a CSS class that loads the image/complex gradient.
          Since we are using ONLY Tailwind here, this is a placeholder for the visual effect.
        */}
                {/* <div
          className="absolute inset-0 bg-cover bg-right"
          // style={{
          //   backgroundImage: "url('/path/to/your/abstract/graphic.jpg')",
          //   // Alternatively, a gradient placeholder:
          //   // background: 'linear-gradient(225deg, rgba(116, 40, 143, 0.5), rgba(81, 209, 244, 0.5))'
          // }}
        > */}
                <img
                    className="absolute right-0 bottom-0 w-full object-contain"
                    src="/images/bg_images/footer_bg.webp"
                />
                {/* </div> */}
            </div>

            <div className="relative z-10 container mx-auto px-8">
                <div>
                    {/* Logo Section */}
                    <div className="mr-12 shrink-0">
                        {/* Replace with your actual logo component or image */}
                        <div className="mb-8 text-xl font-bold">
                            {/* This is a text placeholder for the METAMORPH SOLUTIONS logo/style */}
                            <img
                                src="/images/logo.svg"
                                className="w-48 object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-between border-b border-gray-800 pb-12">
                    {/* Navigation and Links Grid */}
                    <div className="flex grow flex-col justify-start gap-10 lg:flex-row lg:gap-24">
                        {/* Pages Column */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-gray-200">
                                Pages
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Services Column */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-gray-200">
                                Services
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        Graphic Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        UI/UX Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        Web & Mobile App
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        Software Development
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="transition duration-200 hover:text-white"
                                    >
                                        Digital Marketing
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media Column */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-gray-200">
                                Social Media
                            </h4>
                            <div className="flex space-x-4">
                                {/* Social Icons Placeholder */}

                                {quickLinks.map((item, index) => {
                                    //     <a
                                    //   href="#"
                                    //   className="text-gray-400 hover:text-white transition duration-200 w-10 h-10 glass card-gradient rounded-full bg-gray-800 flex items-center justify-center"
                                    // >
                                    //   {/* Telegram Icon (Placeholder) */}
                                    //   <span className="text-base">✈️</span>
                                    // </a>
                                    // <a
                                    //   href="#"
                                    //   className="text-gray-400 hover:text-white transition duration-200 w-10 h-10 glass card-gradient rounded-full bg-gray-800 flex items-center justify-center"
                                    // >
                                    //   {/* X/Twitter Icon (Placeholder) */}
                                    //   <span className="text-base">✖</span>
                                    // </a>
                                    // <a
                                    //   href="#"
                                    //   className="text-gray-400 hover:text-white transition duration-200 w-10 h-10 glass card-gradient rounded-full bg-gray-800 flex items-center justify-center"
                                    // >
                                    //   {/* Instagram Icon (Placeholder) */}
                                    //   <span className="text-base">📸</span>
                                    // </a>
                                    // <a
                                    //   href="#"
                                    //   className="text-gray-400 hover:text-white transition duration-200 w-10 h-10 glass card-gradient rounded-full bg-gray-800 flex items-center justify-center"
                                    // >
                                    //   {/* Facebook Icon (Placeholder) */}
                                    //   <span className="text-base">📘</span>
                                    // </a>
                                    return (
                                        <a
                                            href="#"
                                            className="glass card-gradient flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition duration-200 hover:text-white"
                                        >

                                            {/* Telegram Icon (Placeholder) */}
                                            <img src= {"/images/icons"+item["path"]+".svg"} className="text-base"/>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-2 mb-8 text-sm text-gray-500">
                    © 2025 metamorph. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
