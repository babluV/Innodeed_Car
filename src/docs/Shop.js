import React from 'react'
import { useParams } from 'react-router-dom'

export default function Shop() {
    const {id} = useParams();
  return (
    <h3> 🛒 Shopping from your favourite shop of car whose id is :- 🥰 
        <h2>{id}</h2>
    </h3>
  )
}
