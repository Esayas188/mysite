
// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";

// const navLinks = [
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Projects",
//     path: "#projects",
//   },
//   {
//     title: "Contact",
//     path: "#contact",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="fixed mx-auto border  top-0 left-0 right-0 z-10  bg-white bg-opacity-100">
//       <div className="flex container lg:py-4 flex-wrap items-center  mx-auto px-4 py-2">

//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <Bars3Icon className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(false)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <XMarkIcon className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   );
// };

// export default Navbar;
import { useEffect, useState } from 'react'
import logo from "../../public/images/projects/logo3.png"

export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "About", path: "#about" },
        { title: "Projects", path: "#projects" },
        { title: "Resume", path: "/images/newresume.pdf" },
        
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])

    return (
        <nav className={`bg-white pb-5 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex flex-row items-center justify-center py-5 ">
                    <a href="javascript:void(0)">
                        <img
                            src={logo}
                            width={60}
                            height={30}
                            alt="Float UI logo"
                        />
                        
                    </a>
                    <p className=' text-lg font-bold ml-[5px] tracking-normal leading-tight '>ESAYAS <br />FEKADE</p>
                    <div className="md:hidden">
                        <button className="menu-btn text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 items-center  mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                    <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 text-base hover:text-gray-900">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex-1 gap-x-6 items-center justify-center mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        <a href="/#contact" className="flex items-center justify-center gap-x-1 py-[10px] px-[40px] text-black font-normal text-base bg-white-800 shadow-sm shadow-current drop-shadow-2xl hover:bg-gray-100 active:bg-gray-900 rounded-lg md:inline-flex">
                            Start New Project
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}