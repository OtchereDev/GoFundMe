import router from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { APIURL } from "../../config/config";
import Comment from "./Comment";

const CommentCard = () => {
  const uuid = router.query?.uuid;
  const [comments, setComments] = useState([]);

  useEffect(async() => {
    const res = await fetch(`${APIURL}/fundraiser/detail/comments/${uuid}`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      }
    });

    if (res.ok) {
      const data = await res.json();
      setComments(data?.comments);
    }
  }, []);

  return (
    <div>
    {
      comments?.length > 0 ?comments.map((comment, index) => (
        <React.Fragment key={index}>
          <Comment comment={comment} removeBorderTop={true}/>
          {
            index>=comments.length-1? "":<hr/>
          }
        </React.Fragment>
      ))
      :
      <p>
        Loading...
      </p>

    }
    </div>
  );
};

export default CommentCard;
