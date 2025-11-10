import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Camera, Clock, ArrowRight, Zap, Wrench, Activity, Shield, Settings, Calendar, Search, Thermometer } from 'lucide-react';

// --- TikTok SVG (PERFECT) ---
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
    <path d="M164.4 24a44.9 44.9 0 0 0 25.7 8.2V67a78.9 78.9 0 0 1-26.4-4.8v66.6a65.4 65.4 0 1 1-65.4-65.4h.7v33.1a32.3 32.3 0 1 0 22.3 30.6V24h43.1Z"/>
  </svg>
);

// --- Config ---
const CONTACT_EMAIL = 'sales@senrans.com';
const WHATSAPP_NUMBER = '+254725723091';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`;
const COMPANY_ADDRESS = 'Repen Complex, Block B, 3rd Floor, office 310B, Nairobi, Kenya';
const MAP_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789!2d36.928722!3d-1.378278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A00!2zMcKwMjInNDEuOCJTIDM2wrA1NSc0My40IkU!5e1!3m2!1sen!2ske!4v1234567890`;
const TIKTOK_LINK = 'https://www.tiktok.com/@senrans_ltd';

// --- SOCIAL LINKS ---
const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/people/Senrans-Ventures/pfbid0XufECfqUEoAKRqbuHT2vkn8EdSvHQxFX8HueCJYLHYb2ajG19v8ntsadvQpXn9nl/',
  instagram: 'https://www.instagram.com/senrans_ltd_/?igsh=MTk5OWJ2NnRudWoxag%3D%3D',
  linkedin: '#',
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
            <img src="/logo.png" alt="Senrans Ltd" className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/products-services">Products & Services</NavItem>
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
            <Link to="/products-services" onClick={closeMenu} className="block px-3 py-2 text-white hover:bg-red-700">Products & Services</Link>
            <Link to="/gallery" onClick={closeMenu} className="block px-3 py-2 text-white hover:bg-red-700">Gallery</Link>
            <Link to="/contact" onClick={closeMenu} className="block px-3 py-2 text-white hover:bg-red-700">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

// --- PARTNERS CAROUSEL ---
const PartnersCarousel = () => {
  const partners = [
    { name: "Siemens", logo: "/partners/siemens.png" },
    { name: "Schneider", logo: "/partners/schneider.png" },
    { name: "ABB", logo: "/partners/abb.png" },
    { name: "Eaton", logo: "/partners/eaton.png" },
    { name: "Danfoss", logo: "/partners/danfoss.png" },
    { name: "Deep Sea Electronics", logo: "/partners/deepsea.png" },
    { name: "Himel", logo: "/partners/himel.png" },
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

// --- Home (HERO + QUOTE + 8 SERVICE CARDS) ---
const HomeContent = () => {
  const [current, setCurrent] = React.useState(0);
  const slides = [
    { img: "/images/slide1.jpg", title: "Custom LV Panels", text: "Built to your exact specs" },
    { img: "/images/slide2.jpg", title: "DSE Auto Transfer Switch", text: "Zero downtime backup" },
    { img: "/images/slide3.jpg", title: "Smart MCCs", text: "Automation & control" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  // 8 CARDS — SOLAR REMOVED
  const SERVICES = [
    { Icon: Zap, title: "Electrical Installations", desc: "Wiring & lighting systems" },
    { Icon: Wrench, title: "Panel Assembly", desc: "Custom LV panels built in-house" },
    { Icon: Activity, title: "Energy Monitoring", desc: "Real-time power analytics" },
    { Icon: Shield, title: "Backup Products", desc: "UPS, inverters & generators" },
    { Icon: Settings, title: "DSE Controllers", desc: "Auto-transfer & sync panels" },
    { Icon: Zap, title: "Power Factor Correction", desc: "Up to 30% on KPLC bills" },
    { Icon: Calendar, title: "Annual Maintenance", desc: "24/7 service contracts" },
    { Icon: Thermometer, title: "Thermography", desc: "Prevent downtime with heat scans" },
  ];

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

        {/* QUOTE BOX */}
        <section className="bg-red-600 text-white p-10 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Need LV Panels or ATS?</h3>
          <a href={WHATSAPP_LINK} className="bg-white text-red-600 px-8 py-3 rounded-full font-bold inline-flex items-center hover:bg-gray-100 transition">
            Get Quote <Phone size={20} className="ml-2" />
          </a>
        </section>

        {/* 8 SERVICE CARDS */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">OUR SERVICES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 overflow-hidden">
                <div className="p-8 text-center">
                  <div className="mb-5 inline-block p-5 bg-red-50 rounded-full group-hover:bg-red-600 transition">
                    <s.Icon size={40} className="text-red-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition">
                    <a href={WHATSAPP_LINK} className="text-red-600 font-bold flex items-center justify-center gap-2 hover:gap-4 transition">
                      Get Quote <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-red-500 to-red-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// --- About Us ---
const About = () => {
  const collageImages = Array(6).fill().map((_, i) => `/images/collage${i + 1}.jpg`);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">About Senrans Ventures Ltd</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg text-lg leading-relaxed mb-12">
        <p className="mb-6"><strong>Senrans Ventures Ltd</strong> offers end-to-end electrical engineering solutions from design, installation, commissioning and after sales support.</p>
        <p className="mb-6">Our electrical services cover predictive, preventative & corrective maintenance 24hrs 7days a week. We do general inspection for any physical damage, operational check, earth connection, fault diagnosis, trouble shooting, thermography services and safe cleaning of switchgears.</p>
        <p className="mb-6">Senrans LV panels are custom made for all applications. Our range of panels include; Changeover panels, distributions boards & power factor correction banks.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-gray-50 p-6 rounded-lg"><h3 className="text-xl font-bold text-red-600 mb-3">OUR VISION</h3><p>To be the trusted service provider in Engineering solutions in East Africa</p></div>
          <div className="bg-gray-50 p-6 rounded-lg"><h3 className="text-xl font-bold text-red-600 mb-3">Our Mission</h3><p>To provide high quality electrical solutions through customized designs that promote energy efficiency & sustainability in all sectors.</p></div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold text-red-600 mb-4">Our Core Values</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Provide timely and quality services at all times</li>
            <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Provide the right information pertaining the product / service required</li>
            <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Provide open and effective communication with all clients</li>
            <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Provide effective feedback system</li>
            <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Handle all our clients with dignity, courtesy and respect.</li>
            <li className="flex items-start"><span className="text-red-600 mr-2">•</span> Are committed to building lasting relationship with our clients</li>
          </ul>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {collageImages.map((src, i) => (
          <img key={i} src={src} alt={`Project ${i+1}`} className="w-full h-64 object-cover rounded-lg shadow hover:scale-105 transition" />
        ))}
      </div>
    </div>
  );
};

// --- Product Card ---
const ProductCard = ({ to, title, desc, img }) => (
  <Link to={to} className="group bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden">
    <img src={img} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-red-600 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{desc}</p>
      <span className="text-red-600 font-medium flex items-center group-hover:text-red-700">
        View Details <ArrowRight size={16} className="ml-1" />
      </span>
    </div>
  </Link>
);

// --- Products List ---
const ProductsList = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">LV Products & Services</h1>
    <p className="text-center mb-12 text-lg max-w-3xl mx-auto">Click any product to see full details and specifications.</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard to="/products-services/mdb" title="Main & Sub-Distribution Boards" desc="IEC 61439 compliant panels with digital metering." img="/images/mdb.jpg" />
      <ProductCard to="/products-services/mcc" title="Motor Control Centers (MCCs)" desc="PLC & VFD integration with remote monitoring." img="/images/mcc.jpg" />
      <ProductCard to="/products-services/pfc" title="Power Factor Correction" desc="Automatic capacitor banks to reduce penalties." img="/images/pfc.jpg" />
      <ProductCard to="/products-services/ats" title="DSE Auto Transfer Switch (ATS)" desc="Seamless generator backup with DSE control." img="/images/ats.jpg" />
      <ProductCard to="/products-services/breaker" title="LV Circuit Breakers" desc="MCCB, ACB for fault and overload protection." img="/images/breaker.jpg" />
      <ProductCard to="/products-services/sensor" title="Sensors" desc="Current, voltage, and temperature monitoring." img="/images/sensor.jpg" />
    </div>
    <div className="mt-16 bg-gray-100 p-8 rounded-xl text-center">
      <p className="text-lg italic text-gray-700"><strong>MV/HV Projects:</strong> Available on request — <Link to="/contact" className="text-red-600 underline">Contact us</Link>.</p>
    </div>
  </div>
);

// --- Product Detail ---
const ProductDetail = ({ title, children, img1, img2 }) => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">{title}</h1>
    <div className="bg-white p-8 rounded-xl shadow-lg text-lg leading-relaxed mb-10">{children}</div>
    <div className="grid md:grid-cols-2 gap-6">
      <img src={img1} alt={title} className="w-full h-64 md:h-80 object-cover rounded-lg shadow" />
      <img src={img2} alt={title} className="w-full h-64 md:h-80 object-cover rounded-lg shadow" />
    </div>
  </div>
);

const MDB = () => <ProductDetail title="Main & Sub-Distribution Boards" img1="/images/mdb1.jpg" img2="/images/mdb2.jpg">
  <p className="mb-4">Fully customizable LV panels compliant with <strong>IEC 61439</strong>.</p>
  <ul className="list-disc list-inside space-y-2">
    <li>Busbar rating: 400A – 4000A</li><li>MCCB, ACB, or MCB protection</li><li>Digital energy meters with Modbus</li><li>Form 2 to Form 4 segregation</li>
  </ul>
  <p className="mt-6">Used in factories, hospitals, schools, and commercial buildings.</p>
</ProductDetail>;

const MCC = () => <ProductDetail title="Motor Control Centers (MCCs)" img1="/images/mcc1.jpg" img2="/images/mcc2.jpg">
  <p className="mb-4">Intelligent MCCs with <strong>PLC, VFD, and soft starters</strong>.</p>
  <ul className="list-disc list-inside space-y-2">
    <li>Remote control via SCADA or IoT</li><li>Withdrawable drawers for easy maintenance</li><li>Overload, phase loss, and thermal protection</li>
  </ul>
  <p className="mt-6">Used in water plants, manufacturing, and pumping stations.</p>
</ProductDetail>;

const PFC = () => <ProductDetail title="Power Factor Correction Panels" img1="/images/pfc1.jpg" img2="/images/pfc2.jpg">
  <p className="mb-4">Automatic capacitor banks with detuned reactors.</p>
  <ul className="list-disc list-inside space-y-2">
    <li>Target PF: 0.98+</li><li>Real-time monitoring via touchscreen</li><li>Reduces KPLC penalties by up to 30%</li>
  </ul>
  <p className="mt-6">Perfect for industries with heavy inductive loads.</p>
</ProductDetail>;

const ATS = () => <ProductDetail title="DSE Auto Transfer Switch (ATS)" img1="/images/ats1.jpg" img2="/images/ats2.jpg">
  <p className="mb-4">Seamless backup power with <strong>Deep Sea Electronics</strong> control.</p>
  <ul className="list-disc list-inside space-y-2">
    <li>DSE 8610 / 8620 controllers</li><li>Auto-start generator on mains failure</li><li>3-phase sensing & load transfer</li><li>RS485 Modbus for remote monitoring</li>
  </ul>
  <p className="mt-6">Ensures zero downtime for critical systems.</p>
</ProductDetail>;

const Breaker = () => <ProductDetail title="LV Circuit Breakers" img1="/images/breaker1.jpg" img2="/images/breaker2.jpg">
  <p className="mb-4">MCCB and ACB for fault and overload protection.</p>
  <ul className="list-disc list-inside space-y-2">
    <li>Short-circuit breaking capacity up to 100kA</li><li>Thermal-magnetic or electronic trip units</li><li>Used in main panels and motor feeders</li><li>Prevents fire and equipment damage</li>
  </ul>
  <p className="mt-6">Critical for safety in industrial and commercial setups.</p>
</ProductDetail>;

const Sensor = () => <ProductDetail title="Sensors" img1="/images/sensor1.jpg" img2="/images/sensor2.jpg">
  <p className="mb-4">Current, voltage, and temperature sensors for LV monitoring.</p>
  <ul className="list-disc list-inside space-y-2">
    <li>Hall-effect current sensors (0–5000A)</li><li>Voltage sensors with 0.5% accuracy</li><li>PT100 for panel temperature</li><li>IoT-enabled for predictive maintenance</li>
  </ul>
  <p className="mt-6">Used in smart panels, MCCs, and energy management.</p>
</ProductDetail>;

// --- Gallery ---
const Gallery = () => {
  const images = Array.from({ length: 12 }, (_, i) => `/gallery/project${i + 1}.jpg`);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Project ${i+1}`} className="w-full h-48 object-cover rounded-lg shadow hover:scale-105 transition" />
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
          <p className="flex items-center"><Phone size={20} className="mr-3 text-red-600" /> <a href={WHATSAPP_LINK} className="hover:text-red-600">{WHATSAPP_NUMBER}</a></p>
          <p className="flex items-start"><MapPin size={20} className="mr-3 mt-1 text-red-600" /> {COMPANY_ADDRESS}</p>
          <p className="flex items-start"><Clock size={20} className="mr-3 mt-1 text-red-600" /> Monday – Saturday: 8:00 AM – 5:00 PM</p>
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
          <Link to="/" className="flex items-center mb-3"><img src="/logo.png" alt="Senrans Ltd" className="h-12 w-auto" /></Link>
          <p className="text-sm text-gray-400"><strong>Senrans Ventures Ltd</strong> — LV panel experts. DSE ATS, MCCs, PFC, breakers, and sensors.</p>
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
            <li><Link to="/products-services/ats" className="hover:text-red-400">DSE ATS</Link></li>
            <li><Link to="/products-services/breaker" className="hover:text-red-400">Breakers</Link></li>
            <li><Link to="/products-services/sensor" className="hover:text-red-400">Sensors</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 border-b border-red-600 pb-1 text-lg">Contact</h3>
          <p className="text-sm mb-2"><MapPin size={16} className="inline mr-1" /> {COMPANY_ADDRESS}</p>
          <p className="text-sm mb-2"><Mail size={16} className="inline mr-1" /> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-red-400">{CONTACT_EMAIL}</a></p>
          <p className="text-sm mb-2"><Phone size={16} className="inline mr-1" /> <a href={WHATSAPP_LINK} className="hover:text-red-400">{WHATSAPP_NUMBER}</a></p>
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
          <Route path="/products-services/mdb" element={<MDB />} />
          <Route path="/products-services/mcc" element={<MCC />} />
          <Route path="/products-services/pfc" element={<PFC />} />
          <Route path="/products-services/ats" element={<ATS />} />
          <Route path="/products-services/breaker" element={<Breaker />} />
          <Route path="/products-services/sensor" element={<Sensor />} />
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