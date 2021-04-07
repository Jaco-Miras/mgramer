import React from 'react';
import '../css/ImageGrid.css';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

function ImageGrid({ setselectedImg }) {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className='imageGrid'>
            { docs && docs.map(doc => (
                <motion.div className="img__wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setselectedImg(doc.url)}
                >
                    <img src={doc.url} alt='upload' />
                </motion.div>
            )) }
        </div>
    )
}

export default ImageGrid;
  