import Acordeon from "../ui/aboutMe/acordeon";
import { SellCard } from "../ui/portafolio/sellCard";
import {productData} from "@/app/lib/data";

export default function Portafolio (){




    return(
        <div className="flex w-full h-full flex-col items-center justify-center">
          <SellCard data={productData}/>
      </div>
    )
}