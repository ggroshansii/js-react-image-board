
import { useState } from 'react';

import ImageList from '../ImageList/ImageList.jsx';
import ImageForm from '../ImageForm/ImageForm.jsx';
import Header from '../Header/Header.jsx';


function ImageBoard() {

const [posts, setPosts] = useState([]);
const [count, setCounter] = useState(1)

// Create function that is going to pass down 'a method' to ImageForm, which will grab the value when submit is clicked 

// ImageBoard is going to have that data from ImageForm now, use that data to pass it down to ImageList, then to ImageCard

function addImageCard(imgURL, imgCaption) {
  const newImageCard = {id: count, imgURL, imgCaption}
  setPosts([...posts, newImageCard]);
  setCounter(prevCount => prevCount + 1);
}

  return (
    <div className="image-board">
      <Header />
      <ImageForm addImageCard={addImageCard}/>
      <ImageList posts={posts}/>
    </div>
  );
}

export default ImageBoard;
