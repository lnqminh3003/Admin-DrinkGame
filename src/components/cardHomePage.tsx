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
  const storageRefImage = ref(storage,"gameCard");

const CardHomePage =()=>{
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
            <p className="mt-10 mb-7 text-cyan-900 text-center md:text-3xl text-2xl font-bold">REVIEW GAME CARD</p>
            <p className=" mb-4 text-cyan-900 text-center md:text-2xl text-xl font-bold">LEVEL 1 </p>
            <div className="flex justify-evenly">
                <div className="flex-row">
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[2]}></img>}
                </div>
                <div className="flex-row">
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[3]}></img>}
                </div>
            </div>

            <p className=" mt-10 mb-4 text-cyan-900 text-center md:text-2xl text-xl font-bold">LEVEL 2 </p>
            <div className="flex flex-wrap justify-around">
                <div className="flex-row">
                    {bg.length != 0 && <img className="mb-3 w-36 h-76 md:w-72 md:h-128" src={bg[4]}></img>}
                </div>
                <div className="flex-row">
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[5]}></img>}
                </div>
                <div className="flex-row">
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[6]}></img>}
                </div>
            </div>

            <p className=" mt-10 mb-4 text-cyan-900 text-center md:text-2xl text-xl font-bold">LEVEL 3 </p>
            <div className="flex flex-wrap justify-around">
                <div className="flex-row">
                    {bg.length != 0 && <img className="mb-3 w-36 h-76 md:w-72 md:h-128" src={bg[7]}></img>}
                </div>
                <div className="flex-row">
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[8]}></img>}
                </div>
                <div className="flex-row">
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[9]}></img>}
                </div>
                <div className="flex-row">
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[10]}></img>}
                </div>
            </div>
        </div>
    )
}

export default CardHomePage;