import React,{useState, useEffect} from 'react'
import {fetchIssuesReadme, renderIssueReadme} from '../apiCalls/api';
import ReactMarkDown from 'react-markdown'

const MarkDown = (props) => {
     const [issueMDURL,setissueMDURL] = useState()
     const [issueMD,setissueMD] = useState()


    useEffect(() =>{
         fetchIssuesReadme(props.repoURL)
         .then(res=> setissueMDURL(res.data))

         if(issueMDURL){
             renderIssueReadme(issueMDURL).then(res=>setissueMD(res.data))
         }
    },[props.repoURL, issueMDURL])

    

    return (
        <React.Fragment>
            <h5 style={{fontSize : '1rem'}}MD of the repository></h5>
            <ReactMarkDown
              sourcePos ={issueMD}
              className="issueMD"
              escapeHtml={true}
            />
        </React.Fragment>
    )
}

export default MarkDown
