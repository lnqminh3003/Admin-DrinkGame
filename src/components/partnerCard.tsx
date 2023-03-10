import Link from "next/link";
import {getStorage, getDownloadURL, ref as ref_storage, deleteObject,uploadBytes, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from 'react';
import { getDatabase ,  ref , set, update, child, get, orderByChild, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDutQ3shZzF17DjRqvikORibJLRbZTGk10",
    authDomain: "drink-game-29b92.firebaseapp.com",
    databaseURL: "https://drink-game-29b92-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "drink-game-29b92",
    storageBucket: "drink-game-29b92.appspot.com",
    messagingSenderId: "194346987215",
    appId: "1:194346987215:web:e4acbd28e9e7dc211bd1ba"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage();

const db = getDatabase();


const PartnerCard =({ name, urlImage, urlVoucher }: {urlVoucher:string, urlImage: string , name:string}) =>{
    const[anh,setAnh] = useState(false)
    const[success, setSuccess]= useState(false)

    const DeleteAnh =()=>{
        var refPartner = ref(db,`partner/${name}`)
        set(refPartner, {
        })
        .then(()=>{
            const httpsReference = ref_storage(storage, urlImage);
            deleteObject(httpsReference)
            .then(() => {
                const r = ref_storage(storage, urlVoucher);
                deleteObject(r)
                .then(() => {
                    setSuccess(true);
                    setAnh(false);
                })
                .catch((error) => {
                    console.log(error)
                });
            })
            .catch((error) => {
                console.log(error)
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    return (
        <div  className="flex justify-around">
            <button onClick={()=>setAnh(true)} className="w-20 h-20 md:w-32 md:h-32">
                <img className=" w-20 h-20 md:w-32 md:h-32" src={urlImage}></img>
            </button>
            <button onClick={()=>setAnh(true)} className="md:w-52 w-32 mb-10  grid place-items-center md:text-lg text-sm font-semibold">
                {name}
            </button>
            <button onClick={()=>setAnh(true)} className="mb-10 w-20 h-20 md:w-32 md:h-32">
                <img className=" w-20 h-20 md:w-32 md:h-32" src={urlVoucher}></img>
            </button>
             
             {anh &&
                <div className="grid place-items-center bg-neutral-700 bg-opacity-60 fixed top-0 left-0 right-0 z-50 w-full p-4 overflw-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative bg-pink-100 rounded-lg shadow dark:bg-gray-700 md:w-bg w-80 grid place-items-center">
                    <div  className="mt-6 mb-2 items-center text-2xl font-semibold">
                        {name}
                    </div>
                  <div className="flex items-start  border-b rounded-t dark:border-gray-600">
                    <img 
                        className="object-scale-down md:h-card md:h-96 h-72 w-full object-center rounded "
                        src={urlImage}
                        alt=""
                     />
                  </div>
                  <div className="flex items-center p-6 space-x-2  rounded-b dark:border-gray-600">
                    <button 
                    onClick={()=>setAnh(false)}
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        OK
                    </button>
                    <button 
                    onClick={DeleteAnh}
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-white bg-red-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        DELETE ANH
                    </button>
                  </div>
                </div>
              </div>
            }
            {success && 
                <div className="grid place-items-center bg-neutral-700 bg-opacity-40 fixed top-0 left-0 right-0 z-50 w-full p-4 overflw-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative bg-white rounded-lg shadow  w-96 grid place-items-center">
                  <div className="flex items-start p-4 border-b rounded-t dark:border-gray-600">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
                      className="p-1 rounded h-11 w-11"
                      alt="..."
                    />
                    <h3 className="text-xl font-semibold pt-2 pl-4 text-gray-900 ">
                      Delete 
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="font-semibold text-base leading-relaxed">
                      SUCCESSFUL
                    </p>
                  </div>
                  <div className="flex items-center p-6 space-x-2  rounded-b dark:border-gray-600">
                    <button onClick={()=>setSuccess(false)}
                      data-modal-toggle="defaultModal"
                      type="button"
                      className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Let's go
                    </button>
                  </div>
                </div>
              </div>
            }
        </div>
    )
}

export default PartnerCard;