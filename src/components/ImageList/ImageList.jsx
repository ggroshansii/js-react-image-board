import ImageCard from "../ImageCard/ImageCard.jsx";

function ImageList(props) {

    return (
            props.posts.map(post => {
                return <ImageCard key={post.id} imgURL={post.imgURL} imgCaption={post.imgCaption} />
            })
    )
}

export default ImageList;
