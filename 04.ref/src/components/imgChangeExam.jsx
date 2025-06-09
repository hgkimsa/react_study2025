import React from 'react'

const imgChangeExam = () => {

    let keywordRef = useRef();
    let imgRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();

        if(keywordRef.current.value === "강아지"){
            console.log(imgRef);
            imgRef.current.src = '../img/dog.webp';
        } else{
             imgRef.current.src = '../img/cat.webp';
        }

        // 입력창의 내용을 초기화하고 해당 요소를 선택(focus)하는 기능
        keywordRef.current.value = '';
        keywordRef.current.focus();

    }
  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        <form>
            <input type="text" ref={keywordRef}/>
            <input type="submit" value="변경" />
        </form>
        <p>
            <img style={{width:150, height:150}}
            ref={imgRef}
            src='../img/cat.webp'
            />
        </p>
    </div>

    

  )
}

export default imgChangeExam