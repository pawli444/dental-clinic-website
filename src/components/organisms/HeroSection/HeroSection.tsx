import "./HeroSection.css"

import { useState, useEffect, useRef } from "react";

import photo1 from "../../../assets/hero/dentist-tools.jpg"
import photo2 from "../../../assets/hero/teeth-dentist-mouth.jpg"
import photo3 from "../../../assets/hero/two-bamboo-toothbrushes-white.jpg"
import photo4 from "../../../assets/hero/woman-on-chair.jpg"

import arrow from "../../../assets/hero/arrow.png"
import arrowBlank from "../../../assets/hero/arrow-blank.png"

function Hero(){

    const [photoID, setPhotoID] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [nextPhotoID, setNextPhotoID] = useState<number | null>(null);

    const heroPhotos = [photo1, photo2, photo3, photo4];

    const heroContent = [
    { photo: photo1, text: "Twój zdrowy uśmiech zaczyna się tutaj" },
    { photo: photo2, text: "Profesjonalna opieka w przyjaznej atmosferze" },
    { photo: photo3, text: "Nowoczesne leczenie bez bólu i stresu" },
    { photo: photo4, text: "Zadbaj o uśmiech całej rodziny" },
    ]

    const intervalRef = useRef<number  | null>(null);

    const startInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setPhotoID(prev => {
                const newID = prev < heroContent.length - 1 ? prev + 1 : 0;
                handlePhotoChange(newID);
                return prev; 
            });
        }, 5000);
    };

    useEffect(() => {

        startInterval();
        
                return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handlePhotoChange = (newPhotoID: number) => {
        setNextPhotoID(newPhotoID);
        setIsLoading(true);
    };

    const handlePhotoLoad = () => {
        setPhotoID(nextPhotoID ?? photoID);
        setIsLoading(false);
        setNextPhotoID(null);
    };

    const handleDotClick = (index: number) => {
        handlePhotoChange(index);
        startInterval(); 
    };

    const handleArrowClick = (next: boolean) => {
        setPhotoID(prev => {
            if (next) {
                return prev < heroPhotos.length - 1 ? prev + 1 : 0;
            } else {
                return prev === 0 ? heroPhotos.length - 1 : prev - 1;
            }
        });

        startInterval();
    };

    

    const [showArrow, setShowArrow] = useState<boolean>(false);


    return(

        <>
            <section className="heroSection">

              <div className="photo-wrapper"
              onMouseEnter={()=>setShowArrow(true)}
              onMouseLeave={()=>setShowArrow(false)}
              >

               <img src={arrow} className={`hero-arrow left ${showArrow === true ? "active" : ""}`} onClick={() => handleArrowClick(false)}
                onMouseEnter={e => e.currentTarget.src = arrowBlank}
                onMouseLeave={e => e.currentTarget.src = arrow}/>

                <img 
                    className={`hero-photo ${isLoading ? 'loading' : 'loaded'}`}
                    src={heroContent[nextPhotoID ?? photoID].photo}
                    onLoad={handlePhotoLoad}
                    alt={heroContent[nextPhotoID ?? photoID].text}
                />

                <div className="hero-overlay"/>

                <img src={arrow} className={`hero-arrow right ${showArrow === true ? "active" : ""}`} onClick={() => handleArrowClick(true)} 
                onMouseEnter={e => e.currentTarget.src = arrowBlank}
                onMouseLeave={e => e.currentTarget.src = arrow}/>

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