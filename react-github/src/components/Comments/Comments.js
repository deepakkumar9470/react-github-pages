import React,{useState, useEffect} from 'react'
import {getComments} from '../apiCalls/api';

import ReactMarkdown from 'react-markdown';
import './Comments.scss'


const Comments = (props) => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
            const res = getComments(props.commentsUrl);
            setComments(res.data)
    },[props.commentsUrl]);


    return (
        <div className="comments">
            <h2>Comments:</h2>
            {
                comments.map((value)=>{
                    return (
                        <React.Fragment key={value.id}>
                            <div className="commentBody">
                                <span className="User">{value.user.login}</span>

                                <ReactMarkdown
                                    sourcePos = {value.body}
                                    escapeHtml={true}
                                    className="CommentsMarkdown"
                                />
                                

                            </div>
                        </React.Fragment>
                    )
                })
            }
            
        </div>
    )
}

export default Comments
