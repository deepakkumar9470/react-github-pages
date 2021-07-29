import React from 'react'
import './Header.scss'
import StarIcon from '@material-ui/icons/Star';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
const Header = () => {
    return (
        <div className="header">

            <div className="container">
                <div className="left">
                    <svg className="octicon octicon-repo color-text-secondary mr-2" 
                    viewBox="0 0 16 16" version="1.1" width="16" height="16" 
                    aria-hidden="true"><path fillRule="evenodd" 
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                    </path></svg>

                   <span className="headTitle"> facebook / create-react-app</span>
                </div>


                <div className="right">
                    <div className="watch">
                        <VisibilityOutlinedIcon fontSize = "small" className="micon"/>
                        <span className="headTitle"> Watch   |     1.9k</span>
                    </div>
                    <div className="star">
                        <StarIcon fontSize = "small" className="micon"/>
                        <span className="headTitle"> Star   |     80k</span>
                    </div>

                    <div className="fork">
                      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon micon octicon-repo-forked">
                       <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                     </svg>
                        <span className="headTitle"> Fork    |    19.5k</span>
                    </div>

                
                </div>
            </div>
            
        </div>
    )
}

export default Header
