import { Flex, Text, Heading, Stack } from "@chakra-ui/react";

const UserDetail = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <Flex
      rounded="lg"
      border="1px"
      borderColor="gray.300"
      p="4"
      direction="column"
    >
      <Stack spacing="1">
        <Heading size="sm">
          Name: {user.firstName} {user.lastName}
        </Heading>
        <Text>ID: {user.uid}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Role: {user.role}</Text>
      </Stack>
    </Flex>
  );
};

export default UserDetail;
