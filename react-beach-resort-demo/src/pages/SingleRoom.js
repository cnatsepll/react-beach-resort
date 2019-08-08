// class based component "rcc"
import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from '../components/StyledHero';
export default class SingleRoom extends Component {
  // accessing elements by way of react router
  // the prop is being passed by react router
  constructor(props) {
    super(props);
    console.log(this.props);
    // this.state will be unique for each room page
    // fetched by unique identifier slug
    this.state = {
      // since we are passing the slug in our params
      // we can pull it through the react router props
      slug: this.props.match.params.slug,
      defaultBcg
      // we could also pass a flag in the state to let us know when its loaded
    };
  }
  static contextType = RoomContext;
  // showing componentDidMount(){} for future use with api calls
  // and to show that we can use it when accessing the react router props
  //componentDidMount(){}
  render() {
    const { getRoom } = this.context;
    // here is where we see how the slug is assigned to the state
    const room = getRoom(this.state.slug);
    console.log(room);
    // if the room is undefined then we will be able to display a custom error message
    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found </h3>
          <Link to="/rooms" className="btn-primary">
            {" "}
            Rooms{" "}
          </Link>
        </div>
      );
    }
    // this syntax is called destructuring the state
    // its the same as calling 
    // const name = room.name etc.
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    // this one is a bit of a doozy
    // we will be naming two variables and assigning them values
    // from specific parts of an array
    // const [one, two, three] = [1,2,3];
    // console.log(one, two, three);
    // the above logs "1 2 3"
    // we are using the same concept with a rest method
    // to enumerate an array of any size 
    // of the images 
    const [mainImg, ...defaultImg] = images;

    
    // we cant directly pass the object through but we can access the props
    // the brackets have to be used to pass variables into the returned jsx
    return (
      <>
    < StyledHero img={images[0] || this.state.defaultBcg}>
        <Banner title ={`${name} room`}>
         <Link to='/rooms' className='btn-primary'> Back to Rooms </Link>
        </Banner>
    </StyledHero>
        <section className="single-room">
        <div className="single-room-images">
          {images.map((item,index)=>{
           return <img key={index} src={item} alt={name}/>
          })}
        </div>
      </section>
      </>
    )
  }
}
