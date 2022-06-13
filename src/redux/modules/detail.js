import axios from "axios";

//action
const LOAD = "detail/LOAD";
const DELETE = "detail/DELETE";

const initialState = {
  list: [],
};

//action creator
export function loadDetail(Detail_list) {
  return { type: LOAD, Detail_list };
}

export function deleteDetail(detail_index) {
  return { type: DELETE, detail_index };
}

//middlewares
// export const getPost = (id) => {
//   return async function (dispatch) {
//     const data = await axios.get(`http://localhost:5001/post/${id}`);
//     // console.log(data.data, "이거");

//     dispatch(loadDetail(data.data));
//     // = dispatch({type : LOAD, Detail_list : data.data})
//   };
// };



//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "detail/LOAD": {
      return { list: [action.Detail_list] };
    }

    case "detail/DELETE": {
      //   const new_detail_list = state.list.filter((l, idx) => {
      //     return parseInt(action.detail_index) !== idx;
      //   });
      const new_detail_list = state.list.filter((l, index) => {
        if (l.id === action.detail_index) {
          return false;
        } else {
          return true;
        }
      });
      return { list: new_detail_list };
    }

    default:
      return state;
  }
}

// get, post, put, patch, delete
// get ==> 데이터 가져오기

// post ==> 데이터 추가하기
// const data = await axios.post("http://localhost:5001/post", {
//       subject : "제목2",
//       content : "내용2"
//   })

// put ==> 데이터 전체 변경

// patch ==> 데이터 일부 변경
// const data = await axios.patch("http://localhost:5001/post/1", {
//       subject : "제목2",                                  id값
//       content : "내용2"
//   })

// delete ==> 데이터 삭제
// const data = await axios.delete("http://localhost:5001/post/1", {
//       subject : "제목2",                                  id값
//       content : "내용2"
//   })