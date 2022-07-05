import React, { ReactNode } from 'react'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { truncateAddress } from "../services/address.service"
import {
  addWalletChangeListener,
  connectWallet,
  networkUrl,
  removeWalletChangeListener,
  silentConnectWallet,
} from "../services/wallet.service"
import styles from "../styles/Home.module.css"

export function ConnectButton() {
    const [address, setAddress] = useState<string>()
    const [isConnected, setConnected] = useState(false)

    useEffect(() => {
        ;(async () => {
          const wallet = await silentConnectWallet()
          setAddress(wallet?.selectedAddress)
          setConnected(!!wallet?.isConnected)
        })()
    
        const handler = async () => {
          const wallet = await silentConnectWallet()
          setAddress(wallet?.selectedAddress)
          setConnected(!!wallet?.isConnected)
        }
        addWalletChangeListener(handler)
        return () => {
          removeWalletChangeListener(handler)
        }
    }, [])

    const handleConnectClick = async () => {
        const wallet = await connectWallet()
        setAddress(wallet?.selectedAddress)
        setConnected(!!wallet?.isConnected)
    }

    return (
        <div>
            {isConnected ? (
                <>
                    <h3 style={{ margin: 0 }}>
                        Wallet address: <code>{address && truncateAddress(address)}</code>
                    </h3>
                </>
                ) : (
                <>
                    <Button colorScheme='twitter' className={styles.connect} onClick={handleConnectClick}>
                        Connect Wallet
                    </Button>
                </>
            )}
        </div>
    )
}