import Link from "next/link";
import {getStorage, getDownloadURL, ref, uploadBytes, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from 'react';

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

  const storageRefImage = ref(storage,"image");

const HomePage =()=>{
    const[bg, setBg] = useState(Array<string>)
    
    useEffect(() => {
        listAll(storageRefImage)
        .then(async (res) => {
        const { items } = res;
        const urls = await Promise.all(
            items.map((item) => getDownloadURL(item))
        );
            setBg(urls)
        })
        .catch((error) => {
            console.log(error)
        });
    }, []);

    return(
        <div>
            <p className="mt-10 mb-7 text-emerald-700 text-center md:text-3xl text-2xl font-bold">REVIEW CURRENT BACKGROUND</p>
            <div className="flex justify-evenly">
                <div className="flex-row">
                    <p className="mt-4 mb-4 text-center md:text-xl text-sm font-semibold">
                        BACKGROUND SCENE 1
                    </p>
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[0]}></img>}
                </div>
                <div className="flex-row">
                    <p className="mt-4 mb-4 text-center md:text-xl text-sm font-semibold">
                        BACKGROUND SCENE 2
                    </p>
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[1]}></img>}
                </div>
            </div>
        </div>
    )
}

export default HomePage;