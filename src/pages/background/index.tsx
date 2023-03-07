import StorageScene1 from "@/components/storageScene1";
import StorageScene2 from "@/components/storageScene2";
import Navigation from "@/components/navigation";

const Background = ()=>{
    return(
        <div>
            <Navigation/>
            <StorageScene1/>
            <StorageScene2/>
        </div>
    )
} 

export default Background;