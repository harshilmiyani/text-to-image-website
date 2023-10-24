import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to Text to Image : AI Art Generator, the revolutionary app that transforms the power of words into breathtaking visual art. With our AI Art Generator, creating stunning, personalized images from your text has never been easier. Simply input your descriptive words or phrases, and watch as Text to Image's app backend advanced artificial intelligence interprets and translates your input into captivating, unique visual representations."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
