import { RiArrowLeftSLine } from '@remixicon/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HomeFooter from '../components/Home/HomeFooter';

const Tndc = () => {
  const [activeSection, setActiveSection] = useState("privacy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const renderContent = () => {
    switch (activeSection) {
      case "privacy":
        return (
          <div className="w-full h-full px-56 max-[600px]:px-3 pb-10">
            <h1 className="text-4xl font-medium Rubik my-5">Privacy Policy</h1>
            <p>
              <b>FWC Entrepreneurs Enabling Foundation</b><br />
              (Formerly known as First World Community)<br />
              CIN: <b>U85300TN2020NPL134685</b><br />
              Registered Office: <b>
                No. 10, Anna Enclave, East Coast Road, Enjambakkam, Chennai, Tamil Nadu, India – 600115</b> <br />
              Email: <b>support@fwc-india.org</b> | Phone: <b>+91 96263 79667</b>
            </p>
            <br />
            <p className="Rubik mt-4 text-sm"><b>Effective Date:</b> March 13, 2025</p><br />
            <h3 className="text-xl Rubik mt-5 font-medium">
              Table of contents :
            </h3>
            <ul className="mt-5 space-y-5">
              <li className="text-[#048FF5] text-sm">
                <a href="#A">1. Introduction</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#B">
                  2. Purpose of Data Collection
                </a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#C">3. Information We Collect</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#D">4. How We Use Your Information</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#E">5. Communication and Notifications</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#F">6. Data Sharing and Disclosure</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#G">7. Data Security Measures</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#H">8. Data Retention Policy</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#I">9. Cookie Policy</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#J">10. Children’s Privacy</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#K">11. Your Rights as a User</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#L">12. Third-Party Links and Tools</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#M">13. Updates to Privacy Policy</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#N">14. Contact Information</a>
              </li>
            </ul>
            <h3 id="A" className="text-xl Rubik mt-8 font-medium">
              1. Introduction
            </h3>
            <p className="Rubik mt-4 text-sm">
              FWC Entrepreneurs Enabling Foundation ("FWC", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, disclose, and protect your personal information when you access our website, digital platforms, mobile applications, participate in our programs, services, or engage with our community. This policy applies to all users, members, partners, and visitors interacting with FWC Entrepreneurs Enabling Foundation, its associated services, or platforms.
            </p>
            <h3 id="B" className="text-xl Rubik mt-8 font-medium">
              2. Purpose of Data Collection
            </h3>
            <p className="Rubik mt-4 text-sm">We collect personal data to:
              <ul className='list-disc ml-5 my-5'>
                <li>Provide personalized services and offerings</li>
                <li>Register and manage memberships</li>
                <li>Communicate important updates</li>
                <li>Connect members for networking, mentoring, or travel assistance</li>
                <li>Improve digital platform functionality and user experience</li>
                <li>Fulfill our legal, regulatory, and audit obligations</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">3. Information We Collect</h3>
            <p className="Rubik mt-4 text-sm">
              <span className='text-lg font-semibold'>a. Personal Identification Information</span>
              <ul className='list-disc ml-5 mt-5'>
                <li>Full Name</li>
                <li>Contact Information (Email, Phone, Address)</li>
                <li>Gender, Age/Date of Birth</li>
                <li>Educational and Professional Background</li>
                <li>Startup/Business Details</li>
                <li>Dietary preferences (for FWC Atithi)</li>
                <li>Nationality or Geographic location</li>
              </ul>
              <br />
              <span className='text-lg font-semibold'>b. Membership & Participation Data</span>
              <ul className='list-disc ml-5 mt-5'>
                <li>Digital membership level</li>
                <li>Event registration and attendance records</li>
                <li>Roadmap builder data (interests, career goals, financial status, qualifications)</li>
              </ul>
              <br />
              <span className='text-lg font-semibold'>c. Communication Information</span>
              <ul className='list-disc ml-5 mt-5'>
                <li>Emails, messages, queries, feedback forms</li>
                <li>Chat records or app interactions</li>
              </ul>
              <br />
              <span className='text-lg font-semibold'>d. Technical & Usage Data</span>
              <ul className='list-disc ml-5 mt-5'>
                <li>Device details</li>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Log files</li>
                <li>Cookie identifiers</li>
                <li>App usage and page interaction history</li>
              </ul>
              <br />
              <span className='text-lg font-semibold'>e. Location Data</span>
              <ul className='list-disc ml-5 mt-5'>
                <li>Manually provided location data (e.g., during event or Atithi registration)</li>
                <li>City-based filters for communication personalization (e.g., Atithi program notifications)</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">4. How We Use Your Information</h3>
            <p className="Rubik mt-4 text-sm">
              <ul className='list-disc ml-5 mt-5'>
                <li>To process registrations and manage memberships</li>
                <li>To provide personalized digital services (roadmaps, mentorship, learning materials)</li>
                <li>To notify you of events, updates, offers, and relevant opportunities</li>
                <li>To connect you with mentors, hosts (Atithi), or city-based FWC members</li>
                <li>To enhance user experience and optimize digital platforms</li>
                <li>To send periodic newsletters, insights, offers, or notifications</li>
                <li>To provide statistical insights for internal use (non-identifiable aggregate data)</li>
                <li>To comply with any legal or regulatory requirements</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">
              5. Communication and Notifications
            </h3>
            <p className="Rubik mt-4 text-sm">
              By registering with FWC, you consent to receive: <br />
              Emails, SMS, WhatsApp messages, push notifications, or phone calls related to: <br />
              <ul className='list-disc ml-5 my-5'>
                <li>Membership updates</li>
                <li>Weekly meetups and masterclasses</li>
                <li>Event invitations and registration details</li>
                <li>Mentorship or roadmap follow-ups</li>
                <li>New product/service launches</li>
                <li>Strategic partnerships and offers</li>
                <li>Volunteer and community engagement</li>
              </ul>
              You can opt-out of promotional communications by clicking the unsubscribe link in emails or contacting our team at <b>admin@fwc-india.org</b>.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">
              6. Data Sharing and Disclosure
            </h3>
            <p className="Rubik mt-4 text-sm">
              We do not sell, rent, or trade your personal information. However, we may share information in the following scenarios: <br />
              <ul className='list-disc ml-5 my-5'>
                <li>With trusted service partners (e.g., payment gateways, IT service providers)</li>
                <li>With mentors or hosts (e.g., Atithi program) on a need-to-know basis</li>
                <li>With institutional or event collaborators (based on event/program requirements)</li>
                <li>With government authorities or regulators if legally mandated</li>
              </ul>
              All third-party vendors are bound by confidentiality agreements and comply with data privacy standards.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              7. Data Security Measures
            </h3>
            <p className="Rubik mt-4 text-sm">
              We implement strict security measures to protect your personal information: <br />
              <ul className='list-disc ml-5 my-5'>
                <li>Secure hosting infrastructure and encrypted databases</li>
                <li>Firewalls and multi-layered server protection</li>
                <li>Role-based access controls for internal data access</li>
                <li>Regular system updates and vulnerability testing</li>
                <li>Use of secure payment gateways for financial transactions</li>
              </ul>
              Despite best efforts, no system is 100% secure. In case of any data breach, FWC will notify users promptly and take remedial action.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              8. Data Retention Policy
            </h3>
            <p className="Rubik mt-4 text-sm">
              We retain personal information: <br />
              <ul className='list-disc ml-5 my-5'>
                <li>As long as your membership or association with FWC is active</li>
                <li>For legal, regulatory, and audit purposes (e.g., financial records)</li>
                <li>As needed for ongoing research, performance tracking, and service personalization</li>
              </ul>
              Users can request deletion or access to their stored data by writing to <b>admin@fwc-india.org</b>. However, certain data may be retained for compliance obligations.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              9. Cookie Policy
            </h3>
            <p className="Rubik mt-4 text-sm">
              Our website uses cookies and similar technologies to improve functionality and user experience. <br />
              <ul className='list-disc ml-5 my-5'>
                <li>Essential cookies (login and session tracking)</li>
                <li>Performance cookies (analytics and metrics)</li>
                <li>Preference cookies (language or display settings)</li>
                <li>Third-party cookies (YouTube, Zoom, Google Analytics integrations)</li>
              </ul>
              You can modify your browser settings to control or disable cookies. However, disabling them may affect website functionality.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              10. Children’s Privacy
            </h3>
            <p className="Rubik mt-4 text-sm">
              Our services are designed for individuals aged 14 years and above. We do not knowingly collect data from children without verifiable parental or guardian consent. If such data is accidentally collected, we will promptly delete it.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              11. Your Rights as a User
            </h3>
            <p className="Rubik mt-4 text-sm">
              You have the right to: <br />
              <ul className='list-disc ml-5 my-5'>
                <li>Access your personal data</li>
                <li>Correct inaccurate or outdated data</li>
                <li>Request deletion (subject to legal obligations)</li>
                <li>Withdraw consent for promotional communication</li>
                <li>Raise concerns about misuse or breach of data</li>
              </ul>
              You may exercise your rights by contacting us at <b>admin@fwc-india.org</b>.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              12. Third-Party Links and Tools
            </h3>
            <p className="Rubik mt-4 text-sm">
              Our digital platforms may contain links to third-party tools or websites (e.g., Zoho, Zoom, Google Forms, Eventbrite). These platforms operate independently, and we are not responsible for their privacy practices. Users should review the privacy policies of those platforms separately.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              13. Updates to Privacy Policy
            </h3>
            <p className="Rubik mt-4 text-sm">
              We may revise this policy from time to time. All updates will be posted on this page with the "Effective Date" at the top. Your continued use of our services after changes implies acceptance of the revised policy.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              14. Contact Information
            </h3>
            <p className="Rubik mt-4 text-sm">
              For any privacy-related concerns, questions, or complaints, please contact: <br />
              <b>FWC Entrepreneurs Enabling Foundation</b> <br />
              (Formerly known as First World Community) <br />
              Registered Office: No. 10, Anna Enclave, East Coast Road, Enjambakkam, Chennai – 600115 <br />
              Email: <b>admin@fwc-india.org</b> <br />
              Phone: <b>+91 96263 79667</b> <br />
              CIN: <b>U85300TN2020NPL134685</b>
            </p>
          </div>
        );
      case "terms":
        return (
          <div className="w-full h-full px-56 max-[600px]:px-3 pb-10">
            <h1 className="text-4xl font-medium Rubik mt-5">
              Terms & Condition
            </h1>
            <br />
            <p>
              <b>FWC Entrepreneurs Enabling Foundation</b><br />
              (Formerly known as First World Community)<br />
              CIN: <b>U85300TN2020NPL134685</b><br />
              Registered Office: <b>
                No. 10, Anna Enclave, East Coast Road, Enjambakkam, Chennai, Tamil Nadu, India – 600115</b> <br />
              Email: <b>admin@fwc-india.org</b> | Phone: <b>+91 96263 79667</b>
            </p>
            <br />
            <p className="Rubik mt-4 text-sm"><b>Effective Date:</b> March 13, 2025</p><br />
            <p>Welcome to <b>FWC Entrepreneurs Enabling Foundation</b> (hereafter referred to as “FWC”, “we”, “our”, or “us”). These Terms and Conditions {"('Terms')"} govern your access to and use of our website, mobile applications, digital platforms, membership services, and events, whether free or paid. <br /> <br />
              By accessing or using any of our services or platforms, you agree to abide by these Terms. If you do not agree, you must discontinue use immediately.
            </p>
            <h3 id="A" className="text-xl Rubik mt-8 font-medium">
              1. Organizational Overview
            </h3>
            <p className="Rubik mt-4 text-sm">
              FWC is a Section 8 Company, registered under Indian Companies Act, 2013, operating as a professional business networking and entrepreneurial support platform, dedicated to:

              <ul className='list-disc ml-5 mt-5'>
                <li>Supporting startups, entrepreneurs, students, and professionals.</li>
                <li>Providing mentorship, training, funding, infrastructure, and global networking.</li>
                <li>Enabling both for-profit and non-profit activities.</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">
              2. Membership Eligibility & Usage</h3>
            <p className="Rubik mt-4 text-sm">
              <ul className='list-disc ml-5 mt-5'>
                <li>Membership is open to individuals aged 14 years and above.</li>
                <li>Users must provide accurate, up-to-date information during registration</li>
                <li>Users are responsible for maintaining confidentiality of login credentials and account activity.</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">3. Scope of Services Provided</h3>
            <p className="Rubik mt-4 text-sm">
              FWC offers the following services through its digital and physical platforms:
              <ul className='list-disc ml-5 my-5'>
                <li>Business Networking Opportunities</li>
                <li>FWC Digital Membership</li>
                <li>Weekly Meetups and Masterclasses</li>
                <li>Internship and Mentorship Programs</li>
                <li>Personalized Roadmap Creation</li>
                <li>Startup Showcases and Investor Connect</li>
                <li>FWC Funding Circle</li>
                <li>Zoom Premium Access</li>
                <li>AI-Based Roadmap System</li>
                <li>Spotlight Boost</li>
                <li>FWC Atithi Program (Member Hosting)</li>
                <li>Resource Library (Templates, Tools, E-books)</li>
                <li>Strategic Partnerships, Events, and Franchise Expos</li>
              </ul>
              FWC reserves the right to modify or discontinue any service at any time without prior notice.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">
              4. Payment Terms & Refund Policy
            </h3>
            <p className="Rubik mt-4 text-sm">
              <span className='text-lg font-semibold'>a. Membership & Event Payments</span>
              <ul className='list-disc ml-5 mt-5'>
                <li>Membership fees (₹1,000 for students, ₹2,000 for entrepreneurs/professionals) are non-refundable once successfully paid.</li>
                <li>Event participation fees must be paid in advance.</li>
              </ul>
              <br />
              <span className='text-lg font-semibold'>b. Refunds</span>
              <ul className='list-disc ml-5 mt-5'>
                <li><b>Digital memberships & app services</b> are non-refundable.</li>
                <li><b>Event fees</b> are refundable only if FWC cancels the event.</li>
                <li><b>Product purchases (if applicable)</b> can be refunded within 7 days of delivery, subject to inspection and original condition.</li>
              </ul>
              <br />
              <span className='text-lg font-semibold'>c. Cancellations</span>
              <ul className='list-disc ml-5 mt-5'>
                <li>Membership can be canceled at any time but is non-refundable.</li>
                <li>Event cancellations by members must be informed 7 days prior, but refunds are not guaranteed.</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">5. Code of Conduct</h3>
            <p className="Rubik mt-4 text-sm">
              All members must:
              <ul className='list-disc ml-5 my-5'>
                <li>Maintain respectful communication and ethical behavior.</li>
                <li>Avoid sharing sensitive information without consent.</li>
                <li>Not misuse community resources or infringe on other members’ rights.</li>
                <li>Refrain from fraudulent activities or misleading promotion.</li>
              </ul>
              FWC reserves the right to suspend or terminate any membership without notice in case of misconduct or violation of terms.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">6. FWC Atithi – Member Hosting Program</h3>
            <p className="Rubik mt-4 text-sm">
              Members can request accommodation from fellow members under this program. <br />
              <span className='text-lg font-semibold'>Working:</span>
              <ul className='list-disc ml-5 my-5'>
                <li>Visitors must fill a request form with purpose, duration, food preferences (veg/non-veg), and expectations</li>
                <li>Notifications will be sent only to members in the destination city.</li>
                <li>Hosts have the right to accept or decline.</li>
                <li>Stay is limited to <b>12 days max.</b></li>
                <li>Feedback system will be integrated for safety and trust.</li>
                <li>FWC is not liable for any disputes arising between host and guest.</li>
              </ul>
              FWC reserves the right to suspend or terminate any membership without notice in case of misconduct or violation of terms.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">7. Intellectual Property Rights</h3>
            <p className="Rubik mt-4 text-sm">
              <ul className='list-disc ml-5 my-5'>
                <li>All content, branding, digital assets, and training materials are the intellectual property of FWC.</li>
                <li>Unauthorized reproduction, distribution, or modification is prohibited.</li>
                <li>Hosts have the right to accept or decline.</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">8. Data Privacy & Security</h3>
            <p className="Rubik mt-4 text-sm">
              <ul className='list-disc ml-5 my-5'>
                <li>We collect your personal data to personalize services, improve experience, and maintain communication.</li>
                <li>Data is stored securely and used responsibly. Refer to our Privacy Policy for full details.</li>
                <li>No data is sold or misused. Data is shared only with relevant service partners under confidentiality agreements.</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">9. Communication Policy</h3>
            <p className="Rubik mt-4 text-sm">
              By registering with FWC, you consent to receive:
              <ul className='list-disc ml-5 my-5'>
                <li>Emails, SMS, and push notifications regarding updates, events, and opportunities.</li>
                <li>You may opt-out of promotional messages via email preferences.</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">10. Limitation of Liability</h3>
            <p className="Rubik mt-4 text-sm">
              FWC will not be liable for:
              <ul className='list-disc ml-5 my-5'>
                <li>Any direct or indirect loss arising from use of services or platform.</li>
                <li>Member-hosted activities or personal engagements.</li>
                <li>Unforeseen event cancellations, app errors, or third-party service failures.</li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">11. Dispute Resolution & Jurisdiction</h3>
            <p className="Rubik mt-4 text-sm">
              FWC will not be liable for:
              <ul className='list-disc ml-5 my-5'>
                <li>Disputes shall be resolved amicably. In case of escalation, they shall be subject to jurisdiction of courts in <b>Chennai, Tamil Nadu.</b>
                </li>
                <li>All legal matters shall be governed by laws of the <b>Republic of India.</b></li>
              </ul>
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">12. Modification of Terms</h3>
            <p className="Rubik mt-4 text-sm">
              FWC reserves the right to modify these Terms at any time. Continued use implies acceptance of updated Terms. Any changes will be posted with the revised effective date.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">13. Contact Information</h3>
            <p className="Rubik mt-4 text-sm">
              <b>FWC Entrepreneurs Enabling Foundation</b><br />
              (Formerly: First World Community) <br />
              <b>Registered Office:</b><br />
              No. 10, Anna Enclave, East Coast Road, Enjambakkam, Chennai – 600115, Tamil Nadu, India <br />
              <b>Email:</b> admin@fwc-india.org <br />
              <b>Phone:</b> +91 96263 79667 <br />
              <b>CIN:</b> U85300TN2020NPL134685

            </p>
          </div>
        );
      case "refund":
        return (
          <div className="w-full h-full px-56 max-[600px]:px-3 pb-10">
            <h1 className="text-4xl font-medium Rubik mt-5">
              Refund & Cancellation Policy
            </h1>
            <br />
            <p>
              <b>FWC Entrepreneurs Enabling Foundation</b><br />
              (Formerly known as First World Community)<br />
              CIN: <b>U85300TN2020NPL134685</b><br />
              Registered Office: <b>
                No. 10, Anna Enclave, East Coast Road, Enjambakkam, Chennai, Tamil Nadu, India – 600115</b> <br />
              Email: <b>admin@fwc-india.org</b> | Phone: <b>+91 96263 79667</b>
            </p>
            <br />
            <p className="Rubik mt-4 text-sm"><b>Effective Date:</b> March 13, 2025</p><br />
            <p>At <b>FWC Entrepreneurs Enabling Foundation</b>, we strive to maintain a transparent, fair, and professional process when it comes to all transactions, memberships, events, and services. This Refund Policy outlines the terms under which refunds, cancellations, or adjustments may be made.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">
              1. General Policy Statement
            </h3>
            <p className="Rubik mt-4 text-sm">
              All payments made to FWC—whether for memberships, events, digital services, or other offerings—are considered final. Refunds are only permitted in exceptional circumstances as specified in this policy. Users are advised to review service details carefully before making any payments.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              2. Refund Eligibility Criteria
            </h3>
            <p className="Rubik mt-4 text-sm">
              <span className='text-lg font-semibold'>a. Digital Memberships</span>
              <ul className='list-disc ml-5 my-5'>
                <li>Digital membership fees (₹1,000 for students, ₹2,000 for entrepreneurs/professionals) are non-refundable under any circumstances once payment is successfully processed.</li>
                <li>Membership benefits, once unlocked, are considered consumed and hence non-reversible.</li>
              </ul>
              <br />
              <span className='text-lg font-semibold'>b. Event Participation Fees</span>
              <ul className='list-disc ml-5 my-5'>
                <li>Refunds for event participation are only applicable if:</li>
                <ul className='list-disc ml-5 my-5'>
                  <li>The event is canceled by FWC.</li>
                  <li>There is a technical issue or system error during registration/payment processing resulting in duplicate payment (upon verification).</li>
                </ul>
                <li>No refund will be granted:</li>
                <ul className='list-disc ml-5 my-5'>
                  <li>For personal cancellation or no-show by the participant.</li>
                  <li>If the participant fails to attend the event for any reason not attributable to FWC.</li>
                  <li>If participation benefits (certificates, recordings, networking) have already been accessed or availed.</li>
                </ul>
              </ul>
              <br />
              <span className='text-lg font-semibold'>c. Workshops, Masterclasses & Online Programs</span>
              <ul className='list-disc ml-5 my-5'>
                <li>Payments for webinars, masterclasses, or any online program are non-refundable once access has been granted.</li>
                <li>In case of non-delivery of the service due to technical error on FWC’s end, we will either:</li>
                <ul className='list-disc ml-5 my-5'>
                  <li>Offer rescheduling or alternative access, or</li>
                  <li>Provide credit towards future events, subject to approval.</li>
                </ul>
              </ul>
              <br />
              <span className='text-lg font-semibold'>d. Product Purchases (If Applicable in Future)</span>
              <ul className='list-disc ml-5 my-5'>
                <li>Refunds for any physical products (books, merchandise, etc.) will be accepted only:</li>
                <ul className='list-disc ml-5 my-5'>
                  <li>If the item is defective or damaged in transit.</li>
                  <li>If the item delivered is incorrect or not as described.</li>
                </ul>
                <li>Customers must raise a refund request within 7 days of delivery, along with clear proof of issue.</li>
                <li>The product must be returned in original unused condition with packaging intact.</li>
                <li>Shipping charges are non-refundable and return shipping must be borne by the customer (unless product is defective).</li>
              </ul>
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              3. Cancellation Policy
            </h3>
            <p className="Rubik mt-4 text-sm">
              <span className='text-lg font-semibold'>a. Membership Cancellations</span>
              <ul className='list-disc ml-5 my-5'>
                <li>Members may cancel their membership at any time by sending a written request to admin@fwc-india.org.</li>
                <li>Cancellation does not entitle the member to any refund.</li>
                <li>Post-cancellation, members will lose access to all digital benefits, community forums, and exclusive services.</li>
              </ul>
              <br />
              <span className='text-lg font-semibold'>b. Event or Program Cancellations by User</span>
              <ul className='list-disc ml-5 my-5'>
                <li>Cancellations made by users will not be refunded, except under verified duplicate payments or system errors.</li>
                <li>In rare exceptions, FWC may offer event credits to be used for future programs, subject to approval by the management.</li>
              </ul>
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              4. Duplicate Transactions or Overcharging
            </h3>
            <p className="Rubik mt-4 text-sm">
              In case of duplicate payments or overcharging due to technical issues, the user must report the issue within 5 working days by writing to admin@fwc-india.org with proof of transaction. <br />
              After verification, the excess amount will be refunded to the same payment method within 7-10 working days.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              5. Refund Processing Timeline
            </h3>
            <p className="Rubik mt-4 text-sm">
              Eligible refunds will be initiated within 7–10 business days from approval. <br />
              Refunds will be credited back via the original method of payment only (UPI/Card/Bank Transfer). <br />
              FWC is not liable for any delay caused by bank/payment gateway providers.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              6. Non-Refundable Components
            </h3>
            <p className="Rubik mt-4 text-sm">
              Please note, the following are strictly non-refundable: <br />
              <ul className='list-disc ml-5 my-5'>
                <li>Membership charges</li>
                <li>Digital content or resource access fees</li>
                <li>Zoom Premium bookings once scheduled</li>
                <li>Customized roadmaps or consultation services</li>
                <li>Startup promotion/Spotlight Boost application fees</li>
                <li>Atithi participation or hosting benefits once accepted</li>
              </ul>
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              7. Dispute Resolution
            </h3>
            <p className="Rubik mt-4 text-sm">
              Any disputes regarding refunds will be handled directly by FWC’s finance and legal committee. Decisions made by the committee will be final and binding.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              8. Policy Amendments
            </h3>
            <p className="Rubik mt-4 text-sm">
              FWC reserves the right to modify this Refund & Cancellation Policy at any time. Changes will be published on the official website, and your continued use implies acceptance of the revised policy.
            </p>

            <h3 className="text-xl Rubik mt-8 font-medium">
              9. Contact for Refund Queries
            </h3>
            <p className="Rubik mt-4 text-sm">
              If you believe your case qualifies for a refund or wish to raise a billing concern, please contact: <br />
              <b>FWC Entrepreneurs Enabling Foundation</b> <br />
              Email: admin@fwc-india.org <br />
              Phone: +91 96263 79667 <br />
              Subject Line: Refund Request – [Your Name / Transaction ID]
            </p>
          </div>
        );
      case "userManual":
        return (<div className="w-full h-full px-56 max-[600px]:px-3 pb-10">
          <h1 className="text-4xl font-medium Rubik mt-5">
            FWC Entrepreneurs Enabling Foundation – USER MANUAL GUIDE
          </h1>
          <br />
          <h3 className="text-xl Rubik mt-8 font-medium">
            FWC Entrepreneurs Enabling Foundation – USER MANUAL GUIDE
          </h3>
          <p className="Rubik mt-4 text-sm">
            (Formerly known as First World Community) <br />
            CIN: <b>U85300TN2020NPL134685</b> <br />
            Website: <a href="https://fwc-india.org/" target='#' className='text-blue-500'>fwc-india.org</a> | Email: <b>admin@fwc-india.org</b> | Phone: <b>+91 96263 79667</b>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            WELCOME TO FWC!
          </h3>
          <p className="Rubik mt-4 text-sm">
            Thank you for being a part of the FWC family—a community of changemakers, entrepreneurs, professionals, students, and dreamers working together to build a better future. <br />
            This User Manual Guide is designed to help you navigate all services and features offered through the FWC Digital Platform, Web-App, and Membership Program.
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            Table of Contents
          </h3>
          <ul className="list-disc ml-5 my-5">
            <li>Getting Started with FWC</li>
            <li>Membership Tiers & Registration</li>
            <li>Accessing the FWC Web-App</li>
            <li>Service-wise Feature Guide</li>
            <li>Exclusive Weekly Meetups</li>
            <li>FWC Atithi (Member Hosting Program)</li>
            <li>Roadmap Creator</li>
            <li>Skill-Up Masterclasses</li>
            <li>Internship & Mentorship</li>
            <li>FWC Funding Circle</li>
            <li>Zoom Premium Access</li>
            <li>Resource Library</li>
            <li>Spotlight Boost</li>
            <li>Expert Connect</li>
            <li>Events, Expos, and Franchise Opportunities</li>
            <li>Support & Help</li>
            <li>Important Notes & Disclaimers</li>
          </ul>

          <h3 className="text-xl Rubik mt-8 font-medium">
            1. Getting Started with FWC
          </h3>
          <p className="Rubik mt-4 text-sm">
            Step 1: Visit <a href="https://fwc-india.org/">https://fwc-india.org/</a> <br />
            Step 2: Click on "Join FWC" or "Become a Member" <br />
            Step 3: Choose Membership Type (Student / Entrepreneur) <br />
            Step 4: Complete the Registration Form with your details <br />
            Step 5: Make Payment (₹1,000 for students, ₹2,000 for entrepreneurs) <br />
            Step 6: Login to your Dashboard and explore all features
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            2. Membership Tiers & Registration
          </h3>
          <p className="Rubik mt-4 text-sm">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Tier</th>
                  <th className="px-4 py-2">Eligibility</th>
                  <th className="px-4 py-2">Fee</th>
                  <th className="px-4 py-2">Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Student</td>
                  <td className="border px-4 py-2">Age 14–27, students</td>
                  <td className="border px-4 py-2">₹1,000</td>
                  <td className="border px-4 py-2">All digital services, community access, roadmap & more</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Entrepreneur</td>
                  <td className="border px-4 py-2">Professionals & Startups</td>
                  <td className="border px-4 py-2">₹2,000</td>
                  <td className="border px-4 py-2">Business connect, spotlight, investor access & more</td>
                </tr>
              </tbody>
            </table>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            3. Accessing the FWC Web-App
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Login Credentials: Use the email and password you set during registration.</li>
              <li>Dashboard: Your personalized panel showing roadmap, events, messages, and service status.</li>
              <li>Navigation Menu: Easily access features like Roadmap, Resources, Atithi, Masterclasses, Events, etc.</li>
              <li>Notification Panel: Real-time alerts for events, announcements, and offers.</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            4. Service-wise Feature Guide
          </h3>
          <p className="Rubik mt-4 text-sm">
            <span className="text-lg font-semibold">A. Exclusive Weekly Meetups</span>
            <ul className="list-disc ml-5 my-5">
              <li>Go to “Events & Meetups” section on the dashboard.</li>
              <li>View upcoming sessions → Click “Register” to book your seat.</li>
              <li>Join via Zoom link (sent to email or accessible on dashboard).</li>
              <li>After attending, access recordings in the Resource Library.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">B. FWC Atithi (Member Hosting Program)</span>
            <ul className="list-disc ml-5 my-5">
              <li>Navigate to "FWC Atithi" tab.</li>
              <li>Click on “Request Stay”</li>
              <li>Fill in:
                <ul className="list-disc ml-5 my-5">
                  <li>City of visit</li>
                  <li>Duration of stay</li>
                  <li>Purpose</li>
                  <li>Food preferences (Veg/Non-Veg)</li>
                  <li>Expectations from host</li>
                </ul>
              </li>
              <li>Submit → System will notify members in that city only.</li>
              <li>Hosts can accept/reject requests.</li>
              <li>Upon confirmation, mutual communication starts.</li>
              <li>Leave a review after your stay.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">C. Roadmap Creator</span>
            <ul className="list-disc ml-5 my-5">
              <li>Click on "Career Roadmap Builder".</li>
              <li>Fill required fields: Interests, goals, financial status, qualifications, etc.</li>
              <li>AI generates a customized Roadmap PDF within 48 hours.</li>
              <li>Monthly updates based on your feedback and progress.</li>
              <li>Participate in events and programs recommended in your roadmap.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">D. Skill-Up Masterclasses</span>
            <ul className="list-disc ml-5 my-5">
              <li>Go to “Learning Zone”</li>
              <li>Browse available courses: AI tools, Business Pitching, Financial Planning, etc.</li>
              <li>Register and attend live or watch recorded sessions.</li>
              <li>Get completion certificates for select sessions.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">E. Internship & Mentorship</span>
            <ul className="list-disc ml-5 my-5">
              <li>Access the “Internship Portal” on your dashboard.</li>
              <li>View available internships based on your interests.</li>
              <li>Apply via the portal → Get updates via email.</li>
              <li>For mentorship, go to “Connect with a Mentor” section.</li>
              <li>Select from categories (Tech, Business, Marketing, Funding)</li>
              <li>Book 1-on-1 sessions.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">F. FWC Funding Circle</span>
            <ul className="list-disc ml-5 my-5">
              <li>Navigate to “Funding Circle” tab.</li>
              <li>Upload your startup pitch deck and business profile.</li>
              <li>Attend monthly Investor Meetups.</li>
              <li>Get connected to funders or pitch in FWC-hosted events.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">G. Zoom Premium Access</span>
            <ul className="list-disc ml-5 my-5">
              <li>Request Zoom Premium access under “Zoom Services”.</li>
              <li>Choose date and time → Submit booking form.</li>
              <li>Approval will be given based on slot availability.</li>
              <li>Use Zoom for your business meetings, webinars, or online sessions.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">H. Resource Library</span>
            <ul className="list-disc ml-5 my-5">
              <li>Click on “Resources & Templates”.</li>
              <li>Access:
                <ul className="list-disc ml-5 my-5">
                  <li>Pitch Decks</li>
                  <li>Business Plans</li>
                  <li>Resume Templates</li>
                  <li>E-books</li>
                  <li>Market Research Reports</li>
                </ul>
              </li>
              <li>Download directly or use online.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">I. Spotlight Boost (Startup/Product Promotion)</span>
            <ul className="list-disc ml-5 my-5">
              <li>Submit your startup or product in “Spotlight Boost” section.</li>
              <li>One startup selected monthly based on innovation and traction.</li>
              <li>Featured on:
                <ul className="list-disc ml-5 my-5">
                  <li>FWC Website</li>
                  <li>Newsletters</li>
                  <li>Social Media Platforms</li>
                </ul>
              </li>
              <li>Massive exposure and community support.</li>
            </ul>
            <br />
            <span className="text-lg font-semibold">J. Expert Connect</span>
            <ul className="list-disc ml-5 my-5">
              <li>Browse expert profiles by industry/domain.</li>
              <li>Book consultation calls directly from dashboard.</li>
              <li>Choose between:
                <ul className="list-disc ml-5 my-5">
                  <li>General Guidance</li>
                  <li>Strategic Advice</li>
                  <li>Equity-based Mentorship</li>
                  <li>Advisory Panel Invitations</li>
                </ul>
              </li>
            </ul>
            <br />
            <span className="text-lg font-semibold">K. Events, Franchise & Expos</span>
            <ul className="list-disc ml-5 my-5">
              <li>View calendar in “FWC Events” tab.</li>
              <li>Register for expos like:
                <ul className="list-disc ml-5 my-5">
                  <li>Franchise Expo (June)</li>
                  <li>Agro & Food Expo</li>
                  <li>Business Conclaves (e.g., GOPIO)</li>
                </ul>
              </li>
              <li>Learn how to represent FWC in your city through Franchise Programs.</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            5. Support & Help
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Visit the Support Section on your dashboard.</li>
              <li>Submit your queries under appropriate category (Tech issue, Membership, Event, Atithi, etc.)</li>
              <li>You can also contact us at <b>admin@fwc-india.org</b> or via WhatsApp/Phone: <b>+91 96263 79667</b></li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            6. Important Notes & Disclaimers
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>All services are non-transferable and exclusive to registered members.</li>
              <li>Membership benefits may vary slightly based on the tier or participation.</li>
              <li>All event participation is subject to seat availability.</li>
              <li>Refund policies and terms are mentioned clearly on the website (refer Refund Policy).</li>
              <li>FWC reserves the right to modify features or offerings with due notice.</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            Final Words
          </h3>
          <p className="Rubik mt-4 text-sm">
            FWC is not just a platform—it’s a movement to empower millions. Make the most of every feature, connect deeply with your fellow members, and grow your personal, professional, and entrepreneurial journey with us. <br />
            Together, we rise!
          </p>
        </div>);
      case "membership":
        return (<div className="w-full h-full px-56 max-[600px]:px-3 pb-10">
          <h1 className="text-4xl font-medium Rubik mt-5">
            FWC Membership Benefits
          </h1>
          <br />
          <h3 className="text-xl Rubik mt-8 font-medium">
            Unlock Limitless Opportunities with First World Community Membership
          </h3>
          <p className="Rubik mt-4 text-sm">
            Joining <b>FWC Entrepreneurs Enabling Foundation</b> means becoming part of a visionary network that empowers entrepreneurs, students, professionals, and change-makers through powerful tools, global connections, and actionable resources.
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            Why Become a Member?
          </h3>
          <p className="Rubik mt-4 text-sm">
            Below are the exclusive benefits you receive as an FWC Member:
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            1. Personalized Career & Startup Roadmaps
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>AI-powered personalized roadmap based on your goals, interest, qualification & financial background</li>
              <li>Monthly updates and mentorship tracking to guide your journey</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            2. Weekly Exclusive Meetups & Masterclasses
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Engage with top industry leaders, innovators, and changemakers</li>
              <li>Gain expert insights, real-world strategies & business development ideas</li>
              <li>Get certified in cutting-edge topics</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            3. Internship & Mentorship Opportunities
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Access internship openings from top companies and startups</li>
              <li>One-on-one mentorship from domain experts and advisors</li>
              <li>Build real-world skills through guided learning paths</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            4. FWC Atithi – Member Hosting Program
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Request or offer short-term accommodation when traveling</li>
              <li>Get support from trusted FWC members in different cities</li>
              <li>Build lifelong relationships and cultural exchanges</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            5. Spotlight Boost – Promote Your Idea/Startup
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Get featured across FWC’s website, newsletters, and social media</li>
              <li>Highlight your product/startup to investors and industry leaders</li>
              <li>Increase visibility and community engagement</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            6. FWC Funding Circle
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Present your startup ideas to potential investors in monthly pitch sessions</li>
              <li>Access grant opportunities, government schemes, and seed funding</li>
              <li>Get guidance on building pitch decks and business plans</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            7. Zoom Premium Access
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Use FWC’s premium Zoom account for business meetings, webinars, and events</li>
              <li>Schedule impactful sessions without technical limitations</li>
              <li>Get event support from the FWC team</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            8. Resource Library
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Access e-books, business templates, frameworks, checklists, pitch decks, reports</li>
              <li>Download resume templates, startup guides, and learning resources</li>
              <li>Constantly updated with new materials</li>
            </ul>
          </p>
          <h3 className="text-xl Rubik mt-8 font-medium">
            9. Expert Connect
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Book consultations with expert mentors across industries</li>
              <li>Access equity-based mentorship & business advisory sessions</li>
              <li>Become part of mentor-led accelerator programs</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            10. Exclusive Events, Business Expos & Franchise Opportunities
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Get early and discounted access to major events</li>
              <li>Participate in Franchise Expos, Agro & Food Summits, Business Conclaves</li>
              <li>Represent FWC in your city or institution</li>
            </ul>
          </p>

          <h3 className="text-xl Rubik mt-8 font-medium">
            11. Partner Organization Privileges
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Discounts, special offers, and internship opportunities with partnered institutions and startups</li>
              <li>Access to collaborative training programs and global exposure</li>
            </ul>
          </p>
          <h3 className="text-xl Rubik mt-8 font-medium">
            12. Global Networking & Community Building
          </h3>
          <p className="Rubik mt-4 text-sm">
            <ul className="list-disc ml-5 my-5">
              <li>Connect with 10,000+ aspiring entrepreneurs and students</li>
              <li>Collaborate, co-create, and grow with a global community</li>
              <li>Participate in regional and international exchange programs</li>
            </ul>
          </p>
          <h3 className="text-xl Rubik mt-8 font-medium">
            Join FWC Today!
          </h3>
          <p className="Rubik mt-4 text-sm">
            Whether you’re a <b>student</b>, a <b>startup  founder</b>, or an <b>industry professional</b>, FWC opens doors to growth, innovation, learning, and global opportunities.
          </p>
          <p className='text-center font-bold mt-2'>“Alone you go fast. Together we go far.” <br />
          Join the revolution. Empower your journey with FWC.</p>
        </div>);
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <div className="policy-img-container relative w-full h-[45vh] max-[600px]:h-[30vh] bg-[#F5F5F5]">
          <div className="w-44 absolute left-0 flex items-center justify-center text-base mt-3">
            <Link
              className="h-12 gap-3 rounded-full z-[99] bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
              to={"/"}
            >
              <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
                <RiArrowLeftSLine className="text-[#0000009b]" />
              </div>
              <button className="mr-2">Go Back</button>
            </Link>
          </div>
          <div className="w-[456px] h-[346px] max-[600px]:h-[250px] max-[600px]:w-[356px] absolute top-[66%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/images/privacyPolicy.png" alt="" />
          </div>
        </div>
        <div className="ploicyheadings w-full px-48 max-[600px]:px-5 whitespace-nowrap py-5 mt-10 max-[600px]:mt-5 flex items-center justify-center gap-5 max-[600px]:gap-2 max-[431px]:flex-wrap max-[431px]:gap-2">
          <h1
            className={`text-base font-medium Rubik p-2 px-3 cursor-pointer  ${activeSection === "privacy" ? "border-b-[3px] border-[#0487F3]" : ""
              }`}
            onClick={() => setActiveSection("privacy")}
          >
            Privacy Policy
          </h1>
          <h1
            className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer  ${activeSection === "terms" ? "border-b-[3px] border-[#0487F3]" : ""
              }`}
            onClick={() => setActiveSection("terms")}
          >
            Terms & Condition
          </h1>
          <h1
            className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer  ${activeSection === "refund" ? "border-b-[3px] border-[#0487F3]" : ""
              } max-[430px]:text-center`}
            onClick={() => setActiveSection("refund")}
          >
            Refund Policy
          </h1>
          <h1
            className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer  ${activeSection === "userManual" ? "border-b-[3px] border-[#0487F3]" : ""
              } max-[430px]:text-center`}
            onClick={() => setActiveSection("userManual")}
          >
            User Manual Guide
          </h1>
          <h1
            className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer  ${activeSection === "membership" ? "border-b-[3px] border-[#0487F3]" : ""
              } max-[430px]:text-center`}
            onClick={() => setActiveSection("membership")}
          >
            FWC Membership Benefits
          </h1>
        </div>

        {renderContent()}
        <HomeFooter />
      </div>
    </>
  );
}

export default Tndc