// english
import NewYork2140 from "./eBooks/english/NewYork2140/NewYork2140";
import HarryPotterSaga from "./eBooks/english/HarryPotterSaga/HarryPotterSaga";
import TheMazeRunner from "./eBooks/english/TheMazeRunner/TheMazeRunner";
import TheScorchTrials from "./eBooks/english/TheScorchTrials/TheScorchTrials";
import TheDeathCure from "./eBooks/english/TheDeathCure/TheDeathCure";
import CrankPalace from "./eBooks/english/CrankPalace/CrankPalace";
import HungerGamesTrilogy from "./eBooks/english/HungerGamesTrilogy/HungerGamesTrilogy";
import TheLightningThief from "./eBooks/english/PercyJackson/TheLightningThief/01 the_lightning_thief";
import TheSeaOfMonsters from "./eBooks/english/PercyJackson/TheSeaOfMonsters/02 the_sea_of_monsters";
import TheTitansCurse from "./eBooks/english/PercyJackson/TheTitansCurse/03 the-titans-curse";
import TheBattleOfTheLabyrinth from "./eBooks/english/PercyJackson/TheBattleOfTheLabyrinth/04 the_battle_of_the_labyrinth";
import TheLastOlympian from "./eBooks/english/PercyJackson/TheLastOlympian/05 the_last_olympian";

// french
import Fr_HungerGames from "./eBooks/french/Fr_HungerGames/Fr_HungerGames";

interface iBook {
   title: string;
   author: string;
   collection?: string;
   category: string;
   language: string;
   description: string;
   summary: string;
   cover: any;
   downloadPDF: any;
   downloadKindle: any;
   downloadEPUB: any;
}

const DATA: iBook[] = [
   /* english */
   NewYork2140,
   HarryPotterSaga,
   TheMazeRunner,
   TheScorchTrials,
   TheDeathCure,
   CrankPalace,
   HungerGamesTrilogy,
   Fr_HungerGames,
   TheLightningThief,
   TheSeaOfMonsters,
   TheTitansCurse,
   TheBattleOfTheLabyrinth,
   TheLastOlympian,
]

export default DATA;