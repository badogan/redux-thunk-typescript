import React, { useState } from "react";
import { Input } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";

const UserInput = props => {
  const [nameEntered, setNameEntered] = useState("");

  const handleOnSubmit = () => {
    props.addUser(nameEntered);
    setNameEntered("");
  };

  return (
    <div>
      <Input placeholder="Enter name" onChange={e => setNameEntered(e.target.value)} />
      <Button onClick={()=>handleOnSubmit()} variantColor="green">Submit</Button>
    </div>
  );
};

export default UserInput;
