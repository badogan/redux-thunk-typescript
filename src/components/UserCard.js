import React from "react";
import { Avatar, Button, Box, Heading, Flex } from "@chakra-ui/core";

const UserCard = ({ user, deleteUser }) => {
  return (
    <Flex align="center">
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Avatar name={user.name} src="https://bit.ly/dan-abramov" />
        <Heading as="h5" size="sm">
          {user.name}
        </Heading>
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
