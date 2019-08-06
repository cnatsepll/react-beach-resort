import React, { Component } from "react";
// RoomContext is a named export and not a defult export in context.js
// since it is not a default export it needs brackets
import { RoomContext } from "../context";
// importing the default Loading export from Loading.js
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
export default class FeaturedItems extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {/* this ternary operation checks to see if the rooms are loaded
            if they are still loading then we will display the loading gif component
            if the rooms are not loading then they will each be displayed as a component */}
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
