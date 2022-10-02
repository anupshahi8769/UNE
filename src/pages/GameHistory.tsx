import { useParams } from "react-router-dom"
import games from '../data/games1.json'

export default function GameHistory() {
  const{gameId} = useParams()
  if (!gameId) return null
  // const game = games.find((g) => g.id === parseInt(gameId)) 
  return <div>GameHistory</div>
}
