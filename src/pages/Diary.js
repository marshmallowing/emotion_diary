import {useParams} from "react-router-dom";

const Diary = () =>{

    const {id}=useParams();
    console.log(id);
    /*
    useParams(): 전달받아서 들어오게되는 pass variable들을 모아서
    객체로 갖다줌
    (우리는 이 pass variable들을 id라 부르기로 정함_App.js)
    => 전달되는 이 pass variable들을 {id} 로 꺼내옴
    */
    return (
      <div>
        <h1>Diary</h1>
        <p>이곳은 일기 상세 페이지 입니다.</p>
      </div>
    );
};

export default Diary;