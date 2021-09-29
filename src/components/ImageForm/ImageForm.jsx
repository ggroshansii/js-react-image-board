function ImageForm(props) {



    return (
        <>
            <div className="form-container">
                <div className="form-center">
                    <label htmlFor="image-url"></label>
                    <input id="image-url" type="text" name="imgURL" />
                    <input type="text" name="imgCaption"/>
                    <button className="cancel-btn">Cancel</button>
                    <button className="add-image-btn" onClick={props.addImageCard}>Add Image</button>
                </div>
            </div>
        </>
    );
}

export default ImageForm;
