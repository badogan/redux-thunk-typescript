import React, { useState } from "react";
import { Input } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";

const UserInput = props => {
  const [nameEntered, setNameEntered] = useState("");

  const handleOnSubmit = () => {
    props.updateUser(props.user.id,nameEntered);
    props.setInitiateUpdateName(false)
    setNameEntered("");
  };

  return (
    <div>
      <Input placeholder="Enter updated name" onChange={e => setNameEntered(e.target.value)} />
      <Button onClick={()=>handleOnSubmit()} variantColor="green">Update Name</Button>
    </div>
  );
};

export default UserInput;
