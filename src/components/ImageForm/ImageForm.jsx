import { useState } from "react";

function ImageForm(props) {
    const [imgURL, setImgURL] = useState();
    const [imgCaption, setImgCaption] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        props.addImageCard(imgURL, imgCaption);
    }

    return (
        <>
            <div className="form-container">
                <div className="form-center">
                    <form action="">
                        <label htmlFor="image-url"></label>
                        <input
                            id="image-url"
                            type="text"
                            name="imgURL"
                            value={imgURL}
                            onChange={(e) => setImgURL(e.target.value)}
                        />
                        <label htmlFor="imgCaption"></label>
                        <input
                            id="img-caption"
                            type="text"
                            name="imgCaption"
                            value={imgCaption}
                            onChange={(e) => setImgCaption(e.target.value)}
                        />
                        <button type="cancel" className="cancel-btn">Cancel</button>
                        <button type="submit" className="add-image-btn" onClick={handleSubmit}>Add Image</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ImageForm;
