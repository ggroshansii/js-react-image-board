import ImageCard from "../ImageCard/ImageCard.jsx";

function ImageList(props) {
    console.log(props.posts)
    return (
            props.posts.map(post => {
                return <ImageCard imgURL={post[0]} />
            })
    )
}

export default ImageList;
