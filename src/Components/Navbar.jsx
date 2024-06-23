"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    console.log(pathName)
    const links = [
        {
            title: "About",
            path : '/about'
        },
        {
            title: "Services",
            path : '/services'
        },
        {
            title: "Contact",
            path : '/contact'
        },
        {
            title: "Blogs",
            path : '/blogs'
        },
    ]

    const handler = () => {
        router.push('/about')
    }
  return (
    <div>
      <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
        <h6><a href="/">Next <span className="text-cyan-500">Hero</span></a></h6>
        <ul className="flex gap-4">
          {
            links.map((link) => <Link className={`${pathName === link.path ? 'text-cyan-500' : ''}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
        </ul>
        <button onClick={handler} className="bg-white text-cyan-500 p-4">About</button>
      </nav>
    </div>
  );
};

export default Navbar;
