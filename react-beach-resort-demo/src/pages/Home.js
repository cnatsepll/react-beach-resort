// functional component "rafc" or "rfc"
import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
//the <> </> surrounding the Hero export is short hand for a React Fragment
export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Welcome" subtitle="Example page, featuring hotel rooms">
                <Link to='/rooms' className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms></FeaturedRooms>
    </>
    );
}

