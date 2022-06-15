import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Detail from "./page/Detail";
import Create from "./page/Create";
import Test from "./Test";

function App() {
  const dispatch = useDispatch();

  // // axios 통신
  // const callSomethingAxios = () => {
  //   axios.get("http://localhost:5001/post").then((response) => {
  //     // console.log(response);
  //     dispatch()
  //   });
  // };

  // React.useEffect(() => {
  //   callSomethingAxios();
  // }, []);

  // commet map 돌릴 거
  // const commentList = [
  //   {
  //     nickname: "songyi",
  //     content: "안녕",
  //   },
  //   {
  //     nickname: "송이",
  //     content: "헬로",
  //   },
  //   {
  //     nickname: "짱짱",
  //     content: "바보",
  //   },
  // ];

  // load 돌리기 (서버랑 연결했을때 해야함)

  // React.useEffect(() => {
  //   dispatch(loadDetail());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/detail/:id"
          element={<Detail/>}
        ></Route>
        <Route path="/test" element={<Test />} />
        <Route path="/create" element={<Create/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
