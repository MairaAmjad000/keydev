import './PageContent.css';
import { HeroSection } from '@/components/sections/Hero/Hero';
import { BrandLogosSection } from '@/components/sections/BrandLogos/BrandLogos';
import { AboutSection } from '@/components/sections/About/About';
import { OfferingsSection } from '@/components/sections/Offerings/Offerings';
import { IndustriesSection } from '@/components/sections/Industries/Industries';
import { ValuesSection } from '@/components/sections/Values/Values';
import { ProcessSection } from '@/components/sections/Process/Process';
import { TestimonialsSection } from '@/components/sections/Testimonials/Testimonials';
import { PortfolioSection } from '@/components/sections/Portfolio/Portfolio';
import { ContactSection } from '@/components/sections/Contact/Contact';
import { TechnologiesSection } from '@/components/sections/Technologies/Technologies';
import { BlogSection } from '@/components/sections/Blog/Blog';
import { ReviewsSection } from '@/components/sections/Reviews/Reviews';
import { EngagementSection } from '@/components/sections/Engagement/Engagement';
import { LocationsSection } from '@/components/sections/Locations/Locations';
import { FooterSection } from '@/components/sections/Footer/Footer';
import { QuotePopupSection } from '@/components/sections/QuotePopup/QuotePopup';

export function PageContent() {
  return (
    <>
<div> <HeroSection /> <div> <BrandLogosSection /> </div> <AboutSection />  <OfferingsSection />  <IndustriesSection />  <ValuesSection />  <div className="callouts-separate callouts d-flex align-items-center justify-content-between"> <span>Do you have a <span id="callouts-type"></span> We have a TEAM to get you there.</span> <a className="btn-custome btn waves-effect waves-light" href="#contact">Get In Touch</a> </div>  <ProcessSection /> <div> <TestimonialsSection /> </div> <div> <PortfolioSection /> </div> <ContactSection />  <TechnologiesSection /> <div> <BlogSection /> </div> <div> <ReviewsSection /> </div> <EngagementSection /> <div> <LocationsSection /> </div> <div> <FooterSection /> </div> <QuotePopupSection /> <div className="alert alert-dismissible show cookiealert" role="alert" id="cookiealerts" style={{display: "none"}}> <div className="cookiealert-container"> <div className="cookiealert-img"> <span>🍪</span> </div> <div className="cookiealert-text"> <div className="que"><b>Do you like cookies?</b> <span>🍪</span></div> <div> <p>We use cookies to ensure you get the best experience on our website. <a href="#contact">Learn more</a></p> </div> </div> <div className="cookiealert-buttons"> <button type="button" className="btn custome_btn btn-sm acceptcookies" data-dismiss="alert" aria-label="Close" id="agree_to_allowed">I agree</button> </div> </div> </div>  <div className="hire-team-sticky-section" style={{display: "none"}}> <div className="hire-team-sticky-container"> <div className="hire-team-sticky-icon"> </div> <div className="hire-team-sticky-content"> <div className="ttl1">Looking to Hire Developers for Your Next Project?</div> <div className="ttl2">Talk to KeyDevs Technologies, a recognised Web and Mobile App Development Agency in the Pakistan.</div> </div> <div className="hire-team-sticky-btn"> <div className="hire-team-sticky-btn-wrap"> <a href="#contact" className="btn btn-sm" id="find_partner">Get in Touch Now!</a> <a href="#" aria-label="btn close" className="close" id="find_partner_close"><i className="fas fa-times"></i></a> </div> </div> </div> </div> </div>
    </>
  );
}
