import React from 'react'
import './Right.css';
import RightTwo from './RightTwo';
import RightThree from './RightThree';
import RightFour from './RightFour';

const Right = () => {
    return (
        <div className="right">
            <div className='rectOne'>
                <div className="rectOneInside">
                    <div className="pencil2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
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
                    <div className="certify">
                        <svg xmlns="http://www.w3.org/2000/svg" className='trophy' width="15" height="14" viewBox="0 0 15 14" fill="yellow">
                            <g clip-path="url(#clip0_1_608)">
                                <path d="M10.1044 6.36688V1.625H4.51953V6.36688C4.51953 6.56375 4.62006 6.74937 4.79319 6.85063L7.12769 8.2625L6.57478 9.57875L4.67032 9.74187L6.11682 11.0019L5.67561 12.875L7.31199 11.8794L8.94837 12.875L8.51275 11.0019L9.95924 9.74187L8.05478 9.57875L7.50188 8.2625L9.83637 6.85063C10.0039 6.74937 10.1044 6.56938 10.1044 6.36688ZM7.87048 7.37937L7.31199 7.71688L6.7535 7.37937V2.1875H7.87048V7.37937Z" fill="yellow" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_608">
                                    <rect width="13.5" height="13.5" fill="white" transform="translate(0.75 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='certifyP'>Certifications</p>
                    </div>

                    <div className="courseDetails">
                        <div className="courseName">
                            <p className='coursera'>Coursera</p>

                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clip-path="url(#clip0_1_619)">
                                    <path d="M2.1875 9.8207V11.5307C2.1875 11.6882 2.31125 11.812 2.46875 11.812H4.17875C4.25187 11.812 4.325 11.7838 4.37562 11.7276L10.5181 5.5907L8.40875 3.48133L2.27188 9.6182C2.21563 9.67445 2.1875 9.74195 2.1875 9.8207ZM12.1494 3.95945C12.3687 3.74008 12.3687 3.3857 12.1494 3.16633L10.8331 1.85008C10.6138 1.6307 10.2594 1.6307 10.04 1.85008L9.01062 2.87945L11.12 4.98883L12.1494 3.95945Z" fill="#5E718D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_619">
                                        <rect width="13.5" height="13.5" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>

                        <div className="details">
                            <p className="web">Web Development Bootcamp</p>

                            <p className="courseDate">Jan 2023 - Jun 2023</p>

                            <div className="upload">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <g clip-path="url(#clip0_1_625)">
                                        <path d="M9.00195 3.99805H7.50195C7.22695 3.99805 7.00195 4.22305 7.00195 4.49805C7.00195 4.77305 7.22695 4.99805 7.50195 4.99805H9.00195C9.82695 4.99805 10.502 5.67305 10.502 6.49805C10.502 7.32305 9.82695 7.99805 9.00195 7.99805H7.50195C7.22695 7.99805 7.00195 8.22305 7.00195 8.49805C7.00195 8.77305 7.22695 8.99805 7.50195 8.99805H9.00195C10.382 8.99805 11.502 7.87805 11.502 6.49805C11.502 5.11805 10.382 3.99805 9.00195 3.99805ZM4.50195 6.49805C4.50195 6.77305 4.72695 6.99805 5.00195 6.99805H8.00195C8.27695 6.99805 8.50195 6.77305 8.50195 6.49805C8.50195 6.22305 8.27695 5.99805 8.00195 5.99805H5.00195C4.72695 5.99805 4.50195 6.22305 4.50195 6.49805ZM5.50195 7.99805H4.00195C3.17695 7.99805 2.50195 7.32305 2.50195 6.49805C2.50195 5.67305 3.17695 4.99805 4.00195 4.99805H5.50195C5.77695 4.99805 6.00195 4.77305 6.00195 4.49805C6.00195 4.22305 5.77695 3.99805 5.50195 3.99805H4.00195C2.62195 3.99805 1.50195 5.11805 1.50195 6.49805C1.50195 7.87805 2.62195 8.99805 4.00195 8.99805H5.50195C5.77695 8.99805 6.00195 8.77305 6.00195 8.49805C6.00195 8.22305 5.77695 7.99805 5.50195 7.99805Z" fill="#463987" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_625">
                                            <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p className="show">Show Certificate</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <RightTwo />
            </div>

            <div>
                <RightThree />
            </div>

            <div>
                <RightFour />
            </div>
        </div>
    )
}

export default Right
