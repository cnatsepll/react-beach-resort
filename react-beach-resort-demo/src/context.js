import React, { Component } from "react";
// data uses a default export so we could call items anything
// naming it items will help with contentful hookup
import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };
  // getData

  // componentDidMount() is special syntax from the react library
  componentDidMount() {
    //this.getData
    let rooms = this.formatData(items);
    // filter provides us with the information we want
    let featuredRooms = rooms.filter(room => room.featured === true);
    // passing our values into the component state
    this.setState({
      rooms,
      featuredRooms,
      // sortedRooms is not a named variable and is defined by what comes after the :
      sortedRooms: rooms,
      // loading is false here since we will be getting external data
      // and wont want to load it until we have it
      loading: false
    });
    console.log(rooms);
  }

  // preps items
  // flattens out the file structure into better ingenstible code
  formatData(items) {
    // loops through the array of items
    let tempItems = items.map(item => {
      let id = item.sys.id;
      // makes a key value pair out of the image object and url
      // adds images as an object key and the images url as an array
      let images = item.fields.images.map(image => image.fields.file.url);
      // getting an array from the item properties
      let room = { ...item.fields, images: images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    // tempRooms is destructuring the State
    // rooms is described in and passed through from the state
    // its like a JSON parse and unparse
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
// we are able to directly access these variables through the context api
export { RoomProvider, RoomConsumer, RoomContext };
