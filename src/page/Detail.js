import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Comment from "../Comment";

const Detail = () => {
  // const detail_list = useSelector((state) => state.detail.list);
  // const comment_list = useSelector((state) => state.comment.list);

  const navigate = useNavigate();
  const params = useParams();
  const detail_id = params.id;

  const dispatch = useDispatch();
  // const data = useSelector((state) => state.detail);

  useEffect(() => {
    // dispatch(getPost(Number(detail_id)));
  }, []);

  // useEffect(() => {
  //   console.log(detail_list);
  // },[detail_list])

  // const detail = detail_list.filter((value) => {
  //   if (value.id === Number(params.id)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // console.log(detail);

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // async await
    axios
      .get(`http://localhost:5001/post/${params.id}`) // post id가 params.id인 코멘트 데이터를 요청
      .then((response) => {
        // 위에가 잘 어떻게 돼서 결과 나왔는데 그 결과가 response
        setData(response.data); // response.data 값을 data라는 useState에 담아줌
      });
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://localhost:5001/post/${id}`).then((response) => {
      setData((current) => current.filter((v) => v.id !== id));
    });
  };

  return (
    <Wrap>
      <TitleBox>
        <TitleText>{data?.title}</TitleText>

        <TitleBtns>
          <UpdateBtn
            onClick={() => {
              navigate("/update");
            }}
          >
            수정
          </UpdateBtn>
          <DeleteBtn
            onClick={() => {
              deletePost(data?.id);
            }}
          >
            삭제
          </DeleteBtn>
        </TitleBtns>
      </TitleBox>
      <ContentBox>
        <ContentInfo>
          <ContentNickname>{data?.nickname}</ContentNickname>
          <Date>{data?.date}</Date>
        </ContentInfo>
        <Content>{data?.contents}</Content>
      </ContentBox>
      <CommentBoxs>

          <CommentArticle>
            <Comment />
          </CommentArticle>

        {/* <CommentListBox>
          <CommentList></CommentList>
        </CommentListBox> */}

      </CommentBoxs>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 70%;
  height: 100%;
  margin:auto;
`;

// Title
const TitleBox = styled.div`
  width: 100%;
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px double rosybrown;
  align-items:center;
`;
const TitleText = styled.h1`
  font-size: 30px;
  color: rosybrown;
`;
const TitleBtns = styled.div`

`;
const UpdateBtn = styled.button`
  margin-right: 10px;
  width:50px;
  height:50px;
  background-color:#e9c5c5;
  border : none;
  border-radius:5px;
  padding: 10px;
`;
const DeleteBtn = styled.button`
  width:50px;
  height:50px;
  background-color:#e9c5c5;
  border : none;
  border-radius:5px;
  padding: 10px;
  `;

// Content
const ContentBox = styled.div`
  width: 80%;
  margin: auto;
  padding: 16px;
`;
const ContentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:0 auto 15px 13px;

`;
const ContentNickname = styled.div``;
const Date = styled.div``;
const Content = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #999;
  border-radius:5px;
  padding: 16px;
`;

// Comment
const CommentBoxs = styled.div`
  width: 95%;
  margin: auto;
  padding: 16px;
  border: 1px solid #999;
  border-radius:5px;
`;
const CommentArticle = styled.div`
  width: 100%;
  /* background-color: #666; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:auto;
  /* border: 1px solid #999 */
`;
const CommentNickname = styled.div``;
const CommentContent = styled.div``;
const CompleteBtn = styled.button``;

// CommentList
const CommentListBox = styled.div`
  width: 95%;
  margin: auto;
  padding: 16px;
`;
const CommentList = styled.div`
  width: 100%;
  background-color: #666;
`;
const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const ListNickname = styled.div``;
const ListContent = styled.div``;

export default Detail;
