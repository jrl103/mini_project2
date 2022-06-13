import { useEffect, useState } from "react";
import axios from "axios";

function Test() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => await axios.get("http://localhost:5001/comment"))().then((response) => {
            setData(response.data);
            console.log(response.data);
        });
    }, []);
    return (
        <div>
            {data.map((comment, index) => {
                return (
                    <div key={index}>
                        <div>{comment.nickname}</div>
                        <div>{comment.content}</div>
                        <div>{comment.createAt}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default Test;