import './App.css'
import { Box, Button, Heading, Spacer, Stack, Text, } from '@chakra-ui/react'
import ColorModeSwitcher from '../../../packages/ui/common/ColorModeSwitcher';


function App() {

  return (

    <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={3}>
      <Stack spacing={{ base: '5', sm: '6' }}>     
        <ColorModeSwitcher />

        <Heading>User Portal</Heading>
      <Text>Turbo POC wiht Chakra Ui Admin test one   </Text>

     
      </Stack>
      <Button borderRadius="full" variant="gradient-purple" m={5} onClick={()=>(console.log('test'))} >
        Test Button
      </Button>
     


    </Box>


  )
}

export default App
