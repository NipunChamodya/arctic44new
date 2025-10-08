'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Android vibration
  const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);
  const vibrateAndroid = () => {
    if (isAndroid && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/team/alex.jpg",
      expertise: "Digital Strategy & Leadership"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/team/sarah.jpg",
      expertise: "Full-Stack Development"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Designer",
      image: "/team/mike.jpg",
      expertise: "UI/UX & Brand Design"
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "/team/emma.jpg",
      expertise: "Agile & Client Relations"
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Our team comprises seasoned professionals with 5+ years of experience in cutting-edge technologies.",
      icon: ""
    },
    {
      title: "Innovation-Driven",
      description: "We leverage the latest technologies including AI, cloud solutions, and modern frameworks to deliver exceptional results.",
      icon: ""
    },
    {
      title: "Quality Guarantee",
      description: "We maintain the highest standards in every project, ensuring robust, scalable, and future-proof solutions.",
      icon: ""
    },
    {
      title: "Client-Centric",
      description: "Your success is our priority. We listen, understand, and tailor solutions that align with your business goals.",
      icon: ""
    },
    {
      title: "Results-Driven",
      description: "We don't just build software; we deliver measurable results that drive your business forward.",
      icon: ""
    },
    {
      title: "End-to-End Support",
      description: "From concept to deployment and beyond, we provide comprehensive support throughout your digital journey.",
      icon: ""
    }
  ];

  const partners = [
    { name: "TechCorp", logo: "/partners/techcorp.png" },
    { name: "Innovation Labs", logo: "/partners/innovation.png" },
    { name: "Digital Ventures", logo: "/partners/digital.png" },
    { name: "StartupHub", logo: "/partners/startup.png" },
    { name: "CloudTech", logo: "/partners/cloud.png" },
    { name: "DataFlow", logo: "/partners/dataflow.png" }
  ];

  return (
    <>
      <Head>
        <title>About Us – Arctic44</title>
        <meta name="description" content="Arctic44 is a forward-thinking digital agency specializing in innovative solutions. Founded in 2025, we transform businesses with cutting-edge technology and creative excellence." />
      </Head>

      {/* Top Navigation Bar */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 py-3 rounded-3xl
        transition-all duration-300 overflow-hidden
        ${scrolled
          ? 'bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl border border-white/30 shadow-xl scale-95 saturate-150'
          : 'bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-white/20 shadow-md saturate-200'}`}
        style={{
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          backdropFilter: 'blur(10px) saturate(180%)',
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 80%)`,
          boxShadow: scrolled
            ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            : '0 4px 12px 0 rgba(31, 38, 135, 0.25)',
        }}
      >
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-3">
            <Image src="/logonavbar.png" alt="Arctic44 Logo" width={100} height={40} />
          </div>

          <nav className="hidden md:flex space-x-6 text-sm">
            <Link
              href="/"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              Blogs
            </Link>
            <Link href="/about" className="text-white border-b-2 border-white">
              About Us
            </Link>
            
            <Link
              href="/careers"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              Careers
            </Link>
          </nav>

          <Link href="/#contact">
            <button
              className="bg-[#ccd6f6] text-black font-semibold py-2 px-4 rounded-xl shadow hover:bg-white transition flex items-center gap-2"
              onClick={vibrateAndroid}
            >
              Get in Touch
            </button>
          </Link>
        </div>
      </header>

      {/* Main About Content */}
      <main className="min-h-screen bg-black from-[#1a1a1a] via-[#222] to-[#1a1a1a] text-white pt-40 pb-16">
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-extrabold text-[#6699cc] mb-6">
              About Arctic44
            </h1>
            <p className="text-2xl text-gray-300 mb-4 font-light">
              Elevating Your Vision, Empowering Your Success
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              At Arctic44, we are driven by a singular vision: to provide market-leading, 
              innovative digital solutions that redefine excellence in the world of technology.
            </p>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white/6 backdrop-blur-sm rounded-xl p-8 border border-white/15">
                <h2 className="text-3xl font-bold text-[#6699cc] mb-6">Who We Are</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Arctic44 is a dynamic and forward-thinking digital agency established in 2025. 
                  We are a passionate team of professionals dedicated to empowering businesses 
                  with transformative digital solutions that drive real results.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With our commitment to innovation and excellence, we blend cutting-edge technology 
                  with creative design to deliver solutions that not only meet but exceed expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#6699cc]/20 to-transparent rounded-2xl p-8 border border-[#6699cc]/30">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-[#6699cc]">2025</div>
                  <div className="text-xl text-white">Founded</div>
                  <div className="text-gray-300">
                    Built on the foundation of excellence, innovation, and unwavering commitment to client success.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/6 backdrop-blur-sm rounded-xl p-8 border border-white/15"
            >
              <h2 className="text-3xl font-bold text-[#6699cc] mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-white mb-4 font-semibold">
                Illuminating the Path to Digital Excellence
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our vision is simple yet profound: to provide high-quality digital solutions 
                that empower our clients to achieve their goals. We believe in the transformative 
                power of technology, and we are dedicated to harnessing it for the benefit of our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/6 backdrop-blur-sm rounded-xl p-8 border border-white/15"
            >
              <h2 className="text-3xl font-bold text-[#6699cc] mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-white mb-4 font-semibold">
                Innovative Solutions, Tailored to You
              </p>
              <p className="text-gray-300 leading-relaxed">
                We strive to deliver exceptional digital experiences that help businesses grow 
                and succeed in the modern digital landscape. Our commitment to innovation, 
                quality, and client success drives everything we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#6699cc] mb-6">
              Why Choose Arctic44?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just build software; we build relationships, trust, and lasting value. 
              Here's what sets us apart:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#6699cc]/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#6699cc] mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-[#6699cc]/10 to-transparent rounded-2xl p-12 border border-[#6699cc]/20"
          >
            <h2 className="text-4xl font-bold text-[#6699cc] mb-8 text-center">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-white font-semibold">
                  Quality is Non-Negotiable
                </p>
                <p className="text-gray-300 leading-relaxed">
                  At Arctic44, we understand that quality is non-negotiable. We believe in delivering 
                  nothing less than excellence to our clients. We maintain rigorous standards and 
                  work only with experienced professionals who are passionate about pushing the 
                  boundaries of technology.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our clients can trust that when they choose Arctic44, they are partnering with 
                  a team of experts dedicated to their success.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-[#6699cc]">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-[#6699cc]">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-[#6699cc]">1+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Team Section
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#6699cc] mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented professionals who make Arctic44's success possible. 
              Our team is our strength and the driving force behind our innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-[#6699cc]/30 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#6699cc] to-[#4477aa] rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#6699cc] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </section>  */}

        {/* Partners Section
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#6699cc] mb-6">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center justify-center hover:border-[#6699cc]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#6699cc]/20 to-transparent rounded-lg flex items-center justify-center">
                  <span className="text-[#6699cc] font-bold text-sm text-center">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-[#6699cc]/20 to-[#4477aa]/20 rounded-2xl p-12 text-center border border-[#6699cc]/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us on our journey to redefine excellence in digital solutions. 
              Choose Arctic44, where innovation meets expertise, and your success is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#6699cc] text-white font-semibold py-3 px-8 rounded-xl hover:bg-[#5588bb] transition flex items-center gap-2">
                  Start Your Project
                </button>
              </Link>
              <Link href="/services">
                <button className="border border-[#6699cc] text-[#6699cc] font-semibold py-3 px-8 rounded-xl hover:bg-[#6699cc]/10 transition">
                  View Our Services
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Bottom Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/20 text-white flex justify-around items-center py-3 md:hidden z-50">
        <Link
          href="/"
          className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition"
          onClick={vibrateAndroid}
        >
          <span>Home</span>
        </Link>
        <Link
          href="/services"
          className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition"
          onClick={vibrateAndroid}
        >
          <span>Services</span>
        </Link>
        <Link
          href="/blog"
          className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition"
          onClick={vibrateAndroid}
        >
          <span>Blogs</span>
        </Link>
        <Link
          href="/contact"
          className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition"
          onClick={vibrateAndroid}
        >
          <span>Contact</span>
        </Link>
        <Link
          href="/careers"
          className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition"
          onClick={vibrateAndroid}
        >
          <span>Careers</span>
        </Link>
      </nav>
    </>
  );
}