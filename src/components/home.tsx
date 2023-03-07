import Link from "next/link";

const HomePage =()=>{
    return(
        <div>
            <div className="flex justify-evenly mt-5" >
                <button  data-modal-toggle="defaultModal" type="button" className=" bg-emerald-400 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Link href={{ pathname: "../background" }} className="block py-2 pl-3 pr-4 rounded hover:text-white
                        hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Upload Background
                    </Link>
                </button>

                <button  data-modal-toggle="defaultModal" type="button" className=" bg-emerald-400 hover:bg-emerald-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Link href={{ pathname: "../partner" }} className="block py-2 pl-3 pr-4 rounded hover:text-white
                        hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Upload Partner
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default HomePage;