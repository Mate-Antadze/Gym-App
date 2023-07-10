import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UserIcon, LinkIcon } from '@heroicons/react/outline'



function Footer() {
    return (
        <div className="c-footer-wrapper">
            <hr />
            <div className="cFooter">
                
                <div className="logoo">
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Contact Us</span>
                        <div className='pngLine'>
                            <LocationMarkerIcon className='icon' />
                            <span>6353 Juan Taboo, Ap 6</span>
                        </div>
                        <div className='pngLine'>
                            <PhoneIcon className='icon' />
                            <span>352-306-4415</span>
                        </div>
                        <div className='pngLine'>
                            <InboxIcon className='icon' />
                            <span>support@amazon.com</span>
                        </div>
                    </div>
                    
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Account</span>
                        <div className='pngLine'>
                            <LoginIcon className='icon' />
                            <span>Sign In</span>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Company</span>
                        <div className='pngLine'>
                            <UserIcon className='icon' />
                            <span>About us</span>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="detail">
                        <span>Resources</span>
                        <div className='pngLine'>
                            <LinkIcon className='icon' />
                            <span>Safety Privacy & Terms</span>
                        </div>
                    </div>
                </div>
            </div>
                <div className="copyRight">
                    <span>Copyright @2023 By Amazon</span>
                    <span>All right reserved</span>
                </div>
        </div>
    )
}

export default Footer