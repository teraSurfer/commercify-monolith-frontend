import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "@reach/router";

const paths = [
  {
    uri: "/",
    name: "Home",
  },
  {
    uri: "/users",
    name: "Users",
  },
  {
    uri: "/register",
    name: "Register",
  },
];

const Navbar = () => {
  return (
    <Flex
      bgColor="red.900"
      p="4"
      w="100vw"
      justifyContent="space-between"
      direction="row"
      shadow="md"
    >
      <Heading _hover={{color: "gray.200"}} color="gray.50" as="h5" size="lg">
        <Link to="/">Commercify</Link>
      </Heading>

      <Flex alignItems="center" direction="row">
        {paths.map((path, index) => (
          <Heading key={index} _hover={{color: "gray.200"}} mr="4" size="md" color="gray.50">
            <Link to={path.uri}>{path.name}</Link>
          </Heading>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
