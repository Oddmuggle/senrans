import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Camera, Clock, ArrowRight } from 'lucide-react';

// --- TikTok SVG ---
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
    <path d="M164.4 24a44.9 44.9 0 0 0 25.7 8.2V67a78.9 78.9 0 0 1-26.4-4.8v66.6a65.4 65.4 0 1 1-65.4-65.4h.7v33.1a32.3 32.3 0 1 0 22.3 30.6V24h43.1Z"/>
  </svg>
);

// --- CONFIG ---
const CONTACT_EMAIL = 'sales@senrans.com';
const WHATSAPP_NUMBER = '+254757689205';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`;
const COMPANY_ADDRESS = 'Repen Complex, Block B, 3rd Floor, Office 310B, Syokimau, off Mombasa Rd, Nairobi, Kenya';
const MAP_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789!2d36.928722!3d-1.378278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A00!2zMcKwMjInNDEuOCJTIDM2wrA1NSc0My40IkU!5e1!3m2!1sen!2ske!4v1234567890`;
const TIKTOK_LINK = 'https://www.tiktok.com/@senrans_ltd';

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/people/Senrans-Ventures/pfbid0XufECfqUEoAKRqbuHT2vkn8EdSvHQxFX8HueCJYLHYb2ajG19v8ntsadvQpXn9nl/',
  instagram: 'https://www.instagram.com/senrans_ltd_/?igsh=MTk5OWJ2NnRudWoxag%3D%3D',
  linkedin: 'https://www.linkedin.com/company/senrans-ventures-ltd/',
  tiktok: TIKTOK_LINK
};

// --- Nav Item ---
const NavItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  return (
    <li>
      <Link
        to={to}
        className={`block px-3 py-2 text-white font-semibold hover:text-red-400 transition ${isActive ? 'border-b-2 border-white' : ''}`}
      >
        {children}
      </Link>
    </li>
  );
};

// --- Header ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Senrans Ltd" className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/products-services">LV & MV Products & Services</NavItem>
              <NavItem to="/gallery">Gallery</NavItem>
              <NavItem to="/contact">Contact Us</NavItem>
            </ul>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-red-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" onClick={closeMenu} className="block px-3 py-2 text-white hover:bg-red-700">About Us</Link>
            <Link to="/products-services" onClick={closeMenu} className="block px-3 py-2 text-white hover:bg-red-700">LV & MV Products & Services</Link>
            <Link to="/gallery" onClick={closeMenu} className="block px-3 py-2 text-white hover:bg-red-700">Gallery</Link>
            <Link to="/contact" onClick={closeMenu} className="block px-3 py-2 text-white hover:bg-red-700">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

// --- PARTNERS CAROUSEL (EATON REMOVED) ---
const PartnersCarousel = () => {
  const partners = [
    { name: "Siemens", logo: `${process.env.PUBLIC_URL}/partners/siemens.png` },
    { name: "Schneider", logo: `${process.env.PUBLIC_URL}/partners/schneider.png` },
    { name: "ABB", logo: `${process.env.PUBLIC_URL}/partners/abb.png` },
    { name: "Danfoss", logo: `${process.env.PUBLIC_URL}/partners/danfoss.png` },
    { name: "Deep Sea Electronics", logo: `${process.env.PUBLIC_URL}/partners/deepsea.png` },
    { name: "Himel", logo: `${process.env.PUBLIC_URL}/partners/himel.png` },
  ];
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">PARTNERS WE WORK WITH</h2>
        <div className="flex animate-infinite-scroll gap-8">
          {doubled.map((p, i) => (
            <div key={i} className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-gray-50 rounded-lg flex items-center justify-center p-4 shadow-sm">
              <img src={p.logo} alt={p.name} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes infiniteScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-infinite-scroll { display: flex; width: max-content; animation: infiniteScroll 18s linear infinite; }
      `}</style>
    </section>
  );
};

// --- Home Content ---
const HomeContent = () => {
  const [current, setCurrent] = React.useState(0);
  const slides = [
    { img: `${process.env.PUBLIC_URL}/images/slide1.jpg`, title: "Custom LV Panels", text: "Built to your exact specs" },
    { img: `${process.env.PUBLIC_URL}/images/slide2.jpg`, title: "DSE Auto Transfer Switch", text: "Zero downtime backup" },
    { img: `${process.env.PUBLIC_URL}/images/slide3.jpg`, title: "Smart MCCs", text: "Automation & control" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@700;800;900&display=swap" rel="stylesheet" />
      <style jsx>{`
        .alegreya-hero { font-family: 'Alegreya', serif; font-weight: 900; text-shadow: 0 0 15px rgba(0,0,0,0.7); letter-spacing: 1px; }
      `}</style>

      {/* HERO SLIDER */}
      <div className="relative h-96 md:h-screen overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <img src={s.img} alt={s.title} className="w-full h-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center text-center p-6">
              <div className="max-w-4xl">
                <h1 className="alegreya-hero text-4xl md:text-7xl text-white mb-4 leading-tight">{s.title}</h1>
                <p className="text-xl md:text-3xl text-yellow-300 font-medium drop-shadow-lg">{s.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-gray-400'}`} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <PartnersCarousel />

        {/* === NEW SECTIONS === */}
        {/* 1. Custom-made LV Panels */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Custom-made LV Panels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img src={`${process.env.PUBLIC_URL}/home/lv-panel.jpg`} alt="Custom LV Panel" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
            <img src={`${process.env.PUBLIC_URL}/home/dse8610.jpg`} alt="DSE8610 Controller" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
          </div>
        </section>

        {/* 2. Electrical Installations */}
        <section className="my-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Electrical Installations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img src={`${process.env.PUBLIC_URL}/home/install1.jpg`} alt="Installation 1" className="w-full h-64 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
            <img src={`${process.env.PUBLIC_URL}/home/install2.jpg`} alt="Installation 2" className="w-full h-64 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
          </div>
        </section>

        {/* 3. Service & Maintenance */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Service & Maintenance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img src={`${process.env.PUBLIC_URL}/home/service1.jpg`} alt="Service 1" className="w-full h-64 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
            <img src={`${process.env.PUBLIC_URL}/home/service2.jpg`} alt="Service 2" className="w-full h-64 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white p-10 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Need LV Panels or Electrical Service?</h3>
          <a href={WHATSAPP_LINK} className="bg-white text-red-600 px-8 py-3 rounded-full font-bold inline-flex items-center hover:bg-gray-100 transition">
            Get Quote <Phone size={20} className="ml-2" />
          </a>
        </section>
      </div>
    </div>
  );
};

// --- About Us ---
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">About Senrans Ltd</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg text-lg leading-relaxed mb-12">
        <p className="mb-6">Senrans Ltd is an electrical engineering company that offers Low Voltage & Medium Voltage solutions from design, supply, installation, commissioning and after sales support. We are also at the forefront to promote clean energy & power backup solutions.</p>
        <p className="mb-6">Senrans assemble LV panels that are custom made for all applications. Our range of panels include:</p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-red-600 font-medium">
          <li>Changeover panels</li>
          <li>Synch & Control panels</li>
          <li>Metering panels</li>
          <li>Distribution boards</li>
          <li>Power factor correction banks</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={`${process.env.PUBLIC_URL}/images/project-person1.jpg`} alt="Team Project 1" className="w-full h-80 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
        <img src={`${process.env.PUBLIC_URL}/images/project-person2.jpg`} alt="Team Project 2" className="w-full h-80 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
      </div>
    </div>
  );
};

// --- Products List ---
const ProductsList = () => {
  const categories = [
    { title: "MV Solutions", img: `${process.env.PUBLIC_URL}/products/mv.jpg`, to: "/products-services/mv" },
    { title: "LV Panels", img: `${process.env.PUBLIC_URL}/products/lv.jpg`, to: "/products-services/lv" },
    { title: "DSE Generator Controllers", img: `${process.env.PUBLIC_URL}/products/dse.jpg`, to: "/products-services/dse" },
    { title: "LV Circuit Breakers", img: `${process.env.PUBLIC_URL}/products/breaker.jpg`, to: "/products-services/breaker" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">LV & MV Products & Services</h1>
      <p className="text-center mb-12 text-lg max-w-3xl mx-auto">What We Do:</p>
      <ul className="list-disc list-inside text-lg text-gray-700 max-w-3xl mx-auto mb-12 space-y-1">
        <li>Electrical Installations</li>
        <li>Electrical services i.e Power factor correction</li>
        <li>Annual Maintenance Contracts (AMCs)</li>
        <li>Electrical inspections</li>
        <li>Thermography services</li>
        <li>Assembly & installation of LV panels</li>
        <li>Supply of LV & MV electrical switchgears</li>
        <li>Supply of DSE generator controllers</li>
        <li>Backup solutions</li>
      </ul>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <Link to={cat.to} key={i} className="group bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden">
            <img src={cat.img} alt={cat.title} className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-300" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-red-600 mb-2">{cat.title}</h3>
              <span className="text-red-600 font-medium flex items-center group-hover:text-red-700">
                View Details <ArrowRight size={16} className="ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// --- Product Detail Component ---
const ProductDetail = ({ title, children, img1, img2 }) => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">{title}</h1>
    <div className="bg-white p-8 rounded-xl shadow-lg text-lg leading-relaxed mb-10">{children}</div>
    <div className="grid md:grid-cols-2 gap-6">
      <img src={img1} alt={title} className="w-full h-64 md:h-80 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
      <img src={img2} alt={title} className="w-full h-64 md:h-80 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" />
    </div>
  </div>
);

// --- FULL PRODUCT PAGES ---
const MV = () => (
  <ProductDetail title="Medium Voltage (MV) Switchgear & Solutions" img1={`${process.env.PUBLIC_URL}/products/mv1.jpg`} img2={`${process.env.PUBLIC_URL}/products/mv2.jpg`}>
    <p className="mb-6">We design, supply, and install <strong>IEC-compliant Medium Voltage (11kV – 33kV)</strong> switchgear for industrial, commercial, and utility applications. Our MV solutions ensure reliable power distribution with minimal downtime.</p>
    <h3 className="text-xl font-bold text-red-600 mb-3">Key Features:</h3>
    <ul className="list-disc list-inside space-y-2 mb-6">
      <li>Air-insulated (AIS) & Gas-insulated (GIS) switchgear</li>
      <li>Vacuum or SF6 circuit breakers</li>
      <li>Protection relays with IEC 61850 communication</li>
      <li>Compact modular design for space efficiency</li>
      <li>Remote monitoring & SCADA integration</li>
    </ul>
    <h3 className="text-xl font-bold text-red-600 mb-3">Applications:</h3>
    <p>Substations, factories, hospitals, data centers, solar farms.</p>
  </ProductDetail>
);

const LV = () => (
  <ProductDetail title="Custom Low Voltage (LV) Panels – Built to Your Specs" img1={`${process.env.PUBLIC_URL}/products/lv1.jpg`} img2={`${process.env.PUBLIC_URL}/products/lv2.jpg`}>
    <p className="mb-6">Senrans specializes in <strong>fully customized LV panels</strong> engineered for performance, safety, and scalability. From distribution boards to complex control systems — we build it in-house.</p>
    <h3 className="text-xl font-bold text-red-600 mb-3">Our Range Includes:</h3>
    <ul className="list-disc list-inside space-y-2 mb-6">
      <li>Changeover panels</li>
      <li>Synch & Control panels</li>
      <li>Metering panels</li>
      <li>Main & Sub-distribution boards</li>
      <li>Power factor correction banks</li>
    </ul>
    <p className="mb-4"><strong>Standards:</strong> IEC 61439 | Form 2–4 segregation | Digital metering | Modbus-ready</p>
    <h3 className="text-xl font-bold text-red-600 mb-3">Applications:</h3>
    <p>Factories, offices, schools, hotels, residential complexes.</p>
  </ProductDetail>
);

const DSE = () => (
  <ProductDetail title="Deep Sea Electronics (DSE) Generator Controllers" img1={`${process.env.PUBLIC_URL}/products/dse1.jpg`} img2={`${process.env.PUBLIC_URL}/products/dse2.jpg`}>
    <p className="mb-6">Power your backup systems with <strong>DSE’s world-class auto-start and synchronization controllers</strong>. We supply, install, and commission DSE panels for seamless mains-to-generator transitions.</p>
    <h3 className="text-xl font-bold text-red-600 mb-3">Popular Models:</h3>
    <ul className="list-disc list-inside space-y-2 mb-6">
      <li><strong>DSE8610</strong> – Auto mains failure & load sharing</li>
      <li><strong>DSE8620</strong> – Synchronization up to 32 gensets</li>
      <li><strong>DSE7410</strong> – Manual & auto control</li>
    </ul>
    <h3 className="text-xl font-bold text-red-600 mb-3">Features:</h3>
    <ul className="list-disc list-inside space-y-2 mb-6">
      <li>3-phase sensing</li>
      <li>RS485 Modbus & CANbus</li>
      <li>Cloud monitoring via DSEWebNet</li>
      <li>Event logging & SMS alerts</li>
    </ul>
    <h3 className="text-xl font-bold text-red-600 mb-3">Applications:</h3>
    <p>Hospitals, banks, telcos, industrial plants.</p>
  </ProductDetail>
);

const Breaker = () => (
  <ProductDetail title="Low Voltage Circuit Breakers (MCCB & ACB)" img1={`${process.env.PUBLIC_URL}/products/breaker1.jpg`} img2={`${process.env.PUBLIC_URL}/products/breaker2.jpg`}>
    <p className="mb-6">Protect your electrical systems with <strong>high-breaking-capacity LV breakers</strong> from trusted brands (ABB, Schneider, Siemens). Prevent faults, fires, and equipment damage.</p>
    <h3 className="text-xl font-bold text-red-600 mb-3">Types Available:</h3>
    <ul className="list-disc list-inside space-y-2 mb-6">
      <li><strong>MCCB (Molded Case)</strong> – 16A to 1600A</li>
      <li><strong>ACB (Air Circuit Breaker)</strong> – 800A to 6300A</li>
    </ul>
    <h3 className="text-xl font-bold text-red-600 mb-3">Protection:</h3>
    <ul className="list-disc list-inside space-y-2 mb-6">
      <li>Thermal-magnetic or electronic trip units</li>
      <li>Short-circuit rating up to 100kA</li>
      <li>Selectivity & cascading</li>
      <li>Motorized operation (optional)</li>
    </ul>
    <h3 className="text-xl font-bold text-red-600 mb-3">Applications:</h3>
    <p>Main incomers, motor feeders, capacitor banks.</p>
  </ProductDetail>
);

// --- Gallery ---
const Gallery = () => {
  const images = Array.from({ length: 12 }, (_, i) => `${process.env.PUBLIC_URL}/gallery/new${i + 1}.jpg`);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative group">
            <img 
              src={src} 
              alt={`Project ${i+1}`} 
              className="w-full h-40 object-cover rounded-lg shadow transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 hover:ring-4 hover:ring-red-600" 
            />
            {i === 2 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Camera size={32} className="text-yellow-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Contact ---
const Contact = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Contact Us</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-4 text-lg">
          <p className="flex items-center"><Mail size={20} className="mr-3 text-red-600" /> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-red-600">{CONTACT_EMAIL}</a></p>
          <p className="flex items-center"><Phone size={20} className="mr-3 text-red-600" /> <a href={WHATSAPP_LINK} className="hover:text-red-600">+254 757 689 205</a></p>
          <p className="flex items-center"><Phone size={20} className="mr-3 text-red-600" /> <a href="https://wa.me/254755388676" className="hover:text-red-600">+254 755 388 676</a></p>
          <p className="flex items-start"><MapPin size={20} className="mr-3 mt-1 text-red-600" /> {COMPANY_ADDRESS}</p>
          <p className="flex items-start"><Clock size={20} className="mr-3 mt-1 text-red-600" /> Monday–Friday: 8:00 AM – 5:00 PM</p>
          <p className="flex items-start pl-7">Saturdays: 8:00 AM – 12:00 PM</p>
        </div>
      </div>
      <div className="h-96 rounded-xl overflow-hidden shadow-lg border-2 border-red-600">
        <iframe title="Location" src={MAP_EMBED} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
);

// --- Footer ---
const Footer = () => (
  <footer className="bg-black text-white mt-12">
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
        <div>
          <Link to="/" className="flex items-center mb-3"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Senrans Ltd" className="h-12 w-auto" /></Link>
          <p className="text-sm text-gray-400"><strong>Senrans Ventures Ltd</strong> — LV panels expert, Electrical services, DSE generator controllers, LV & MV products</p>
        </div>
        <div>
          <h3 className="font-bold mb-3 border-b border-red-600 pb-1 text-lg">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-400">About</Link></li>
            <li><Link to="/products-services" className="hover:text-red-400">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-red-400">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 border-b border-red-600 pb-1 text-lg">Products</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/products-services/mv" className="hover:text-red-400">MV Solutions</Link></li>
            <li><Link to="/products-services/lv" className="hover:text-red-400">LV Panels</Link></li>
            <li><Link to="/products-services/dse" className="hover:text-red-400">DSE Controllers</Link></li>
            <li><Link to="/products-services/breaker" className="hover:text-red-400">LV Breakers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 border-b border-red-600 pb-1 text-lg">Contact</h3>
          <p className="text-sm mb-2"><MapPin size={16} className="inline mr-1" /> {COMPANY_ADDRESS}</p>
          <p className="text-sm mb-2"><Mail size={16} className="inline mr-1" /> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-red-400">{CONTACT_EMAIL}</a></p>
          <p className="text-sm mb-2"><Phone size={16} className="inline mr-1" /> <a href={WHATSAPP_LINK} className="hover:text-red-400">+254 757 689 205</a></p>
          <div className="flex space-x-3 mt-4">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><TikTokIcon /></a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 pt-6">© {new Date().getFullYear()} Senrans Ventures Ltd. All rights reserved.</p>
    </div>
  </footer>
);

// --- Scroll to Top ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

// --- App ---
const App = () => (
  <Router>
    <ScrollToTop />
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/products-services" element={<ProductsList />} />
          <Route path="/products-services/mv" element={<MV />} />
          <Route path="/products-services/lv" element={<LV />} />
          <Route path="/products-services/dse" element={<DSE />} />
          <Route path="/products-services/breaker" element={<Breaker />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
         className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white shadow-xl hover:scale-110 transition z-50">
        <Phone size={28} />
      </a>
    </div>
  </Router>
);

export default App;