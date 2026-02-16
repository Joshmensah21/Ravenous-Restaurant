import {businessesArr} from "../data/businesses.js"
import Business from "./Business.jsx"
import "../css modules/BusinessList.module.css" 

export function BusinessList (){

return(
    businessesArr.map((business)=>{
        return <Business business={business}/>
    })
)

}