import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import Modal from './components/Modal';


function App() {
  const [selectedImg, setselectedImg] = useState(null);


  return (
    <div className="app">
      <Title />
      <UploadForm />
      <ImageGrid setselectedImg={setselectedImg} />
     { selectedImg && <Modal selectedImg={selectedImg} setselectedImg={setselectedImg} />}
    </div>
  );
}

export default App;
