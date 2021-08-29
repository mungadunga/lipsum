import NewYork2140 from "./eBooks//NewYork2140/NewYork2140";
import HarryPotter from "./eBooks/HarryPotter/HarryPotter";
import TheMazeRunner from "./eBooks/TheMazeRunner/TheMazeRunner";
import TheScorchTrials from "./eBooks/TheScorchTrials/TheScorchTrials";
import TheDeathCure from "./eBooks/TheDeathCure/TheDeathCure";
import CrankPalace from "./eBooks/CrankPalace/CrankPalace";

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
}

const LIBRARY: iBook[] = [
   NewYork2140,
   HarryPotter,
   TheMazeRunner,
   TheScorchTrials,
   TheDeathCure,
   CrankPalace
]

export default LIBRARY;