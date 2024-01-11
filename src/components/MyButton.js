const MyButton = ({text, type, onClick}) =>{
    return(
        <button className={"MyButton"} onClick={onClick}>
            {text}
        </button>
    )
}

//type따로 전달하지않으면 default로 설정 (기본값)
MyButton.defaultProps={
    type:"default",
}

export default MyButton;