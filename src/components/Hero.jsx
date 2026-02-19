import styles from "../css modules/Hero.module.css"
import { useState } from "react";

function FilterButton ({ label, isActive, onClick }){
    return(
            <li className= {`${styles.filterBtn} ${isActive? styles.active : ""}`} onClick={onClick}>
                <h3 className = {styles.filterTitle}>{label}</h3>
            </li>
        
    )
}

export function HeroSection (){
    const [activeFilter, updateFilterState ]= useState("bestMatch"); 
    return(
    <div>
        <section className={styles.hero}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>ravenous</h1>
            </div>
            <div className={styles.filterContainer}>
                <FilterButton 
                    label = "Best Match" isActive = {activeFilter === "bestMatch"} onClick = {() => updateFilterState("bestMatch")}
                />
                <FilterButton 
                    label = "Highest Rated" isActive = {activeFilter === "highestRated"} onClick = {() => updateFilterState("highestRated")}
                />
                <FilterButton 
                    label = "Most Reviewed" isActive = {activeFilter === "mostReviewed"} onClick = {() => updateFilterState("mostReviewed")}
                />
            </div>
            {/*<hr className = {styles.hr}></hr>*/}
            <div className={styles.searchContainer}>
                <input className={styles.searchBtn} placeholder="Search businesses"></input>
                <input className={styles.searchBtn} placeholder="Where?"></input>
            </div>
            <button className = {styles.letsGoBtn}><p className={styles.letsGoText}>Let's Go</p></button>
        </section>
    </div>
)
}
