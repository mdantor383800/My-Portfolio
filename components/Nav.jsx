"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name:"home",
        path:"/",
    },
     {
        name:"services",
        path:"/services",
    },
     {
        name:"resume",
        path:"/resume",
    },
     {
        name:"projects",
        path:"/projects",
    },
     {
        name:"contact",
        path:"/contact",
    },
]

export const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
        {links.map((link, index) => {
            return ( <Link 
                        href={link.path} 
                        key={index}
                        className={`${link.path === pathname && "text-teal-400 border-b-2 border-teal-400"} capitalize font-medium hover:text-teal-400 transition-all text-[22px]`}
                        >
                            {link.name}
                    </Link>
          )
        })}
    </nav>
  )
}
 