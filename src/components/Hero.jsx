import styles from "../css modules/Hero.module.css"

const bestMatchBtn = document.querySelector(`.${styles.bestMatch}`);
console.log(bestMatchBtn);

export function SearchBar (){
return(
    <div>
        <section className={styles.hero}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>ravenous</h1>
            </div>
            <div className={styles.filterContainer}>
                <button className={styles.filterBtn}><h3 className={`${styles.filterTitle} ${styles.bestMatch}`}>Best Match</h3></button>
                <button className={styles.filterBtn}><h3 className={styles.filterTitle}>Highest Rated</h3></button>
                <button className={styles.filterBtn}><h3 className={styles.filterTitle}>Most Reviewed</h3></button>
            </div>
            <hr className = {styles.hr}></hr>
            <div className={styles.searchContainer}>
                <input className={styles.searchBtn} placeholder="Search businesses"></input>
                <input className={styles.searchBtn} placeholder="Where?"></input>
            </div>
            <button className = {styles.letsGoBtn}><p className={styles.letsGoText}>Let's Go</p></button>
        </section>
    </div>
)
}