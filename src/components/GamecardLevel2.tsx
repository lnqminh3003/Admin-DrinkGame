import {getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { useState } from "react";

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

const GameCardLevel2 =()=>{
    const [file, setFile] = useState<any | null>(null);
    const [blob, setBlob] = useState<string | undefined>();
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)

    let gamecardString = "card"
    const onSubmit = () => {
        if (file == null) {
          return;
        }
        setLoading(true);

        const fileRef = ref(storage,`/gameCard/${gamecardString}`);
        uploadBytes(fileRef, file)
              .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                  .then((url) => {
                    setSuccess(true);
                    setBlob("")
                    setLoading(false);
                  })
                  .catch((err) => {
                    console.log("get file url failed:", err);
                  });
              })
              .catch((err) => {
                console.log("upload file failed:", err);
              });
      };
      
    return (
        <div>

        </div>
    )
}

export default GameCardLevel2;