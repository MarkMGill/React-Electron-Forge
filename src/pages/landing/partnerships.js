import React from "react";
import { FaHandshake } from "react-icons/fa";
import Header from "../../components/landing/header";
import Footer from "../../components/landing/footer";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Partnerships() {
    return (
        <>
            <Header />
            <div class="card-body">
            <div class="privacywrapper">
                <h3 className="font-weight-bold">Partnerships <FaHandshake /></h3>
                <p class="h4">FlipSetter is a hybrid software as a service (SaaS) that is designed to provide the most cutting edge tools in internet
                                    technology and collaboration tools! It’s a one-stop shop solution for you that can take your business and staff to the next level
                                    as the new, professional network.</p> 
                <p class="h4">See how our partners below are utilizing our diverse tools to help modernize what they do and how to make a difference as a company!</p>
            
                
                <div class="col-md-4 text-center">
                <Link to={"https://flipsetter.com/images/partners/xp-pen.png"} class="img-fluid mb-3 mb-sm-0" alt="xppen" />
                </div>
                <div class="col-md-8">
                                <h4 class="mt-0 mb-1"><Link to={"https://www.xp-pen.com/"} target="_blank">XP Pen</Link></h4>
                                We are partnering up with XP-Pen, a writing tablet company that manufacturers the highest quality drawing tablets that can be plugged into your desktop, laptop, tablet
                                and even mobile devices via USB. As a reseller, we encourage you to explore more of their featured products by visiting our
                                <Link to={"https://flipsetter.com/xp-pen"}>XP-Pen Information Page</Link>.
                </div>

                <div class="col-md-4 text-center">
                    <Link to={"https://flipsetter.com/images/partners/wtctampa.png"} class="img-fluid mb-3 mb-sm-0" alt="wtctampa" />
                </div>
                <div class="col-md-8">
                                <h4 class="mt-0 mb-1"><Link to={"https://www.wtctampa.org/"} target="_blank">WTCA of Tampa Bay</Link></h4>
                                The World Trade Center Association (WTCA) of Tampa Bay is dedicated to fostering the development and progression of entrepreneurship both domestically and
                                internationally as the name implies. FlipSetter has joined forces with WTCA Tampa to become their official media partner. Join us, as we bring WTCA into a whole new
                                social media frontier as we unite all of the businesses WTCA represents, as well as other WTCA chapters around.
                </div>

                <div class="col-md-4 text-center">
                                <Link to={"https://flipsetter.com/images/partners/RingCentral.png"} class="img-fluid mb-3 mb-sm-0" alt="ringcentral" />
                </div>
                            <div class="col-md-8">
                                <h4 class="mt-0 mb-1"><Link to={"https://www.ringcentral.com/"} target="_blank" rel="noopener noreferrer nofollow">Ring Central</Link></h4>
                                Ring Central is a cloud based communications and collaborations solution for businesses. They provide cloud phone, team messaging, virtual assistants, video conferencing,
                                internet faxes and other related products to help optimize communications. Ring Central and FlipSetter, and FlipSetter will help refer qualified leads to Ring Central to
                                boost its sales. Stay tuned for an upcoming collaboration with Ring Central and FlipSetter’s app, Collaborate! Now, collaborate from anywhere around the globe; on the go,
                                on a flight, or in the next room with even more people, “Powered by Ring Central!”
                            </div>

                <div class="col-md-4 text-center">
                    <Link to={"https://flipsetter.com/images/partners/trinet.png"} class="img-fluid mb-3 mb-sm-0" alt="trinet" />
                </div>
                            <div class="col-md-8">
                                <h4 class="mt-0 mb-1"><Link to={"https://www.trinet.com"} target="_blank" rel="noopener noreferrer nofollow">TriNet</Link></h4>
                                TriNet is a publicly traded company specializing in HR, staffing, staffing technologies, CRM and other software products that helps companies manage their staff and business logistics
                                more effectively. TriNet offers different solutions to both its networks and partners. TriNet and FlipSetter have teamed up as a channel partnership that will let FlipSetter refer
                                businesses within its networks to TriNet that may be looking for new solutions to help improve their logistics.
                            </div>

                <div class="col-md-4 text-center">
                    <Link to={"https://www.webex.com/"} class="img-fluid mb-3 mb-sm-0" alt="webex" />
                </div>
                            <div class="col-md-8">
                                <h4 class="mt-0 mb-1"><Link to={"https://www.webex.com/"} target="_blank" rel="noopener noreferrer nofollow">Cisco - Webex</Link></h4>
                                We are proud to announce that we will be embedding our application into the Cisco-webex marketplace that can be downloaded and utilized by users nationwide. Cisco created an app hub program
                                that lets companies incubate and thrive in a multi-faceted environment. If you have a webex account, then we encourage you to add Collaborate by FlipSetter into your plugins to deploy 
                                seamless and efficient workflows or study tools.
                            </div>

            </div>
            </div>
            <Footer />
        </>
    );
}