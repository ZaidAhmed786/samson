import { LayoutThree } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

function TermsCondition() {
  return (
    <>
      <LayoutThree topbar={true}>
        <ShopBreadCrumb
          title="Terms and Condition"
          sectionPace=""
          currentSlug="termsandcondition"
        />

        <div className="tp-fun-fact-title-wrapper" style={{ width: "80%", margin: "auto" }}>
          <h1>Terms and Conditions</h1>
          <p className="tp-section-title">
            These Terms and Conditions Terms govern your use of the Super Savvy Sales website Website and the services provided therein. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the Website.
            <span className="title-left-shape"></span>
          </p>
          <p>You must be at least 18 years old to use the Website. You agree to use the Website only for lawful purposes and in accordance with these Terms.</p>
          <p>Your use of the Website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the Website, you consent to the collection and use of your information as described in the Privacy Policy.</p>
          <p>The content, design, and layout of the Website, including but not limited to text, graphics, logos, images, and software, are owned or licensed by Super Savvy Sales and are protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works based on the content of the Website without prior written consent from Super Savvy Sales.</p>
          <p>By submitting any content (such as reviews, comments, or testimonials) to the Website, you grant Super Savvy Sales a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content worldwide in any media.</p>
          <p>Super Savvy Sales shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising from or related to your use of the Website or any services offered therein.</p>
          <p>You agree to indemnify and hold harmless Super Savvy Sales, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses, including reasonable attorneys fees, arising from or related to your use of the Website or any breach of these Terms.</p>
          <p>Super Savvy Sales reserves the right to modify, suspend, or discontinue the Website or any part thereof at any time without prior notice. We may also update or revise these Terms from time to time. Your continued use of the Website after any such changes constitutes acceptance of the updated Terms.</p>
          <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.</p>
          <p>If you have any questions or concerns about these Terms, please contact us </p>
        </div>

      </LayoutThree>
    </>
  );
}

export default TermsCondition;
