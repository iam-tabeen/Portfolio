'use client';
import React, { useState } from 'react';

type PfItem = { img: string; title: string; description: string; tags: string[]; order: number; liveUrl: string };

const TAB_ITEMS: Record<string, PfItem[]> = {
  branding: [
    {
      img: 'Axius.jpg',
      title: 'Axius Digital',
      description: 'Designed and developed a high-conversion, responsive corporate website for a premier digital agency in Pakistan. Focused on delivering an engaging user experience with intuitive navigation, modern UI elements, and highly optimized code to effectively showcase agency services and drive client acquisition.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      order: 1,
      liveUrl: 'https://axiusdigital.com',
    },
    {
      img: 'etravelcrm.jpg',
      title: 'eTravel CRM',
      description: 'Engineered a modern, high-performance business website for eTravel CRM (a product of eCRM Solutions). Utilizing server-side rendering and dynamic fluid animations, the platform delivers a sleek, tech-forward aesthetic while ensuring optimal load speeds, superior SEO performance, and seamless user interaction.',
      tags: ['Next.js', 'React', 'Framer Motion'],
      order: 2,
      liveUrl: 'https://etravelcrm.com',
    },
    {
      img: 'Expatriates.jpg',
      title: 'Expatriates 360',
      description: 'Developed a comprehensive, full-stack job portal connecting overseas expatriates with global employers. The platform features robust role-based access control, secure authentication, and a scalable database architecture. The intuitive frontend provides advanced search and filtering capabilities for a streamlined, efficient recruitment experience.',
      tags: ['Next.js', 'Supabase', 'Clerk'],
      order: 3,
      liveUrl: 'https://expatriates360.com',
    },
    {
      img: 'Portfolio.jpg',
      title: 'My Portfolio',
      description: 'A highly interactive, custom-built personal developer portfolio designed to showcase professional expertise, technical services, and a comprehensive project gallery. Features complex animations, a custom AI-powered chatbot for instant visitor engagement, and a highly optimized architecture to ensure maximum performance and accessibility across all devices.',
      tags: ['Next.js', 'Framer Motion', 'OpenAI'],
      order: 4,
      liveUrl: '#',
    },
    {
      img: 'Travemotms.jpg',
      title: 'Travelo TMS',
      description: 'Architected and developed a robust SaaS platform tailored for travel agencies to streamline tour management, financial tracking, and CRM. Built with a scalable backend and secure authentication, this dynamic B2B/B2C solution is designed to handle complex operational workflows and drive business efficiency at scale.',
      tags: ['Next.js', 'Supabase', 'Prisma'],
      order: 5,
      liveUrl: 'https://travelotms.com',
    },
  ],
  design: [
    {
      img: 'EvotechTravels.jpg',
      title: 'Evotech Travels',
      description: 'Designed a visually striking, premium conceptual website tailored for Hajj and Umrah travel agencies. Focused on user-centric design principles, the site features intuitive navigation, clear service tier displays, and a culturally resonant aesthetic. Built as a highly scalable, market-ready solution for prospective travel businesses.',
      tags: ['WordPress', 'Elementor'],
      order: 1,
      liveUrl: 'https://travel.evotechstudios.com/',
    },
    {
      img: 'evergreen.jpg',
      title: 'Evergreen Agarwood',
      description: 'Developed a sophisticated corporate portfolio for a Malaysian agarwood enterprise. The website serves as a digital storefront highlighting premium products, company heritage, and core services. Fully optimized for international B2B outreach with a clean, professional layout that emphasizes brand prestige and product quality.',
      tags: ['WordPress', 'Elementor'],
      order: 2,
      liveUrl: 'https://evergreenagarwood.com/',
    },
    {
      img: 'FastTravels.jpg',
      title: 'Fast Travels',
      description: 'Delivered a comprehensive digital presence for a prominent Pakistani travel agency specializing in Hajj, Umrah, and international tours. Engineered an integrated package booking system to streamline customer reservations, complemented by a visually engaging design that effectively communicates brand identity and trustworthiness.',
      tags: ['WordPress', 'Elementor'],
      order: 3,
      liveUrl: 'https://fasttravels.pk',
    },
    {
      img: 'DreamHomes.jpg',
      title: 'Dream Homes',
      description: 'Created an immersive real estate showcase platform for Dream Homes Murree. The UI/UX incorporates a natural, eco-friendly design language to reflect the region\'s lush scenery. Integrated dynamic plot maps, comprehensive project portfolios, and real-time live chat functionality to enhance prospective buyer engagement and lead generation.',
      tags: ['WordPress', 'Elementor'],
      order: 4,
      liveUrl: 'https://dreamhomesmurree.com/',
    },
  ],
  content: [
    {
      img: 'ITSolutions.jpg',
      title: 'IT Solutions',
      description: 'Developed a robust, fully integrated e-commerce platform blending IT service offerings with a physical product catalog. Implemented a frictionless, secure checkout process and optimized the user journey from product discovery to purchase, ensuring high conversion rates and an exceptional customer experience.',
      tags: ['WordPress', 'Elementor', 'WooCommerce'],
      order: 1,
      liveUrl: 'https://itsolutionsstore.com/',
    },
    {
      img: 'ParagonKSA.jpg',
      title: 'Paragon KSA',
      description: 'Designed a premium B2B digital catalog and corporate profile for Paragon KSA Trading Company. The platform acts as an extensive product showcase, focusing on high-quality visual presentation and detailed specifications for enterprise clients, with a focus on targeted lead generation and quote requests.',
      tags: ['WordPress', 'Elementor'],
      order: 2,
      liveUrl: 'https://paragonksa.com/',
    },
    {
      img: 'PremiumToolzHut.jpg',
      title: 'Premium Toolz Hut',
      description: 'Built a highly efficient digital product delivery platform specializing in the distribution of premium WordPress themes and plugins. Engineered a streamlined e-commerce experience with secure, localized payment gateway integration (PayFast) for immediate digital fulfillment and automated software delivery.',
      tags: ['WordPress', 'WooCommerce', 'PayFast'],
      order: 3,
      liveUrl: 'https://premiumtoolshut.com/',
    },
    {
      img: 'PrestigeVault.jpg',
      title: 'Prestige Vault',
      description: 'Crafted a high-end, luxury e-commerce experience for a premium men\'s lifestyle and jewelry brand. The UI features a sophisticated, high-contrast monochrome aesthetic to elevate the presentation of watches, perfumes, and accessories. Integrated intuitive navigation and a refined checkout flow to maximize sales in the luxury retail space.',
      tags: ['WordPress', 'WooCommerce', 'Elementor'],
      order: 4,
      liveUrl: 'https://prestigevault.pk',
    },
  ],
};

const TAB_LABELS: Record<string, string> = {
  branding:  'Full-Stack / Web Apps',
  design:    'CMS / WordPress',
  content:   'E-commerce',
};

const PAGE_SIZE = 3;

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('branding');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  function handleTabChange(tab: string) {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setVisibleCount(PAGE_SIZE);
  }

  const items = TAB_ITEMS[activeTab];
  const visible = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <section className="latest-portfolio-area custom-column-grid mb-28" id="portfolio">
      <div className="about-section-heading">
        <span className="about-section-watermark" aria-hidden="true">PORTFOLIO</span>
        <h2 className="about-section-title">My Portfolio</h2>
        <div className="about-section-divider">
          <span className="about-section-divider-dot"></span>
        </div>
      </div>

      <div className="container">
        <div className="latest-portfolio-tabs-area">
          <nav>
            <ul className="nav nav-tabs" role="tablist">
              {Object.keys(TAB_LABELS).map(tab => (
                <li key={tab}>
                  <button
                    className={`nav-link${activeTab === tab ? ' active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => handleTabChange(tab)}
                  >
                    {TAB_LABELS[tab]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="tab-content bg-blur-style-one">
            <div className="tab-pane fade show active" role="tabpanel">
              <div className="row">
                {visible.map((item) => (
                  <div key={`${activeTab}-${item.order}`} className="col-lg-4 col-md-6">
                    <div
                      className="latest-portfolio-card-style-two image-box-hover tmponhover pf-card-wrap"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter"
                      data-live-url={item.liveUrl}
                      data-title={item.title}
                      data-description={item.description}
                      data-tags={item.tags.join(',')}
                      data-img={`/assets/images/latest-portfolio/${item.img}`}
                    >
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <img
                            className="w-100"
                            src={`/assets/images/latest-portfolio/${item.img}`}
                            alt="Thumbnail"
                          />
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="portfolio-card-title">
                            {item.title}
                          </h3>
                          <div className="tag-items">
                            <ul>
                              {item.tags.map(t => (
                                <li key={t}><span className="tag-item">{t}</span></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <span className="pf-arrow-btn">
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="pf-view-more-wrap">
                  <button
                    className="pf-view-more-btn"
                    onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                  >
                    View More
                    <i className="fa-regular fa-arrow-down"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
