import React from 'react'

export default function Contact() {
  return (
    <>
      {/* <!--======== contact area start ========--> */}
      <section className="contact-area pd-lr" data-background="assets/img/bg/sycho-banner.jpg">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-5 mb-30">
                      <div className="contact-form pt-100">
                          <div className="section-title-wrap section-title-white mb-60">
                              <div className="section-sub-title mb-20">
                                  <img src="assets/img/icon/sec-icon-1.png" alt=""/>
                                  <span className="ml-15">our achievement</span>
                              </div>
                              <h2 className="section-title mb-10">Healing Through More Than Reality and Games </h2>
                          </div>
                          <form action="#">
                              <div className="row">
                                  <div className="col-lg-6 mb-20">
                                      <input type="text" placeholder="Your Name"/>
                                  </div>
                                  <div className="col-lg-6 mb-20">
                                      <input type="text" placeholder="Your Email"/>
                                  </div>
                                  <div className="col-lg-6 mb-20">
                                      <input type="text" placeholder="Phon Number"/>
                                  </div>
                                  <div className="col-lg-6 mb-20">
                                    <div className="contact-select">
                                      <select name="subject" id="#">
                                          <option value="one">Chose Problem</option>
                                          <option value="one">Subject 01</option>
                                          <option value="one">Subject 01</option>
                                          <option value="one">Subject 01</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                      <textarea name="" id="" cols="30" rows="10" placeholder="Write Message"></textarea>
                                      <button className="sy-btn sy-btn-pink">Submit Message</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="our-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3701967527622!2d90.3905615153625!3d23.73417469531189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c1f25e613d%3A0xaad562eec578f8ff!2sArts%20Faculty%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1660337206588!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="This is a unique title"></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* <!--======== contact area end ========--> */}
    </>
  )
}