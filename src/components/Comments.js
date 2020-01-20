import React from "react";

const Comments = () => {
    this.props.data.map((item,index)=>{
        return(
            <div>
                <p className={'news__author'}>{item.author}</p>
                <p className={'news__text'}>{item.text}</p>
            </div>
        );
    });
}


export default Comments;