import React from 'react'
import './RightFour.css'

const RightFour = () => {
    return (
        <div className='rightFour'>
            <div className="fourInside">
                <div className="rightFourTitle">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path d="M7.5 6.73438C6.88125 6.73438 6.375 6.5375 5.98125 6.14375C5.5875 5.75 5.39062 5.24375 5.39062 4.625C5.39062 4.00625 5.5875 3.5 5.98125 3.10625C6.375 2.7125 6.88125 2.51562 7.5 2.51562C8.11875 2.51562 8.625 2.7125 9.01875 3.10625C9.4125 3.5 9.60938 4.00625 9.60938 4.625C9.60938 5.24375 9.4125 5.75 9.01875 6.14375C8.625 6.5375 8.11875 6.73438 7.5 6.73438ZM11.1562 11.2484H3.84375C3.60938 11.2484 3.41016 11.1664 3.24609 11.0023C3.08203 10.8383 3 10.6391 3 10.4047V9.92656C3 9.57031 3.08906 9.26562 3.26719 9.0125C3.44531 8.75937 3.675 8.56719 3.95625 8.43594C4.58437 8.15469 5.18672 7.94375 5.76328 7.80312C6.33984 7.6625 6.91875 7.59219 7.5 7.59219C8.08125 7.59219 8.65781 7.66484 9.22969 7.81016C9.80156 7.95547 10.4016 8.16406 11.0297 8.43594C11.3203 8.56719 11.5547 8.75937 11.7328 9.0125C11.9109 9.26562 12 9.57031 12 9.92656V10.4047C12 10.6391 11.918 10.8383 11.7539 11.0023C11.5898 11.1664 11.3906 11.2484 11.1562 11.2484ZM3.84375 10.4047H11.1562V9.92656C11.1562 9.77656 11.1117 9.63359 11.0227 9.49766C10.9336 9.36172 10.8234 9.26094 10.6922 9.19531C10.0922 8.90469 9.54375 8.70547 9.04688 8.59766C8.55 8.48984 8.03438 8.43594 7.5 8.43594C6.96563 8.43594 6.44531 8.48984 5.93906 8.59766C5.43281 8.70547 4.88438 8.90469 4.29375 9.19531C4.1625 9.26094 4.05469 9.36172 3.97031 9.49766C3.88594 9.63359 3.84375 9.77656 3.84375 9.92656V10.4047ZM7.5 5.89063C7.86562 5.89063 8.16797 5.77109 8.40703 5.53203C8.64609 5.29297 8.76562 4.99063 8.76562 4.625C8.76562 4.25938 8.64609 3.95703 8.40703 3.71797C8.16797 3.47891 7.86562 3.35938 7.5 3.35938C7.13438 3.35938 6.83203 3.47891 6.59297 3.71797C6.35391 3.95703 6.23438 4.25938 6.23438 4.625C6.23438 4.99063 6.35391 5.29297 6.59297 5.53203C6.83203 5.77109 7.13438 5.89063 7.5 5.89063Z" fill="pink" />
                        </svg>
                    </span>

                    <p className='personal'>Personal Details</p>
                </div>

                <div className="fourContents">
                    <div className="some">
                        <p className="lights">Date of birth</p>
                        <p className="darks">08 May 1998</p>
                    </div>

                    <div className="some">
                        <p className="lights">Address</p>
                        <p className="darks">20, SPTBI, near Bhavans College, Azad Nagar, Andheri West</p>
                    </div>

                    <div className="some">
                        <p className="lights">Gender</p>
                        <p className="darks">Male</p>
                    </div>

                    <div className="some">
                        <p className="lights">Languages Known</p>
                        <p className="darks">English, Hindi, Marathi, Tamil</p>
                    </div>

                    <div className="some">
                        <p className="lights">State</p>
                        <p className="darks">Maharashtra</p>
                    </div>

                    <div className="some">
                        <p className="lights">Country</p>
                        <p className="darks">India</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RightFour
