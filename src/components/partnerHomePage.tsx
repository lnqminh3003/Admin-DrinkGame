import Link from "next/link";
import {getStorage, getDownloadURL, ref, uploadBytes, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from 'react';
import { getDatabase ,  ref as ref_database, set, update, child, get } from "firebase/database";

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

  const storageRefImage = ref(storage,"partner");

const PartnerHomePage =()=>{
    const[pn, setPn] = useState([{}])
    
    useEffect(() => {
        // listAll(storageRefImage)
        // .then(async (res) => {
        // const { items } = res;
        // const urls = await Promise.all(
        //     items.map((item) => getDownloadURL(item))
        // );
        //     setBg(urls)
        // })
        // .catch((error) => {
        //     console.log(error)
        // });

        get(child(ref_database(db), `partner`)).then((snapshot) => {
            if (snapshot.exists()) {
                setPn(Object.values(snapshot.val()))
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }, [pn]);

    return(
        <div className="mb-10">
            <p className="text-cyan-900 mt-10 mb-7  text-center md:text-3xl text-2xl font-bold">REVIEW CURRENT PARTNERS</p>
            <div className="flex flex-col items-center ">
                    {pn.map((anh:any) => (
                        <div key={anh} className="flex justify-around">
                            {pn.length != 0 && <img className=" w-20 h-20 md:w-32 md:h-32" src={anh["urlImage"]}></img>}
                            <div className="md:w-52 w-32 mb-10  grid place-items-center md:text-lg text-sm font-semibold">
                                {anh["namePartner"]}
                            </div>
                            {pn.length != 0 && <img className="mb-10 w-20 h-20 md:w-32 md:h-32" src={anh["urlVoucher"]}></img>}
                        </div>
                    ))} 
            </div>
        </div>
    )
}

export default PartnerHomePage;