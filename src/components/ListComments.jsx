import React from 'react'

export default function ListComments({listData}) {
  return (
    <>
    <ul className='list-group list-group-flush'>
         {
                listData.map((data) => (
                   <li key={data.id} className='list-group-item'>
                        {data.text}
                   </li>
                ))
         }
    </ul>
    </>
  )
}
