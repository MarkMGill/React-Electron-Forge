import React from "react";
import { FaStripe } from "react-icons/fa";
import Header from "../../components/landing/header";
import Footer from "../../components/landing/footer";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Privacy() {
    return (
        <>
        <Header /> 
        <div class="card-body">
           <div class="privacywrapper">
            <h3 className="font-weight-bold">Privacy Policy</h3>
                <h3 class="font-weight-bold">Information Collection and Use</h3>
                <h4>
                    For a better experience, while using our Service, we may require you to provide us with certain personally
                    identifiable information, including but not limited to Full Name, Email, Date of Birth, Address, Phone
                    Number. The information that we request will be retained by us and used as described in this privacy
                    policy. The app does use third party services that may collect information used to identify you.
                </h4>
                <h4>
                    Link to privacy policy of third party service providers used by the app:
                </h4>
                <ul class="h5">
                    <li><Link to={"https://policies.google.com/privacy"}>Google Play Services</Link></li>
                    <li><Link to={"https://www.apple.com/legal/privacy/en-ww/"}>Apple Privacy Policy</Link></li>
                </ul>

                <h3 class="font-weight-bold">Log Data</h3>
                <h4>
                    We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your
                    phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the
                    configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                </h4>

                <h3 class="font-weight-bold">Cookies</h3>
                <h4>
                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit
                    and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that
                    use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent
                    to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                </h4>
                <h3 class="font-weight-bold">Service Providers</h3>
                <h4>
                    We may employ third-party companies and individuals due to the following reasons:
                </h4>
                <ul class="h5">
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                </ul>
                <h4>
                    We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our
                    behalf. However, they are obligated not to disclose or use the information for any other purpose.
                </h4>

                <h3 class="font-weight-bold">Security</h3>
                <h4>
                    We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method
                    of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </h4>


                <h3 class="font-weight-bold">Subscriptions</h3>
                <h4>
                    <FaStripe /> We utilize <Link to={"https://stripe.com/"}>Stripe</Link> as our payment processor.
                </h4>
                <h4> Data Agreements:</h4>
                <ul>
                    <li>We share a customer’s name and email address to Stripe</li>
                    <li>We only store the last 4 digits of a customer’s payment method, and the card type i.e. Mastercard, Visa, etc.</li>
                    <li>Credit payments, subscription data and personal information are handled by Stripe</li>
                </ul>
                <h4>
                    All merchant transaction information is strictly adhered to via GDPR policy and FINRA via Stripe. We do not share any information to third party marketers.
                    You may also visit Stripe’s FAQs and Terms of Use to learn more about their payment processing:
                </h4>
                <ul>
                    <li><Link to={"https://support.stripe.com/topics/privacy"}>Stripe's Privacy Policy</Link></li>
                    <li><Link to={"https://stripe.com/legal"}>Stripe's Legal Information</Link></li>
                    <li><Link to={"https://support.stripe.com/"}>Stripe's FAQ</Link></li>
                </ul>


                <h3 class="font-weight-bold">Links to Other Sites</h3>
                <h4>
                    This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us.
                    Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies,
                    or practices of any third-party sites or services.
                </h4>
                <h3 class="font-weight-bold">Children’s Privacy</h3>
                <h4>
                    These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we
                    discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that
                    your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                </h4>
                <h3 class="font-weight-bold">Changes to This Privacy Policy</h3>
                <h4>
                    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the
                    new Privacy Policy on this page.This policy is effective as of <b>11/18/2021</b>
                </h4>
                <h3 class="font-weight-bold">Contact Us</h3>
                <h4>
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us <Link to={"https://flipsetter.com/Contact"}>Here</Link>.
                </h4>
            </div>
        </div>
        <Footer />
        </> 
    );
}

/*

<footer class="container-fluid w-100 bg-dark text-light">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="navbar-text">
			<span class="flipF">F</span>lipSetter <i class="far fa-copyright"></i> 2022
		</div>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerDropUp" aria-controls="footerDropUp" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="footerDropUp" class="navbar-collapse collapse">
			<ul class="navbar-nav mr-auto"></ul>
			<ul class="navbar-nav">
				<li class="nav-item " >
					<a class="nav-link" href="https://flipsetter.com/Contact">Contact <i class="far fa-envelope"></i></a>
				</li>
				<li class="nav-item " >
					<a class="nav-link" href="https://flipsetter.com/Partnerships">Partnerships <i class="fas fa-hands-helping"></i></a>
				</li>
				<li class="nav-item " >
					<a class="nav-link" href="https://flipsetter.com/FAQ">FAQ <i class="fas fa-bullhorn"></i></a>
				</li>
				<li class="nav-item active" >
					<a class="nav-link" href="https://flipsetter.com/Privacy">Privacy <i class="fas fa-user-lock"></i></a>
				</li>
				<li class="nav-item " >
					<a class="nav-link" href="https://flipsetter.com/TAC">Terms & Conditions <i class="far fa-check-circle"></i></a>
				</li>
			</ul>
		</div>
	</nav>
</footer> 

*/