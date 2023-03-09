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
    const[pn, setPn] = useState<any>()
    
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
                console.log(Object.values(snapshot.val()));
                console.log(pn)
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    }, []);

    return(
        <div className="mb-10">
            <p className="text-cyan-900 mt-10 mb-7  text-center md:text-3xl text-2xl font-bold">REVIEW CURRENT PARTNERS</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex-row ">
                    {/* {bg.map((anh) => (
                        <div key={anh}>
                            <p className="mt-4 mb-4 text-center md:text-lg text-sm font-semibold">
                            Name
                            </p>
                            {bg.length != 0 && <img className="mx-auto w-28 h-28 md:w-40 md:h-40" src={bg[0]}></img>}
                        </div>
                    ))}  */}
                </div>
            </div>
        </div>
    )
}

export default PartnerHomePage;