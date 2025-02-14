import React from "react";
import { Box } from "@chakra-ui/react";

const MdIcon = ({ iconName, size = 20, ...others }) => {
  return (
    <Box
      as="span"
      className="material-icons-outlined"
      fontSize={size}
      {...others}
    >
      {iconName}
    </Box>
  );
};

export default MdIcon;
