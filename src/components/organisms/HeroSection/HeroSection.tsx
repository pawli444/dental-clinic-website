import "./HeroSection.css"

import { useState, useEffect, useRef } from "react";

import photo1 from "../../../assets/hero/dentist-tools.jpg"
import photo2 from "../../../assets/hero/teeth-dentist-mouth.jpg"
import photo3 from "../../../assets/hero/two-bamboo-toothbrushes-white.jpg"
import photo4 from "../../../assets/hero/woman-on-chair.jpg"

function Hero(){

    const [photoID, setPhotoID] = useState<number>(0);

    const heroPhotos = [photo1, photo2, photo3, photo4];

    const heroContent = [
     { photo: photo1, text: "text1" },
     { photo: photo2, text: "text2" },
     { photo: photo3, text: "text3" },
     { photo: photo4, text: "text4" },
    ];

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
       
        if (intervalRef.current) clearInterval(intervalRef.current);

       
        intervalRef.current = setInterval(() => {
            setPhotoID(prev =>
                prev < heroContent.length - 1 ? prev + 1 : 0
            );
        }, 5000);
    };

    useEffect(() => {

        startInterval();
        
                return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleDotClick = (index: number) => {
        setPhotoID(index);
        startInterval(); 
    };

    return(

        <>
            <section className="heroSection">

              <div className="photo-wrapper">

                <img src={heroContent[photoID].photo} />

                <div className="hero-overlay"/>

                <p className="hero-text">
                    {heroContent[photoID].text}
                </p>
                
              </div>
              <div className="dots-wrapper">

                {heroPhotos.map((x, index) => (
                    <div key={index} className={`dot ${index === photoID ? "active" : ""}`} onClick={() => handleDotClick(index)}/>
                ))}
                </div>
 
            </section>
        </>
    )
}



export default Hero;