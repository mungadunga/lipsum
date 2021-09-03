// english
import NewYork2140 from "./eBooks/english/NewYork2140/NewYork2140";
import HarryPotterSaga from "./eBooks/english/HarryPotterSaga/HarryPotterSaga";
import TheMazeRunner from "./eBooks/english/TheMazeRunner/TheMazeRunner";
import TheScorchTrials from "./eBooks/english/TheScorchTrials/TheScorchTrials";
import TheDeathCure from "./eBooks/english/TheDeathCure/TheDeathCure";
import CrankPalace from "./eBooks/english/CrankPalace/CrankPalace";
import HungerGamesTrilogy from "./eBooks/english/HungerGamesTrilogy/HungerGamesTrilogy";

// french
import HungerGames from "./eBooks/french/HungerGames/HungerGames";

interface iBook {
   title: string;
   author: string;
   category: string;
   language: string;
   description: string;
   summary: string;
   cover: any;
   downloadPDF: any;
   downloadKindle: any;
   downloadEPUB: any;
}

const LIBRARY: iBook[] = [
   /* english */
   NewYork2140,
   HarryPotterSaga,
   TheMazeRunner,
   TheScorchTrials,
   TheDeathCure,
   CrankPalace,
   HungerGamesTrilogy,

   /* french */
   HungerGames
]

export default LIBRARY;