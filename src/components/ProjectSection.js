import React, { useState } from 'react';

import { projectData } from '../data';
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import 'yet-another-react-lightbox/styles.css';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const slides = projectData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}))

const GallerySection = () => {
  const [index, setIndex] = useState(-1);

  const { title, images } = projectData;

  return (
    <section className='bg-[#ffffff] section relative mt-[40px] lg:mt-0'id='projects'>
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[370px] lg:mb-20 text-[#1F1B57]'>{title}
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='mb-8 lg:mb-20'>
        <PhotoAlbum
          onClick={(event, photo, index) => setIndex(index)}
          layout='rows'
          photos={images} />
        <Lightbox
          slides={slides}
          styles={{ container: { background: 'rgba(0,0,0,0.9)' } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
    </section>
  );
};

export default GallerySection;
