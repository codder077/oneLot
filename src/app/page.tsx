import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DashboardPreview from '@/components/DashboardPreview';
import BusinessFeatures from '@/components/BusinessFeatures';
import CarFinancing from '@/components/CarFinancing';
import DealershipManagement from '@/components/DealershipManagement';
import WhyOneLot from '@/components/WhyOneLot';
import Testimonials from '@/components/Testimonials';
import StayConnected from '@/components/StayConnected';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

/**
 * Main Homepage Component
 *
 * This is the primary landing page for OneLot, a platform that provides
 * working capital loans and digital tools for car dealerships.
 *
 * The page follows a comprehensive structure designed to:
 * 1. Introduce the service (Hero)
 * 2. Dashboard Preview
 * 3. Explain key features and benefits
 * 4. Build trust through testimonials
 * 5. FAQ
 * 6. Drive action (CTA)
 *
 * The design is fully responsive and matches the provided mockup exactly.
 */
export default function HomePage(): JSX.Element {
    return (
        <div className="min-h-screen bg-white">
            {/* Fixed header with navigation */}
            <Header />

            {/* Main content sections */}
            <main>
                {/* Hero section with primary value proposition */}
                <HeroSection />

                {/* Interactive dashboard preview showing the product */}
                <DashboardPreview />

                {/* Core business features section */}
                <BusinessFeatures />

                {/* Car financing specific features */}
                <CarFinancing />

                {/* Dealership management system overview */}
                <DealershipManagement />

                {/* Why choose OneLot benefits */}
                <WhyOneLot />

                {/* Customer testimonials for social proof */}
                <Testimonials />

                {/* Social media and connection section */}
                <StayConnected />

                {/* Frequently asked questions */}
                <FAQ />

                {/* Final call-to-action section */}
                <CTASection />
            </main>

            {/* Site footer with links and information */}
            <Footer />
        </div>
    );
}