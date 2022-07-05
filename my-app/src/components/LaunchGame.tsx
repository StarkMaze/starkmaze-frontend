import React, { ReactNode, useEffect, useState } from 'react'
import { Button, Center } from '@chakra-ui/react'
import { launch_game } from "../services/game.service"
import { getExplorerBaseUrl, networkId, signMessage, waitForTransaction, } from "../services/wallet.service"
import styles from "../styles/Home.module.css"

type Status = "idle" | "approve" | "pending" | "success" | "failure"

export function LaunchGame() {
    const [lastTransactionHash, setLastTransactionHash] = useState("")
    const [transactionStatus, setTransactionStatus] = useState<Status>("idle")
    const [transactionError, setTransactionError] = useState("")

    const buttonsDisabled = ["approve", "pending"].includes(transactionStatus)

    useEffect(() => {
        ;(async () => {
          if (lastTransactionHash && transactionStatus === "pending") {
            setTransactionError("")
            try {
              await waitForTransaction(lastTransactionHash)
              setTransactionStatus("success")
            } catch (error: any) {
              setTransactionStatus("failure")
              let message = error ? `${error}` : "No further details"
              if (error?.response) {
                message = JSON.stringify(error.response, null, 2)
              }
              setTransactionError(message)
            }
          }
        })()
    }, [transactionStatus, lastTransactionHash])

    const network = networkId()
    if (network !== "goerli-alpha" && network !== "mainnet-alpha") {
      return (
        <>
          <p>
            There is no demo game for this network, but you can deploy one and
            add its address to this file:
          </p>
          <div>
            <pre>my-app/src/services/game.service.ts</pre>
          </div>
        </>
      )
    }

    const handleLaunchGame = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
          setTransactionStatus("approve")
    
          console.log("launch_game", launch_game)
          const result = await launch_game(network)
          console.log(result)
    
          setLastTransactionHash(result.transaction_hash)
          const pending = setTransactionStatus("pending")
        } catch (e) {
          console.error(e)
          setTransactionStatus("idle")
        }
    }

    return (
        <Center h='100%'>
             <Button colorScheme='whatsapp' size='lg' onClick={handleLaunchGame}>
                Ready
            </Button>
        </Center>
    )
}