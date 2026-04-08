import styles from "../css modules/Hero.module.css"
import { useState } from "react";

//PARENT COMPONENT (Cooking Pot)
export function SearchBar (){
    const [filter, updateFilterState] = useState("bestMatch");
    const [searchTerm, updateSearchTerm] = useState ("");
    const [location, updateLocation] = useState ("")
    const [normalCTA, updateCTA] = useState("not pressed");

    const activeFilterHandler = (value) => {
        updateFilterState(value);
    }

    function termEventHandler (event){
        const userInput = event.target.value;
        updateSearchTerm(userInput);
    }

    function locationEventHandler (event){
        const newLocation = event.target.value;
        updateLocation(newLocation);
    }

    function searchBtnHandler (event){
        event.preventDefault()
        updateCTA("pressed"); 
        setTimeout(() => updateCTA("not pressed"), 250);
        console.log(`Searching Yelp with ${searchTerm}, ${location}, ${filter}`);
    }

    return(
        <div className={styles.activeLayer} isActive = {normalCTA === "pressed"}> {/*trying to implement cursor: progress feature across whole page when a CTA button is clicked */}
            <section className={styles.hero}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>ravenous</h1>
                </div>
                <div className={styles.filterContainer}>
                    <FilterButton 
                        label = "Best Match" 
                        value = "bestMatch"
                        isActive = {filter === "bestMatch"}
                        onClick = {activeFilterHandler}
                    />
                    <FilterButton 
                        label = "Highest Rated" 
                        value = "highestRated"
                        isActive = {filter === "highestRated"} 
                        onClick = {activeFilterHandler}
                    />
                    <FilterButton 
                        label = "Most Reviewed" 
                        value = "mostReviewed"
                        isActive = {filter === "mostReviewed"}
                        onClick = {activeFilterHandler}
                    />
                </div>
                
                <div className={styles.searchContainer}>
                    <input 
                        className={styles.searchBtn} 
                        value={searchTerm} 
                        onChange = {termEventHandler} 
                        placeholder="Search businesses"></input>
                    <input 
                        className={styles.searchBtn} 
                        value={location} 
                        onChange = {locationEventHandler} 
                        placeholder="Where?"></input>
                </div>
                <CTAButton 
                    isClicked = {normalCTA === "pressed"} 
                    onClick = {searchBtnHandler}
                    
                />
                {console.log ( "AFTER: " + normalCTA)}
                
            </section>
        </div>
    
)

}

//CHILD COMPONENTS (ingredients)

function FilterButton ({ label, value, isActive, onClick }){
    return(
            <li className = {`${styles.filterBtn} ${isActive ? styles.filterActive:""}`} onClick={()=> onClick(value)}>
                <h3 className = {styles.filterTitle}>{label}</h3>
            </li>
        
    )
}

function CTAButton ({isClicked, onClick, isHovered, onHover}){
    
    return(
            <button className = {`${styles.letsGoBtn} ${isClicked?  styles.letsGoBtnActive : ""} ${isHovered? styles.letsGoBtnHover : ""}`} onClick={onClick} mouseOver={onHover}>Let's Go</button>
    )
}
