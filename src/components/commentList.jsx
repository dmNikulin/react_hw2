import {useEffect, useState} from 'react';

function CommentList() {
    const [comments, setComments] = useState([
        { id: 0, text: "Это первый комментарий" },
        { id: 1, text: "Это второй комментарий" },
        { id: 2, text: "Это третий комментарий" }
        ]);
    

    // const delComment = (idEl) => {
    //     comments.splice(idEl,1);
    //     let counter = 0;

    //     comments.forEach(el => {
    //         el.id = counter;
    //         counter++;
    //     })

    //     setComments(comments);
    //     console.log(comments);
    // }

    const delComment = (idEl) => {
        idEl.style.display="none";
        idEl.previousElementSibling.style.display="none";
    }

    return (
        comments.map((mes) => 
            <><div key={mes.id}>{mes.text}</div><button id = {mes.id} onClick={(e) => delComment(e.target)}>Удалить</button></>)
    );
}

export default CommentList;