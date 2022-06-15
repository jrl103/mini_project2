
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { deletePostRQ} from "../redux/modules/post"
import styled from "styled-components";


const Boram = (props) =>{
    const param = useParams();
    const post_Index = param.index;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const postContent = useSelector((state)=> state.post.list)
    
    return ( 
<>
        <Wrap>
            <TitleBox> 
                {/* <h3>{postContent[post_Index].title}</h3> */}
                <h3>sdfdf</h3>
                <PostInfoBox>
                    <button onClick={()=> navigate("/modifyPost/"+post_Index)}>
                        수정</button>
                    <button onClick={ () =>{ 
                        // dispatch(deletePostRQ(postContent[post_Index].id));
                        
                        navigate("/")
                        }} >
                        삭제</button>
                </PostInfoBox>
            </TitleBox>
            <div>
                {/* <span>{postContent[post_Index].nickname}</span><span>{postContent[post_Index].date }</span> */}
                sdsds
            </div>
            <div>
            {/* {postContent[post_Index].contents} */}
            dssdsd
            </div>
            <div>
                <span>닉네임이얌</span>
                댓글입력영역
                <button>입력버튼</button>
            </div>
        </Wrap>


</>   
  );
}

const Wrap = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

background-color: rosybrown;
border-radius: 10px;
width: 80%;
min-width: 760px; 
max-width: 1000px;

margin-top : 10px;
`;


const TitleBox = styled.div`
display: flex;
align-items: center;
`;

const PostInfoBox = styled.div`
`;


export default Boram;