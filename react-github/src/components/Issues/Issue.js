import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import MarkDown from '../MarkDown/MarkDown'
import Comments from '../Comments/Comments'




const Issue = (props) => {
    return (
        <React.Fragment>
             <MarkDown repoUrl={props.location.details.issue.repository_url}/>
             <Comments commentsUrl={props.location.details.issue.comments_url}/>

        </React.Fragment>
    )
}

export default Issue
