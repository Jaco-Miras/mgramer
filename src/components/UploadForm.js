import React, { useState } from 'react';
import '../css/UploadForm.css';
import ProgressBar from '../components/ProgressBar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file');
        }
        // console.log(selected);
    }

    return (
        <div className='uploadForm'>
            <form>
                {/* <label>
                <input type='file' className='uploadForm__input' onChange={changeHandler} />
                <span>+</span>
                </label> */}
                <div className="output">
                    { error && <div className="error">{ error }</div> }
                    { file && <div className='uploadForm__filename'>{file.name}</div> }
                    { file && <ProgressBar file={file} setFile={setFile} /> }
                </div>
            </form>
        </div>
    )
}

export default UploadForm;
