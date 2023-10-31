import React from 'react'
import './LeftTwo.css'

const LeftTwo = () => {
  return (
    <div className="leftTwo">
                    <div className="leftTwoContents">
                        <div className="pencil">
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
                        <div className="about">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <g clip-path="url(#clip0_1_702)">
                                    <path d="M10.9375 1.6875H8.58625C8.35 1.035 7.73125 0.5625 7 0.5625C6.26875 0.5625 5.65 1.035 5.41375 1.6875H3.0625C2.44375 1.6875 1.9375 2.19375 1.9375 2.8125V10.6875C1.9375 11.3062 2.44375 11.8125 3.0625 11.8125H10.9375C11.5562 11.8125 12.0625 11.3062 12.0625 10.6875V2.8125C12.0625 2.19375 11.5562 1.6875 10.9375 1.6875ZM7 1.6875C7.30937 1.6875 7.5625 1.94062 7.5625 2.25C7.5625 2.55938 7.30937 2.8125 7 2.8125C6.69063 2.8125 6.4375 2.55938 6.4375 2.25C6.4375 1.94062 6.69063 1.6875 7 1.6875ZM8.125 9.5625H4.1875V8.4375H8.125V9.5625ZM9.8125 7.3125H4.1875V6.1875H9.8125V7.3125ZM9.8125 5.0625H4.1875V3.9375H9.8125V5.0625Z" fill="blue" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_702">
                                        <rect width="13.5" height="13.5" fill="white" transform="translate(0.25)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='abtTitle'>About Me</p>
                        </div>

                        <div className="abtContents">
                            I am well-versed in frontend frameworks such as React and have a good grasp of backend technologies including Node.js and Express.js. I have also gained exposure to databases like MongoDB and MySQL, enabling me to design and implement efficient data models. I am constantly learning and exploring new technologies to stay updated with the latest trends in the industry.
                        </div>



                    </div>
                </div>
  )
}

export default LeftTwo
