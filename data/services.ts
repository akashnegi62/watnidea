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
    },
    about: {
      label: "ABOUT AURA ARCHITECTURE",
      title: "What is a Aura Architecture?",
      highlight:
        "The Core Concept In an era of infinite scrolling, your brand needs more than just a name—it needs a presence. Aura Architecture is our signature approach to branding. We combine market psychology with high-end minimalist design to create a Main Character identity for your business. We don't just make you look good; we make you look essential.",
      subtext: "We don’t just make you look good; we make you look essential.",
      bgText: "AURA",
    },
    included: [
      {
        title: "Visual DNA Design",
        icon: Target,
        desc: "Beyond the logo. We craft custom typography, unique color palettes, and a visual language that communicates your value instantly.",
      },
      {
        title: "Brand Voice & Tone",
        icon: MessageSquare,
        desc: 'We define how your brand speaks—whether it’s bold and disruptive or calm and premium—so you never sound like "just another company."',
      },
      {
        title: "Competitive Positioning",
        icon: Zap,
        desc: "We find the white space in your industry and position your brand as the only logical choice for your target audience.",
      },
      {
        title: "The Brand Bible",
        icon: Zap,
        desc: "A comprehensive digital guide containing all your assets, ensuring your team maintains a consistent vibe across every platform.",
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
      { value: "3X", label: "Brand Recall" },
      { value: "120K", label: "Audience Growth" },
      { value: "4.9/5", label: "Trust Score" },
      { value: "2030", label: "Future Proofed" },
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
    },
    about: {
      label: "THE HYPE ENGINE",
      title: "What is a Hype Engine?",
      highlight:
        "It is a data-driven viral framework designed to capture attention and convert it into cultural capital.",
      subtext:
        "We don't chase trends; we engineer the mechanics that start them.",
      bgText: "HYPE",
    },
    included: [
      {
        title: "Viral Mechanics",
        icon: Sparkles,
        desc: "Designing shareable moments that trigger algorithmic amplification.",
      },
      {
        title: "Data-Driven Strategy",
        icon: Cpu,
        desc: "Using real-time analytics to protect the art and ensure ROI.",
      },
      {
        title: "Influencer Loops",
        icon: Users,
        desc: "Building organic networks that amplify your message without the 'ad' feel.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Trend Mining",
        icon: Search,
        desc: "Identifying cultural gaps where your brand can insert itself.",
      },
      {
        num: "02",
        title: "Creative Sprints",
        icon: Zap,
        desc: "Rapid prototyping of high-impact content and social hooks.",
      },
      {
        num: "03",
        title: "Deployment",
        icon: Rocket,
        desc: "Multi-channel launch with surgical precision and timing.",
      },
      {
        num: "04",
        title: "Scaling",
        icon: Activity,
        desc: "Doubling down on what works to create a self-sustaining cycle.",
      },
    ],
    stats: [
      { value: "10M+", label: "Total Reach" },
      { value: "450%", label: "ROI Average" },
      { value: "24/7", label: "Trend Monitoring" },
      { value: "Top 1%", label: "Engagement" },
    ],
  },

  kinetic: {
    hero: {
      titlePrimary: "Motion that",
      titleSecondary: "Commands.",
      titleThird: "Design that",
      titleFourth: "Breathes.",
      description:
        "Static is boring. We bring your brand to life with high-end motion graphics and interactive web experiences.",
    },
    about: {
      label: "KINETIC STUDIO",
      title: "Why Motion Matters?",
      highlight:
        "Movement captures the eye 4x faster than static images. We use physics-based animation to tell deeper stories.",
      subtext:
        "If it doesn't move, it's not alive. We give your brand a heartbeat.",
      bgText: "MOVE",
    },
    included: [
      {
        title: "UI Animation",
        icon: Monitor,
        desc: "Seamless transitions and micro-interactions for modern web apps.",
      },
      {
        title: "GSAP Masterclass",
        icon: Activity,
        desc: "Performance-optimized scroll triggers and complex timeline animations.",
      },
      {
        title: "Brand Motion",
        icon: Sparkles,
        desc: "Logo reveals and kinetic typography that leave a lasting impression.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Storyboarding",
        icon: Layers,
        desc: "Mapping out the journey before the first frame is animated.",
      },
      {
        num: "02",
        title: "Motion Design",
        icon: Activity,
        desc: "Crafting the physics, easing, and timing of every movement.",
      },
      {
        num: "03",
        title: "Refining",
        icon: FlaskConical,
        desc: "Polishing details to ensure silk-smooth performance across devices.",
      },
      {
        num: "04",
        title: "Export",
        icon: Rocket,
        desc: "Lottie, MP4, or Code-based assets ready for production.",
      },
    ],
    stats: [
      { value: "60fps", label: "Fluidity" },
      { value: "0.2s", label: "Response Time" },
      { value: "Low", label: "Bundle Size" },
      { value: "High", label: "Impact" },
    ],
  },

  digital: {
    hero: {
      titlePrimary: "Products for",
      titleSecondary: "Humans.",
      titleThird: "Code for",
      titleFourth: "Legacy.",
      description:
        "We build digital headquarters that work as hard as you do. High-performance apps with aesthetic utility.",
    },
    about: {
      label: "THE DIGITAL HQ",
      title: "The Modern Product",
      highlight:
        "Your website isn't a brochure; it's your most important employee. We build full-stack solutions with Next.js.",
      subtext: "Aesthetics meet performance. We don't compromise on either.",
      bgText: "CODE",
    },
    included: [
      {
        title: "Next.js Mastery",
        icon: Globe,
        desc: "Leveraging Turbopack and Server Components for instant load times.",
      },
      {
        title: "Aesthetic UI",
        icon: Star,
        desc: "Interfaces that look like art but function with surgical precision.",
      },
      {
        title: "Scalable Infra",
        icon: Cpu,
        desc: "Backend systems designed to handle millions of requests without breaking.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery",
        icon: Brain,
        desc: "Defining user personas and mapping complex functional requirements.",
      },
      {
        num: "02",
        title: "Architecture",
        icon: Layers,
        desc: "Designing a data structure that protects the art and performance.",
      },
      {
        num: "03",
        title: "Development",
        icon: Zap,
        desc: "Clean, documented code built for long-term maintainability.",
      },
      {
        num: "04",
        title: "Launch",
        icon: Rocket,
        desc: "Rigorous testing and deployment to global edge networks.",
      },
    ],
    stats: [
      { value: "100", label: "Lighthouse Score" },
      { value: "<1s", label: "Load Time" },
      { value: "99.9%", label: "Uptime" },
      { value: "Clean", label: "Codebase" },
    ],
  },

  synthetic: {
    hero: {
      titlePrimary: "Cinematic",
      titleSecondary: "AI.",
      titleThird: "Future",
      titleFourth: "Vision.",
      description:
        "The line between real and synthetic is gone. We create high-fidelity cinematic video and CGI using AI workflows.",
    },
    about: {
      label: "SYNTHETIC CINEMA",
      title: "AI-Driven CGI",
      highlight:
        "Hollywood-grade visuals at a fraction of the traditional cost. We use neural rendering and AI composition.",
      subtext:
        "Imagine anything. We'll render it in 4K with moody, cinematic lighting.",
      bgText: "FILM",
    },
    included: [
      {
        title: "AI Video",
        icon: Video,
        desc: "Stable Video Diffusion and custom training for brand-consistent visuals.",
      },
      {
        title: "CGI Environments",
        icon: Globe,
        desc: "Futuristic landscapes and product mockups with neon high-contrast lighting.",
      },
      {
        title: "Cinematic Editing",
        icon: Layers,
        desc: "Mood-focused post-production that turns clips into storytelling masterpieces.",
      },
    ],
    process: [
      {
        num: "01",
        title: "World Building",
        icon: Brain,
        desc: "Defining the visual rules, lighting style, and thematic elements.",
      },
      {
        num: "02",
        title: "Prompting",
        icon: Sparkles,
        desc: "Using advanced AI workflows to generate initial raw high-fidelity assets.",
      },
      {
        num: "03",
        title: "Post-Production",
        icon: FlaskConical,
        desc: "Color grading and sound design to achieve a true cinematic feel.",
      },
      {
        num: "04",
        title: "Mastering",
        icon: CheckCircle2,
        desc: "Final 4K export ready for web, social, or large-scale display.",
      },
    ],
    stats: [
      { value: "4K", label: "Resolution" },
      { value: "80%", label: "Cost Saved" },
      { value: "Neon", label: "Atmosphere" },
      { value: "AI", label: "Powered" },
    ],
  },

  echo: {
    hero: {
      titlePrimary: "Community",
      titleSecondary: "Echo.",
      titleThird: "Social",
      titleFourth: "Gravity.",
      description:
        "Stop shouting into the void. We build ecosystems where your brand's voice resonates and amplifies naturally.",
    },
    about: {
      label: "THE ECHO SYSTEM",
      title: "Resonant Branding",
      highlight:
        "An Echo System is a self-sustaining community where your users become your strongest marketing department.",
      subtext: "We create the spark; the community creates the fire.",
      bgText: "ECHO",
    },
    included: [
      {
        title: "Community Design",
        icon: Users,
        desc: "Building Discord, Slack, or Private forums where your tribe lives.",
      },
      {
        title: "Content Strategy",
        icon: MessageSquare,
        desc: "A narrative loop that keeps users engaged day after day.",
      },
      {
        title: "Loyalty Engines",
        icon: Star,
        desc: "Gamification and rewards that turn customers into lifelong fans.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Tribe Scouting",
        icon: Search,
        desc: "Finding where your most passionate advocates currently hide.",
      },
      {
        num: "02",
        title: "Space Design",
        icon: Layers,
        desc: "Building the digital 'home' for your community to congregate.",
      },
      {
        num: "03",
        title: "Engagement",
        icon: Activity,
        desc: "Seeding the first conversations and establishing the community vibe.",
      },
      {
        num: "04",
        title: "Autonomy",
        icon: ShieldCheck,
        desc: "Transitioning to a self-managed system that grows without you.",
      },
    ],
    stats: [
      { value: "90%", label: "Retention" },
      { value: "Organic", label: "Growth" },
      { value: "High", label: "Sentiment" },
      { value: "Global", label: "Reach" },
    ],
  },
};
