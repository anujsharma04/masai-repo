import { useRef, useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Card,
  CardBody,
  Text,
  VStack,
  Container,
} from '@chakra-ui/react';

function App() {
  const inputRef = useRef('');
  const [thoughts, setThoughts] = useState('');

  const handleClick = () => {
    const value = inputRef.current.value.trim();
    if (value) {
      setThoughts(value);
      inputRef.current.value = '';
    }
  };

  return (
    <Container maxW="md" mt={10}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg" textAlign="center" color="teal.600">
          💭 Write Down Your Thoughts
        </Heading>

        <Input
          ref={inputRef}
          placeholder="Type your thought..."
          focusBorderColor="teal.400"
          size="md"
          bg="white"
          boxShadow="sm"
        />

        <Button
          colorScheme="teal"
          onClick={handleClick}
          size="md"
          alignSelf="center"
        >
          Show Thought
        </Button>

        {thoughts && (
          <Card boxShadow="lg" bg="gray.50">
            <CardBody>
              <Text fontSize="md" color="gray.700">
                {thoughts}
              </Text>
            </CardBody>
          </Card>
        )}
      </VStack>
    </Container>
  );
}

export default App;
