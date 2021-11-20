import React, { useState } from 'react';
import AvailableBusDetails from '../../components/AvailableBusDetails/AvailableBusDetails';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SearchModifier from '../../components/SearchModifier/SearchModifier';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <MobileNavigation isOpen={isOpen} toggle={toggle}/>
            <NavigationBar toggle={toggle}/>
            <SearchModifier />
            <AvailableBusDetails />
        </div>
    );
};

export default Home;