/* eslint-disable react/no-unescaped-entities */
import NextLink from "next/link"
import { Flex, Button, useColorModeValue, Spacer, Heading, LinkBox, LinkOverlay, Link } from '@chakra-ui/react'
import { ConnectButton } from '../components/ConnectButton'

const siteTitle="StarkMaze"
export default function Header() {

  return (
    <Flex as='header' bg={useColorModeValue('gray.100', 'gray.900')} p={4} alignItems='center'>
      <LinkBox>
        <NextLink href={'/'} passHref>
          <LinkOverlay>
            <Heading size="md">{siteTitle}</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>      
      <Spacer />
      <ConnectButton></ConnectButton>
    </Flex>
  )
}