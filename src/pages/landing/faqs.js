import React from "react";
import { FaComment, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/landing/header";
import Footer from "../../components/landing/footer";
import "../../App.css";

export default function FAQs() {
    return (
        <>
        <Header/>
        <div class="card-body">
        <div class="privacywrapper">
         <h3 className="font-weight-bold">FAQs - Frequently Asked Questions <FaQuestionCircle /></h3>
         <div class="card">
                    <div class="card-body">
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                What is FlipSetter’s whiteboard?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> It’s an online paint tool where you can doodle, write, collaborate and host meetings on FlipSetter.
                                We combine state-of-the-art technology, and with audio, video and messaging that business owners, schools, students and coworkers
                                can collaborate, study, draw, be social and much more! We welcome all industries to utilize our celebrated whiteboard tool as the
                                most complete solution for all of your needs. Some capabilities include:
                                <ul class="h5">
                                    <li>Audio</li>
                                    <li>Video</li>
                                    <li>Change canvas to different colors and backgrounds</li>
                                    <li>Upload content to the canvas</li>
                                    <li>Upload links, content and emojis to messages</li>
                                    <li>Screen-sharing</li>
                                    <li>Everyone can draw and write</li>
                                    <li>One-to-one and group interaction</li>
                                    <li>Whiteboard playback feature (you can replay any whiteboard session at any time like a movie)</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                How many people can a group whiteboard hold?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Group whiteboards host up to 100 participants in a room - (<span class="font-weight-bold">Currently being optimized</span>).
                                We strongly recommend you to limit your participant number to a maximum of 10 people as we continue to optimize the 100-person capacity.
                                If you'd like to host more while having the whiteboard running in the background,
                                <span class="font-weight-bold">please <Link to={"https://flipsetter.com/Contact"}>contact</Link> our tech support team</span>
                                for more solutions. We are partnered with other companies. It’s also advised that you have a strong internet connection to avoid any potential lag.
                            </div>
                        </div>
            
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                What is the price for monthly subscriptions?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Currently, we offer a Bronze Plan for <span class="font-weight-bold">$9.99</span> per month. We offer only monthly subscriptions
                                at this time. Different tiered options and payment arrangements coming soon!
                            </div>
                        </div>

                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                Do you have a trial period for the whiteboard?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Yes, FlipSetter offers a 14-day trial period. We require submitting a credit card before beginning, and you must confirm that you agree
                                to our Terms and Conditions and Privacy Policy before activating the subscription. At the end of your 14-day trial, your card will automatically be charged 
                                to continue your subscription. If you cancel your trial before it ends, your card will not be charged.
                            </div>
                        </div>
        
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                How do subscriptions for the whiteboard work?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> To host a whiteboard, you are required to subscribe monthly. Once subscribed, you’ll
                                then have full access to all the tools:
            
                                <ul class="h5">
                                    <li>Whiteboard calling and receiving</li>
                                    <li>Image upload and download from and on the canvas</li>
                                    <li>Replays</li>
                                    <li>Cross collaborating (everyone can draw on the canvas – One at a time), and replay will show participants drawing</li>
                                    <li>And more!</li>
                                </ul>
                            </div>
                        </div>
    
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                Can I get a copy of my invoices?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Yes, you can find a copy of your invoices by going to the Subscriptions section of your account. Upon clicking subscriptions
                                you can then to to the third tab which is the Invoices tab, and your transaction history will be located there. 
                            </div>
                        </div>

                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                Will I still be charged if I cancel my subscription?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> The billing cycle occurs monthly. If you cancel after your next billing cycle, then that past payment will still be recorded because you waited
                                until that next billing cycle for the cancellation to take effect. If you cancel before your next billing cycle, then you will not be charged for the upcoming 
                                billing month. As a subscriber it is your responsibility to manage your subscriptions and monthly billing, as well as contacting our support team should you 
                                need assistance. Our team will be available for any techincal questions or difficulties. 
                            </div>
                        </div>
        
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                Can I still use instant messaging and video calls without subscribing?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Yes, we have unlimited instant messaging and video calls for free.
                            </div>
                        </div>
            
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                What are programmable Chat-Bots?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Chat-bots can only be enabled in group threads. They can help you retrieve documents, weather, YouTube videos,
                                and much more while you manage your workloads over instant messaging. Some actions included are:
            
                                <ul class="h5">
                                    <li>Coin Toss - Toss a coin! Simple heads or tails.</li>
                                    <li>Document Finder - Search the group for uploaded documents.</li>
                                    <li>Invite Generator - Generates a short-lived group invitation code and link.</li>
                                    <li>Replies - Define replies the bot will respond to.</li>
                                    <li>Rock Paper Scissors - Play a game of rock, paper, scissors!</li>
                                    <li>Weather - Get the current weather for the given location.</li>
                                    <li>Wikipedia Search - Get the top results for a wikipedia article search.</li>
                                    <li>Youtube Videos Search - Get the top video results for a YouTube search.</li>
                                    <li>...and much more!</li>
                                </ul>
                            </div>
                        </div>
        
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                How do I enable Chat-Bots?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Before you may enable chat-bots, you must create a group thread, or visit a group you already belong to
                                and are the group's creator or an administrator. From inside the group:
            
                                <ul class="h5">
                                    <li>Click the <u>settings</u> cogwheel in the top-right of the thread.</li>
                                    <li>Select <u>settings</u> from within the dropdown.</li>
                                    <li>Within the popups <u>Toggle Group Features</u>, enable <u>Chat Bots</u>, then click <u>Save</u>.</li>
                                    <li>After the group has reloaded, click the <u>settings</u> cogwheel again in the top-right of the thread.</li>
                                    <li>You will now see an option for <u>Chat Bots</u>. Select it.</li>
                                    <li>The popup will now display your groups chat-bots, as well as allow you to create your own bot, or install a pre-made bot package.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                Is everything I post on FlipSetter secure?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> All content on FlipSetter is secure. We use end to end encryption methods, and do not connect
                                third party media linkages to ensure a private environment. If you wish to publicize your content i.e. Portfolio, Profile,
                                and other information you can set your profile to public or private. You can also share your FlipSetter profile to other
                                social media sites as a View Only, but to interact and connect we still require our users to log in maintaining a private,
                                and secure environment.
                            </div>
                        </div>

                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                What measures do you take to secure FlipSetter?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Our measures include:
                                <ul class="h5">
                                    <li>Secure Socket Layer (SSL): A crypto protocol design to provide secure communication on the web. Applications can also
                                        include web browsing, e-mail, faxes, instant messaging and others.</li>
                                    <li>Firewall: A crypto code that prevents outside hackers from penetrating into FlipSetter.</li>
                                    <li>Database Security: Software that prevents malicious code from breaking database and personal information.</li>
                                    <li>Antivirus: Software that detects and sweeps viruses, worms, trojans, bots and spyware.</li>
                                    <li>E-mail security: Software that monitors incoming e-mail and outgoing e-mail to and from FlipSetter.</li>
                                </ul>
                            </div>
                        </div>
    
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                Can I share my portfolio on other social media pages?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Yes. You can share your FlipSetter portfolio via social media by copying your Profile link and
                                sharing with your connections to gain more traction. While doing so, please look at our Private and Public Settings to
                                customize your profile visibility.
                            </div>
                        </div>
        
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                How do I get in contact with FlipSetter for problems with my account?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Go to our <Link to={"https://flipsetter.com/Contact"}>Contact page</Link>. Fill out your name,
                                email, and be very thorough with your issues on FlipSetter so that we can better assist you.
                            </div>
                        </div>
    
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                How do I close my account?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Currently, you can request Deactivating your account by going to our Contact Us page. Our technical
                                support team will assist you and deactivate your account (please allow at least 24 hours for it take effect).
                            </div>
                        </div>
    
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                How do I make my profile Private or Public?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> Go to your Settings page and under Privacy Settings you can adjust user access to your Profile and
                                Portfolio visibility with the following options:
                            
                                <ul class="h5">
                                    <li>Private</li>
                                    <li>Friends</li>
                                    <li>Public</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="card bg-light">
                            <div class="card-header h3 font-weight-bold">
                                Does FlipSetter have an app for their messaging and whiteboard?
                            </div>
                            <div class="card-body h4">
                                <FaComment /> We are currently building a mobile app for Iphone and Android, so stay tuned!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    );
}