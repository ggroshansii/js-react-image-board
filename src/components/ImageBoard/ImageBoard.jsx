
import ImageList from '../ImageList/ImageList.jsx';
import ImageForm from '../ImageForm/ImageForm.jsx';
import Header from '../Header/Header.jsx';


function ImageBoard() {
  return (
    <div className="App">
      <Header />
      <ImageForm />
      <ImageList />
    </div>
  );
}

export default ImageBoard;
