import Link from "next/link";
import Seo from "@/comp/Seo";

const termsOfService = ({ URL }) => {
  return (
    <>
      <Seo
        title="Terms Of Service"
        description="By accessing this Website, you are agreeing to be bound by these
              Website Terms and Conditions of Use and agree that you are
              responsible for the agreement with any applicable local laws. If
              you disagree with any of these terms, you are prohibited from
              accessing this site. The materials contained in this Website are
              protected by copyright and trade mark law."
        twTitle="Terms Of Service"
        twDescription="TBy accessing this Website, you are agreeing to be bound by these
              Website Terms and Conditions of Use and agree that you are
              responsible for the agreement with any applicable local laws. If
              you disagree with any of these terms, you are prohibited from
              accessing this site. The materials contained in this Website are
              protected by copyright and trade mark law."
        twImage="/png/privacy-protection.png"
        ogTitle="Terms Of Service"
        ogDescription="By accessing this Website, you are agreeing to be bound by these
              Website Terms and Conditions of Use and agree that you are
              responsible for the agreement with any applicable local laws. If
              you disagree with any of these terms, you are prohibited from
              accessing this site. The materials contained in this Website are
              protected by copyright and trade mark law."
        ogImage="/png/privacy-protection.png"
        ogUrl={URL}
      />
      <div
        id="content-wrapper"
        className="antialiased px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
      >
        <div className="px-4 sm:px-6 xl:px-8 pt-2 pb-2">
          <nav className="mt-3 mb-3">
            <ol className="flex leading-none text-3xl text-brand font-bold divide-x divide-brand-400">
              <li>
                <Link href="/legal">
                  <a className="pr-2">Legal</a>
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service">
                  <a className="px-2 text-brand font-semibold">
                    Terms Of Service
                  </a>
                </Link>
              </li>
            </ol>
          </nav>
          <div className="prose prose-brand lg:prose-lg xl:prose-xl">
            <h1>Website Terms and Conditions of Use</h1>

            <h2>1. Terms</h2>

            <p>
              By accessing this Website, you are agreeing to be bound by these
              Website Terms and Conditions of Use and agree that you are
              responsible for the agreement with any applicable local laws. If
              you disagree with any of these terms, you are prohibited from
              accessing this site. The materials contained in this Website are
              protected by copyright and trade mark law.
            </p>

            <h2>2. Use License</h2>

            <p>
              Permission is granted to temporarily download one copy of the
              materials on CHEMCASTS's Website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </p>

            <ul>
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose or for any public
                display;
              </li>
              <li>
                attempt to reverse engineer any software contained on
                CHEMCASTS's Website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transferring the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>

            <p>
              This will let CHEMCASTS to terminate upon violations of any of
              these restrictions. Upon termination, your viewing right will also
              be terminated and you should destroy any downloaded materials in
              your possession whether it is printed or electronic format.
            </p>

            <h2>3. Disclaimer</h2>

            <p>
              All the materials on CHEMCASTS’s Website are provided "as is".
              CHEMCASTS makes no warranties, may it be expressed or implied,
              therefore negates all other warranties. Furthermore, CHEMCASTS
              does not make any representations concerning the accuracy or
              reliability of the use of the materials on its Website or
              otherwise relating to such materials or any sites linked to this
              Website.
            </p>

            <h2>4. Limitations</h2>

            <p>
              CHEMCASTS or its suppliers will not be hold accountable for any
              damages that will arise with the use or inability to use the
              materials on CHEMCASTS’s Website, even if CHEMCASTS or an
              authorize representative of this Website has been notified, orally
              or written, of the possibility of such damage. Some jurisdiction
              does not allow limitations on implied warranties or limitations of
              liability for incidental damages, these limitations may not apply
              to you.
            </p>

            <h2>5. Revisions and Errata</h2>

            <p>
              The materials appearing on CHEMCASTS’s Website may include
              technical, typographical, or photographic errors. CHEMCASTS will
              not promise that any of the materials in this Website are
              accurate, complete, or current. CHEMCASTS may change the materials
              contained on its Website at any time without notice. CHEMCASTS
              does not make any commitment to update the materials.
            </p>

            <h2>6. Links</h2>

            <p>
              CHEMCASTS has not reviewed all of the sites linked to its Website
              and is not responsible for the contents of any such linked site.
              The presence of any link does not imply endorsement by CHEMCASTS
              of the site. The use of any linked website is at the user’s own
              risk.
            </p>

            <h2>7. Site Terms of Use Modifications</h2>

            <p>
              CHEMCASTS may revise these Terms of Use for its Website at any
              time without prior notice. By using this Website, you are agreeing
              to be bound by the current version of these Terms and Conditions
              of Use.
            </p>

            <h2>8. Your Privacy</h2>

            <p>
              Please read our{" "}
              <Link href="/legal/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2>9. Governing Law</h2>

            <p>
              Any claim related to CHEMCASTS's Website shall be governed by the
              laws of in without regards to its conflict of law provisions.
            </p>

            <p>Last Updated on <strong>September,17,2021</strong></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default termsOfService;

export async function getStaticProps(context) {
  const URL = process.env.APP_URL + "/legal/terms-of-service";
  return {
    props: { URL },
  };
}
