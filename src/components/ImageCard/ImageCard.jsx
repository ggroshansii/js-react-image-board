import "./ImageCard.css";

function ImageCard(props) {
    return (
        <>
            <div className="image-card">
                <div className="image-partition">
                    <img src={props.imgURL} alt="" />
                    
                </div>
                <p>{props.imgCaption}</p>
            </div>
        </>
    );
}

export default ImageCard;
