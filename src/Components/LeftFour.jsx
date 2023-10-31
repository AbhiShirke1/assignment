import React from 'react'
import './LeftFour.css'

const LeftFour = () => {
  return (
    <div className="leftFour">
                    <div className="collegeContents">
                        <div className="pencil">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M7.0625 11.625C6.9058 11.625 6.77623 11.5738 6.67377 11.4713C6.57132 11.3689 6.52009 11.2393 6.52009 11.0826V7.10491H2.54241C2.38571 7.10491 2.25614 7.05368 2.15368 6.95123C2.05123 6.84877 2 6.7192 2 6.5625C2 6.4058 2.05123 6.27623 2.15368 6.17377C2.25614 6.07132 2.38571 6.02009 2.54241 6.02009H6.52009V2.04241C6.52009 1.88571 6.57132 1.75614 6.67377 1.65368C6.77623 1.55123 6.9058 1.5 7.0625 1.5C7.2192 1.5 7.34877 1.55123 7.45123 1.65368C7.55368 1.75614 7.60491 1.88571 7.60491 2.04241V6.02009H11.5826C11.7393 6.02009 11.8689 6.07132 11.9713 6.17377C12.0738 6.27623 12.125 6.4058 12.125 6.5625C12.125 6.7192 12.0738 6.84877 11.9713 6.95123C11.8689 7.05368 11.7393 7.10491 11.5826 7.10491H7.60491V11.0826C7.60491 11.2393 7.55368 11.3689 7.45123 11.4713C7.34877 11.5738 7.2192 11.625 7.0625 11.625Z" fill="#5E718D" />
                            </svg>
                        </div>
                        <div className="eduTitle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <g clip-path="url(#clip0_1_639)">
                                    <path d="M7 2.4375L0.8125 5.8125L3.0625 7.03875V10.4138L7 12.5625L10.9375 10.4138V7.03875L12.0625 6.42563V10.3125H13.1875V5.8125L7 2.4375ZM10.8363 5.8125L7 7.905L3.16375 5.8125L7 3.72L10.8363 5.8125ZM9.8125 9.74437L7 11.28L4.1875 9.74437V7.65188L7 9.1875L9.8125 7.65188V9.74437Z" fill="purple" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_639">
                                        <rect width="13.5" height="13.5" fill="white" transform="translate(0.25 0.75)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='education'>Education</p>
                        </div>

                        <div className="college">
                            <p className="clgName">JaiHind College</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className=''>
                                <g clip-path="url(#clip0_1_647)">
                                    <path d="M1.9375 10.0707V11.7807C1.9375 11.9382 2.06125 12.062 2.21875 12.062H3.92875C4.00187 12.062 4.075 12.0338 4.12562 11.9776L10.2681 5.8407L8.15875 3.73133L2.02188 9.8682C1.96563 9.92445 1.9375 9.99195 1.9375 10.0707ZM11.8994 4.20945C12.1187 3.99008 12.1187 3.6357 11.8994 3.41633L10.5831 2.10008C10.3638 1.8807 10.0094 1.8807 9.79 2.10008L8.76062 3.12945L10.87 5.23883L11.8994 4.20945Z" fill="#5E718D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_647">
                                        <rect width="13.5" height="13.5" fill="white" transform="translate(0.25 0.25)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="clgDetails">
                            <p className="course">Bachelor of Science(BSc)</p>

                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='dot'>
                                <circle cx="1.875" cy="1.875" r="1.875" fill="black" />
                            </svg>

                            <p className=''>Computer Science</p>

                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='dot'>
                                <circle cx="1.875" cy="1.875" r="1.875" fill="black" />
                            </svg>

                            <p>Full Time</p>

                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='dot'>
                                <circle cx="1.875" cy="1.875" r="1.875" fill="black" />
                            </svg>

                            <p>CGPA: 9.5/10</p>
                        </div>

                        <p className='month'>Jun 2020 - Apr 2023</p>
                    </div>
                </div>
  )
}

export default LeftFour
