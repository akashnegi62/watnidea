/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Target,
  Layers,
  Zap,
  Search,
  FlaskConical,
  CheckCircle2,
  Star,
  ShieldCheck,
  Users,
  Brain,
  Video,
  Monitor,
  Cpu,
  Rocket,
  Activity,
  Globe,
  MessageSquare,
  Sparkles,
  LayoutGrid,
  Eye,
  Code,
  Heart,
  Share2,
  Wand2,
  Play,
} from "lucide-react";

export const SERVICES_DATA: any = {
  aura: {
    hero: {
      titlePrimary: "Identity with",
      titleSecondary: "Soul.",
      titleThird: "Strategy with",
      titleFourth: "Teeth.",
      description:
        "A logo isn't a brand; a feeling is. We build the 'Aura' that makes your business undeniable in a crowded market.",
      heroImage: "/Img/digital.webp",
    },
    about: {
      label: "AURA ARCHITECTURE",
      title: "Aura Architecture",
      highlight:
        "In an era of infinite scrolling, your brand needs more than just a name—it needs a presence. We combine market psychology with high-end minimalist design to create a 'Main Character' identity for your business.",
      subtext: "We don’t just make you look good; we make you look essential.",
      bgText: "AURA",
      aboutImage: "/Img/aura.jpeg",
      aboutFeatures: [
        { title: "Brand Identity Design", icon: LayoutGrid },
        { title: "Positioning & Messaging", icon: Target },
        { title: "Perception Strategy", icon: Eye },
      ],
    },
    included: [
      {
        title: "Visual DNA Design",
        icon: Target,
        desc: "Beyond the logo. We craft custom typography, unique color palettes, and a visual language.",
      },
      {
        title: "Brand Voice & Tone",
        icon: MessageSquare,
        desc: "We define how your brand speaks—whether it’s bold and disruptive or calm and premium.",
      },
      {
        title: "Competitive Positioning",
        icon: Zap,
        desc: "We find the white space in your industry and position your brand as the only logical choice.",
      },
      {
        title: "The Brand Bible",
        icon: ShieldCheck,
        desc: "A comprehensive digital guide ensuring your team maintains a consistent vibe across every platform.",
      },
    ],
    process: [
      {
        num: "01",
        title: "The Deep Dive",
        icon: Search,
        desc: "We strip your brand down to its 'Why' and identify its unique energy.",
      },
      {
        num: "02",
        title: "The Concept Lab",
        icon: FlaskConical,
        desc: "Our designers experiment with visual directions that disrupt the status quo.",
      },
      {
        num: "03",
        title: "The Synthesis",
        icon: Layers,
        desc: "Refining the winning concept into a polished, stress-tested identity.",
      },
      {
        num: "04",
        title: "The Handover",
        icon: CheckCircle2,
        desc: "A launch-ready brand kit designed to scale with your ambition.",
      },
    ],
    stats: [
      {
        value: "Immediate Market Authority",
        label: "",
        desc: "Move from 'newcomer' to 'industry leader' with a visual identity that commands respect and demands attention.",
      },
      {
        value: "3X Brand Recall",
        label: "",
        desc: "Be the first name customers remember through high-end minimalist design and deep psychological triggers.",
      },
      {
        value: "Deep Customer Trust",
        label: "",
        desc: "Create an instant emotional bond that makes price-shopping irrelevant for your target audience.",
      },
      {
        value: "Future Proof Foundations",
        label: "",
        desc: "Receive a Brand Bible that ensures your identity stays consistent as you scale from lakhs to crores.",
      },
    ],
  },

  hype: {
    hero: {
      titlePrimary: "Engineered for",
      titleSecondary: "Velocity.",
      titleThird: "Data for",
      titleFourth: "Growth.",
      description:
        "Traditional marketing is dead. We build 'Hype Engines' that turn passive viewers into aggressive brand advocates.",
      heroImage: "/Img/growth.webp",
    },
    about: {
      label: "THE HYPE ENGINE",
      title: "Hype Engine",
      highlight:
        "The Hype Engine is a data-driven viral framework. We don't just 'post'—we engineer cultural moments that capture attention and convert it into pure brand authority.",
      subtext:
        "We don't chase trends; we engineer the mechanics that start them.",
      bgText: "HYPE",
      aboutImage: "/Img/hype.webp",
      aboutFeatures: [
        { title: "Viral Mechanics", icon: Sparkles },
        { title: "Growth Hacking", icon: Rocket },
        { title: "Trend Authority", icon: Zap },
      ],
    },
    included: [
      {
        title: "Viral Mechanics",
        icon: Sparkles,
        desc: "Designing shareable moments that trigger algorithmic amplification across social stacks.",
      },
      {
        title: "Data-Driven Strategy",
        icon: Cpu,
        desc: "Using real-time analytics to protect the art and ensure every piece of content delivers ROI.",
      },
      {
        title: "Influencer Loops",
        icon: Users,
        desc: "Building organic networks that amplify your message without the artificial 'ad' feel.",
      },
      {
        title: "Trend Arbitrage",
        icon: Activity,
        desc: "Identifying cultural shifts before they happen to position your brand as a pioneer.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Trend Mining",
        icon: Search,
        desc: "Identifying cultural gaps where your brand can insert itself with maximum impact.",
      },
      {
        num: "02",
        title: "Creative Sprints",
        icon: Zap,
        desc: "Rapid prototyping of high-impact content and psychological social hooks.",
      },
      {
        num: "03",
        title: "Deployment",
        icon: Rocket,
        desc: "Multi-channel launch with surgical precision and timing to trigger the 'Echo' effect.",
      },
      {
        num: "04",
        title: "Scaling",
        icon: Activity,
        desc: "Doubling down on what works to create a self-sustaining hype cycle.",
      },
    ],
    stats: [
      {
        value: "Massive Market Velocity",
        label: "",
        desc: "Turn passive observers into active brand advocates through engineered viral mechanics at scale.",
      },
      {
        value: "450% Average ROI",
        label: "",
        desc: "Direct-to-conversion frameworks that ensure every viral moment delivers measurable business growth.",
      },
      {
        value: "Always-On Intelligence",
        label: "",
        desc: "Real-time trend monitoring to keep your brand at the absolute center of cultural conversations.",
      },
      {
        value: "Top 1% Engagement",
        label: "",
        desc: "Beating the algorithm through deep psychological hooks that demand attention and action.",
      },
    ],
  },

  kinetic: {
    hero: {
      titlePrimary: "Motion that",
      titleSecondary: "Commands.",
      titleThird: "Design that",
      titleFourth: "Breathes.",
      description:
        "Static is boring. We bring your brand to life with high-end motion graphics and interactive web experiences that demand focus.",
      heroImage: "/Img/kinetic.webp",
    },
    about: {
      label: "KINETIC STUDIO",
      title: "Kinetic Studio",
      highlight:
        "Movement captures the eye 4x faster than static images. We use physics-based animation to tell deeper stories and create interfaces that feel alive.",
      subtext:
        "If it doesn't move, it's not alive. We give your brand a heartbeat.",
      bgText: "MOVE",
      aboutImage: "/Img/echo.webp",
      aboutFeatures: [
        { title: "UI Animation", icon: Monitor },
        { title: "GSAP Mastery", icon: Activity },
        { title: "Physics Logic", icon: Play },
      ],
    },
    included: [
      {
        title: "UI Animation",
        icon: Monitor,
        desc: "Seamless transitions and micro-interactions for modern web applications.",
      },
      {
        title: "GSAP Masterclass",
        icon: Activity,
        desc: "Performance-optimized scroll triggers and complex timeline animations for the web.",
      },
      {
        title: "Brand Motion",
        icon: Sparkles,
        desc: "Logo reveals and kinetic typography that leave a lasting impression in seconds.",
      },
      {
        title: "Interactive Canvas",
        icon: Globe,
        desc: "Web GL and specialized rendering for high-performance visual storytelling.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Storyboarding",
        icon: Layers,
        desc: "Mapping out the motion journey and physics before a single frame is animated.",
      },
      {
        num: "02",
        title: "Motion Design",
        icon: Activity,
        desc: "Crafting the easing, timing, and atmospheric lighting of every movement.",
      },
      {
        num: "03",
        title: "Refining",
        icon: FlaskConical,
        desc: "Polishing every detail to ensure silk-smooth performance across all modern devices.",
      },
      {
        num: "04",
        title: "Export",
        icon: Rocket,
        desc: "Lottie, high-res video, or optimized code assets ready for production deployment.",
      },
    ],
    stats: [
      {
        value: "60FPS Visual Fluidity",
        label: "",
        desc: "Cinema-grade motion that makes your digital interface feel alive, breathing, and impossibly smooth.",
      },
      {
        value: "Instant Interactive Focus",
        label: "",
        desc: "Response times optimized to capture the human eye 4X faster than static images.",
      },
      {
        value: "Ultra-Light Performance",
        label: "",
        desc: "High-impact motion design optimized to load instantly on any device, anywhere in the world.",
      },
      {
        value: "Irresistible First Impressions",
        label: "",
        desc: "Leave a lasting cognitive mark within the first 3 seconds of a user landing on your page.",
      },
    ],
  },

  digital: {
    hero: {
      titlePrimary: "Products for",
      titleSecondary: "Humans.",
      titleThird: "Code for",
      titleFourth: "Legacy.",
      description:
        "We build digital headquarters that work as hard as you do. High-performance apps with aesthetic utility and strategic edge.",
      heroImage: "/Img/digital.webp",
    },
    about: {
      label: "THE DIGITAL HQ",
      title: "Digital HQ",
      highlight:
        "Your website isn't a brochure; it's your most important employee. We build full-stack solutions with Next.js that prioritize speed and aesthetic power.",
      subtext: "Aesthetics meet performance. We don't compromise on either.",
      bgText: "CODE",
      aboutImage: "/Img/growth.webp",
      aboutFeatures: [
        { title: "Full-Stack Ops", icon: Cpu },
        { title: "Scalable Code", icon: Code },
        { title: "SEO Authority", icon: Globe },
      ],
    },
    included: [
      {
        title: "Next.js Mastery",
        icon: Globe,
        desc: "Leveraging Turbopack and Server Components for instant load times and perfect SEO scores.",
      },
      {
        title: "Aesthetic UI",
        icon: Star,
        desc: "Interfaces that look like high-end art but function with surgical, data-driven precision.",
      },
      {
        title: "Scalable Infra",
        icon: Cpu,
        desc: "Cloud-native backend systems designed to handle millions of requests without breaking.",
      },
      {
        title: "Security First",
        icon: ShieldCheck,
        desc: "Hardened digital environments that protect your brand data and user privacy.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery",
        icon: Brain,
        desc: "Defining user personas and mapping complex functional requirements to brand goals.",
      },
      {
        num: "02",
        title: "Architecture",
        icon: Layers,
        desc: "Designing a data structure that protects both the artistic vision and raw performance.",
      },
      {
        num: "03",
        title: "Development",
        icon: Zap,
        desc: "Clean, documented code built for long-term maintainability and future scaling.",
      },
      {
        num: "04",
        title: "Launch",
        icon: Rocket,
        desc: "Rigorous stress testing and deployment to global edge networks for speed.",
      },
    ],
    stats: [
      {
        value: "100/100 Speed Scores",
        label: "",
        desc: "Perfect technical foundations that delight both your users and search engine algorithms.",
      },
      {
        value: "Zero Friction Experience",
        label: "",
        desc: "Sub-second load times designed to eliminate bounce rates and maximize conversion potential.",
      },
      {
        value: "99.9% Enterprise Stability",
        label: "",
        desc: "Bulletproof cloud infrastructure designed to scale effortlessly from thousands to millions.",
      },
      {
        value: "Clean Legacy Code",
        label: "",
        desc: "A modular, documented codebase built to remain scalable and maintainable for years to come.",
      },
    ],
  },

  synthetic: {
    hero: {
      titlePrimary: "Cinematic",
      titleSecondary: "AI.",
      titleThird: "Future",
      titleFourth: "Vision.",
      description:
        "The line between real and synthetic is gone. We create high-fidelity cinematic video and CGI using next-gen AI workflows.",
      heroImage: "/Img/aura.jpeg",
    },
    about: {
      label: "SYNTHETIC CINEMA",
      title: "Synthetic Cinema",
      highlight:
        "Hollywood-grade visuals at a fraction of the cost. We use neural rendering to create moody, cinematic content that was once impossible for startups.",
      subtext:
        "Imagine anything. We'll render it in 4K with high-contrast, moody lighting.",
      bgText: "FILM",
      aboutImage: "/Img/synthetic.webp",
      aboutFeatures: [
        { title: "Neural Rendering", icon: Wand2 },
        { title: "AI Composition", icon: Video },
        { title: "Future CGI", icon: Sparkles },
      ],
    },
    included: [
      {
        title: "AI Video",
        icon: Video,
        desc: "Stable Video Diffusion and custom training for hyper-consistent brand visuals.",
      },
      {
        title: "CGI Environments",
        icon: Globe,
        desc: "Futuristic landscapes and product mockups with neon lighting and high-contrast depth.",
      },
      {
        title: "Cinematic Editing",
        icon: Layers,
        desc: "Mood-focused post-production that turns AI clips into storytelling masterpieces.",
      },
      {
        title: "Concept Art",
        icon: Wand2,
        desc: "Rapid visualization of complex brand worlds using generative neural networks.",
      },
    ],
    process: [
      {
        num: "01",
        title: "World Building",
        icon: Brain,
        desc: "Defining the visual rules, lighting style, and moody thematic elements of the film.",
      },
      {
        num: "02",
        title: "Prompting",
        icon: Sparkles,
        desc: "Using advanced neural workflows to generate initial raw high-fidelity cinematic assets.",
      },
      {
        num: "03",
        title: "Post-Production",
        icon: FlaskConical,
        desc: "Color grading and custom sound design to achieve a true professional cinema feel.",
      },
      {
        num: "04",
        title: "Mastering",
        icon: CheckCircle2,
        desc: "Final 4K export ready for web, immersive displays, or large-scale digital social ads.",
      },
    ],
    stats: [
      {
        value: "4K Neural Fidelity",
        label: "",
        desc: "Hollywood-grade cinematic visuals rendered through advanced, next-gen AI-driven workflows.",
      },
      {
        value: "80% Production Savings",
        label: "",
        desc: "Achieve high-fidelity CGI and complex world-building at a fraction of traditional production costs.",
      },
      {
        value: "Moody Cinematic Lighting",
        label: "",
        desc: "Deep atmospheric visuals with neon accents and high-contrast depth that demand focus.",
      },
      {
        value: "Next-Gen AI Workflows",
        label: "",
        desc: "Leveraging the bleeding edge of Stable Diffusion and CGI to render the once impossible.",
      },
    ],
  },

  echo: {
    hero: {
      titlePrimary: "Community",
      titleSecondary: "Echo.",
      titleThird: "Social",
      titleFourth: "Gravity.",
      description:
        "Stop shouting into the void. We build ecosystems where your brand's voice resonates and amplifies through your users.",
      heroImage: "/Img/growth.webp",
    },
    about: {
      label: "THE ECHO SYSTEM",
      title: "Echo System",
      highlight:
        "An Echo System is a self-sustaining community. We help you move from 'talking at' people to 'talking with' a tribe that builds the brand for you.",
      subtext: "We create the spark; the community creates the fire.",
      bgText: "ECHO",
      aboutImage: "/Img/echo.webp",
      aboutFeatures: [
        { title: "Tribe Building", icon: Users },
        { title: "Viral Resonance", icon: Share2 },
        { title: "Heart Logic", icon: Heart },
      ],
    },
    included: [
      {
        title: "Community Design",
        icon: Users,
        desc: "Building specialized Discord or private forums where your most loyal tribe lives.",
      },
      {
        title: "Content Strategy",
        icon: MessageSquare,
        desc: "A narrative loop that keeps your community engaged and talking day after day.",
      },
      {
        title: "Loyalty Engines",
        icon: Star,
        desc: "Gamification and unique rewards that turn standard customers into lifelong advocates.",
      },
      {
        title: "Sentiment Maps",
        icon: Activity,
        desc: "Monitoring the 'vibe' of your community to adjust brand direction in real-time.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Tribe Scouting",
        icon: Search,
        desc: "Finding where your most passionate potential advocates currently congregate.",
      },
      {
        num: "02",
        title: "Space Design",
        icon: Layers,
        desc: "Building the high-end digital 'home' for your community to connect and grow.",
      },
      {
        num: "03",
        title: "Engagement",
        icon: Activity,
        desc: "Seeding the first conversations and establishing the unique community energy.",
      },
      {
        num: "04",
        title: "Autonomy",
        icon: ShieldCheck,
        desc: "Transitioning to a self-managed tribe system that scales organically without you.",
      },
    ],
    stats: [
      {
        value: "90% Community Retention",
        label: "",
        desc: "Build a self-sustaining tribe that stays loyal to your brand identity for the long term.",
      },
      {
        value: "Organic Social Gravity",
        label: "",
        desc: "Move from 'chasing leads' to building an ecosystem that pulls your target audience toward you.",
      },
      {
        value: "Deep Tribal Loyalty",
        label: "",
        desc: "Create an instant emotional bond that turns passive customers into aggressive brand advocates.",
      },
      {
        value: "Global Brand Resonance",
        label: "Market Reach",
        desc: "Ensure your brand voice resonates across borders and cultural gaps with surgical precision.",
      },
    ],
  },
};
