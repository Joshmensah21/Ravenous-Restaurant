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
}

