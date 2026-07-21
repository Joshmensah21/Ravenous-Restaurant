<<<<<<< HEAD
import styles from "../css-modules/Business.module.css" 

export function Business({business}) {
  return (
    <div className = {styles.businessContainer}>
      <img src = {business.imageSrc} alt="Business" className = {styles.businessImg}/>
      <h2 className = {styles.businessName}>{business.name}</h2>
      <div className = {styles.businessBottom}>
        <div className = {styles.businessInfo}>
          <div className="Business-address">
            <p className={styles.businessAdd}>{business.address}</p>
            <p className={styles.businessAdd}>{business.city}</p>
            <p className={styles.businessAdd}>{business.state}</p>
            <p className={styles.businessAdd}>{business.zipCode}</p>
          </div>

        </div>
          <div className = {styles.businessReviews}>
            <h2 className = {styles.cuisine}>{business.cuisine}</h2>
            <h3 className = {styles.rating}>{business.rating}</h3>
            <p>{business.reviewCount}</p>
          </div>
        </div>
=======
import "../css modules/Business.module.css" 

export function Business({business}) {
  return (
    <div className="Business">
      <img src= {business.imageSrc} alt="Business" />
      <h2>{business.name}</h2>

      <div className="Business-address">
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{business.state}</p>
        <p>{business.zipCode}</p>
      </div>

      <div className="Business-reviews">
        <h3 className="rating">{business.rating}</h3>
        <p>{business.reviewCount}</p>
      </div>
>>>>>>> 5df83e935020d7818c1452bfb97cd6984043f208
    </div>
  );
}
 
