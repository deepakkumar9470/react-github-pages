import React,{useState, useEffect} from 'react'

import './app.scss';
import {BrowserRouter as Router , Route, Switch,Redirect} from 'react-router-dom';
import Renderlist from './components/Renderlist/Renderlist';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Issues from './components/Issues/Issues';
import Spinner from './components/Spinner/Spinner';
import Pagination from './components/Pagination/Pagination';
import {getIssues} from './components/apiCalls/api';

function App() {

  const [issue,setIssues] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  const [curPage,setCurPage] = useState(1)
  const [issueperPage] = useState(5)
 

  useEffect(() =>{
     setIsLoading(false);
     try {
           const res = getIssues()
           console.log(res)
           setIssues(res.data)
           setIsLoading(false);
     } catch (err) {
          console.log('error in fetching data..')
     }
  },[]);


  // Get current issues
  // const indexOfLastIssue = curPage * issueperPage;
  // const indexOfFirstIssue = indexOfLastIssue - issueperPage;
  // const currentIssue = issue.slice(indexOfFirstIssue , indexOfLastIssue)
  

  const indexofLastPost=curPage * issueperPage;
  const indexofFirstPost=indexofLastPost - issueperPage;
  const currentPost= issue.slice(indexofFirstPost , indexofLastPost)
  // Change Page

  const paginate = pageNumber => setCurPage(pageNumber)

  if(isLoading) return <Spinner/>

  return (  
      <div className="App">
       
         <Router basename="/">
                <Switch>
                  <Route exact path="/">
                    <h2>React Github issues</h2>
                    <Issues issues={currentPost}/>
                    <Pagination 
                    IssuePerPage={issueperPage}
                    totalIssue={issue.length}
                    paginate={paginate}
                     curPage
                    />
                  </Route>
                </Switch>

         </Router>
            
       </div>
         
       
  );
}

export default App;



{/* <Navbar/>
<Header/>

<div className="App">


  <Renderlist/>

</div> */}