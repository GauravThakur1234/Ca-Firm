"use client"

import { useEffect, useRef, useState } from 'react'
import "./Nav.css"
import Link from 'next/link'

export default () => {

  const [state, setState] = useState(false)
  const navRef = useRef()


  useEffect(() => {
      
      const body = document.body

      const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
      if (state) body.classList.add(...customBodyStyle)
      else body.classList.remove(...customBodyStyle)

      const customStyle = ["sticky-nav", "fixed", "border-b"]
      window.onscroll = () => {
          if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
          else navRef.current.classList.remove(...customStyle)
      }
    }, [state])
    

  return (
      <nav ref={navRef} className="bg-white w-full top-0 z-20">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
              <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                    <span className='text-3xl text-indigo-600 font-bold'><Link href="/">Chanderkant & Associates</Link>

					</span>
                  <div className="lg:hidden">
                     
                  </div>
              </div>
              <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto`}>
                    <div className="flex-1">
                        <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            {/* {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                            <a href={item.path}>
                                                { item.title }
                                            </a>
                                        </li>
                                    )
                                })
                            } */}

							<Link href="/about">About</Link>
							<Link href="/contact">Contact</Link>
							<Link href="/peoples">People</Link>
							<Link href="/features">Features</Link>


                        </ul>
                    </div>
              </div>
          </div>
      </nav>
  )
}
