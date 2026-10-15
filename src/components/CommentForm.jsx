import React from 'react'
import { useState } from 'react'

export default function CommentForm({getCommentData}) {

    let [comment, setComment] = useState("");
    let getComment = (e) => {
        setComment(e.target.value);
    }


  return (
    <>
    <section className='comentarios'>
    <textarea className='form-control' placeholder='Escribe tu comentario' value={comment}
    onChange={getComment}
    >
    </textarea>
    
    <br />
    <button className='btn btn-secondary' onClick={() => getCommentData(comment)}>
        comentar
    </button>
    </section>
    </>
  )
}
