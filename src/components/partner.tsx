import { useState } from 'react';
import { initializeApp } from "firebase/app";
import {getStorage, getDownloadURL, ref as ref_storage, uploadBytes, FirebaseStorage } from "firebase/storage";
import { getDatabase ,  ref as ref_database, set, update } from "firebase/database";
import { v4 as uuid } from 'uuid';

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
    

const Partner =()=>{
    const [partner,setPartner] = useState("");
    const [file, setFile] = useState<any | null>(null);
    const [blob, setBlob] = useState<string | undefined>();

    const [file2, setFile2] = useState<any | null>(null);
    const [blob2, setBlob2] = useState<string | undefined>();

    const [success,setSuccess] = useState(false)

    const onSubmitPartner =()=>{
        if (file == null) {
            return;
        }
        else if(file2 == null)
        {
          return;
        }
        
        var voucherName = `${partner}_voucher`;

        const fileRef =  ref_storage(storage,`/partner/${partner}`);
        const fileRef2 =  ref_storage(storage,`/voucher/${voucherName}`);

          uploadBytes(fileRef, file)
                .then((snapshot) => {
                  getDownloadURL(snapshot.ref)
                    .then((url) => {

                      uploadBytes(fileRef2, file2)
                      .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                          .then((url2) => {
      
                              const unique_id = uuid();
                              set(ref_database(db, `partner/`+ unique_id), {
                                  namePartner : partner,
                                  urlImage : url,
                                  urlVoucher : url2
                              })
                              .then(()=>{
                                  setSuccess(true);
                                  setPartner("") 
                                  setBlob(undefined) 
                                  setBlob2(undefined) 
                              })
                              .catch((error)=>{
                                  console.log(error);
                              });
      
                          })
                      })
                      .catch((err) => {
                        console.log("upload file failed:", err);
                      });

                    })
                    .catch((err) => {
                      console.log("get file url failed:", err);
                    });
                })
                .catch((err) => {
                  console.log("upload file failed:", err);
                });

                
    }

    const okButton =()=>{
        setSuccess(false)
    }
    return(
        <div>
        <p className="mt-10 mb-7 text-cyan-900 text-center md:text-3xl text-2xl font-bold">UPLOAD PARTNER</p>
        
        <div className="ml-14 items-center w-72 h-72 md:w-72 md:h-72">
            <div className="items-center w-72 h-72 md:w-72 md:h-72">
            <p className="font-bold mb-3 md:text-xl">Logo partner</p>
                <label className="mb-4 rounded-lg items-center justify-center flex flex-col w-full h-full border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  {blob ? (
                    <img
                      className="object-cover items-center justify-center w-full h-full"
                      src={blob}
                      alt=""
                    ></img>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>

                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Logo Partner
                      </p>
                    </div>
                  )}

                  <input
                    type="file"
                    className="opacity-0 max-h-0"
                    onChange={(ev) => {
                      try {
                        if (
                          ev.target.files == null ||
                          ev.target.files == undefined
                        ) {
                          return;
                        }

                        const reader = new window.FileReader();
                        reader.readAsArrayBuffer(ev.target.files[0]);
                        reader.onloadend = () => {
                          const res = reader.result!;
                          if (typeof res == "string") {
                            return;
                          }

                          const blob = new Blob([res]);
                          setBlob(URL.createObjectURL(blob));
                        };

                        setFile(ev.target.files![0]);
                      } catch {
                        console.log("Yo yo, đi nấu đá không ae?");
                      }
                    }}
                  />
                </label>

                <p className="font-bold mb-3 md:text-xl">QR Voucher</p>
                <label className="mb-4 rounded-lg items-center justify-center flex flex-col w-full h-full border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  {blob2 ? (
                    <img
                      className="object-cover items-center justify-center w-full h-full"
                      src={blob2}
                      alt=""
                    ></img>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>

                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        QR Voucher
                      </p>
                    </div>
                  )}

                  <input
                    type="file"
                    className="opacity-0 max-h-0"
                    onChange={(ev) => {
                      try {
                        if (
                          ev.target.files == null ||
                          ev.target.files == undefined
                        ) {
                          return;
                        }

                        const reader = new window.FileReader();
                        reader.readAsArrayBuffer(ev.target.files[0]);
                        reader.onloadend = () => {
                          const res = reader.result!;
                          if (typeof res == "string") {
                            return;
                          }

                          const blob = new Blob([res]);
                          setBlob2(URL.createObjectURL(blob));
                        };

                        setFile2(ev.target.files![0]);
                      } catch {
                        console.log("Yo yo, đi nấu đá không ae?");
                      }
                    }}
                  />
                </label>
                <input 
                    className=" mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500" placeholder="name partner"
                    value={partner}   
                    onChange={e=>setPartner(e.target.value)}
                />
                <button onClick={onSubmitPartner} data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit
                </button>
              </div>
            </div>
            
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
                      Upload 
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="font-semibold text-base leading-relaxed">
                      SUCCESSFUL
                    </p>
                  </div>
                  <div className="flex items-center p-6 space-x-2  rounded-b dark:border-gray-600">
                    <button onClick={okButton}
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

export default Partner;

