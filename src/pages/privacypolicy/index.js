import { LayoutThree } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Contact from "@/components/contact";

function PrivacyPolicy() {
  return (
    <>
      <LayoutThree topbar={true}>
        <ShopBreadCrumb
          title="Privacy-Policy"
          sectionPace=""
          currentSlug="privacypolicy"
        />
        <div className="tp-fun-fact-title-wrapper" style={{ width: "80%", margin: "auto" }}>
          <h1>Privacy Policy</h1>
          <p className="tp-section-title">
            At Super Savvy Sales, we understand the importance of privacy and are committed to protecting the confidentiality of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you engage with our real estate services, including when you list your property with one of our experienced agents. By engaging with our real estate services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal information as described herein.
            <span className="title-left-shape"></span>
          </p>
          <p>We may collect personal information from you when you choose to list your property with one of our agents. This information may include, but is not limited to, your name, contact information, property details, and any other information relevant to the sale of your home.</p>
          <p>The information collected is used to provide you with professional real estate services and support throughout the selling process. This includes marketing your property, facilitating negotiations, and guiding you through each step of the transaction.</p>
          <p>We may disclose your information to third parties, such as potential buyers, real estate professionals, and service providers, solely for the purpose of assisting with the sale of your home. We will not sell, rent, or lease your personal information to any third parties for their marketing purposes.</p>
          <p>We take reasonable precautions to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We employ industry-standard security measures to ensure the confidentiality and integrity of your data.</p>
          <p>You have the right to access, update, or delete your personal information held by us. If you would like to exercise this right or have any concerns about the handling of your information, please contact us using the contact details provided below.</p>
          <p>By listing your property with us, you consent to receive marketing communications related to the sale of your home. You may opt-out of receiving these communications at any time by contacting us or using the unsubscribe link provided in the communication.</p>
          <p>We comply with all applicable laws and regulations governing the collection, use, and disclosure of personal information, including but not limited to the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
          <p>We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting the updated Privacy Policy on our website.</p>
          <p>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us</p>
        </div>

      </LayoutThree>
    </>
  );
}

export default PrivacyPolicy;
