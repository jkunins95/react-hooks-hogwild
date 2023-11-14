const Hog = ({ name, image, specialty, weight, greased, highest}) => {
  return ( 
    <div className="ui card eight wide column">
      <div className="hog img container">
        <img className="hog-img" src={image} alt="Hog Image" />
      </div>
      <div className="details container">
        <h3>{name}</h3>
        <p>{specialty}</p>
        <p>{weight}</p>
        <p>{greased}</p>
        <p>{highest}</p>
      </div>
    </div>
  );
}

export default Hog;