import Navigation from "@/components/navigation";
import OneCard from "@/components/GameCard";
import GameCardLevel1 from "@/components/GamecardLevel1";
import GameCardLevel2 from "@/components/GamecardLevel2";
import GameCardLevel3 from "@/components/GamecardLevel3";

const GameCard = ()=>{
    return(
        <div>
            <Navigation/>
            <p className="mt-10 mb-7 text-cyan-900 text-center md:text-3xl text-2xl font-bold">UPLOAD GAME CARD</p>
            <OneCard />
            <GameCardLevel1 />
            <GameCardLevel2/>
            <GameCardLevel3/>
        </div>
    )
} 

export default GameCard;