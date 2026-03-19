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
    </div>
  );
}
 
