import React from 'react'

export default function Header() {
  return (
    <>
    {/* <!--======== header area Start ========--> */}
    <header id="sticky-header" className="header-area transparent-header">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                        <a href="#"><img src="assets/img/logo/logo.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                    <div className="main-menu">
                        <nav id="mobile-menu">
                            <ul>
                                <li><a href="#">Home</a>
                                    <ul className="submenu">
                                        <li><a href="#">Home</a> </li>
                                        <li><a href="#">About</a> </li>
                                        <li><a href="#">Blog</a>
                                            <li><a href="#">Services</a>
                                                <ul className="submenu">
                                                    <li><a href="#">Home</a> </li>
                                                    <li><a href="#">About</a> </li>
                                                    <li><a href="#">Blog</a> </li>
                                                    <li><a href="#">Portfolio</a> </li>
                                                    <li><a href="#">Services</a> </li>
                                                    <li><a href="#">Contact</a> </li>
                                                </ul>
                                            </li>
                                        </li>
                                        <li><a href="#">Portfolio</a> </li>
                                        <li><a href="#">Contact</a> </li>
                                    </ul>
                                </li>
                                <li><a href="#">About</a> </li>
                                <li><a href="#">Blog</a> </li>
                                <li><a href="#">Portfolio</a> </li>
                                <li><a href="#">Services</a> </li>
                                <li><a href="#">Contact</a> </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mobile-menu"></div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="header-bar f-right">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="header-cta f-right">
                        <img src="assets/img/icon/phone.png" alt=" "/>
                        <span><a href="tell: +1 (202) 588-6500 ">+1 (202) 588-6500</a></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!--======== header area end ========--> */}
    </>
  )
}
