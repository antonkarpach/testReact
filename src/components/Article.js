import React from "react";

class Article extends React.Component{
render(){
    let item = this.props.data;
    return(
        <div key={item.id}>
            <p className="news__author">{item.author}:</p>
            <p className="news__text">{item.text}</p>
        </div>
    );
}
}

export default Article;