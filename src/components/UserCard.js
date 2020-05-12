import React, { useState } from "react";
import { Avatar, Button, Box, Heading, Flex } from "@chakra-ui/core";
import UserNameUpdate from "./UserNameUpdate";

const UserCard = ({ user, deleteUser, updateUser }) => {
  const [initiateUpdateName, setInitiateUpdateName] = useState(false);

  const handleUpdateName = () => {
    setInitiateUpdateName(true);
  };

  return (
    <Flex align="center">
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Avatar name={user.name} src="https://bit.ly/dan-abramov" />
        <Heading onClick={() => handleUpdateName()} as="h5" size="sm">
          {user.name}
        </Heading>
        {initiateUpdateName && (
          <UserNameUpdate
            user={user}
            updateUser={updateUser}
            setInitiateUpdateName={setInitiateUpdateName}
          />
        )}
        <Button
          onClick={() => deleteUser(user.id)}
          variantColor="teal"
          size="xs"
        >
          Delete
        </Button>
      </Box>
    </Flex>
  );
};

export default UserCard;
