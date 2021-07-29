import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import './Issues.scss'
import Issue from './Issue'
import { Link } from 'react-router-dom'

const Issues = (props) => {

    return (
        <div className="issues">

            {
                props.issues.map((issue) => {
                    return (
                        <div className="Issue">
                            <Link
                                to={{
                                    pathname: `/issue/${issue.id}`,
                                    details: {
                                        issue
                                    }
                                }}
                            >


                                <div className="header d-inline">
                                    <span className="status">
                                        {
                                            issue.state === 'open' ?
                                                (<FontAwesomeIcon icon={faExclamationCircle} />) :
                                                (<FontAwesomeIcon icon={faCheckCircle} />)
                                        }
                                    </span>

                                    <h5 className="title d-inline">
                                        {issue.title}
                                    </h5>
                                </div>

                            </Link>

                            <div className="labels d-inline">
                                {
                                    issue.labels.length ? issue.labels.map(label => {
                                        return (
                                            <span
                                                key={label.id}
                                                className="label"
                                                style={{ backgroundColor: `#${label.color}` }}>{label.name}</span>
                                        )
                                    })
                                        : null
                                }
                            </div>

                          <div className="infoTicket">
                              <span className="id">#${issue.id}</span>
                              <span className="createdAt">opened {issue.created_at}</span>
                              <span className="id"> by {issue.user.login}</span>
                          </div>
                        </div>
                    );
                })}

        </div>
    );
};

export default Issues
