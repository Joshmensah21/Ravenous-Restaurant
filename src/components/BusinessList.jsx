import "../css modules/BusinessList.module.css" 
import {Business} from "./Business.jsx"

export function BusinessList ({businesses}){

return businesses.map((business)=>{
    return <div>
            <Business business={business}/>
        </div>
    })
}

