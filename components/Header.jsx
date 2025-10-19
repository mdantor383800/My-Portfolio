import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Nav } from './Nav'
import MobileNav from './MobileNav'

export const Header = () => {
  return (
    <header className='mx-4 md:mx-0 py-8 xl:py-12 text-white/90'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            Md Arif<span className='text-teal-400'>.</span>
          </h1>
        </Link>
        <div className='hidden items-center gap-8 xl:flex'>
          <Nav />
          <Link href="/contact">
            <Button className="text-[20px] text-white border border-white/30 bg-transparent hover:border-none cursor-pointer hover:bg-teal-400">Hire me</Button>
          </Link>
        </div>
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>

    </header>
  )
}
