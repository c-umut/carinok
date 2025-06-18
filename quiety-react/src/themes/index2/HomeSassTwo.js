import React from "react";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import PageMeta from "../../components/common/PageMeta";
import FooterOne from "../../layout/Footer/FooterOne";
import HeroTwo from "./HeroTwo";
import TabOne from '../../components/tabs/TabOne';
import FeatureTwo from "../../components/features/FeatureTwo";
import IntegrationOne from "../../components/integration/IntegrationOne";
import CtaTwo from "../../components/cta/CtaTwo";
import TestimonialOne from "../../components/testimonial/TestimonialOne";
import LatestBlog from "../../components/blog/LatestBlog";
import OurStory from "../../components/about/OurStory";

const HomeSassTwo = () => {
  return (
    <Layout>
      <PageMeta title='Carinok - Software & IT Solutitons' />
      <Navbar />
      <HeroTwo />
      <TabOne />
      <OurStory />
      <FeatureTwo />
      <IntegrationOne />
      <LatestBlog />
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeSassTwo;
