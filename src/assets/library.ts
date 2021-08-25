import NewYork2140 from "./eBooks//NewYork2140/NewYork2140";
import HarryPotter from "./eBooks/HarryPotter/HarryPotter";

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
   HarryPotter
]

export default LIBRARY;