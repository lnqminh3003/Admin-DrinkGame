import StorageScene1 from "@/components/storageScene1";
import StorageScene2 from "@/components/storageScene2";
import Navigation from "@/components/navigation";

const Background = ()=>{
    return(
        <div>
            <Navigation/>
            <p className="mt-10 mb-7 text-cyan-900 text-center md:text-3xl text-2xl font-bold">UPLOAD BACKGROUND</p>
            <StorageScene1/>
            <StorageScene2/>
        </div>
    )
} 

export default Background;