import React, { useState } from "react";
import {
  Box,
  VStack,
  Button,
  Container,
  Heading,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { registerUserMutation } from "src/services/queries/usersQuery";

const Register = (props) => {
  const [user, setUser] = useState({});
  // we're just initializing the mutation function here.
  const [registerUser, {loading}] = useMutation(registerUserMutation);

  function handleFormInput(evt) {
    setUser({
      ...user,
      [evt.target.id]: evt.target.value,
    });
  }

  async function handleFormSubmit(evt) {
      evt.preventDefault();
      const {firstName, lastName, email, password, cnf_password} = user;
      console.log(firstName, lastName, email, password, cnf_password);
      if(email && email !== '' && password === cnf_password) {
        // we're calling the initialized mutation after an event.
        const {data, errors} = await registerUser({
            variables: {
                user: {
                    firstName,
                    lastName,
                    email,
                    password,
                    role: "BUYER"
                }
            }
        });

        console.log(data, errors);
      }
  }

  return (
    <Container maxW="container.xl">
      <VStack
        shadow="md"
        mt="4"
        bg="gray.50"
        rounded="lg"
        p="4"
        alignItems="flex-start"
      >
        <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
          <Heading size="md" textAlign="center">
            Register
          </Heading>
          <Box mt="4">
            <FormLabel htmlFor="email" fontSize="lg">
              Email:
            </FormLabel>
            <Input
              onChange={handleFormInput}
              id="email"
              type="text"
              placeholder="Email"
            />
          </Box>
          <Box mt="4">
            <FormLabel htmlFor="password" fontSize="lg">
              Password:
            </FormLabel>
            <Input
              onChange={handleFormInput}
              id="password"
              type="password"
              placeholder="Password"
            />
          </Box>
          <Box mt="4">
            <FormLabel htmlFor="cnf_password" fontSize="lg">
              Confirm Password:
            </FormLabel>
            <Input
              id="cnf_password"
              type="password"
              onChange={handleFormInput}
              placeholder="Re-enter Password"
            />
          </Box>
          <Box mt="4">
            <FormLabel htmlFor="firstName" fontSize="lg">
              First Name:
            </FormLabel>
            <Input
              id="firstName"
              onChange={handleFormInput}
              type="text"
              placeholder="First Name"
            />
          </Box>
          <Box mt="4">
            <FormLabel htmlFor="lastName" fontSize="lg">
              Last Name:
            </FormLabel>
            <Input
              id="lastName"
              onChange={handleFormInput}
              type="text"
              placeholder="Last Name"
            />
          </Box>
          <Box mt="4">
            <Button disabled={loading} type="submit" size="lg" colorScheme="blue">
              Register
            </Button>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
