import { useState } from 'react';

const Partner =()=>{
    const [partner,setPartner] = useState("");

    const onSubmitPartner =()=>{

    }
    return(
        <div>
            <p className="ml-7 font-bold text-2xl">PARTNERS</p>
            <input 
                value={partner}   
                onChange={e=>setPartner(e.target.value)}
            />
            <button onClick={onSubmitPartner} data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Let's go
            </button>
        </div>
    )
}

export default Partner;