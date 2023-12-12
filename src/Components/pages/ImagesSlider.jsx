import React, { useState, useRef } from 'react';


function ImagesSlider() {
    const sliderRef = useRef(null);
    console.log(sliderRef) 
    const [images, setImages] = useState([
        {
            id: 1,
            url: 'https://source.unsplash.com/random/800x600/?school',
            alt: 'Nature Image 1',
        },
        {
            id: 2,
            url: 'https://source.unsplash.com/random/800x600/?college',
            alt: 'Travel Image 1',
        },
        {
            id: 3,
            url: 'https://source.unsplash.com/random/800x600/?technology',
            alt: 'Technology Image 1',
        },
        {
            id: 4,
            url: 'https://source.unsplash.com/random/800x600/?nature',
            alt: 'Technology Image 1',
        },
        {
            id: 5,
            url: 'https://source.unsplash.com/random/800x600/?travel',
            alt: 'Technology Image 1',
        },
        {
            id: 6,
            url: 'https://source.unsplash.com/random/800x600/?city',
            alt: 'Technology Image 1',
        },
        {
            id: 7,
            url: 'https://source.unsplash.com/random/800x600/?country',
            alt: 'Technology Image 1',
        },
        {
            id: 8,
            url: 'https://source.unsplash.com/random/800x600/?england',
            alt: 'Technology Image 1',
        },
    ]);

    return (
        <>
            <div className="images-container" ref={sliderRef}>
                {images.map((image) => {
                    return (
                        <img
                            className="image"
                            alt="sliderImage"
                            key={image?.id}
                            src={image?.url}
                        />
                    );
                })}
            </div>
              <div className="common-section">
                <h2>Discover Top Universities</h2>
                <p>We’re partnered with over 120 world class education providers</p>
            </div>
        </>
    )
}

export default ImagesSlider