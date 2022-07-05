import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Grid, GridItem, HStack, Box } from "@chakra-ui/layout"
import { StarknetProvider, getInstalledInjectedConnectors } from '@starknet-react/core'
import { Maze } from '../components/Maze'

const Home: NextPage = () => {
  const connectors = getInstalledInjectedConnectors()

  return (
    <StarknetProvider connectors={connectors}>
      <>
        <Head>
          <title>StarkMaze</title>
        </Head>
        <Heading as="h3"  my={4}>StarkMaze</Heading>
        
        <Maze></Maze>
        
      </>
    </StarknetProvider>
  )
}

export default Home
