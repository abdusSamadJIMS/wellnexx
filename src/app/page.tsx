import BlogSection from "@/components/pages/home/blog-section";
// import CertificationsSection from "@/components/pages/home/certification-section";
import ContactUsCTA from "@/components/pages/home/contact-us-cta";
import FaqSection from "@/components/pages/home/faq-section";
import HeroSection from "@/components/pages/home/hero-section";
import HowToOrder from "@/components/pages/home/how-to-order";
import OurProducts from "@/components/pages/home/out-products";
import OurQuality from "@/components/pages/home/out-quality";
import StatsSection from "@/components/pages/home/stats-section";
import Testimonials from "@/components/pages/home/testimonial";
import WhoWeServe from "@/components/pages/home/who-we-server";
import WhyChoose from "@/components/pages/home/why-choose";
// import { getProducts, getTestimonials } from "@/utils/action";
import { products, testimonials } from "@/utils/constant/products";


export default async function Home() {
  // const products = await getProducts()

  // const testimonials = await getTestimonials()
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <OurProducts
        products={products}
      />
      <OurQuality />
      <WhoWeServe />
      <HowToOrder />
      <Testimonials
        testimonials={testimonials}
      />
      <StatsSection />
      {/* <CertificationsSection /> */}
      <ContactUsCTA />
      <FaqSection f={null} />
      {/* <BlogSection /> */}
    </>
  );
}
