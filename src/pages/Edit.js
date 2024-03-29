import { useNavigate, useSearchParams} from "react-router-dom";

const Edit = () =>{
    const navigate=useNavigate();
    const [searchParmas, setSearchParams]=useSearchParams();
    
    const id = searchParmas.get("i");
    console.log("id:", id);

    const mode=searchParmas.get("mode");
    console.log("mode:", mode);

    return (
      <div>
        <h1>Edit</h1>
        <p>이곳은 일기 수정 페이지 입니다.</p>
        <button onClick={()=>setSearchParams({who: "winterlood"})}>
            QS 바꾸기
        </button>
        
        <button onClick={()=>{
            navigate("/home");
        }}> 
            HOME으로 가기
        </button>
        
        <button onClick={()=>{
            navigate(-1);
        }}>
            뒤로 가기
        </button>
      </div>
    );
};

export default Edit;