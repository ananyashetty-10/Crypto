import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
       <div className="footer">
          <h1>About Us</h1>
          <h2>it is the indians leading Crypto Currency  website</h2>
 




       </div>

 
    </Box>
   
  );
};

export default Footer;
