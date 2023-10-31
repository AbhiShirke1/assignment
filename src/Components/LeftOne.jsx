import React from 'react'
import './LeftOne.css'

const LeftOne = () => {
  return (
    <div className="leftOne">
                    <div className="profile">
                        <div className="profilePic">

                        </div>

                        <div className="profileDetails">

                            <div className="name">
                                <p>Arbaz Khan</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M4.825 11.75L3.875 10.125L1.9875 9.7375L2.2 7.9L1 6.5L2.2 5.1125L1.9875 3.275L3.875 2.8875L4.825 1.25L6.5 2.025L8.175 1.25L9.1375 2.8875L11.0125 3.275L10.8 5.1125L12 6.5L10.8 7.9L11.0125 9.7375L9.1375 10.125L8.175 11.75L6.5 10.975L4.825 11.75ZM5.9625 8.1625L8.8 5.35L8.2375 4.8375L5.9625 7.0875L4.775 5.85L4.2 6.4125L5.9625 8.1625Z" fill="#7B61FF" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className='pen' width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <g clip-path="url(#clip0_1_779)">
                                        <path d="M2.1875 10.0707V11.7807C2.1875 11.9382 2.31125 12.062 2.46875 12.062H4.17875C4.25187 12.062 4.325 12.0338 4.37562 11.9776L10.5181 5.8407L8.40875 3.73133L2.27188 9.8682C2.21563 9.92445 2.1875 9.99195 2.1875 10.0707ZM12.1494 4.20945C12.3687 3.99008 12.3687 3.6357 12.1494 3.41633L10.8331 2.10008C10.6138 1.8807 10.2594 1.8807 10.04 2.10008L9.01062 3.12945L11.12 5.23883L12.1494 4.20945Z" fill="#5E718D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_779">
                                            <rect width="13.5" height="13.5" fill="white" transform="translate(0.5 0.25)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <div className="job">
                                <p className='jobIn'>Frontend Developer Intern</p>
                                <p className='jobIn'>at International Business Machines</p>

                                <div className="contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                        <path d="M9.9375 11.25C8.92083 11.25 7.91042 11 6.90625 10.5C5.90208 10 5 9.35 4.2 8.55C3.4 7.75 2.75 6.84792 2.25 5.84375C1.75 4.83958 1.5 3.82917 1.5 2.8125C1.5 2.65417 1.55417 2.52083 1.6625 2.4125C1.77083 2.30417 1.90417 2.25 2.0625 2.25H3.8125C3.92917 2.25 4.03125 2.28958 4.11875 2.36875C4.20625 2.44792 4.2625 2.55417 4.2875 2.6875L4.625 4.2625C4.64167 4.37917 4.63958 4.48542 4.61875 4.58125C4.59792 4.67708 4.55417 4.75833 4.4875 4.825L3.2375 6.0875C3.70417 6.8625 4.22708 7.5375 4.80625 8.1125C5.38542 8.6875 6.04167 9.175 6.775 9.575L7.9625 8.35C8.04583 8.25833 8.14167 8.19375 8.25 8.15625C8.35833 8.11875 8.46667 8.1125 8.575 8.1375L10.0625 8.4625C10.1875 8.4875 10.2917 8.55 10.375 8.65C10.4583 8.75 10.5 8.86667 10.5 9V10.6875C10.5 10.8458 10.4458 10.9792 10.3375 11.0875C10.2292 11.1958 10.0958 11.25 9.9375 11.25Z" fill="#5E718D" />
                                    </svg>

                                    <p>9876543210</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" className='imgs' width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M2.25 10.75C2.05 10.75 1.875 10.675 1.725 10.525C1.575 10.375 1.5 10.2 1.5 10V3.5C1.5 3.3 1.575 3.125 1.725 2.975C1.875 2.825 2.05 2.75 2.25 2.75H10.75C10.95 2.75 11.125 2.825 11.275 2.975C11.425 3.125 11.5 3.3 11.5 3.5V10C11.5 10.2 11.425 10.375 11.275 10.525C11.125 10.675 10.95 10.75 10.75 10.75H2.25ZM6.5 6.9C6.54167 6.9 6.57708 6.89375 6.60625 6.88125C6.63542 6.86875 6.66667 6.85417 6.7 6.8375L10.625 4.275C10.6667 4.25 10.6979 4.21667 10.7188 4.175C10.7396 4.13333 10.75 4.0875 10.75 4.0375C10.75 3.92917 10.7021 3.84375 10.6062 3.78125C10.5104 3.71875 10.4125 3.72083 10.3125 3.7875L6.5 6.225L2.7 3.7875C2.6 3.72083 2.5 3.71667 2.4 3.775C2.3 3.83333 2.25 3.91667 2.25 4.025C2.25 4.075 2.2625 4.12292 2.2875 4.16875C2.3125 4.21458 2.34167 4.25 2.375 4.275L6.3 6.8375C6.33333 6.85417 6.36458 6.86875 6.39375 6.88125C6.42292 6.89375 6.45833 6.9 6.5 6.9Z" fill="#5E718D" />
                                    </svg>

                                    <p>arbaz.khan@gmail.com</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" className='imgs' width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M6.75 6.625C6.99167 6.625 7.19792 6.53958 7.36875 6.36875C7.53958 6.19792 7.625 5.99167 7.625 5.75C7.625 5.50833 7.53958 5.30208 7.36875 5.13125C7.19792 4.96042 6.99167 4.875 6.75 4.875C6.50833 4.875 6.30208 4.96042 6.13125 5.13125C5.96042 5.30208 5.875 5.50833 5.875 5.75C5.875 5.99167 5.96042 6.19792 6.13125 6.36875C6.30208 6.53958 6.50833 6.625 6.75 6.625ZM6.7625 11.6C6.70417 11.6 6.65 11.5917 6.6 11.575C6.55 11.5583 6.50417 11.5333 6.4625 11.5C5.22083 10.4083 4.29167 9.39583 3.675 8.4625C3.05833 7.52917 2.75 6.65833 2.75 5.85C2.75 4.6 3.15208 3.60417 3.95625 2.8625C4.76042 2.12083 5.69167 1.75 6.75 1.75C7.80833 1.75 8.73958 2.12083 9.54375 2.8625C10.3479 3.60417 10.75 4.6 10.75 5.85C10.75 6.65833 10.4417 7.52917 9.825 8.4625C9.20833 9.39583 8.27917 10.4083 7.0375 11.5C6.99583 11.5333 6.95208 11.5583 6.90625 11.575C6.86042 11.5917 6.8125 11.6 6.7625 11.6Z" fill="#5E718D" />
                                    </svg>

                                    <p>Mumbai, India</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" className='imgs' width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <g clip-path="url(#clip0_1_740)">
                                            <path d="M5.75 8.75V8.25H2.255L2.25 10.25C2.25 10.805 2.695 11.25 3.25 11.25H10.25C10.805 11.25 11.25 10.805 11.25 10.25V8.25H7.75V8.75H5.75ZM10.75 4.25H8.745V3.25L7.745 2.25H5.745L4.745 3.25V4.25H2.75C2.2 4.25 1.75 4.7 1.75 5.25V6.75C1.75 7.305 2.195 7.75 2.75 7.75H5.75V6.75H7.75V7.75H10.75C11.3 7.75 11.75 7.3 11.75 6.75V5.25C11.75 4.7 11.3 4.25 10.75 4.25ZM7.75 4.25H5.75V3.25H7.75V4.25Z" fill="#5E718D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_740">
                                                <rect width="12" height="12" fill="white" transform="translate(0.75 0.75)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p>6 Months</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" className='imgs' width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <g clip-path="url(#clip0_1_745)">
                                            <path d="M11.25 9.75V10.25C11.25 10.8 10.8 11.25 10.25 11.25H3.25C2.695 11.25 2.25 10.8 2.25 10.25V3.25C2.25 2.7 2.695 2.25 3.25 2.25H10.25C10.8 2.25 11.25 2.7 11.25 3.25V3.75H6.75C6.195 3.75 5.75 4.2 5.75 4.75V8.75C5.75 9.3 6.195 9.75 6.75 9.75H11.25ZM6.75 8.75H11.75V4.75H6.75V8.75ZM8.75 7.5C8.335 7.5 8 7.165 8 6.75C8 6.335 8.335 6 8.75 6C9.165 6 9.5 6.335 9.5 6.75C9.5 7.165 9.165 7.5 8.75 7.5Z" fill="#5E718D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_745">
                                                <rect width="12" height="12" fill="white" transform="translate(0.75 0.75)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p>₹1.2 LPA</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="skills">
                        <div className="skillBox">
                            <p>Angular</p>
                        </div>

                        <div className="skillBox">
                            <p>Node.js</p>
                        </div>

                        <div className="skillBox">
                            <p>Express.js</p>
                        </div>

                        <div className="skillBox">
                            <p>MongoDB</p>
                        </div>

                        <div className="skillBox">
                            <p>DevOps</p>
                        </div>

                        <div className="skillBox">
                            <p>Kubernetes</p>
                        </div>

                        <div className="skillBox">
                            <p>Docker</p>
                        </div>

                        <div className="skillBox">
                            <p>RESTful</p>
                        </div>

                        <div className="skillBox">
                            <p>Azure</p>
                        </div>

                        <div className="skillBox">
                            <p>PostreSQL</p>
                        </div>
                    </div>

                    <div className="location">
                        <p className='light'>Preferred Locations:<span className='dark'>Mumbai, Bengaluru, Hyderabad, Delhi, Gurgaon, Noida</span></p>

                        {/* <br /> */}

                        <div className="location2">
                            <p className="light">Willing to Relocation: <span className="dark">Yes</span></p>

                            <p className='light'>Open for: <span className='dark'>Internship, Full Time</span></p>
                        </div>

                    </div>
                </div>
  )
}

export default LeftOne
