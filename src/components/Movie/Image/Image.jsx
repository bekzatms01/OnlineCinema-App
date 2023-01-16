const Image = ({ image, altName }) => {
  return <>
    {image && <img src={image} alt={altName} />}
    
  </>
};

export default Image;
