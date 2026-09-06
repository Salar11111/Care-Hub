import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Flower2,
  Ribbon,
  Sparkles,
  Ear,
  Stethoscope,
  Eye,
  Dna,
  Pill,
  Ambulance,
  Microscope,
  PersonStanding,
  Smile,
  type LucideProps,
} from "lucide-react";

export type IconComponent = React.ComponentType<LucideProps>;

export interface Department {
  slug: string;
  name: string;
  icon: IconComponent;
  tagline: string;
  description: string;
  services: string[];
  color: string;
  featured?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  department: string;
  specialty: string;
  initials: string;
  avatarClass: string;
  yearsExperience: number;
  rating: number;
  reviews: number;
  availability: string[];
  bio: string;
}

export interface Testimonial {
  id: string;
  author: string;
  initials: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const departments: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: HeartPulse,
    tagline: "Heart and vascular care with compassion",
    description:
      "From routine check-ups to advanced interventional procedures, our cardiology team keeps your heart strong through every stage of life. We pair precise diagnostics with warm, unhurried consultation.",
    services: ["Preventive screenings", "Echocardiography", "Heart surgery consultation", "Cardiac rehabilitation"],
    color: "text-rose-600 bg-rose-50 dark:bg-rose-950/40",
    featured: true,
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: Brain,
    tagline: "Expert care for brain and nervous system",
    description:
      "Our neurologists treat everything from migraines to complex conditions, taking time to explain every finding in plain, kind language so you always know what comes next.",
    services: ["Stroke care", "Epilepsy management", "Memory clinic", "Nerve & muscle disorders"],
    color: "text-violet-600 bg-violet-50 dark:bg-violet-950/40",
    featured: true,
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    icon: Bone,
    tagline: "Move freely again, at any age",
    description:
      "Joints, bones, and mobility — restored with modern techniques and a gentle approach. From sports injuries to joint replacement, we get you moving again with confidence.",
    services: ["Joint replacement", "Sports medicine", "Physiotherapy", "Spine & back care"],
    color: "text-amber-600 bg-amber-50 dark:bg-amber-950/40",
    featured: true,
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    icon: Baby,
    tagline: "Gentle care for your little ones",
    description:
      "We care for children from birth through adolescence with a child-friendly environment, patient explanations, and clinicians trained to make every visit feel safe and warm.",
    services: ["Well-child checkups", "Vaccinations", "Newborn care", "Child development"],
    color: "text-sky-600 bg-sky-50 dark:bg-sky-950/40",
    featured: true,
  },
  {
    slug: "maternity",
    name: "Maternity & Women's Health",
    icon: Flower2,
    tagline: "A birthing experience that feels like home",
    description:
      "Full-spectrum care for mothers — from prenatal visits to delivery and beyond. Our maternity ward is designed to feel less like a hospital and more like a sanctuary.",
    services: ["Prenatal care", "Natural & supported births", "C-sections", "Postnatal support"],
    color: "text-pink-600 bg-pink-50 dark:bg-pink-950/40",
    featured: true,
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: Ribbon,
    tagline: "Stand by you from diagnosis to recovery",
    description:
      "A multidisciplinary team plans your treatment together — and explains it with patience and warmth. You are never just a chart number; you are a person we walk beside.",
    services: ["Chemotherapy", "Radiation therapy", "Screening programs", "Palliative support"],
    color: "text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950/40",
    featured: true,
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: Sparkles,
    tagline: "Healthy, glowing skin for everyone",
    description:
      "Medical and cosmetic dermatology in one warm clinic. We treat skin, hair, and nail conditions with evidence-based care and honest advice.",
    services: ["Skin cancer screening", "Acne treatment", "Cosmetic procedures", "Allergy testing"],
    color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40",
  },
  {
    slug: "ent",
    name: "ENT & Audiology",
    icon: Ear,
    tagline: "Ears, nose, and throat — heard",
    description:
      "From a child's first hearing test to sinus surgery, our ENT team listens first and treats second. Hearing aids, voice care, and allergy clinics under one roof.",
    services: ["Hearing tests", "Sinus treatment", "Tonsil & adenoid care", "Balance disorders"],
    color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40",
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    icon: Dna,
    tagline: "Comfort for your digestive health",
    description:
      "Gentle, thorough care for the stomach and digestive system — including same-week endoscopy and nutrition-led treatment plans explained in plain language.",
    services: ["Endoscopy & colonoscopy", "Acid reflux care", "Irritable bowel support", "Liver & gallbladder"],
    color: "text-lime-600 bg-lime-50 dark:bg-lime-950/40",
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: Eye,
    tagline: "See life clearly again",
    description:
      "Complete eye care — from routine eye exams and glasses to advanced cataract and laser surgery, delivered by specialists who take their time with you.",
    services: ["Eye exams", "Cataract surgery", "Glaucoma care", "LASIK consultation"],
    color: "text-teal-600 bg-teal-50 dark:bg-teal-950/40",
  },
  {
    slug: "urorology",
    name: "Urology",
    icon: Stethoscope,
    tagline: "Confidential, caring urological care",
    description:
      "Urological health can feel sensitive — our team creates a safe, judgment-free space for men and women seeking treatment and answers.",
    services: ["Prostate care", "Kidney stones", "Bladder health", "Urological surgery"],
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/40",
  },
  {
    slug: "dentistry",
    name: "Dentistry",
    icon: Smile,
    tagline: "Smiles start here",
    description:
      "Family dentistry with a gentle touch — check-ups, fillings, whitening, and orthodontics in a calm, reassuring clinic designed for nervous patients.",
    services: ["Check-ups & cleanings", "Fillings & crowns", "Teeth whitening", "Orthodontics"],
    color: "text-orange-600 bg-orange-50 dark:bg-orange-950/40",
  },
  {
    slug: "psychiatry",
    name: "Psychiatry & Mental Health",
    icon: Pill,
    tagline: "Your mind matters, and so do you",
    description:
      "Talk therapy, medication management, and wellness programs — delivered without stigma, in complete confidence, and with genuine warmth.",
    services: ["Counseling & therapy", "Medication management", "Anxiety & depression", "Teen mental health"],
    color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    slug: "emergency",
    name: "Emergency & Trauma",
    icon: Ambulance,
    tagline: "24/7 care when every second counts",
    description:
      "Our emergency department is open around the clock with rapid triage, a dedicated trauma team, and warm, reassuring nurses who keep you informed at every step.",
    services: ["24/7 emergency", "Trauma care", "Ambulance service", "Urgent diagnostics"],
    color: "text-red-600 bg-red-50 dark:bg-red-950/40",
  },
  {
    slug: "radiology",
    name: "Radiology & Imaging",
    icon: Microscope,
    tagline: "Clear pictures, clearer answers",
    description:
      "Advanced imaging with results you can understand — X-ray, MRI, CT, and ultrasound all read by specialists who explain findings without the jargon.",
    services: ["MRI & CT scans", "X-ray", "Ultrasound", "Mammography"],
    color: "text-purple-600 bg-purple-50 dark:bg-purple-950/40",
  },
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    icon: PersonStanding,
    tagline: "Strength and mobility, rebuilt together",
    description:
      "One-on-one rehabilitation with certified physiotherapists — recovery plans built around your real life, not a generic checklist.",
    services: ["Rehabilitation", "Sports recovery", "Post-surgery therapy", "Chronic pain relief"],
    color: "text-green-600 bg-green-50 dark:bg-green-950/40",
  },
];

export const doctors: Doctor[] = [
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    department: "cardiology",
    specialty: "Interventional Cardiology",
    initials: "MC",
    avatarClass: "from-teal-500 to-cyan-600",
    yearsExperience: 18,
    rating: 4.9,
    reviews: 412,
    availability: ["Mon 9:00", "Tue 9:00", "Thu 14:00"],
    bio: "Dr. Chen specialises in minimally invasive heart procedures and believes every patient deserves a treatment plan explained in plain, warm language.",
  },
  {
    id: "amara-okafor",
    name: "Dr. Amara Okafor",
    department: "maternity",
    specialty: "Obstetrics & Gynecology",
    initials: "AO",
    avatarClass: "from-rose-500 to-pink-600",
    yearsExperience: 14,
    rating: 4.9,
    reviews: 388,
    availability: ["Wed 10:00", "Fri 9:30", "Sat 11:00"],
    bio: "A champion of gentle, personalized birthing experiences, Dr. Okafor has guided over 3,000 families through pregnancy and delivery.",
  },
  {
    id: "robert-kim",
    name: "Dr. Robert Kim",
    department: "oncology",
    specialty: "Medical Oncology",
    initials: "RK",
    avatarClass: "from-fuchsia-500 to-purple-600",
    yearsExperience: 21,
    rating: 4.8,
    reviews: 356,
    availability: ["Mon 14:00", "Wed 9:00", "Fri 11:00"],
    bio: "Dr. Kim is known for his unhurried consultations and for explaining complex oncology choices with patience, honesty, and genuine warmth.",
  },
  {
    id: "sofia-rossi",
    name: "Dr. Sofia Rossi",
    department: "pediatrics",
    specialty: "Pediatric Medicine",
    initials: "SR",
    avatarClass: "from-sky-500 to-blue-600",
    yearsExperience: 12,
    rating: 5.0,
    reviews: 431,
    availability: ["Tue 13:00", "Thu 10:00", "Fri 15:00"],
    bio: "Parents rave about Dr. Rossi's gentle bedside manner — she turns scary check-ups into storytime for even the shyest little patients.",
  },
  {
    id: "james-wright",
    name: "Dr. James Wright",
    department: "orthopedics",
    specialty: "Joint Replacement",
    initials: "JW",
    avatarClass: "from-amber-500 to-orange-600",
    yearsExperience: 16,
    rating: 4.8,
    reviews: 299,
    availability: ["Mon 11:00", "Tue 9:00", "Wed 14:00"],
    bio: "A former competitive athlete, Dr. Wright understands mobility from the inside out and designs recovery plans around your daily life.",
  },
  {
    id: "elena-varga",
    name: "Dr. Elena Varga",
    department: "neurology",
    specialty: "Neurology & Stroke Care",
    initials: "EV",
    avatarClass: "from-violet-500 to-indigo-600",
    yearsExperience: 19,
    rating: 4.9,
    reviews: 274,
    availability: ["Tue 10:00", "Thu 9:00", "Sat 9:00"],
    bio: "Dr. Varga leads our rapid-response stroke program and a memory clinic known for its patient-first, family-inclusive approach.",
  },
  {
    id: "david-mensah",
    name: "Dr. David Mensah",
    department: "emergency",
    specialty: "Emergency Medicine",
    initials: "DM",
    avatarClass: "from-red-500 to-rose-600",
    yearsExperience: 15,
    rating: 4.7,
    reviews: 512,
    availability: ["24/7", "24/7", "24/7"],
    bio: "Head of Emergency, Dr. Mensah keeps our trauma team calm, kind, and lightning-fast no matter what rolls through the doors.",
  },
  {
    id: "priya-sharma",
    name: "Dr. Priya Sharma",
    department: "dermatology",
    specialty: "Clinical & Cosmetic Dermatology",
    initials: "PS",
    avatarClass: "from-cyan-500 to-teal-600",
    yearsExperience: 11,
    rating: 4.8,
    reviews: 240,
    availability: ["Mon 13:00", "Wed 10:00", "Sat 10:00"],
    bio: "Dr. Sharma balances evidence-based medicine with an artist's eye — her patients leave with healthy skin and real confidence.",
  },
  {
    id: "liam-otoole",
    name: "Dr. Liam O'Toole",
    department: "gastroenterology",
    specialty: "Gastroenterology",
    initials: "LO",
    avatarClass: "from-lime-500 to-green-600",
    yearsExperience: 17,
    rating: 4.7,
    reviews: 218,
    availability: ["Tue 14:00", "Thu 11:00", "Fri 9:00"],
    bio: "Known for painless, same-week endoscopy and a knack for turning digestive anxiety into simple, actionable plans.",
  },
  {
    id: "hana-yamada",
    name: "Dr. Hana Yamada",
    department: "ophthalmology",
    specialty: "Cataract & Laser Surgery",
    initials: "HY",
    avatarClass: "from-teal-500 to-emerald-600",
    yearsExperience: 13,
    rating: 4.9,
    reviews: 265,
    availability: ["Mon 10:00", "Wed 13:00", "Fri 10:00"],
    bio: "Dr. Yamada has performed over 5,000 successful cataract surgeries and is beloved for her reassuring, minute-by-minute explanations.",
  },
  {
    id: "omar-al-farsi",
    name: "Dr. Omar Al-Farsi",
    department: "psychiatry",
    specialty: "Psychiatry & Therapy",
    initials: "OA",
    avatarClass: "from-emerald-500 to-teal-600",
    yearsExperience: 14,
    rating: 4.9,
    reviews: 197,
    availability: ["Mon 15:00", "Tue 11:00", "Thu 16:00"],
    bio: "A calm, non-judgmental presence, Dr. Al-Farsi combines therapy and careful medication management to support lasting wellbeing.",
  },
  {
    id: "isabella-nunez",
    name: "Dr. Isabella Nuñez",
    department: "physical-therapy",
    specialty: "Rehabilitation & Sports Recovery",
    initials: "IN",
    avatarClass: "from-green-500 to-emerald-600",
    yearsExperience: 9,
    rating: 4.9,
    reviews: 183,
    availability: ["Mon 8:30", "Tue 8:30", "Fri 12:00"],
    bio: "A former ballet dancer, Dr. Nuñez brings an infectious energy to recovery — patients leave stronger and genuinely optimistic.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Margaret Lane",
    initials: "ML",
    role: "Cardiology patient",
    quote:
      "They remembered my name, my worries, even my daughter's exam week. I never once felt like a chart number here — I felt cared for.",
    rating: 5,
  },
  {
    id: "t2",
    author: "The Okafor Family",
    initials: "TO",
    role: "Maternity ward",
    quote:
      "The maternity team held our hands through everything. Our son was born in a place that felt less like a hospital and more like a home.",
    rating: 5,
  },
  {
    id: "t3",
    author: "Robert Kim",
    initials: "RK",
    role: "Oncology follow-up",
    quote:
      "From diagnosis to recovery, every step was explained with patience and warmth. That is what empathetic care really means.",
    rating: 5,
  },
  {
    id: "t4",
    author: "Priya Nair",
    initials: "PN",
    role: "Pediatric patient's mother",
    quote:
      "My daughter used to cry at the thought of hospitals. Now she asks when we can visit Dr. Rossi again. That says everything.",
    rating: 5,
  },
  {
    id: "t5",
    author: "George Whitfield",
    initials: "GW",
    role: "Knee replacement",
    quote:
      "Six weeks after surgery I walked my dog around the park again. The physio team stayed with me the whole way — real people, real support.",
    rating: 5,
  },
  {
    id: "t6",
    author: "Amina Yusuf",
    initials: "AY",
    role: "Dermatology patient",
    quote:
      "For the first time a doctor listened for a full hour. My treatment plan fit my life, not the other way around.",
    rating: 5,
  },
];

export const faqs: Faq[] = [
  {
    id: "f1",
    category: "Appointments",
    question: "How do I book an appointment?",
    answer:
      "Use our online booking flow — pick a department, choose a doctor and time, and confirm with your details in under two minutes. You'll receive a confirmation reference you can keep in your browser. For help, call our front desk at (212) 400-8000.",
  },
  {
    id: "f2",
    category: "Appointments",
    question: "Can I change or cancel an appointment?",
    answer:
      "Yes. Contact the front desk at least 24 hours before your visit to reschedule at no charge. Same-day cancellations may incur a small fee.",
  },
  {
    id: "f3",
    category: "Appointments",
    question: "Do I need a referral to book a specialist?",
    answer:
      "Most departments accept direct bookings. For oncology and certain surgical specialties, we recommend an initial consultation with your primary doctor first so you arrive with the right preparation.",
  },
  {
    id: "f4",
    category: "Insurance",
    question: "Which insurance plans do you accept?",
    answer:
      "We accept most major plans including Medicare, Medicaid, and leading private insurers. Use the insurance checker on our Contact page or call us to confirm your coverage before your visit.",
  },
  {
    id: "f5",
    category: "Insurance",
    question: "What is my estimated out-of-pocket cost?",
    answer:
      "We provide transparent, upfront cost estimates before any procedure. Our billing team will review your coverage and confirm the exact amount before you commit to anything.",
  },
  {
    id: "f6",
    category: "Visits",
    question: "What should I bring to my first visit?",
    answer:
      "Bring a photo ID, your insurance card, a list of current medications, and any recent test results. Arrive 15 minutes early to complete registration.",
  },
  {
    id: "f7",
    category: "Visits",
    question: "Are walk-ins welcome?",
    answer:
      "Our Emergency department is open 24/7 for urgent needs. For routine care, appointments are preferred so we can protect unhurried time with you.",
  },
  {
    id: "f8",
    category: "Records & Privacy",
    question: "How do I access my medical records?",
    answer:
      "Request records through your patient portal or the front desk. In line with HIPAA, we release records promptly with your signed authorization — usually within 3 business days.",
  },
  {
    id: "f9",
    category: "Records & Privacy",
    question: "How is my health data protected?",
    answer:
      "We are HIPAA-compliant and SOC 2 validated. Your records are encrypted in transit and at rest, accessed only by clinicians involved in your care, and never sold or shared without consent.",
  },
  {
    id: "f10",
    category: "Emergency",
    question: "When should I go to the emergency department?",
    answer:
      "Chest pain, difficulty breathing, severe bleeding, stroke symptoms (F.A.S.T.), or any life-threatening situation — call 911 or come straight in. For anything less urgent, call us and we'll guide you.",
  },
];

export const stats = [
  { label: "Patient satisfaction", value: 98, suffix: "%", note: "based on our care surveys" },
  { label: "Years of care", value: 25, suffix: "+", note: "serving our community" },
  { label: "Specialists", value: 120, suffix: "+", note: "across 15 departments" },
  { label: "Patients cared for", value: 54, suffix: "k+", note: "and counting" },
];

export const featuredDepartments = departments.filter((d) => d.featured);