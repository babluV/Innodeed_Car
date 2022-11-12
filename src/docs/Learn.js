import React from 'react'
import { useParams } from 'react-router-dom'

export default function Learn() {
    const {id} = useParams();
  return (
    <h3> 📔 Learn About Cars whose id is  📓
        <h2>{id}</h2>
    </h3>
  )
}
