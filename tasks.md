# Complete ISRO Website Recreation - Official Sitemap Structure

## 🚀 Executive Summary
This document provides a complete blueprint to recreate the official ISRO website based on the actual sitemap from isro.gov.in, with modern antigravity scrolling effects, parallax animations, and immersive user experience.

---

## 📋 OFFICIAL ISRO WEBSITE STRUCTURE (from Sitemap)

### **1. ABOUT ISRO**
- **Profile** - Organization overview
- **Vision-Mission-Objectives** - Core purpose and goals
- **Citizen Charter** - Public service commitments
- **Organisational Structure** - Hierarchy and departments
- **DoS Centers/Units/Enterprises** - All ISRO facilities
- **Secretary, DoS/Chairman, ISRO** - Current leadership
- **Former Secretaries/Chairmen** - Historical leadership
- **Space Commission** - Governing body
- **Autonomous Bodies** - Related organizations
- **Genesis** - ISRO's origin story
- **Timeline** - Historical milestones
- **Who's Who** - Key personnel
- **Contact Us** - Communication channels

### **2. ACTIVITIES**
- **Missions Accomplished** - Complete mission history
- **Science** - Scientific research and discoveries
- **Launchers** - Rocket systems (PSLV, GSLV, LVM3, SSLV)
- **Spacecrafts** - Satellite systems
- **Payloads** - Instruments and equipment
- **Research & Development** - Innovation programs
- **Gaganyaan** - Human spaceflight program
- **Ground Segment Activities** - Ground stations and tracking
- **Promotion & Authorisation** - IN-SPACe activities
- **International Co-operation** - Global partnerships
- **Capacity Building** - Skill development
- **Training** - Professional development programs
- **Outreach** - Public engagement initiatives

### **3. SERVICES**
- **Launch Service** - Commercial launch offerings
- **Satellite: System, Bus, Sub-system, Testing** - Satellite development
- **Mission Support** - Technical assistance
- **Ground Systems Support** - Infrastructure services
- **Satellite Communication & Lease of Transponders** - Communication services
- **Space-based Earth Observation: Bhuvan & Bhoonidhi** - Remote sensing
- **Satellite Navigation Services** - NavIC/IRNSS
- **Meteorological & Oceanographic Satellite Data** - Weather data
- **Disaster Management: National & International** - Emergency response
- **Aerial Services & Digital Mapping** - Surveying services
- **North-East India Region Specific Applications** - Regional services
- **VEDAS Services** - Visualization of Earth observation Data
- **Transfer Orbit Service** - Orbital transfer capabilities
- **Satellite Aided Search & Rescue** - Emergency location services

### **4. PROGRAMMES**
- **Sponsored Research** - Research grants
- **Academic Courses** - Educational programs
- **Outreach** - Community engagement
- **Technology Transfer** - Commercial tech licensing
- **UNNATI** - UNispace Nanosatellite Assembly & Training
- **Student Satellite** - Educational satellite program
- **Fellowships** - Research fellowships
- **VIKAS Scholarship** - Student scholarships
- **Summer Internship** - Student internships
- **YUVIKA** - Young Scientist Programme
- **ISRO Chair** - Academic chair positions
- **Space Tutor** - Educational platform
- **Space Merchandise** - Official ISRO products

### **5. RESOURCES**
- **Science Data** - Research datasets
- **Database for Emergency Management** - Disaster data
- **Info for Climate & Environment Studies** - Climate data
- **Forecast from NARL** - Atmospheric forecasts
- **Meteorology & Oceanographic Data** - Weather/ocean data
- **Mobile Apps** - ISRO mobile applications
- **NAVIC Time** - Satellite time service
- **Atlases: River Basin** - Geographic atlases
- **Atlases: Oceans, Moon, Mars** - Planetary atlases
- **School Bhuvan - NCERT** - Educational mapping tool
- **FEAST Tool** - Finite Element Analysis
- **Previous Question Papers** - Exam resources
- **Miscellaneous** - Other resources

### **6. GET INVOLVED**
- **Join ISRO** - Career opportunities
- **Visit ISRO** - Facility tours
- **Do a Project** - Project opportunities
- **FAQ** - Frequently asked questions
- **Training** - Training programs
- **Space on Wheels** - Mobile exhibition
- **Students** - Student programs
- **Academic Institutions** - University partnerships
- **Industry** - Industry collaboration
- **Ask an Expert** - Expert consultation
- **Feedback** - User feedback system

---

## 🎨 DESIGN SYSTEM

### **Color Palette**
```css
:root {
  /* Primary Colors */
  --space-black: #050505;
  --isro-blue: #1b3964; /* Official ISRO Blue */
  --isro-orange: #f37021; /* Saffron/Orange accent */
  
  /* Accent Colors */
  --tiranga-green: #138808;
  --starlight-white: #ffffff;
  --metallic-silver: #e0e0e0;
  
  /* Functional Colors */
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --border-color: rgba(255, 255, 255, 0.15);
  --overlay: rgba(0, 0, 0, 0.7);
}
```

### **Typography**
```css
/* Primary Font: 'Rajdhani' for tech/futuristic feel, 'Inter' for clean UI */
h1 { font-family: 'Rajdhani', sans-serif; font-size: 4.5rem; font-weight: 700; text-transform: uppercase; }
h2 { font-family: 'Rajdhani', sans-serif; font-size: 3rem; font-weight: 600; }
body { font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.6; }
```

---

## 🏗️ KEY PAGES TO BUILD

### **1. HOME PAGE (/)**

#### **Hero Section**
```html
<section class="hero-fullscreen">
  <video autoplay muted loop playsinline>
    <source src="chandrayaan3-landing.mp4" type="video/mp4">
  </video>
  <div class="hero-content">
    <div class="badge">MISSION SUCCESS</div>
    <h1>CHANDRAYAAN-3</h1>
    <h2>INDIA ON THE MOON</h2>
    <p>Space Technology in the Service of Humankind</p>
    <button class="cta-button">EXPLORE MISSION</button>
  </div>
</section>
```

#### **Featured Sections**
- Latest Mission Highlights
- Upcoming Launches
- Recent Achievements
- Quick Links to Services

---

### **2. LAUNCHERS PAGE (/launchers)**

#### **Launch Vehicles**

**LVM3 (Launch Vehicle Mark-3)**
- **Nickname**: "The Bahubali"
- **Height**: 43.5 m
- **Payload to LEO**: 8,000 kg
- **Payload to GTO**: 4,000 kg
- **Stages**: 3 (S200 solid boosters, L110 liquid core, C25 cryogenic upper)
- **Notable Missions**: Chandrayaan-3, Gaganyaan (upcoming)

**PSLV (Polar Satellite Launch Vehicle)**
- **Nickname**: "The Workhorse"
- **Height**: 44 m
- **Payload to SSO**: 1,750 kg
- **Stages**: 4 (alternating solid-liquid)
- **Record**: 104 satellites in one launch (2017)
- **Success Rate**: 95%+

**GSLV (Geosynchronous Satellite Launch Vehicle)**
- **Height**: 49.13 m
- **Payload to GTO**: 2,500 kg
- **Stages**: 3 (solid, liquid, cryogenic)
- **Indigenous Cryogenic Engine**: CE-7.5

**SSLV (Small Satellite Launch Vehicle)**
- **Purpose**: Rapid launch, low cost
- **Height**: 34 m
- **Payload to LEO**: 500 kg
- **Turnaround Time**: 72 hours
- **Target**: Commercial small satellite market

---

### **3. MISSIONS PAGE (/missions)**

#### **Chandrayaan Series (Moon Exploration)**
- **Chandrayaan-1 (2008)**: Discovered water molecules on Moon
- **Chandrayaan-2 (2019)**: Orbiter still operational, lander attempted soft landing
- **Chandrayaan-3 (2023)**: First to land on lunar South Pole

#### **Mangalyaan (Mars Orbiter Mission - 2013)**
- First Asian nation to reach Mars orbit
- First nation to succeed on maiden attempt
- Cost: ₹450 crore (less than Hollywood movie "Gravity")

#### **Aditya-L1 (2023)**
- India's first solar observatory
- Positioned at Lagrange Point L1
- Studies solar corona, solar winds, space weather

#### **Gaganyaan (Upcoming)**
- India's first human spaceflight program
- 3 astronauts to 400 km orbit for 3 days
- Test missions: TV-D1, TV-D2, G1 (uncrewed), H1 (crewed)

#### **Other Notable Missions**
- **ASTROSAT**: India's first space observatory
- **RISAT**: Radar imaging satellites
- **CARTOSAT**: High-resolution Earth imaging
- **GSAT Series**: Communication satellites
- **NAVIC/IRNSS**: Regional navigation system

---

### **4. GAGANYAAN PAGE (/gaganyaan)**

#### **Mission Overview**
- **Objective**: Demonstrate human spaceflight capability
- **Crew**: 3 astronauts (Vyomanauts)
- **Orbit**: 400 km Low Earth Orbit
- **Duration**: 3 days
- **Launch Vehicle**: LVM3

#### **Key Components**
- **Orbital Module**: Crew living space
- **Service Module**: Life support and propulsion
- **Crew Escape System**: Emergency abort capability
- **Crew Module**: Re-entry capsule

#### **Test Missions**
1. **TV-D1**: Test Vehicle Abort Mission (Completed)
2. **TV-D2**: In-flight abort demonstration
3. **G1**: First uncrewed orbital flight
4. **G2**: Second uncrewed flight
5. **H1**: First crewed mission (2026-2027)

#### **Astronaut Training**
- Selected 4 astronauts (Indian Air Force pilots)
- Training in Russia (Gagarin Cosmonaut Training Center)
- Vyommitra: Humanoid robot for test flights

---

### **5. SERVICES PAGE (/services)**

#### **Commercial Services**
- Launch services through NSIL
- Satellite manufacturing and testing
- Ground station support
- Transponder leasing
- Earth observation data (Bhuvan, Bhoonidhi)
- NavIC navigation services
- Disaster management support

---

### **6. CENTRES PAGE (/centres)**

#### **Major ISRO Centers**
- **VSSC** (Vikram Sarabhai Space Centre) - Thiruvananthapuram - Launch vehicles
- **URSC** (U R Rao Satellite Centre) - Bengaluru - Satellites
- **SDSC SHAR** (Satish Dhawan Space Centre) - Sriharikota - Launch site
- **LPSC** (Liquid Propulsion Systems Centre) - Valiamala - Propulsion
- **IIRS** (Indian Institute of Remote Sensing) - Dehradun - Training
- **NRSC** (National Remote Sensing Centre) - Hyderabad - Remote sensing
- **SAC** (Space Applications Centre) - Ahmedabad - Applications
- **ISTRAC** (ISRO Telemetry, Tracking and Command Network) - Bengaluru - Tracking

---

## ⚡ ANTIGRAVITY SCROLL EFFECTS

### **Effect 1: Floating Elements**
```javascript
gsap.utils.toArray('.float-up').forEach(element => {
  gsap.fromTo(element, 
    { y: 100, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
      scrollTrigger: {
        trigger: element, start: 'top 80%', end: 'top 20%', scrub: 1
      }
    }
  );
});
```

### **Effect 2: Parallax Backgrounds**
```javascript
gsap.utils.toArray('.parallax-bg').forEach(bg => {
  gsap.to(bg, {
    yPercent: -30, ease: 'none',
    scrollTrigger: {
      trigger: bg, start: 'top bottom', end: 'bottom top', scrub: true
    }
  });
});
```

### **Effect 3: 3D Card Tilt**
```javascript
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((centerX - x) / centerX) * -10;
    
    gsap.to(card, {
      duration: 0.5, rotateX, rotateY,
      transformPerspective: 1000, ease: 'power2.out'
    });
  });
});
```

### **Effect 4: Stats Counter**
```javascript
gsap.utils.toArray('.stat-item').forEach(stat => {
  const numberEl = stat.querySelector('.number');
  const target = parseInt(stat.getAttribute('data-count'));
  
  ScrollTrigger.create({
    trigger: stat, start: 'top 80%', once: true,
    onEnter: () => {
      gsap.to(numberEl, {
        innerHTML: target, duration: 2,
        snap: { innerHTML: 1 }, ease: "power1.out"
      });
    }
  });
});
```

---

## 📊 KEY STATISTICS (for Homepage)

- **124** Spacecraft Missions
- **95** Launch Missions
- **432** Foreign Satellites Launched
- **34** Countries Served
- **50+** Years of Space Excellence
- **104** Satellites in Single Launch (World Record)

---

## 🎯 NAVIGATION STRUCTURE

```
Home
├── About
│   ├── Profile
│   ├── Vision & Mission
│   ├── Leadership
│   ├── Timeline
│   └── Contact
├── Activities
│   ├── Missions
│   ├── Launchers
│   ├── Spacecrafts
│   ├── Gaganyaan
│   └── Science
├── Services
│   ├── Launch Services
│   ├── Satellite Services
│   ├── Earth Observation
│   └── Navigation (NavIC)
├── Programmes
│   ├── YUVIKA
│   ├── Student Satellite
│   ├── Fellowships
│   └── Technology Transfer
├── Resources
│   ├── Science Data
│   ├── Mobile Apps
│   ├── Bhuvan
│   └── Atlases
└── Get Involved
    ├── Careers
    ├── Visit ISRO
    ├── Training
    └── FAQ
```

---

## 🚀 TAGLINE
**"Space Technology in the Service of Humankind"**

---

This comprehensive structure is based on the official ISRO sitemap and provides a complete blueprint for recreating the website with modern design and interactions.