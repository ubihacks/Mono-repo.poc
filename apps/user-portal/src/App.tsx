import './App.css'
import { Box, Button, Heading, Text } from '@chakra-ui/react'


function App() {
 
  return (
    
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' >
    <Heading>User Portal</Heading>
    <Text>Turbo POC wiht Chakra Ui user action</Text>
    <Button borderRadius="full" variant="gradient-purple">
							Create Workspace
						</Button>
    
    </Box>
    
    

  )
}

export default App
