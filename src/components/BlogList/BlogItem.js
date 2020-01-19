import React from 'react'

export default function BlogItem(props) {
  return (
    <li>
      <h3>{props.name}</h3>
      <p>{props.city}</p>
    </li>
  )
}
