// import React from 'react'
// import { Navigate, useNavigate} from 'react-router-dom'
// import style from './Home.module.css'

// export default function Home() {
//   const navigate = useNavigate()
//   return (
//     <div><label className={style.container}>Select Board Size
//       <select name="board-sizes" id="board-sizes">
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="10">10</option>
//         <option value="11">11</option>
//         <option value="12">12</option>
//         <option value="13">13</option>
//         <option value="14">14</option>
//         <option value="15">15</option>
//         <option value="16">16</option>
//         <option value="17">17</option>
//         <option value="18">18</option>
//         <option value="19">19</option>
//       </select>
//     </label>
//     <button className={style.button} onClick={()=>navigate('/game')}>Start</button>
//     </div>
//   )
// }


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components'
import { AVAILABLE_GAME_SIZES } from '../constants'

import style from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const [size, setSize] = useState(10)

  return (
    <>
      <label className={style.label}>
        Game size
        <select
          className={style.select}
          value={size.toString()}
          onChange={(event) => setSize(parseInt(event.target.value))}
        >
          {AVAILABLE_GAME_SIZES.map((value) => (
            <option key={`size-${value}`} value={value.toString()}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <Button type="button" onClick={() => navigate(`game?size=${size}`)}>
        Start Game
      </Button>
    </>
  )
}

