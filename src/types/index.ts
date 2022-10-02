
import { GAME_STATUS } from '../constants'
export * from './Game'
export * from './User'

export type Position = [number, number]

export type GameData = {
  size: number
  moves: Position[]
  date: string
  result: GAME_STATUS
}

export type Game = {
    username: string
    size: number
}

export type User = {
    username: string
}
