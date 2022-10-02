import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../context";
import sessions from '../data/sessions.json'
import games from '../data/games1.json'
import {Stone} from '../components'
import GameHistory from "./GameHistory";

import style from './Session.module.css'

export default function Session(){
    const {user} = useContext(UserContext)
    const {sessionId} = useParams()

    if(!user) return <Navigate to="/login" replace /> 
    if (!sessionId) return null
    const session = sessions.find(s => s.id === parseInt(sessionId))
    if(!session) return null
    const game = games.find(g=> g.id === session.gameId)
    if(!game) return null
    const {rows, sizes} = game
    
    // const { stones, players} = board
    return (
    <div className={style.container}>
        {/* <h1 className={style.header}>
            {GameHistory.find(g=>g.id === session.gameId)?.title} @{session.time}
        </h1> */}

        <div className={style.board} style={{gridTemplateColumns: `repeat(${sizes}), 3.5rem)`}}>
            <div className={style.stone}>stone</div>
        </div>

    </div>
    )

}