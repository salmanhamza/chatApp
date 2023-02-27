import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const SideBar = () => {
  const rooms = ["first room", "decond room", "third room"];
  return (
    <>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </>
  );
};

export default SideBar;
