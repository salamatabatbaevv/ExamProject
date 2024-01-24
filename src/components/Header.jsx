import { Avatar, Box, Button, Flex, Heading, HStack, Icon, useColorMode, Wrap, WrapItem, useColorModeValue, Badge, border } from '@chakra-ui/react'
import { LuArrowUpRightFromCircle, LuMoon, LuSun } from "react-icons/lu";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const[showlist, setShowList] = useState(false)
  const { colorMode, setColorMode } = useColorMode()
  return (
    <Box borderBottom={'1px'} borderBottomColor={useColorModeValue('gray.500', 'gray.900')} 
    bg={useColorModeValue('white.750', 'black.850')} pos={'sticky'} 
    top={0} zIndex={'9999'}>
      <Flex w={{
        base: '90%',
        md: '90%'
      }} mx={'auto'} alignItems={'center'} justifyContent={'space-between'}  p={5}>
        <Heading fontSize={'22px'} display={'flex'} alignItems={'center'}
         gap={2}><Icon as={LuArrowUpRightFromCircle}/>Example IT Solutions</Heading>
        <Flex alignItems={'center'} gap={5}>
          <HStack gap={3} display={{
            base: 'none',
            md: 'flex',
          }}>
            <Link to={'/'}  >Home</Link>
            <Link to={'/'}  >Services</Link>
            <Link to={'/'}  >Pricing</Link>
          </HStack>
          <HStack>
            <Button onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} variant={'outline'}><Icon as={colorMode === 'dark' ? LuSun : LuMoon}/></Button>
            <Wrap>
              <WrapItem>
                <Avatar onClick={() => setShowList(!showlist)} 
                size={'sm'}  src='https://distribution.faceit-cdn.net/images/1f78d8e3-1570-4590-ad73-72b7b168e0e7.jpeg'/>
                <Link to={'/'}><Button display={showlist ? 'block' : 'none'} 
                pos={'absolute'} right={10} bottom={-5} bg={useColorModeValue('white', 'black')} border={'1px'} 
                borderColor={useColorModeValue('black', 'white')}>Logout</Button></Link>
              </WrapItem>
            </Wrap>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header