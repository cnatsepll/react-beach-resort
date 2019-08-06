import React from 'react'

export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
// setting up a default property to display 
// if a page doesnt pass back a hero variable 
// this is what will display
Hero.defaultProps = {
    hero: "defaultHero"
};