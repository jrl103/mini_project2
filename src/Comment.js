import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import { UserContext } from "../datas/User/UserContextAPI";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comment = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const params = useParams();

  // axios
  // get => 조회
  // post => 추가
  // put, patch => 편집 ( put 전체 편집 patch 일부 편집 )
  // delete => 삭제
  useEffect(() => {
    // async await
    axios
      .get(`http://localhost:5001/comment?postId=${params.id}`) // post id가 params.id인 코멘트 데이터를 요청
      .then((response) => {
        // 위에가 잘 어떻게 되서 결과 나왔는데 그 결과가 response
        setData(response.data); // response.data 값을 data라는 useState에 담아줌
      });
  }, []);

  const writeComment = (e) => {
    axios
      .post("http://localhost:5001/comment", {
        // http://localhost:5001/comment에다가 댓글을 추가해달라고 요청
        // 그 안에 들어갈 데이터
        nickname: "가나다라",
        content: inputRef.current.value,
        postid: Number(params.id),
        createAt: "2015.12.12",
      })
      .then((response) => {
        // 데이터가 잘 들어갔는지 나오는 그런 대충 그런거
        setData((current) => [...current, response.data]); // data에다가 response.data를 추가
      });
  };

  const modifyComment = (id) => {
    axios
      .patch(`http://localhost:5001/comment/${id}`, {
        content: inputRef.current.value,
      })
      .then((response) => {
        // reduce, filter, map, forEach
        setData((current) =>
          current.map((comment) => {
            if (comment.id === response.data.id) {
              return response.data;
            } else {
              return comment;
            }
          })
        );
      });
  };

  const deleteComment = (id) => {
    axios.delete(`http://localhost:5001/comment/${id}`).then((response) => {
      setData((current) => current.filter((v) => v.id !== id));
    });
  };

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {data.map((comment, index) => {
        return (
          <div
            key={index}
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              border: "1px solid #999",
              padding: "10px",
              margin: "auto 0 10px auto",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>{comment.nickname}</div>
              <div>{comment.content}</div>
              <div>{comment.createAt}</div>
            </div>
            <div
              style={{
                borderRadius: "5px",
              }}
            >
              <button
                onClick={() => {
                  modifyComment(comment.id);
                }}
                style={{
                  backgroundColor: "rosybrown",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  deleteComment(comment.id);
                }}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "rosybrown",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}
      <div styled={{
        
      }}>
        <input
          type="text"
          ref={inputRef}
          style={{
            width: "50%",
            height: "40px",
            borderRadius: "5px",
            margin:"0 200px"
        
          }}
        />
        <button
          onClick={writeComment}
          style={{
            marginLeft: "-180px",
            height: "40px",
            backgroundColor: "rosybrown",
            border: "none",
            borderRadius: "5px",
          }}
        >
          댓글 쓰기
        </button>
      </div>
    </div>
  );
};

export default Comment;
