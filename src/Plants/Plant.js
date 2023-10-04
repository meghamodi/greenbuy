import React from 'react'
import { pitems } from '../data'
export default function Plant() {
  const listItems = pitems.map(p => {
    return (
      <div className='row-align'>
        <p>
          <b>
            <img src={p.imagesrc} alt='plantpic' height='100' />
          </b>
        </p>
        <b>{p.name}</b>
      </div>
    )
  })
  return <div>{listItems}</div>
}
