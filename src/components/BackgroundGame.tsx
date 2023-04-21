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

  const storageRefImage = ref(storage,"gameCaro");
  const storageRefImage2 = ref(storage,"gameCard");

const BackgroundGame =()=>{
    const[bg, setBg] = useState(Array<string>)
    const[bg2, setBg2] = useState(Array<string>)
    
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

        listAll(storageRefImage2)
        .then(async (res) => {
        const { items } = res;
        const urls = await Promise.all(
            items.map((item) => getDownloadURL(item))
        );
            setBg2(urls)
        })
        .catch((error) => {
            console.log(error)
        });
    }, []);

    return(
        <div>
            <div className="flex justify-evenly">
                <div className="flex-row">
                    <p className="mt-4 mb-4 text-center md:text-lg text-sm font-semibold">
                        BACKGROUND CARO 
                    </p>
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg[0]}></img>}
                </div>
                <div className="flex-row">
                    <p className="mt-4 mb-4 text-center md:text-lg text-sm font-semibold">
                        BACKGROUND CARD 
                    </p>
                    {bg.length != 0 && <img className="w-36 h-76 md:w-72 md:h-128" src={bg2[0]}></img>}
                </div>
            </div>

        </div>
    )
}

export default BackgroundGame;