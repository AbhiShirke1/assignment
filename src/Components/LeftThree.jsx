import React from 'react'
import './LeftThree.css'

const LeftThree = () => {
  return (
    <div className="leftThree">
                    <div className="threeInside">
                        <div className="pencil">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <path d="M7.0625 12.375C6.9058 12.375 6.77623 12.3238 6.67377 12.2213C6.57132 12.1189 6.52009 11.9893 6.52009 11.8326V7.85491H2.54241C2.38571 7.85491 2.25614 7.80368 2.15368 7.70123C2.05123 7.59877 2 7.4692 2 7.3125C2 7.1558 2.05123 7.02623 2.15368 6.92377C2.25614 6.82132 2.38571 6.77009 2.54241 6.77009H6.52009V2.79241C6.52009 2.63571 6.57132 2.50614 6.67377 2.40368C6.77623 2.30123 6.9058 2.25 7.0625 2.25C7.2192 2.25 7.34877 2.30123 7.45123 2.40368C7.55368 2.50614 7.60491 2.63571 7.60491 2.79241V6.77009H11.5826C11.7393 6.77009 11.8689 6.82132 11.9713 6.92377C12.0738 7.02623 12.125 7.1558 12.125 7.3125C12.125 7.4692 12.0738 7.59877 11.9713 7.70123C11.8689 7.80368 11.7393 7.85491 11.5826 7.85491H7.60491V11.8326C7.60491 11.9893 7.55368 12.1189 7.45123 12.2213C7.34877 12.3238 7.2192 12.375 7.0625 12.375Z" fill="#5E718D" />
                            </svg>
                        </div>
                        <div className="workTitle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <g clip-path="url(#clip0_1_688)">
                                    <path d="M5.875 9.75V9.1875H1.94313L1.9375 11.4375C1.9375 12.0619 2.43813 12.5625 3.0625 12.5625H10.9375C11.5619 12.5625 12.0625 12.0619 12.0625 11.4375V9.1875H8.125V9.75H5.875ZM11.5 4.6875H9.24437V3.5625L8.11937 2.4375H5.86937L4.74437 3.5625V4.6875H2.5C1.88125 4.6875 1.375 5.19375 1.375 5.8125V7.5C1.375 8.12437 1.87563 8.625 2.5 8.625H5.875V7.5H8.125V8.625H11.5C12.1187 8.625 12.625 8.11875 12.625 7.5V5.8125C12.625 5.19375 12.1187 4.6875 11.5 4.6875ZM8.125 4.6875H5.875V3.5625H8.125V4.6875Z" fill="green" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_688">
                                        <rect width="13.5" height="13.5" fill="white" transform="translate(0.25 0.75)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className="work">Work Experience</p>
                        </div>

                        <div className="workContents">
                            <div className="lineup">
                                <p className='lineupx'>LineupX</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <g clip-path="url(#clip0_1_681)">
                                        <path d="M2.1875 10.0707V11.7807C2.1875 11.9382 2.31125 12.062 2.46875 12.062H4.17875C4.25187 12.062 4.325 12.0338 4.37562 11.9776L10.5181 5.8407L8.40875 3.73133L2.27188 9.8682C2.21563 9.92445 2.1875 9.99195 2.1875 10.0707ZM12.1494 4.20945C12.3687 3.99008 12.3687 3.6357 12.1494 3.41633L10.8331 2.10008C10.6138 1.8807 10.2594 1.8807 10.04 2.10008L9.01062 3.12945L11.12 5.23883L12.1494 4.20945Z" fill="#5E718D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_681">
                                            <rect width="13.5" height="13.5" fill="white" transform="translate(0.5 0.25)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <div className="front">
                                <p className='frontP'>Frontend Developer</p>

                                <ul>
                                    <li className='li'>Internship</li>
                                </ul>
                            </div>

                            <div className="time">
                                <p className='timePeriod'>Feb 2023 - Present (6 months)</p>
                            </div>

                            <div className="mainWork">
                                I am well-versed in frontend frameworks such as React and have a good grasp of backend technologies including Node.js and Express.js. I have also gained exposure to databases like MongoDB and MySQL, enabling me to design and implement efficient data models. I am constantly learning and exploring new technologies to stay updated with the latest trends in the industry.
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default LeftThree
