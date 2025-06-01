// Types for our data structures used
export interface CarInventoryItem {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    image: string;
    status: 'available' | 'pending' | 'sold';
}

export interface FeatureItem {
    icon: string;
    title: string;
    description: string;
}

export interface TestimonialItem {
    id: string;
    name: string;
    position: string;
    company: string;
    content: string;
    avatar: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

// Car inventory data
export const carInventory: CarInventoryItem[] = [
    {
        id: '1',
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        price: 28500,
        mileage: 15000,
        image: '/api/placeholder/300/200',
        status: 'available'
    },
    {
        id: '2',
        make: 'Honda',
        model: 'Accord',
        year: 2023,
        price: 32000,
        mileage: 8000,
        image: '/api/placeholder/300/200',
        status: 'available'
    },
    {
        id: '3',
        make: 'BMW',
        model: 'X5',
        year: 2022,
        price: 55000,
        mileage: 12000,
        image: '/api/placeholder/300/200',
        status: 'available'
    },
    {
        id: '4',
        make: 'Mercedes',
        model: 'C-Class',
        year: 2023,
        price: 48000,
        mileage: 5000,
        image: '/api/placeholder/300/200',
        status: 'available'
    },
    {
        id: '5',
        make: 'Audi',
        model: 'A4',
        year: 2022,
        price: 42000,
        mileage: 18000,
        image: '/api/placeholder/300/200',
        status: 'available'
    },
    {
        id: '6',
        make: 'Ford',
        model: 'F-150',
        year: 2023,
        price: 38000,
        mileage: 10000,
        image: '/api/placeholder/300/200',
        status: 'available'
    },
    {
        id: '7',
        make: 'Chevrolet',
        model: 'Silverado',
        year: 2022,
        price: 35000,
        mileage: 22000,
        image: '/api/placeholder/300/200',
        status: 'available'
    },
    {
        id: '8',
        make: 'Tesla',
        model: 'Model 3',
        year: 2023,
        price: 45000,
        mileage: 3000,
        image: '/api/placeholder/300/200',
        status: 'available'
    }
];

// Features data for "Everything you need to grow your business" section
export const businessFeatures: FeatureItem[] = [
    {
        icon: 'DollarSign',
        title: 'Working Capital Loans',
        description: 'Get the funding you need to purchase inventory and grow your dealership with competitive rates and flexible terms.'
    },
    {
        icon: 'BarChart3',
        title: 'Inventory Management System',
        description: 'Manage your entire inventory with advanced tools for tracking, pricing, and sales analytics.'
    },
    {
        icon: 'CreditCard',
        title: 'Car Financing Solutions',
        description: 'Offer your customers flexible financing options with our integrated lending platform.'
    },
    {
        icon: 'Users',
        title: 'Customer Management',
        description: 'Build stronger relationships with comprehensive customer tracking and communication tools.'
    }
];

// Car financing features
export const carFinancingFeatures: FeatureItem[] = [
    {
        icon: 'Clock',
        title: 'Quick Approvals',
        description: 'Get financing decisions in minutes, not days, helping you close deals faster.'
    },
    {
        icon: 'Shield',
        title: 'Secure Processing',
        description: 'Bank-level security ensures all transactions and customer data are protected.'
    },
    {
        icon: 'Percent',
        title: 'Competitive Rates',
        description: 'Access competitive interest rates for both you and your customers.'
    },
    {
        icon: 'FileText',
        title: 'Digital Documentation',
        description: 'Streamline paperwork with digital contracts and automated processing.'
    }
];

// Why OneLot benefits
export const whyOneLotBenefits = [
    {
        icon: 'Zap',
        title: 'Fast',
        description: 'Quick approvals and instant access to working capital when you need it most.'
    },
    {
        icon: 'TrendingUp',
        title: 'High Amount',
        description: 'Access larger credit lines to purchase more inventory and grow faster.'
    },
    {
        icon: 'Zap',
        title: 'Fast',
        description: 'Streamlined processes get you funded and operational in record time.'
    },
    {
        icon: 'Users',
        title: 'People',
        description: 'Dedicated support team with automotive industry expertise.'
    },
    {
        icon: 'Calendar',
        title: 'Easy',
        description: 'Simple application process with minimal paperwork and requirements.'
    }
];

// Testimonials data
export const testimonials: TestimonialItem[] = [
    {
        id: '1',
        name: 'Mike Johnson',
        position: 'Owner',
        company: 'Johnson Auto Sales',
        content: 'The service of OneLot is so much they are fast and can provide dealers with the funds they need, when they need it.',
        avatar: '/api/placeholder/60/60'
    },
    {
        id: '2',
        name: 'Sarah Williams',
        position: 'General Manager',
        company: 'Premier Motors',
        content: 'OneLot transformed our dealership operations. The working capital loans helped us expand our inventory significantly.',
        avatar: '/api/placeholder/60/60'
    },
    {
        id: '3',
        name: 'David Chen',
        position: 'Sales Director',
        company: 'Elite Auto Group',
        content: 'The digital tools and financing solutions have streamlined our entire sales process. Highly recommended!',
        avatar: '/api/placeholder/60/60'
    }
];

// FAQ data
export const faqs: FAQItem[] = [
    {
        question: 'How do I apply for loan?',
        answer: '\n' +
            'OneLot onboarding is easy and straightforward onboarding process. We only require a few documents and after a few days you can get your first loan.\n' +
            'Check here for the exact requirements See full requirements.'
    },
    {
        question: 'What documents do I need to provide?',
        answer: '\n' +
            'OneLot onboarding is easy and straightforward onboarding process. We only require a few documents and after a few days you can get your first loan.\n' +
            'Check here for the exact requirements See full requirements.'
    },
    {
        question: 'How fast is the approval process?',
        answer: '\n' +
            'OneLot onboarding is easy and straightforward onboarding process. We only require a few documents and after a few days you can get your first loan.\n' +
            'Check here for the exact requirements See full requirements.'
    },
    {
        question: 'What are the minimum requirements?',
        answer: '\n' +
            'OneLot onboarding is easy and straightforward onboarding process. We only require a few documents and after a few days you can get your first loan.\n' +
            'Check here for the exact requirements See full requirements..'
    },
];

// Navigation menu items
export const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
];

// Social media links for connecting with  us
export const socialLinks = [
    { platform: 'Facebook', url: 'https://www.facebook.com/OneLotPH', icon: 'Facebook' },
    { platform: 'Twitter', url: 'https://www.instagram.com/onelot.ph/', icon: 'Twitter' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/onelot/', icon: 'Linkedin' },
    { platform: 'Instagram', url: 'https://www.instagram.com/onelot.ph/', icon: 'Instagram' }
];

// Contact information
export const contactInfo = {
    email: 'hello@onelot.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Suite 100, City, State 12345'
};