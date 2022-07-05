import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { LaunchGame } from './LaunchGame'

export function Maze() {
    return (
        <Box w="800px" h="800px" borderWidth="1px" borderRadius="lg" id="sketch-holder">
            <LaunchGame></LaunchGame>
        </Box>
    )
}
