import { getStarknet } from "@argent/get-starknet"
import { utils } from "ethers"
import { Abi, Contract, number, uint256 } from "starknet"

import GameAbi from "../../abi/game.json"

export const gameAddressByNetwork = {
  "goerli-alpha":
    "0x079e5410c391781051d2601692f7221c88b7f69d06234833db50c812fb474d8e",
  "mainnet-alpha":
    "",
}

export type PublicNetwork = keyof typeof gameAddressByNetwork
export type Network = PublicNetwork | "localhost"

export const getGameAddress = (network: PublicNetwork) =>
    gameAddressByNetwork[network]

export const launch_game = async (
  network: PublicNetwork,
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }
  const gameContract = new Contract(
    GameAbi as Abi,
    getGameAddress(network),
    starknet.account as any,
  )

  return gameContract.launch_game()
}

export const end_game = async (
  network: PublicNetwork,
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }
  const gameContract = new Contract(
    GameAbi as Abi,
    getGameAddress(network),
    starknet.account as any,
  )

  return gameContract.end_game()
}

export const move_right = async (
  network: PublicNetwork,
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }
  const gameContract = new Contract(
    GameAbi as Abi,
    getGameAddress(network),
    starknet.account as any,
  )

  return gameContract.move_right()
}

export const move_down = async (
  network: PublicNetwork,
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }
  const gameContract = new Contract(
    GameAbi as Abi,
    getGameAddress(network),
    starknet.account as any,
  )

  return gameContract.move_down()
}

export const move_left = async (
  network: PublicNetwork,
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }
  const gameContract = new Contract(
    GameAbi as Abi,
    getGameAddress(network),
    starknet.account as any,
  )

  return gameContract.move_left()
}

export const move_up = async (
  network: PublicNetwork,
): Promise<any> => {
  const starknet = getStarknet()
  if (!starknet?.isConnected) {
    throw Error("starknet wallet not connected")
  }
  const gameContract = new Contract(
    GameAbi as Abi,
    getGameAddress(network),
    starknet.account as any,
  )

  return gameContract.move_up()
}