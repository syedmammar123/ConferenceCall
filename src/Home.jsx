import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [roomId, setRoomId] = useState("a")
  const navigate =  useNavigate()
  const handleJoin = ()=>{
    navigate(`/room/${roomId}`)
  }

  return (
    <div>
      {/* <input type="text" value={roomId} placeholder='enter room id' onChange={e=>{setRoomId(e.target.value)}} /> */}
      <button value={roomId} onClick={handleJoin}>Take The Session</button>
      </div>
  )
}

export default Home;