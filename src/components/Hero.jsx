import styles from "../css modules/Hero.module.css"
import { useState } from "react";

//PARENT COMPONENT (Cooking Pot)
export function HeroSection (){
    const [activeFilter, updateFilterState ] = useState("bestMatch"); 
    const [normalCTA, updateCTA] = useState("not pressed");
    const handleClick = () => {updateCTA("pressed"); setTimeout(() => updateCTA("not pressed"), 250)}; 
    {console.log ( "BEFORE: " + normalCTA)}
    return(
    <div className={styles.activeLayer} isActive = {normalCTA === "pressed"}> {/*trying to implement cursor: progress feature across whole page when a CTA button is clicked */}
        <section className={styles.hero}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>ravenous</h1>
            </div>
            <div className={styles.filterContainer}>
                <FilterButton 
                    label = "Best Match" 
                    isActive = {activeFilter === "bestMatch"} 
                    onClick = {() => updateFilterState("bestMatch")}
                />
                <FilterButton 
                    label = "Highest Rated" 
                    isActive = {activeFilter === "highestRated"} 
                    onClick = {() => updateFilterState("highestRated")}
                />
                <FilterButton 
                    label = "Most Reviewed" 
                    isActive = {activeFilter === "mostReviewed"} 
                    onClick = {() => updateFilterState("mostReviewed")}
                />
            </div>
            {/*<hr className = {styles.hr}></hr>*/}
            <div className={styles.searchContainer}>
                <input className={styles.searchBtn} placeholder="Search businesses"></input>
                <input className={styles.searchBtn} placeholder="Where?"></input>
            </div>
            <CTAButton 
                isClicked = {normalCTA === "pressed"} 
                onClick = {handleClick}

            />
            {console.log ( "AFTER: " + normalCTA)}
            
        </section>
    </div>
    
)

}

//CHILD COMPONENTS (ingredients)

function FilterButton ({ label, isActive, onClick }){
    return(
            <li className = {`${styles.filterBtn} ${isActive? styles.filterActive : ""}`} onClick={onClick}>
                <h3 className = {styles.filterTitle}>{label}</h3>
            </li>
        
    )
}

function CTAButton ({isClicked, onClick}){
    
    return(
            <button className = {`${styles.letsGoBtn} ${isClicked?  styles.letsGoBtnActive : ""}`} onClick={onClick}>Let's Go</button>
    )
}
