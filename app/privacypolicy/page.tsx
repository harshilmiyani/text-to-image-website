import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* main titile */}
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp mx-auto max-w-[800px] text-center"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Privacy Policy
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <SectionTitle
            title="Last Updated: 16 Oct, 2023"
            paragraph='"Text to Image" is committed to ensuring the privacy and security of
            our users. Our app does not collect any personal data from users. We
            do not require authentication or any personal information for the
            use of our service.'
            width="100%"
          />

          <div className="w-full px-4 ">
            <div className="wow fadeInUp " data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Which personal data do we collect from you?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  "Device identifiers: When you use a mobile device like a
                  tablet or phone to access our app referrals, we save your
                  unique device id in our servers to track your referrals and
                  the referrals you have given.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  We do not use any of your personal pictures or images nor
                  share them with any 3rd party entity.
                </h3>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Changes to This Privacy Policy
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Any updates or changes to this Privacy Policy will be posted
                  on this page. Users are encouraged to review this Privacy
                  Policy periodically for any changes.
                </p>
              </div>
              <div className="mb-1">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the "Last updated" date at the top of this Privacy Policy.
                </p>
              </div>
              <div className="mb-1">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Contact Us
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  If you have any questions about this Privacy Policy, You can
                  contact us:
                </h3>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  By visiting this page on our website:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  https://texttoimage.vercel.app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
