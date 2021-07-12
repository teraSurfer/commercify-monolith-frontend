import { Box, Container, Flex, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { usersQuery } from "src/services/queries/usersQuery";
import UserDetail from "src/components/user-detail";

const Users = () => {
  const { data, loading, error } = useQuery(usersQuery);

  if(error) {
      console.log(error);
  }

  console.log(data);

  return (
    <Container maxW="container.xl">
      <Flex rounded="lg" direction="column" bgColor="white" mt="4" p="4" shadow="md">
        <Heading textAlign="center" mt="4" size="md">
          Users
        </Heading>
        {loading && <Flex justifyContent="center"><Spinner textAlign="center" size="xl" /></Flex>}
        <Stack mt="2" spacing="2">
            {data && data.user && data.user.map((user, index) => <UserDetail key={index} user={user} />)}
        </Stack>
      </Flex>
    </Container>
  );
};

export default Users;
