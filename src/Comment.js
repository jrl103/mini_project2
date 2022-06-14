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
    useEffect(() => { // async await
        axios.get(`http://localhost:5001/comment?postId=${params.id}`)  // post id가 params.id인 코멘트 데이터를 요청
        .then((response) => { // 위에가 잘 어떻게 되서 결과 나왔는데 그 결과가 response
            setData(response.data); // response.data 값을 data라는 useState에 담아줌
        });
    }, []);

    const writeComment = (e) => {
        axios.post("http://localhost:5001/comment", { // http://localhost:5001/comment에다가 댓글을 추가해달라고 요청
            // 그 안에 들어갈 데이터
            nickname: "가나다라",
            content: inputRef.current.value,
            postid: Number(params.id),
            createAt: "2015.12.12"
        })
        .then((response) => { // 데이터가 잘 들어갔는지 나오는 그런 대충 그런거
            setData((current) => [...current, response.data]) // data에다가 response.data를 추가
        });
    }

    const modifyComment = (id) => {
        axios.patch(`http://localhost:5001/comment/${id}`,
            { content: inputRef.current.value }
        )
        .then((response) => { // reduce, filter, map, forEach
            setData((current) => current.map((comment) => {
                if (comment.id === response.data.id) {
                    return response.data;
                } else {
                    return comment;
                }
            }));
        });
    }

    const deleteComment = (id) => {
        axios.delete(`http://localhost:5001/comment/${id}`)
        .then((response) => {
            setData((current) => current.filter((v) => v.id !== id));
        });
    }

    useEffect(() => {
        console.log(params);
    }, []);

    return (
        <div>
            {
                data.map((comment, index) => {
                    return (
                        <div key={index}>
                            <div>{comment.nickname}</div>
                            <div>{comment.content}</div>
                            <div>{comment.createAt}</div>
                            <button onClick={() => {
                                modifyComment(comment.id);
                            }}>수정</button>
                            <button onClick={() => {
                                deleteComment(comment.id);
                            }}>삭제</button>
                        </div>
                    )
                })
            }
            <input type="text" ref={inputRef} />
            <button onClick={writeComment}>댓글 쓰기</button>
        </div>
    );
};

export default Comment;