//action
const LOAD = "comment/LOAD";
const CREATE = "comment/CREATE";
const UPDATE = "comment/UPDATE";
const DELETE = "comment/DELETE";


const initialState = {
  list: [
    {
      id: 1,
      nickname: "songyi",
      content: "내용",
    },
    {
      id: 2,
      nickname: "송이",
      content: "헬로",
    },
    {
      id: 3,
      nickname: "짱짱이",
      content: "바보",
    },
  ],
};

//action creator
export function loadComment(comment_list) {
  return { type: LOAD, comment_list };
}

export function createComment(comment) {
  return { type: CREATE, comment };
}

export function updateComment(comment_index, comment_id, comment_data) {
    return { type: UPDATE, comment_index, comment_id, comment_data };
  }
  
  export function deleteComment(comment_index) {
    return { type: DELETE, comment_index };
  }
//middlewares

  

  
 
  


  
//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "comment/LOAD": {
      return { list: action.comment_list };
    }
    case "comment/CREATE": {
      const new_comment_list = [...state.list, action.comment];
      return { ...state, list: new_comment_list };
    }
    case "comment/UPDATE": {
        console.log(action); // action.id, action.data
        const new_comment_list = state.list.map((l, index) => {
          // 원하는 id의 데이터를 찾고 그 데이터만 우리가 교체하고 싶은 데이터로 교체
          if (parseInt(action.comment_index) === index) {
            //문자열을 수로 바꿔줌
            //   console.log(action.content_data.image_url, "이건데");
            return {
              ...l,
              content: action.comment_data.content,
              image_url: action.comment_data.image_url,
              // id: action.word_index.id,
            };
            // idx가 같은 것만 true로 변경 후 리턴
          } else {
            return l;
            // 나머진 그대로 리턴
          }
        });
        return { ...state, list: new_comment_list };
      }
  
      case "comment/DELETE": {
        const new_comment_list = state.list.filter((l, idx) => {
          return parseInt(action.comment_index) !== idx;
        });
  
        
        return { list: new_comment_list };
      }
    default:
      return state;
  }
}
