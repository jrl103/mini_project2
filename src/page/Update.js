import React from "react";
import styled  from "styled-components";

const Update = () => {
    const selectList = ["카페", "레시피"];
    const [Selected, setSelected] = React.useState("");
  
    const selectValue = false;
    const handleSelect = (e) => {
      setSelected(e.target.value);
      // 카페를 클릭하면 true
      // 레시피를 클릭하면 false
  
      if(e.target.value === "카페"){
          selectValue = true;
      } else {
          selectValue = false;
      }
    };
    
    // 글 추가할 때
  //   dispatchEvent(addPost({
  //       text:"hello"
  //       category:false
  //   }))
  
    return (
      <Wrap>
        <Message>게시물 안내 메시지</Message>
        <TitleBox>
          <select onChange={handleSelect} value={Selected}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <input type="text" placeholder="TITLE 입력 바"/>
        </TitleBox>
        <ContentBox>
            <input type="text" placeholder="내용"/>
        </ContentBox>
      </Wrap>
    );
  };
  
  const Wrap = styled.div``;
  const Message = styled.div``;
  const TitleBox = styled.div``;
  const ContentBox = styled.div``;

export default Update;