<<<<<<< HEAD
import styles from "../css-modules/BusinessList.module.css";
import {Business} from "./Business.jsx";

export function BusinessList ({businesses}){
    
    return (
        <div className = {styles.parentContainer}>
            <div className = {styles.listContainer}>
                {businesses.map((business)=>{ 
                    return(
                            <div>
                                <Business business={business}/>
                            </div>
            
                    )
                })}

            </div>
        </div>

        );
=======
import "../css modules/BusinessList.module.css" 
import {Business} from "./Business.jsx"

export function BusinessList ({businesses}){

return businesses.map((business)=>{
    return <div>
            <Business business={business}/>
        </div>
    })
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
}

