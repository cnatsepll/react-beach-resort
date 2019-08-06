import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';
export default class Services extends Component {
    // right now im thinking the state is like local storage objectified
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title: "Lil Drink",
                info: "Sip a seaside shandy"
            },
            {
                icon:<FaHiking/>,
                title: "Take a Hike",
                info: "Walk around, its good for you and there's cool stuff out there"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Drive Time",
                info: "Hiking but way faster"
            },
            {
                icon:<FaBeer/>,
                title: "Bigger Drink",
                info: "Its like a lil drink but bigger"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                    <span>  {item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    };
};