import React from 'react'

export default function Appointment() {
  return (
    <>
        {/* <!--======== appoinment area start ========--> */}
        <section className="appoinment-area pb-110"> 
            <div className="container">
                <div className="appoinment-box white-bg">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="appoinment-box">
                                <h3>Get Appointment</h3>
                                <div className="appoinment-form">
                                    <form action="#">
                                        <input type="text" placeholder="Your Name"/>
                                        <input type="email" placeholder="Your Email"/>
                                        <textarea name="message" id="" cols="30" rows="10" placeholder="Write Message"></textarea>
                                        <button className="f-btn w-100">make an appointment</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="counter-box">
                                <div className="section-title-wrap mb-60">
                                    <div className="section-sub-title mb-20">
                                        <img src="assets/img/icon/sec-icon-1.png" alt=""/>
                                        <span className="ml-15">our achievement</span>
                                    </div>
                                    <h2 className="section-title mb-10">Healing Through More Than Reality and Games </h2>
                                </div>
                                <div className="counter-list-box">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="counter-iteam pb-30 pl-25">
                                                <h2 className="pink-color">290</h2>
                                                <span>Psychologist</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="counter-iteam pb-30 pl-25">
                                                <h2>290</h2>
                                                <span>Psychologist</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="counter-iteam pt-30 pl-25">
                                                <h2>290</h2>
                                                <span>Psychologist</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="counter-iteam pt-30 pl-25">
                                                <h2 className="pink-color">290</h2>
                                                <span>Psychologist</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--======== appoinment area end ========--> */}
    </>
  )
}