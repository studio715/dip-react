// ============================================================
//  DIP PROJECTS — Central Data Store
//  Update this file to change content across the entire site
// ============================================================

export const brand = {
    name: "Dip Projects",
    tagline: "Where Strategy Meets Execution",
    taglineSub: "Quality + Quantity, Delivered on Time",
    description:
      "At Dip Projects, we don’t just manage construction — we orchestrate success.",
    contact: {
      phone: "+91 98253 44040",
      email: "contact@diprojects.com",
      address: "407/A Trinity Business Park, , L. P. Savani Rd, Madhuvan Cir, Adajan, Surat, Gujarat 395009",
    },
    social: {
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
  };
  
  export const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "30+", label: "Years Experience" },
    { value: "150+", label: "Satisfied Clients" },
    { value: "50+", label: "Associates" },
  ];
  
  export const navLinks = [
    { label: "Home",     href: "#home" },
    { label: "About",    href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact" },
  ];
  
  export const toolMenus = [
    {
      id: "rate-analysis",
      label: "Rate Analysis",
      href: "https://script.google.com/macros/s/AKfycbwJzFqZxRUkgrBb1jdZUfnS9C8rWD9nU8jr3BSt2Pugbt8U-3Gfnf1W1kWRUG83E1xX/exec",
    },
    {
      id: "comparison",
      label: "Comparision",
      href: "#comparison-coming-soon",
    },
  ];

  export const portals = [
    {
      id: "client",
      title: "Client Portal",
      subtitle: "For Homeowners & Investors",
      description:
        "Track real-time project progress, payment schedules, approvals, and receive updates directly from your project manager.",
      href: "https://script.google.com/macros/s/AKfycbzj1gJhzE7jLH4Y80n4G7KuptmpF65n56k-XLp0CUEZssIyHfR4di71ZMC4kZweRxhi/exec",
      features: ["Live progress tracking", "Payment milestones", "Document vault", "Direct messaging"],
      accent: "#f47b20",
    },
    {
      id: "office",
      title: "Office Portal",
      subtitle: "For Management & Admin",
      description:
        "Manage operations, teams, approvals, billing, and the complete project pipeline from a unified dashboard.",
      href: "https://script.google.com/macros/s/AKfycbzy1Zhk4L04Y0LJM84VvPTI4tCn_IjBkMNYFwXB8JN-PZfueNjC731E-8Ohz0D109qz/exec",
      features: ["Team management", "Workflow approvals", "Financial overview", "Report generation"],
      accent: "#2a6496",
    },
    {
      id: "engineer",
      title: "Site Engineer Portal",
      subtitle: "For On-Site Engineers",
      description:
        "Upload daily reports, site photographs, construction progress, and coordinate with office in real time.",
      href: "https://script.google.com/macros/s/AKfycbz76SAsGFH8WZxj5FFVhCxMiWvPb8pq1uCX5j4Lg9qC46gC3Q9hYjWpdOWOCFBNQuQQzQ/exec",
      features: ["Daily log uploads", "Photo documentation", "Progress reports", "Issue flagging"],
      accent: "#1a7a4a",
    },
  ];
  
  export const services = [
    {
      id: "residential",
      title: "Residential Construction",
      foot_title: "Quality Audit",
      shortDesc: "Bespoke homes crafted for modern living with precision engineering.",
      description:
        "From luxury villas to compact urban homes, we handle every phase of residential construction — design coordination, structural engineering, finishing, and handover.",
      icon: "home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      highlights: ["Structural design & review", "Interior coordination", "Quality audits", "Timeline guarantees"],
    },
    {
      id: "commercial",
      title: "Commercial Buildings",
      foot_title: "Project Planning & Management",
      shortDesc: "High-performance commercial spaces built for business growth.",
      description:
        "Office complexes, retail spaces, and mixed-use developments — we deliver commercial projects on schedule without compromising safety or quality.",
      icon: "building",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      highlights: ["Space planning", "MEP coordination", "Compliance & permits", "Handover support"],
    },
    {
      id: "industrial",
      title: "Industrial Infrastructure",
      foot_title: "Project Co-ordination",
      shortDesc: "Robust industrial facilities engineered for durability and efficiency.",
      description:
        "Warehouses, factories, and processing facilities designed to withstand demanding operations while meeting all regulatory standards.",
      icon: "industry",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      highlights: ["Load-bearing design", "Safety compliance", "Utility integration", "Expansion readiness"],
    },
    {
      id: "management",
      title: "Project Management",
      foot_title: "Tender & Estimate Preparation",
      shortDesc: "End-to-end project oversight so nothing falls through the cracks.",
      description:
        "Our certified project managers use structured methodologies to keep your project within budget, on schedule, and aligned with quality benchmarks.",
      icon: "clipboard",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      highlights: ["Budget management", "Risk mitigation", "Vendor coordination", "Progress reporting"],
    },
    {
      id: "consultancy",
      title: "Civil Consultancy",
      foot_title: "Third Party Inspection",
      shortDesc: "Expert guidance from concept to completion for complex projects.",
      description:
        "Technical consultation, feasibility studies, soil investigation interpretation, and structural reviews — backed by over a decade of site experience.",
      icon: "tools",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      highlights: ["Feasibility studies", "Structural reviews", "Regulatory guidance", "Value engineering"],
    },
    {
      id: "renovation",
      title: "Renovation & Retrofitting",
      foot_title: "MEP Service Mgmt & Co –",
      shortDesc: "Transform existing structures with modern upgrades and smart retrofitting.",
      description:
        "We breathe new life into aging buildings through careful renovation, seismic retrofitting, facade upgrades, and interior modernisation.",
      icon: "wrench",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      highlights: ["Structural assessment", "Facade restoration", "Seismic strengthening", "Interior upgrade"],
    },
    {
      id: "mep",
      title: "MEP Service Management & Co-ordination",
      foot_title: "ordination",
      shortDesc: "Seamless mechanical, electrical, and plumbing coordination across all project phases.",
      description:
        "We manage and coordinate all MEP disciplines — mechanical, electrical, plumbing, and fire-fighting systems — ensuring conflict-free installation, regulatory compliance, and smooth handover across residential, commercial, and industrial projects.",
      icon: "tools",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      highlights: ["MEP design coordination", "Site supervision & inspections", "Vendor & contractor management", "Commissioning & handover support"],
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Silverleaf Residences",
      location: "Surat, Gujarat",
      category: "Residential",
      status: "Completed",
      year: 2024,
      area: "18,500 sq ft",
      description:
        "A premium residential complex of 12 luxury apartments with landscaped common areas and underground parking.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
      tags: ["Luxury", "Residential", "Completed"],
    },
    {
      id: 2,
      title: "Nexus Business Park",
      location: "Vadodara, Gujarat",
      category: "Commercial",
      status: "Completed",
      year: 2023,
      area: "42,000 sq ft",
      description:
        "A six-storey commercial hub featuring Grade-A office spaces, retail podium, and smart building infrastructure.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
      tags: ["Commercial", "Office", "Completed"],
    },
    {
      id: 3,
      title: "Tapi Industrial Hub",
      location: "Surat, Gujarat",
      category: "Industrial",
      status: "Completed",
      year: 2023,
      area: "65,000 sq ft",
      description:
        "Multi-unit industrial warehouse facility with heavy-load flooring, fire suppression, and 24x7 operational readiness.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      tags: ["Industrial", "Warehouse", "Completed"],
    },
    {
      id: 4,
      title: "Greenfield Villa Estate",
      location: "Navsari, Gujarat",
      category: "Residential",
      status: "Ongoing",
      year: 2025,
      area: "28,000 sq ft",
      description:
        "An eco-conscious villa project featuring rainwater harvesting, solar integration, and sustainable material specifications.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
      tags: ["Residential", "Eco", "Ongoing"],
    },
    {
      id: 5,
      title: "Meridian Corporate Tower",
      location: "Ahmedabad, Gujarat",
      category: "Commercial",
      status: "Ongoing",
      year: 2025,
      area: "80,000 sq ft",
      description:
        "High-rise corporate tower with curtain wall glazing, double-height lobby, and intelligent building management systems.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
      tags: ["Commercial", "High-rise", "Ongoing"],
    },
    {
      id: 6,
      title: "Rajhans Food Processing Plant",
      location: "Bharuch, Gujarat",
      category: "Industrial",
      status: "Completed",
      year: 2022,
      area: "35,000 sq ft",
      description:
        "Purpose-built food processing and cold storage facility meeting FSSAI and international hygiene standards.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80",
      tags: ["Industrial", "Food", "Completed"],
    },
  ];
  
  export const testimonials = [
    {
      id: 1,
      name: "Rajesh Mehta",
      role: "Director, Mehta Properties",
      quote:
        "Dip Projects delivered our commercial complex two weeks ahead of schedule. Their project management systems are genuinely world-class, and the quality of execution exceeded our expectations.",
      avatar: "RM",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Homeowner, Silverleaf Residences",
      quote:
        "The Client Portal kept me informed every single day without me having to call anyone. Transparency like this is rare in the construction industry. Absolutely outstanding.",
      avatar: "PS",
    },
    {
      id: 3,
      name: "Vikram Patel",
      role: "MD, Rajhans Agro Pvt Ltd",
      quote:
        "Our food processing plant was delivered on budget with zero compromises on compliance. The team's technical knowledge and dedication is unmatched in Gujarat.",
      avatar: "VP",
    },
  ];
  
  export const team = [
    {
      id: 1,
      name: "Mr. Jignesh Lad",
      role: "PROJECT HEAD",
      image: "/team/p1.png",
    },
    {
      id: 2,
      name: "Mr. Divyesh Rana",
      role: "PROJECT HEAD",
      image: "/team/p2.png",
    },
    {
      id: 3,
      name: "Mrs. Nidhi Patel",
      role: "HR",
      image: "/team/p3.png",
    },
    {
      id: 4,
      name: "Mr. Kishan Kalsariya",
      role: "OFFICE HEAD ENGINEERING DIVISION",
      image: "/team/p4.png",
    },
  ];
  
  export const faqs = [
    {
      q: "What types of projects does Dip Projects handle?",
      a: "We specialise in residential construction, commercial buildings, industrial infrastructure, civil consultancy, project management, and renovation work across Gujarat.",
    },
    {
      q: "How do I track my project progress?",
      a: "Every client gets access to our Client Portal — a real-time dashboard showing construction milestones, payment schedules, uploaded documents, and direct communication with your project manager.",
    },
    {
      q: "What areas do you operate in?",
      a: "We primarily operate across Gujarat, with active projects in Surat, Ahmedabad, Vadodara, Navsari, Bharuch, and surrounding districts.",
    },
    {
      q: "Do you provide end-to-end project management?",
      a: "Yes. We offer complete end-to-end services from feasibility study and design coordination to construction, quality audits, and final handover.",
    },
    {
      q: "How do I get a quote for my project?",
      a: "Contact us via the form on our website or call our office directly. We schedule a site visit and provide a detailed scope and cost estimate within 5 working days.",
    },
  ];

  export const reviewTemplates = {
    residential: [
      "Dip Projects handled our residential project professionally from planning to execution. Communication was clear and the work quality exceeded expectations.",
  
      "Very reliable PMC team. Regular updates, strong site supervision, and timely delivery made the entire process stress-free.",
  
      "The team ensured excellent quality control throughout our bungalow construction. We are extremely satisfied with the outcome.",
  
      "Our residential project was completed smoothly with proper planning, budgeting, and execution support from Dip Projects.",
  
      "Professional guidance and regular updates gave us confidence throughout the construction journey.",
  
      "The project was delivered with great attention to detail and strong quality standards. Highly recommended.",
  
      "Dip Projects helped us avoid delays and maintained excellent coordination between all contractors.",
  
      "Very transparent and responsive team. The entire process was managed professionally from start to finish."
    ],
  
    commercial: [
      "Excellent project management services. The team maintained transparency throughout the project and helped control costs effectively.",
  
      "We were impressed with the professionalism and technical knowledge of the Dip Projects team. Highly recommended for commercial projects.",
  
      "Outstanding project monitoring and reporting. We always knew the project status and upcoming activities.",
  
      "The project was completed smoothly and within the planned budget. Highly appreciate the team's professionalism.",
  
      "Strong coordination between consultants, contractors, and vendors ensured successful project delivery.",
  
      "The team's attention to detail and commitment to quality were evident from day one.",
  
      "Professional project planning and execution support helped us achieve our business objectives on time.",
  
      "Dip Projects demonstrated excellent leadership and project control throughout the commercial development."
    ],
  
    industrial: [
      "Dip Projects provided excellent coordination between consultants and contractors. The project was delivered on schedule.",
  
      "Outstanding attention to detail and strong project monitoring. Their expertise helped avoid delays and unnecessary expenses.",
  
      "Professional, transparent, and highly experienced. The project was executed efficiently and with great quality standards.",
  
      "The team demonstrated excellent technical expertise and project control. We are very satisfied with the outcome.",
  
      "Excellent management of industrial project activities with strong focus on safety and quality.",
  
      "The team maintained strict timelines and ensured smooth coordination between all stakeholders.",
  
      "A dependable PMC partner with deep understanding of industrial infrastructure requirements.",
  
      "Their systematic approach and technical expertise contributed significantly to project success."
    ]
  };