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
                        <button type='button'><img src="assets/img/logo/logo.png" alt="" /></button>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                    <div className="main-menu">
                        <nav id="mobile-menu">
                            <div>
                                <div><button type='button'>Home</button>
                                    <div className="submenu">
                                        <div><button type='button'>Home</button> </div>
                                        <div><button type='button'>About</button> </div>
                                        <div><button type='button'>Blog</button>
                                            <div><button type='button'>Services</button>
                                                <div className="submenu">
                                                    <div><button type='button'>Home</button> </div>
                                                    <div><button type='button'>About</button> </div>
                                                    <div><button type='button'>Blog</button> </div>
                                                    <div><button type='button'>Portfolio</button> </div>
                                                    <div><button type='button'>Services</button> </div>
                                                    <div><button type='button'>Contact</button> </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div><button type='button'>Portfolio</button> </div>
                                        <div><button type='button'>Contact</button> </div>
                                    </div>
                                </div>
                                <div><button type='button'>About</button> </div>
                                <div><button type='button'>Blog</button> </div>
                                <div><button type='button'>Portfolio</button> </div>
                                <div><button type='button'>Services</button> </div>
                                <div><button type='button'>Contact</button> </div>
                            </div>
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
                        <span><button className='hear-phone' type='button'>+1 (202) 588-6500</button></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* <!--======== header area end ========--> */}
    </>
  )
}
