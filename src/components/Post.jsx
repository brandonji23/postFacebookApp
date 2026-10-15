import React, { use } from 'react'
import { useState } from 'react'
import CommentForm from './CommentForm';
import ListComment from './ListComments';
import { useEffect } from 'react';

export default function Post() {

    let [like, setLike] = useState(0);
    // let [comment, setComment] = useState("");
    let [btnComment, setBtnComment] = useState(false);
    let isShowComment = () => setBtnComment(!btnComment);
    let nextId =3;
    
    let [newComment, setNewComment] = useState("");
    let getCommentData = (comment) => {
        setNewComment(comment)
    }
    let listCom = [{
        id : 1, 
        text : "Me gusta mucho los postres"
    },{
        id : 2, 
        text : "Pasame la receta"
    }];
    let [listData, SetListData] = useState(listCom);
    let [newId, useNewId] =useState(3);
    
    useEffect(()=>{
         if(newComment){
            useNewId(nextId+1)
        SetListData([
            ...listData,
            {
                id : newId,
                text : newComment
            }
        ])
    }
    }, [newComment])
    console.log(newId)
   
  return (
    <>
    <section className="card" style= {{ "maxWidth" : "320px" }} >
        <h4 className="card-title">Card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <img src={"https://s1.significados.com/foto/imagen-inicio-cke.jpg?class=article"} className="card-img-top" alt="..." />
        <div className="card-body">
            <ul className="list-group" style={{ "width" : "18rem" }} >
            <li className="list-group-item d-flex justify-content-around">
                <span>😁👍🤣+{like+1} </span> <span>{listData.length} 🗨️</span>
            </li>
            <li className="list-group-item d-flex justify-content-around">
                <button className='btn btn-secondary' onClick={() => setLike(like+1)}>👍 like</button> 
                
                <button className='btn btn-secondary' onClick={isShowComment}>🗨️ comment</button>
            </li>
            </ul>
           <div className="card-footer">
            {btnComment ? <CommentForm getCommentData={getCommentData} /> : ""}
           </div>
            <ListComment listData={listData}/> 
        </div>
    </section>
    </>
  )
}

