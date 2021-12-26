import React from 'react';
import { HeroContainer } from "./HeroStyle";
import HeroText from './HeroText/HeroText';
import HeroModal from './HeroModal/HeroModal';


const Hero = () => {
    return (
        <main>
            <HeroContainer>
                <HeroModal />
                <HeroText />
            </HeroContainer>
        </main>
    )
}


export default Hero;