import { useState } from "react"
import Link from "next/link"

const Navigation =()=>{

  const [openNav , setOpenNav] = useState(true)

  const toggleNav=()=>{
    if(openNav)
    {
      setOpenNav(false)
    }
    else
    {
      setOpenNav(true)
    }
    
  }
    return(
        <div>
            <nav className="bg-emerald-500 border-gray-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center">
                    <img className="w-8 h-8 mr-3" src="https://cdn-icons-png.flaticon.com/512/2780/2780137.png" alt=""></img>
                    <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">ADMIN GAME</span>
                </div>
                <button onClick={toggleNav} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className=" w-full md:block md:w-auto" id="navbar-default">
                {
                    openNav == true &&
                
                <ul className="flex flex-col md:p-4 mt-2  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <Link href={{ pathname: "../background" }} className="block py-2 pl-3 pr-4 rounded hover:text-white
                      hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Upload Background
                      </Link>
                    </li>

                    <li>
                      <Link href={{ pathname: "../partner" }} className="block py-2 pl-3 pr-4  rounded  hover:text-white
                      hover:text-white md:hover:bg-transparent md:border-0 md:hover:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Upload Partner
                      </Link>
                    </li>

                </ul>
                }
                </div>
            </div>
            </nav>

        </div>
    )
}

export default Navigation