import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      {/* src要先import，不能直接使用相对路径 */}
      {/* The size of the image can be adjusted using the boxSize prop. */}
      <Image src={logo} boxSize={"60px"} />
      <Text> NavBar</Text>
    </HStack>
  );
};

export default NavBar;
