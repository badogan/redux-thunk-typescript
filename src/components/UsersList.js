import React from "react";
import UserCard from "./UserCard";
import { Flex } from "@chakra-ui/core";

const UsersList = props => {
  return (
    <Flex align='center' flexWrap='wrap'>
      {props.users.map((user, index) => (
        <UserCard key={index} user={user} deleteUser={props.deleteUser} updateUser={props.updateUser}/>
      ))}
    </Flex>
  );
};

export default UsersList;
