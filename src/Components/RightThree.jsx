import React from 'react'
import './RightThree.css'

const RightThree = () => {
    return (
        <div className='rightThree'>
            <div className="threeInside">
                <div className="resumeTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" className='pinkTrophy' width="15" height="14" viewBox="0 0 15 14" fill="none">
                        <g clip-path="url(#clip0_1_789)">
                            <path d="M10.1005 6.11688V1.375H4.51562V6.11688C4.51562 6.31375 4.61615 6.49937 4.78929 6.60063L7.12378 8.0125L6.57087 9.32875L4.66642 9.49187L6.11291 10.7519L5.6717 12.625L7.30808 11.6294L8.94446 12.625L8.50884 10.7519L9.95533 9.49187L8.05088 9.32875L7.49797 8.0125L9.83247 6.60063C10 6.49937 10.1005 6.31938 10.1005 6.11688ZM7.86657 7.12937L7.30808 7.46688L6.74959 7.12937V1.9375H7.86657V7.12937Z" fill="pink" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_789">
                                <rect width="13.5" height="13.5" fill="white" transform="translate(0.75 0.25)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p className='resume'>Resume</p>
                </div>

                <div className="uploadImg">
                    <svg xmlns="http://www.w3.org/2000/svg" className='file' width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <g clip-path="url(#clip0_1_798)">
                            <path d="M7.5 1H3.5C2.95 1 2.505 1.45 2.505 2L2.5 10C2.5 10.55 2.945 11 3.495 11H9.5C10.05 11 10.5 10.55 10.5 10V4L7.5 1ZM8.5 9H4.5V8H8.5V9ZM8.5 7H4.5V6H8.5V7ZM7 4.5V1.75L9.75 4.5H7Z" fill="#5E718D" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_798">
                                <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p className='uploadName'>Arbaz_K...</p>

                    <svg xmlns="http://www.w3.org/2000/svg" className='download' width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle cx="12.75" cy="13" r="12.375" fill="white" stroke="#AFBACA" stroke-width="0.75" className='circle'
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className='downloadInside' width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0_1_804)">
                                <path d="M10.3594 8.71094V10.6094H2.76562V8.71094H1.5V10.6094C1.5 11.3055 2.06953 11.875 2.76562 11.875H10.3594C11.0555 11.875 11.625 11.3055 11.625 10.6094V8.71094H10.3594ZM9.72656 6.17969L8.8343 5.28742L7.19531 6.92008V1.75H5.92969V6.92008L4.2907 5.28742L3.39844 6.17969L6.5625 9.34375L9.72656 6.17969Z" fill="#5E718D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_804">
                                    <rect width="13.5" height="13.5" fill="white" transform="translate(0 0.25)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className='delete' width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle cx="13.25" cy="13" r="12.375" fill="white" stroke="#AFBACA" stroke-width="0.75" />


                        <svg xmlns="http://www.w3.org/2000/svg" className='deleteInside' width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0_1_811)">
                                <path d="M9.5 5.3125V10.9375H5V5.3125H9.5ZM8.65625 1.9375H5.84375L5.28125 2.5H3.3125V3.625H11.1875V2.5H9.21875L8.65625 1.9375ZM10.625 4.1875H3.875V10.9375C3.875 11.5562 4.38125 12.0625 5 12.0625H9.5C10.1188 12.0625 10.625 11.5562 10.625 10.9375V4.1875Z" fill="#5E718D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_811">
                                    <rect width="13.5" height="13.5" fill="white" transform="translate(0.5 0.25)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </svg>
                </div>

                <div className="update">
                    <div className="updateResume">
                        <p className='upP'>Update Resume</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightThree
