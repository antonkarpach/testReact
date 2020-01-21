import React from "react";
import Article from "./Article";

const myNews = [
    {
        id: 1,
        author: 'Anton',
        text: 'In Saturnday, by Six'
    },
    {
        id: 2,
        author: 'Vasia',
        text: 'I think, that $ have cost 35R'
    },
    {
        id: 3,
        author: 'Max',
        text: '2 years passed and $ also have not cost 35R'
    },
];

class News extends React.Component {
    render() {
        let newsTemplate;
        if(myNews.length){
            newsTemplate = myNews.map((item) => {
                return <Article data={item} key={item.id}/>
            })
        } else {
            newsTemplate = 'Новостей пока что нет';
        }

        return (
            <div>
                {newsTemplate}
                {
                    myNews.length? <strong>Count of the news is {myNews.length}</strong>: null
                }
            </div>
        );
    }
}

export default News;