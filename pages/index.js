import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiry, setEnquiry] = useState({
    parentName: '',
    childName: '',
    phone: '',
    classApplying: '',
    village: '',
  });
  const [formMessage, setFormMessage] = useState('');
  const timerRef = useRef(null);
  const mapsLink = 'https://maps.app.goo.gl/c4gayoQiuib1UGxHA?g_st=ipc';
  const mapsEmbedLink = 'https://www.google.com/maps?q=Nalanda%20High%20School%20Andhra%20Pradesh%20India&z=15&output=embed';
  const whatsappNumber = '8885334101';
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;

  const slides = [
    {
      bg: '/images/hero1.jpg',
      tag: 'Welcome to Nalanda High School',
      h1: 'Nurturing Every Child',
      em: 'to Reach Their Best',
      p: 'Nalanda High School provides quality education inspired by the spirit of ancient Nalanda - building confident, knowledgeable students rooted in values and ready for the future.',
      btn1: { label: 'Discover Our Story', href: '#about' },
      btn2: { label: 'Apply for Admission', href: '#contact' },
    },
    {
      bg: '/images/hero2.jpg',
      tag: 'Academic Excellence',
      h1: 'Education Beyond',
      em: 'the Classroom',
      p: 'From hands-on learning to creative arts programmes - Nalanda equips students with life skills, critical thinking, and the confidence to lead.',
      btn1: { label: 'Our Programmes', href: '#programmes' },
      btn2: { label: 'Find Our Campus', href: '#location' },
    },
    {
      bg: '/images/hero3.jpg',
      tag: 'A Campus Full of Life',
      h1: 'Quality Education',
      em: 'Close to Home',
      p: 'Set in a green, peaceful environment, Nalanda High School offers a nurturing campus where children feel safe, inspired, and eager to learn every day.',
      btn1: { label: 'View Our Campus', href: '#about' },
      btn2: { label: 'Talk to Us', href: '#contact' },
    },
  ];

  const testimonials = [
    {
      text: 'My daughter was hesitant to go to school before she joined Nalanda. Within a year, she was reciting poems on stage at the Annual Day. The teachers here do not just teach - they truly care about every child. I am so grateful to this school.',
      name: 'Laxmi Devi',
      role: 'Parent - Class 6 Student',
    },
    {
      text: 'My son joined Nalanda three years ago. His transformation has been remarkable - from a shy boy to a confident young leader. The values and discipline instilled here are truly exceptional. Nalanda is genuinely special.',
      name: 'Ramesh Kumar',
      role: 'Parent - Class 8 Student',
    },
    {
      text: 'The teachers at Nalanda are exceptional. They go above and beyond - personal attention, extra support, and genuine warmth. My children have grown so much in their communication skills and self-confidence.',
      name: 'Saraswathi Rao',
      role: 'Parent - Class 4 & 7 Students',
    },
  ];

  const schoolEvents = [
    { tag: 'Annual Event', title: 'Nalanda Annual Day - A Celebration of Young Talent', desc: 'Students showcased their talents through dance, drama, music, and speeches at our spectacular Annual Day, celebrating the achievements of every child.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', delay: '' },
    { tag: 'Academics', title: 'Science Fair - Innovations by Young Minds', desc: 'Students showcased self-built models, experiments, and environmental solutions at the school science fair, inspiring curiosity and creativity.', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80', delay: 'd1' },
    { tag: 'Sports', title: 'Nalanda Sports Meet - Spirit, Strength & Sportsmanship', desc: 'An exhilarating Sports Meet celebrating athletics, team games, and the competitive spirit of our enthusiastic students across all classes.', img: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&q=80', delay: 'd2' },
  ];

  const resetTimer = (n) => {
    clearInterval(timerRef.current);
    setSlideIndex(n);
    timerRef.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slides.length);
    }, 5200);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const tTimer = setInterval(() => {
      setTestIndex(prev => (prev + 1) % testimonials.length);
    }, 6200);
    return () => clearInterval(tTimer);
  }, []);

  const handleEnquiryChange = (field) => (e) => {
    setEnquiry(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    if (!enquiry.parentName || !enquiry.childName || !enquiry.phone || !enquiry.classApplying) {
      setFormMessage('Please fill parent name, child name, phone number, and class before submitting.');
      return;
    }

    const message = [
      'Hello Nalanda High School, I would like admission information.',
      `Parent / Guardian Name: ${enquiry.parentName}`,
      `Child Name: ${enquiry.childName}`,
      `Phone Number: ${enquiry.phone}`,
      `Class Applying For: ${enquiry.classApplying}`,
      `Village / Town: ${enquiry.village || 'Not provided'}`,
    ].join('\n');

    setFormMessage('Opening WhatsApp with your enquiry details...');
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.sr').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goSlide = (n) => resetTimer((n + slides.length) % slides.length);

  return (
    <>
      <Head>
        <title>Nalanda High School - Nurturing Young Minds</title>
        <meta name="description" content="Nalanda High School - quality education, values-based learning, and holistic development for every child." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.jpg" />
      </Head>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <span>Admissions: <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp +91 {whatsappNumber}</a></span>
          <div className="topbar-r">
            <span><a href="mailto:nalandahighschool@gmail.com">nalandahighschool@gmail.com</a></span>
            <span>Inspiring Young Minds Since Inception</span>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav id="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <div className="logo-circle">
              <img src="/images/logo.jpg" alt="NHS Logo" width={46} height={46} style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="logo-txt">
              <div className="name">Nalanda <span>High School</span></div>
              <div className="sub">Andhra Pradesh - India</div>
            </div>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#">About <span className="arr">v</span></a>
              <div className="drop">
                <a href="#about">About Us</a>
                <a href="#about">Our Mission</a>
                <a href="#founders">Co-Founders</a>
              </div>
            </li>
            <li><a href="#programmes">Academics</a></li>
            <li><a href="#life">Life at Nalanda</a></li>
            <li><a href="#location">Our Campus</a></li>
            <li><a href="#contact">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
          <a href="#contact" className="nav-cta">Apply Now</a>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#programmes" onClick={() => setMenuOpen(false)}>Academics</a>
          <a href="#life" onClick={() => setMenuOpen(false)}>Life at Nalanda</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>Our Campus</a>
          <a href="#founders" onClick={() => setMenuOpen(false)}>Co-Founders</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mob-cta">Apply Now</a>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section className="hero">
        {slides.map((s, i) => (
          <div key={i} className={`slide${slideIndex === i ? ' active' : ''}`}>
            <img className="slide-bg" src={s.bg} alt={s.tag} />
            <div className="slide-ov" />
            <div className="slide-body">
              <div className="slide-tag">{s.tag}</div>
              <h1 className="slide-h">{s.h1}<em>{s.em}</em></h1>
              <p className="slide-p">{s.p}</p>
              <div className="hero-btns">
                <a href={s.btn1.href} className="btn-solid">{s.btn1.label}</a>
                <a href={s.btn2.href} className="btn-ghost">{s.btn2.label}</a>
              </div>
            </div>
          </div>
        ))}
        <div className="slider-ctrl">
          <div className="dots">
            {slides.map((_, i) => (
              <div key={i} className={`dot${slideIndex === i ? ' on' : ''}`} onClick={() => goSlide(i)} />
            ))}
          </div>
          <div className="arrows">
            <button onClick={() => goSlide(slideIndex - 1)}>&#8592;</button>
            <button onClick={() => goSlide(slideIndex + 1)}>&#8594;</button>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stats-row">
          <div className="st sr"><div className="st-num">500<span>+</span></div><div className="st-lbl">Students Enrolled</div></div>
          <div className="st sr d1"><div className="st-num">50<span>+</span></div><div className="st-lbl">Dedicated Educators</div></div>
          <div className="st sr d2"><div className="st-num">10</div><div className="st-lbl">Classes (I to X)</div></div>
          <div className="st sr d3"><div className="st-num">100<span>%</span></div><div className="st-lbl">Holistic Education</div></div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-img sr">
              <img src="/images/about.jpg" alt="Nalanda High School campus" style={{ width: '100%', height: '440px', objectFit: 'cover' }} />
              <div className="about-badge">
                <div className="ab-tag">Nalanda High School</div>
                <div className="ab-val">NHS - Est. 2010</div>
              </div>
            </div>
            <div className="sr d2">
              <div className="eyebrow">About Nalanda High School</div>
              <h2 className="sec-title">Where Every Child Gets<br />a Chance to <em>Shine</em></h2>
              <p className="sec-body">Nalanda High School is inspired by the legacy of ancient Nalanda - the world's first great university - and carries that spirit forward by providing quality, values-based education to students from Classes I to X. Rooted in community and dedicated to excellence, we build not just academic skills but confident, compassionate human beings.</p>
              <div className="features">
                <div className="feat">
                  <div className="feat-ico">01</div>
                  <div>
                    <div className="feat-title">Holistic Curriculum</div>
                    <div className="feat-desc">Activity-based, inquiry-driven learning designed to nurture curiosity, creativity, and critical thinking.</div>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-ico">02</div>
                  <div>
                    <div className="feat-title">Caring, Trained Teachers</div>
                    <div className="feat-desc">Our educators are dedicated mentors who go beyond textbooks to inspire a lifelong love of learning.</div>
                  </div>
                </div>
                <div className="feat">
                  <div className="feat-ico">03</div>
                  <div>
                    <div className="feat-title">Safe, Green Campus</div>
                    <div className="feat-desc">A spacious, serene campus surrounded by nature - the perfect environment for children to grow and thrive.</div>
                  </div>
                </div>
              </div>
              <a href="#contact" className="readmore">Join the Nalanda Family</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="section section-bg" id="programmes">
        <div className="wrap">
          <div className="sr" style={{ textAlign: 'center' }}>
            <div className="eyebrow eyebrow-c">Our Programmes</div>
            <h2 className="sec-title" style={{ maxWidth: '540px', margin: '0 auto 14px' }}>All-Round Development<br />for <em>Every Student</em></h2>
            <p className="sec-body" style={{ margin: '0 auto', textAlign: 'center' }}>Beyond academics - Nalanda invests in every dimension of a child's growth.</p>
          </div>
          <div className="prog-grid">
            {[
              { tag: 'Academics', title: 'Activity-Based Learning', desc: 'Hands-on, inquiry-driven classrooms that spark curiosity and build deep conceptual understanding from Class I to X.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', delay: '' },
              { tag: 'Sports & Fitness', title: 'Physical Education & Sports', desc: 'Regular sports, yoga, and physical fitness programmes that build teamwork, discipline, and healthy habits.', img: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80', delay: 'd1' },
              { tag: 'Arts & Culture', title: 'Creative Arts Festival', desc: 'Annual art festivals, cultural performances, and creative workshops that celebrate each child\'s unique talent and expression.', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&q=80', delay: 'd2' },
              { tag: 'Life Skills', title: 'Life Skills Programme', desc: 'Communication, emotional intelligence, and career awareness - preparing students for life beyond school walls.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', delay: 'd3' },
            ].map((p, i) => (
              <div key={i} className={`prog-card sr ${p.delay}`}>
                <div className="prog-img"><img src={p.img} alt={p.title} /></div>
                <div className="prog-body">
                  <div className="prog-tag">{p.tag}</div>
                  <div className="prog-title">{p.title}</div>
                  <div className="prog-desc">{p.desc}</div>
                  <a href="#contact" className="readmore">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="split" id="life">
        <div className="split-txt sr">
          <div className="eyebrow eyebrow-lt">A Campus Full of Life</div>
          <h2 className="sec-title sec-title-w">Our Students Are<br />Prepared for <em style={{ color: '#86efac' }}>Achievement</em></h2>
          <p className="sec-body sec-body-w">Nalanda High School nurtures not just academic excellence but holistic development - arts, sports, life skills, and character. Our students leave not just with marks, but with confidence, values, and a vision for their future.</p>
          <div className="split-btns">
            <a href="#programmes" className="btn-wh-solid">Our Academics</a>
            <a href="#contact" className="btn-wh-out">Apply Now</a>
          </div>
        </div>
        <div className="split-img">
          <img src="/images/split.jpg" alt="Nalanda campus aerial view" />
        </div>
      </section>

      {/* CO-FOUNDERS */}
      <section className="founders-sec" id="founders">
        <div className="wrap">
          <div className="founders-hdr sr">
            <div className="eyebrow eyebrow-c">Leadership</div>
            <h2 className="sec-title" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 14px' }}>The Visionaries Behind<br /><em>Nalanda High School</em></h2>
            <p className="sec-body" style={{ textAlign: 'center', margin: '0 auto' }}>Built on a shared dream of accessible, quality education - meet the co-founders who brought Nalanda to life.</p>
          </div>
          <div className="founders-grid">
            <div className="founder-card sr d1">
              <div className="founder-avatar">NR</div>
              <div className="founder-role-tag">Co-Founder &amp; Director</div>
              <div className="founder-name">Ilapuram Namratha Reddy</div>
              <div className="founder-divider" />
              <p className="founder-bio">A passionate advocate for quality education, Namratha Reddy co-founded Nalanda High School with the vision of creating a nurturing institution where every child has the opportunity to discover their potential and build a brighter future for themselves and their community.</p>
            </div>
            <div className="founder-card sr d2">
              <div className="founder-avatar">KR</div>
              <div className="founder-role-tag">Co-Founder &amp; Managing Director</div>
              <div className="founder-name">Ilapuram Kiran Reddy</div>
              <div className="founder-divider" />
              <p className="founder-bio">Driven by a deep commitment to holistic development, Kiran Reddy co-founded Nalanda to bridge the gap between traditional academics and real-world readiness. His leadership ensures the school continuously raises the bar for learning outcomes and student wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section" id="location">
        <div className="wrap">
          <div className="location-hdr sr">
            <div className="eyebrow eyebrow-c">Our Campus</div>
            <h2 className="sec-title" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 14px' }}>Visit Nalanda<br /><em>High School</em></h2>
            <p className="sec-body" style={{ textAlign: 'center', margin: '0 auto' }}>Conveniently located and served by our own fleet of school buses - Nalanda is always within reach.</p>
          </div>
          <div className="location-layout">
            <div className="map-card sr">
              <div className="map-frame">
                <iframe
                  src={mapsEmbedLink}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nalanda High School location map"
                />
                <div className="map-ui">
                  <div className="map-badge">Google Maps</div>
                  <a href={mapsLink} target="_blank" rel="noreferrer" className="map-open-btn">Open Directions</a>
                </div>
              </div>
              <div className="map-foot">
                <span className="map-foot-label">Nalanda High School - Andhra Pradesh, India</span>
                <a href={mapsLink} target="_blank" rel="noreferrer" className="map-foot-link">View Larger Map</a>
              </div>

            </div>
            <div className="sr d2">
              <div className="location-info">
                <div className="loc-item">
                  <div className="loc-ico">LOC</div>
                  <div>
                    <div className="loc-label">Address</div>
                    <div className="loc-val">Nalanda High School<br />Andhra Pradesh, India<br /><a href={mapsLink} target="_blank" rel="noreferrer" style={{ color: 'var(--g2)', fontSize: '.78rem', fontStyle: 'italic' }}>Open exact school location in Google Maps</a></div>
                  </div>
                </div>
                <div className="loc-item">
                  <div className="loc-ico">WA</div>
                  <div>
                    <div className="loc-label">WhatsApp</div>
                    <div className="loc-val">
                      <a href={whatsappLink} target="_blank" rel="noreferrer">+91 {whatsappNumber}</a>
                    </div>
                  </div>
                </div>
                <div className="loc-item">
                  <div className="loc-ico">MAIL</div>
                  <div>
                    <div className="loc-label">Email</div>
                    <div className="loc-val"><a href="mailto:nalandahighschool@gmail.com">nalandahighschool@gmail.com</a></div>
                  </div>
                </div>
                <div className="loc-item">
                  <div className="loc-ico">BUS</div>
                  <div>
                    <div className="loc-label">Transport</div>
                    <div className="loc-val">School bus service available across surrounding villages and towns. Contact the office for routes &amp; timings.</div>
                  </div>
                </div>
                <div className="loc-item">
                  <div className="loc-ico">HRS</div>
                  <div>
                    <div className="loc-label">School Hours</div>
                    <div className="loc-val">Mon - Sat: 8:30 AM - 4:30 PM<br />Office: 9:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS / NEWS */}
      <section className="section section-bg" id="life-events">
        <div className="wrap">
          <div className="sr" style={{ textAlign: 'center' }}>
            <div className="eyebrow eyebrow-c">School Life</div>
            <h2 className="sec-title" style={{ maxWidth: '520px', margin: '0 auto 14px' }}>What's Happening at<br /><em>Nalanda High School</em></h2>
          </div>
          <div className="events-grid">
            {schoolEvents.map((ev, i) => (
              <div key={i} className={`ev-card sr ${ev.delay}`}>
                <div className="ev-img">
                  <img src={ev.img} alt={ev.title} />
                  <span className="ev-tag">{ev.tag}</span>
                </div>
                <div className="ev-body">
                  <div className="ev-title">{ev.title}</div>
                  <div className="ev-desc">{ev.desc}</div>
                  <a href="#contact" className="readmore">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="test-sec">
        <div className="test-inner">
          <div className="eyebrow eyebrow-lt eyebrow-c sr">Parent Testimonials</div>
          <h2 className="sec-title sec-title-w sr d1">Voices from the<br /><em style={{ color: '#86efac' }}>Nalanda Family</em></h2>
          <div className="tslider">
            {testimonials.map((t, i) => (
              <div key={i} className={`tslide${testIndex === i ? ' on' : ''}`}>
                <div className="tq">"</div>
                <p className="t-text">{t.text}</p>
                <div className="t-name">{t.name}</div>
                <div className="t-role">{t.role}</div>
              </div>
            ))}
          </div>
          <div className="tdots">
            {testimonials.map((_, i) => (
              <div key={i} className={`dot${testIndex === i ? ' on' : ''}`} onClick={() => setTestIndex(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="admit-sec" id="contact">
        <div className="admit-inner">
          <div className="admit-txt sr">
            <div className="eyebrow">Admissions Open 2025-26</div>
            <h2 className="sec-title">Give Your Child the<br /><em>Education They Deserve</em></h2>
            <p className="sec-body">Nalanda High School welcomes all children from Classes I to X. Our doors are open to every family in the community. Enrol today and take the first step toward a brighter future.</p>
            <div className="admit-btns" style={{ marginTop: '28px' }}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-green">WhatsApp Now</a>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="btn-green-out">Open School Location</a>
            </div>
            <div style={{ marginTop: '32px', padding: '20px', background: '#fff', border: '1px solid var(--bdr)', borderRadius: 'var(--r)' }}>
              <p style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px' }}>School Office</p>
              <p style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                Nalanda High School<br />
                Andhra Pradesh, India<br />
                <strong style={{ color: 'var(--navy)' }}>
                  <a href="mailto:nalandahighschool@gmail.com">nalandahighschool@gmail.com</a>
                </strong>
              </p>
            </div>
          </div>

          <form className="admit-form sr d2" onSubmit={handleEnquirySubmit}>
            <h3>Request Admission Information</h3>
            <div className="fgrp">
              <input type="text" placeholder="Parent / Guardian Name" value={enquiry.parentName} onChange={handleEnquiryChange('parentName')} />
              <input type="text" placeholder="Child's Name" value={enquiry.childName} onChange={handleEnquiryChange('childName')} />
              <input type="tel" placeholder="Phone Number" value={enquiry.phone} onChange={handleEnquiryChange('phone')} />
              <select value={enquiry.classApplying} onChange={handleEnquiryChange('classApplying')}>
                <option value="">Class Applying For</option>
                {['I','II','III','IV','V','VI','VII','VIII','IX','X'].map(c => (
                  <option key={c} value={`Class ${c}`}>Class {c}</option>
                ))}
              </select>
              <input type="text" placeholder="Village / Town" value={enquiry.village} onChange={handleEnquiryChange('village')} />
              <button type="submit">Submit Enquiry -&gt;</button>
              {formMessage ? <p className="form-msg">{formMessage}</p> : null}
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="fl-logo-row">
              <div className="logo-circle" style={{ width: '42px', height: '42px', fontSize: '1.05rem', overflow: 'hidden' }}>
                <img src="/images/logo.jpg" alt="NHS" width={42} height={42} style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div className="fl-name">Nalanda <span>High School</span></div>
                <div className="fl-sub">Andhra Pradesh - India</div>
              </div>
            </div>
            <p className="fl-desc">Inspired by the ancient seat of learning, Nalanda High School is dedicated to providing quality, inclusive education to every child - building futures rooted in values, knowledge, and confidence.</p>
            <div className="fl-affil">Co-founded by <strong>Ilapuram Namratha Reddy &amp; Ilapuram Kiran Reddy</strong></div>
            <div className="fl-socials">
              <a className="fl-soc" href="#">f</a>
              <a className="fl-soc" href="#">in</a>
              <a className="fl-soc" href="#">yt</a>
            </div>
          </div>

          <div className="fc">
            <h5>Quick Links</h5>
            <a href="#">Home</a>
            <a href="#about">About Us</a>
            <a href="#programmes">Academics</a>
            <a href="#life">Life at Nalanda</a>
            <a href="#founders">Co-Founders</a>
            <a href="#location">Our Campus</a>
            <a href="#contact">Admissions</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="fc">
            <h5>Contact</h5>
            <p><strong>School Office</strong><br />Nalanda High School<br />Andhra Pradesh, India</p>
            <p style={{ marginTop: '10px' }}><strong>WhatsApp</strong><br /><a href={whatsappLink} target="_blank" rel="noreferrer">+91 {whatsappNumber}</a></p>
            <p style={{ marginTop: '10px' }}><strong>Location</strong><br /><a href={mapsLink} target="_blank" rel="noreferrer">Open in Google Maps</a></p>
            <p style={{ marginTop: '10px' }}><strong>Email</strong><br /><a href="mailto:nalandahighschool@gmail.com">nalandahighschool@gmail.com</a></p>
          </div>

          <div className="fc">
            <h5>Classes Offered</h5>
            {['Class I - II (Primary)', 'Class III - V (Upper Primary)', 'Class VI - VIII (Middle)', 'Class IX - X (Secondary)'].map(c => (
              <a key={c} href="#contact">{c}</a>
            ))}
            <h5 style={{ marginTop: '20px' }}>Transport</h5>
            <a href="#contact">Bus Routes Available</a>
            <a href="#contact">Enquire for Details</a>
          </div>
        </div>
        <div className="footer-bot">
          <p>Copyright 2025 Nalanda High School. All rights reserved.</p>
          <p>500+ Students - Classes I to X - Andhra Pradesh, India</p>
        </div>
      </footer>
    </>
  );
}
