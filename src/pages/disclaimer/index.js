import { LayoutThree } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Contact from "@/components/contact";

function Disclaimer() {
  return (
    <>
      <LayoutThree topbar={true}>
        <ShopBreadCrumb
          title="Disclaimer"
          sectionPace=""
          currentSlug="disclaimer"
        />

        <div style={{textAlign: 'center', marginBottom: '10vh'}}>
          <h1>Disclaimer</h1>
          <p style={{ fontSize: '18px', width: '80%', textAlign: 'center', margin: 'auto' }}> This website represents Samson Properties, a reputable real estate company. The content provided here is for informational purposes only and does not constitute an offer to avail of any specific service. Prices mentioned are subject to change without prior notice, and the availability of properties may vary. The logos and images displayed on this website are the exclusive property of Samson Properties and are protected under applicable copyright laws. We do not claim any ownership or rights to materials not directly associated with our brand. These visuals are used solely for illustrative and informational purposes. For any inquiries or further details, please feel free to contact us. Thank you for visiting Samson Properties!</p>
        </div>
      </LayoutThree>
    </>
  );
}

export default Disclaimer;
