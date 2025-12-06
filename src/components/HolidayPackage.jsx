// HolidayPackage.js
import React from 'react';
import Slideshow from './Slideshow';
import LuxuryStays from './LuxuryStays';
import ExclusivePackages from './ExclusivePackages';
import Navbar from './Navbar';
import Footer from './Footer';

function HolidayPackage() {
    return (
        <div>
            <Navbar/>
            <Slideshow/>
            <LuxuryStays />
            <ExclusivePackages/>
            <Footer/>
        </div>
    );
}

export default HolidayPackage;
