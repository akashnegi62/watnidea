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
  TrendingUp,
} from "lucide-react";

export const SERVICES_DATA: any = {
  aura: {
    hero: {
      titlePrimary: "Identity ", //
      titleSecondary: "with Soul.",
      titleThird: "Strategy ", //
      titleFourth: "with Teeth.",
      description:
        "A logo isn't a brand; a feeling is. We build the 'Aura' that makes your business undeniable in a crowded market.",
      heroImage: "/Img/aura.jpeg",
    },
    about: {
      label: "AURA ARCHITECTURE",
      title: "Aura Architecture",
      highlight:
        "In an era of infinite scrolling, your brand needs more than just a name—it needs a presence. We combine market psychology with high-end minimalist design to create a 'Main Character' identity for your business.",
      subtext: "We don’t just make you look good; we make you look essential.",
      bgText: "AURA",
      aboutImage: "/Img/aura2",
      aboutFeatures: [
        { title: "Brand Identity Design", icon: LayoutGrid },
        { title: "Positioning & Messaging", icon: Target },
        { title: "Perception Strategy", icon: Eye },
      ],
    },
    resultsImage: "/Img/aura3",
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
    processHeader: {
      title: "Brand Building",
      description:
        "We follow a proven process to build strong, scalable, and impactful brand strategies. Every step is designed to ensure clarity, consistency, and measurable growth.",
    },
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
    whyChooseUs: [
      {
        title: "Aesthetic-First",
        icon: Star,
        desc: "We believe beauty is a competitive advantage.",
      },
      {
        title: "Future-Proofed",
        icon: ShieldCheck,
        desc: "We build identities that look as good in 2030 as today.",
      },
      {
        title: "Human-Centric",
        icon: Users,
        desc: "We design for people, not just algorithms.",
      },
      {
        title: "Cognitive Design",
        icon: Brain,
        desc: "We don’t just design for the eye; we design for the brain. We use psychological triggers to ensure your brand isn't just seen, but remembered at a subconscious level.",
      },
    ],
    faq: [
      {
        q: "What is the difference between a logo and Aura Architecture?",
        a: "A logo is a symbol. Aura Architecture is the entire emotional and visual experience—including how you speak, how you feel, and how you stand out from competitors.",
      },
      {
        q: "How long does the branding process take?",
        a: "A standard Brand Identity project typically takes 4 to 6 weeks from the initial Deep Dive to the final Handover.",
      },
      {
        q: "Do I get files for social media?",
        a: "Yes. Every brand kit includes optimized assets for Instagram, LinkedIn, TikTok, and Web",
      },
    ],
  },

  hype: {
    hero: {
      titlePrimary: "From the ", //
      titleSecondary: "Scroll",
      titleThird: "to the ", //
      titleFourth: "Soul.",
      description:
        "Most brands post content. We create culture. The Hype Engine turns your social presence into a self-sustaining community that keeps your brand relevant 24/7.",
      heroImage: "/Img/hype.webp",
    },
    about: {
      label: "THE HYPE ENGINE",
      title: "Hype Engine",
      highlight:
        "Social media isn't a megaphone; it’s an ecosystem. The Hype Engine is our specialized SMM framework designed for the attention economy. We don't just manage accounts — we engineer conversations. We blend data-driven timing with high-aesthetic content to ensure your brand isn't just seen, but felt. We bridge the gap between Active and Iconic.",
      subtext:
        "We don't chase trends; we engineer the mechanics that start them.",
      bgText: "HYPE",
      aboutImage: "/Img/hype2.webp",
      aboutFeatures: [
        { title: "Content Strategy", icon: Sparkles },
        { title: "Audience Growth", icon: Rocket },
        { title: "Viral Execution", icon: Zap },
      ],
    },
    resultsImage: "/Img/hype3.webp",
    included: [
      {
        title: "Trend Harvesting",
        icon: Activity,
        desc: "Our team monitors cultural shifts in real-time, allowing your brand to jump on relevant trends before they become noise.",
      },
      {
        title: "Aesthetic Content Curation",
        icon: Sparkles,
        desc: "High-fidelity visuals and captions that align perfectly with your 'Aura Architecture,' ensuring a feed that looks like a masterpiece.",
      },
      {
        title: "Community Alchemy",
        icon: MessageSquare,
        desc: "We handle the comments, the DMs, and the mentions, turning casual viewers into high-intent brand advocates.",
      },
      {
        title: "Strategic Playbooks",
        icon: Target,
        desc: "Platform-specific strategies for Instagram, TikTok, and LinkedIn that respect the unique 'vibe' of each audience.",
      },
    ],
    process: [
      {
        num: "01",
        title: "The Social Audit",
        icon: Search,
        desc: "We analyze your current footprint, identifying what’s working and cutting out the 'filler' that’s hurting your reach.",
      },
      {
        num: "02",
        title: "The Content Blueprint",
        icon: Layers,
        desc: "We establish your pillars—the core topics and visual styles that will define your feed and attract your tribe.",
      },
      {
        num: "03",
        title: "The Execution Phase",
        icon: Zap,
        desc: "High-consistency posting backed by algorithmic optimization. We post when your audience is most hungry for content.",
      },
      {
        num: "04",
        title: "The Pulse Check",
        icon: Activity,
        desc: "Monthly deep-dives into analytics. We don't just report numbers; we tell you what they mean for your bottom line.",
      },
    ],
    processHeader: {
      title: "social success",
      description:
        "We follow a simple and structured process to ensure your social media growth is consistent and effective.",
    },
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
    whyChooseUs: [
      {
        title: "Native Expertise",
        icon: Users,
        desc: 'We don\'t use "social media manuals." We live on the platforms we manage.',
      },
      {
        title: "Algorithm-Agile",
        icon: Zap,
        desc: "When the platforms change, we pivot instantly.",
      },
      {
        title: "Vibe-Consistent",
        icon: ShieldCheck,
        desc: "We ensure your social media actually matches your high-end brand identity.",
      },
      {
        title: "Data-Driven Intuition",
        icon: Brain,
        desc: 'We balance "the vibe" with "the math." We use real-time social signals and sentiment analysis to back our creative choices, so we’re never just guessing.',
      },
    ],
    faq: [
      {
        q: "Do you create the content or just post it?",
        a: "We do both. From high-octane Reels to minimalist graphics, we produce the assets and manage the distribution.",
      },
      {
        q: "How often will you post?",
        a: "Quality over quantity. We find the 'sweet spot' for your specific industry, usually ranging from 3 to 5 high-impact posts per week plus daily Stories.",
      },
      {
        q: "Can you handle crisis management?",
        a: "Absolutely. We monitor your brand's sentiment and are ready to respond to any community feedback with grace and strategy.",
      },
    ],
  },

  kinetic: {
    hero: {
      titlePrimary: "Visual Dopamine ",
      titleSecondary: "for a 3 - Second World.", //
      titleThird: "",
      titleFourth: "", //
      description:
        "Stop the scroll. Hold the gaze. From cinematic brand stories to high-octane vertical edits, we capture the motion that drives emotion.",
      heroImage: "/Img/kinetic.webp",
    },
    about: {
      label: "KINETIC STUDIO",
      title: "Kinetic Studio",
      highlight:
        "Static content is a ghost. In 2026, if you aren't moving, you're invisible. Kinetic Studio is our high-performance video wing. We specialize in 'Short-Form Mastery'—creating videos that feel like a premium cinematic experience but are optimized for the fast-paced nature of modern platforms. We don't just shoot footage; we edit for retention.",
      subtext: "",
      bgText: "MOVE",
      aboutImage: "/Img/kinetic2.webp",
      aboutFeatures: [
        { title: "Cinematic Content", icon: Monitor },
        { title: "Storytelling Direction", icon: Activity },
        { title: "High-End Editing", icon: Play },
      ],
    },
    resultsImage: "/Img/kinetic3.webp",
    included: [
      {
        title: "Cinematic Brand Films",
        icon: Video,
        desc: 'High-production storytelling that captures the "Aura" of your business in 4K.',
      },
      {
        title: "Vertical-First Content",
        icon: Monitor,
        desc: 'Reels, TikToks, and Shorts designed natively for mobile viewing, focusing on high-energy transitions and "Hook" dynamics.',
      },
      {
        title: "Motion Graphics & VFX",
        icon: Sparkles,
        desc: 'Adding that "Future-Professional" polish with sleek, minimalist text overlays and visual effects.',
      },
      {
        title: "Corporate Video Production",
        icon: Layers,
        desc: "Produce professional videos for business presentations and branding",
      },
      {
        title: "Post-Production Lab",
        icon: Wand2,
        desc: 'Sound design, color grading, and "Retention Editing" that ensures viewers watch until the final frame.',
      },
    ],
    process: [
      {
        num: "01",
        title: "The Storyboard",
        icon: Search,
        desc: "We script the hooks and map out the visual flow before a single frame is shot.",
      },
      {
        num: "02",
        title: "The Capture",
        icon: Video,
        desc: 'Whether on-site or in-studio, we shoot with a focus on lighting, composition, and "Vibe Check" aesthetics.',
      },
      {
        num: "03",
        title: "The Edit",
        icon: Activity,
        desc: "This is where the magic happens. We pace the video to the beat of the cultural moment, ensuring maximum engagement.",
      },
      {
        num: "04",
        title: "The Optimization",
        icon: CheckCircle2,
        desc: "Exporting in every format you need—from 9:16 for social to 16:9 for your website.",
      },
    ],
    processHeader: {
      title: "social success",
      description:
        "We follow a step-by-step process to create high-quality and impactful videos. Each stage focuses on clarity, creativity, and results.",
    },
    stats: [
      {
        value: "Maximum Retention",
        label: "",
        desc: "We stop the 'scroll-past.' Our rhythmic editing ensures viewers stay engaged from the first hook to the final frame.",
      },
      {
        value: "Algorithmic Favor",
        label: "",
        desc: "High watch-time tells platforms your brand is 'Gold,' triggering massive organic reach without extra ad spend.",
      },
      {
        value: "Cinematic Authority",
        label: "",
        desc: "Elevate your brand instantly with 4K production that makes your business look like the industry's 'Main Character.'",
      },
      {
        value: "Auditory Branding",
        label: "",
        desc: "Sound design that makes your brand recognizable even with eyes closed. We treat audio as 50% of the experience.",
      },
    ],
    whyChooseUs: [
      {
        title: "Retention-Obsessed",
        icon: Brain,
        desc: "We edit for the human attention span, not just for the art.",
      },
      {
        title: "Platform-Native",
        icon: Monitor,
        desc: "We know exactly what lighting and pacing works for TikTok vs. what works for a Website Hero.",
      },
      {
        title: "High-End Gear, Low-Friction Feel",
        icon: Zap,
        desc: "Professional 4K production without the 'clunky' traditional agency overhead.",
      },
      {
        title: "Trend-Informed",
        icon: Activity,
        desc: "We know the 'editing styles' that are currently trending before they hit the mainstream.",
      },
    ],
    faq: [
      {
        q: "Do you provide the scripts for the videos?",
        a: "Yes. We handle everything from the initial hook-writing to the final color grade.",
      },
      {
        q: "Can you edit footage we already have?",
        a: "Absolutely. Our 'Post-Production Lab' can take your raw files and give them the watNidea 'Kinetic' polish.",
      },
    ],
  },

  digital: {
    hero: {
      titlePrimary: "Your Flagship",
      titleSecondary: "in the Digital Wild.", //
      titleThird: "",
      titleFourth: "", //
      description:
        "A website shouldn't just exist it should convert. We build high-speed, aesthetic-first digital headquarters that turn casual visitors into loyalists.",
      heroImage: "/Img/digital.webp",
    },
    about: {
      label: "THE DIGITAL HQ",
      title: "Digital HQ",
      highlight:
        "In 2026, your website is your most powerful employee. The Digital HQ is our approach to web development that balances 'The Vibe' with 'The Velocity.' We don't do clunky templates or slow-loading pages. We build custom, responsive, and ultra-clean digital environments that act as the central nervous system for your brand’s growth. It’s where your Aura Architecture meets high-performance engineering.",
      subtext: "",
      bgText: "CODE",
      aboutImage: "/Img/digital2.webp",
      aboutFeatures: [
        { title: "Website Design", icon: Cpu },
        { title: "Conversion Optimization", icon: Code },
        { title: "Speed & Performance", icon: Globe },
      ],
    },
    resultsImage: "/Img/digital3.webp",
    included: [
      {
        title: "Custom UI/UX Design",
        icon: LayoutGrid,
        desc: "User interfaces that feel intuitive and user experiences that remove every bit of friction from the customer journey.",
      },
      {
        title: "Speed & Performance Optimization",
        icon: Zap,
        desc: "Clean code and optimized assets ensuring your site loads in under 2 seconds. In a world of short attention spans, speed is a feature.",
      },
      {
        title: "SEO-Friendly Structure",
        icon: Search,
        desc: "Develop websites with clean structure for better search visibility",
      },
      {
        title: "Mobile-First Engineering",
        icon: Monitor,
        desc: "Over 80% of your audience is on their phone. We build for the palm of the hand first, then the desktop.",
      },
      {
        title: "Integrated CMS",
        icon: ShieldCheck,
        desc: "A backend that doesn't require a PhD to use. We give you the keys to your kingdom so you can update content on the fly.",
      },
    ],
    process: [
      {
        num: "01",
        title: "The Blueprint (Wireframing)",
        icon: Layers,
        desc: "We map out the user flow and architecture to ensure the logic is sound before we start the art.",
      },
      {
        num: "02",
        title: "The Mockup (Design)",
        icon: LayoutGrid,
        desc: "We apply your brand’s visual DNA to the wireframes, creating a high-fidelity prototype you can 'feel.'",
      },
      {
        num: "03",
        title: "The Build (Development)",
        icon: Code,
        desc: "Our developers bring the design to life with clean, scalable code and AEO-ready structure.",
      },
      {
        num: "04",
        title: "The Stress Test (QA & Launch)",
        icon: CheckCircle2,
        desc: "We test across all browsers and devices to ensure perfection before the world sees it.",
      },
    ],
    processHeader: {
      title: "Social Success",
      description:
        "We follow a simple and structured process to ensure your Website growth is consistent and effective.",
    },
    stats: [
      {
        value: "Frictionless Journeys",
        label: "",
        desc: "We eliminate the 'decision fatigue' that kills sales, guiding visitors naturally toward your checkout or CTA.",
      },
      {
        value: "Ultra-Low Bounce Rates",
        label: "",
        desc: "With sub-2-second load speeds, you stop losing customers before the page even loads. Speed is a feature.",
      },
      {
        value: "Mobile-First Dominance",
        label: "",
        desc: "A flawless experience for the 80% of your audience browsing on their phones. Built for the palm of the hand.",
      },
      {
        value: "AI & Search Ready",
        label: "",
        desc: "A clean tech-stack ensuring you rank higher on both Google and modern AI search engines from Day 1.",
      },
    ],
    whyChooseUs: [
      {
        title: "AEO-Baked In",
        icon: Search,
        desc: "We build sites that AI search engines and Google love, ensuring you’re discoverable from Day 1",
      },
      {
        title: "Minimalist Code",
        icon: Code,
        desc: "No 'bloat.' We use modern tech stacks that keep your site lean, mean, and incredibly fast.",
      },
      {
        title: "Conversion-Centric Design",
        icon: Target,
        desc: "We don't just design for awards; we design for your bottom line. Every button placement is intentional.",
      },
      {
        title: "Transparent Ownership",
        icon: ShieldCheck,
        desc: "No 'hosting hostages.' Once it’s built, it’s yours. You own 100% of your site and its data",
      },
    ],
    faq: [
      {
        q: "Will I be able to edit my own website?",
        a: "Absolutely. We build on user-friendly platforms and provide a 'Welcome Kit' video tutorial showing you exactly how to swap images and text.",
      },
      {
        q: "Is the site optimized for SEO?",
        a: "Yes. We handle all the technical heavy lifting—meta tags, alt-text, and site mapping—so you start ranking immediately.",
      },
    ],
  },

  synthetic: {
    hero: {
      titlePrimary: "Hollywood", //
      titleSecondary: "Scale.", //
      titleThird: "Startup",
      titleFourth: " Speed.", //
      description:
        "Why spend months and millions on a shoot when you can generate the future in seconds? Synthetic Cinema brings high-fidelity, AI-driven video ads to your brand’s arsenal.",
      heroImage: "/Img/synthetic.webp",
    },
    about: {
      label: "SYNTHETIC CINEMA",
      title: "Synthetic Cinema",
      highlight:
        "The barrier between Big Brands and Startups has officially collapsed. Synthetic Cinema is our specialized AI video production service. We use generative AI, neural rendering, and synthetic voice-overs to create hyper-realistic video ads that would traditionally require a massive crew, location scouting, and months of editing. We give you the power to produce cinematic content at the speed of your ideas.",
      subtext: "",
      bgText: "FILM",
      aboutImage: "/Img/synthetic2.webp",
      aboutFeatures: [
        { title: "AI Video Production", icon: Wand2 },
        { title: "Creative Testing", icon: Video },
        { title: "Cost Efficiency", icon: Sparkles },
      ],
    },
    resultsImage: "/Img/synthetic3.webp",
    included: [
      {
        title: "AI Avatar Synthesis",
        icon: Users,
        desc: "Realistic digital humans that speak your brand’s message in any language, removing the need for expensive talent scouting.",
      },
      {
        title: "Generative Visual Environments",
        icon: Globe,
        desc: "Creating impossible locations from futuristic cityscapes to surreal dreamscapes without leaving the studio.",
      },
      {
        title: "Neural Voice-Overs",
        icon: MessageSquare,
        desc: "Studio-quality audio in multiple dialects and tones, perfectly synced to your visual content.",
      },
      {
        title: "Script & Prompt Engineering",
        icon: Brain,
        desc: "We don't just 'use AI'; we master it. We craft the complex prompts and scripts that ensure the output is on-brand and high-conversion.",
      },
    ],
    process: [
      {
        num: "01",
        title: "The Concept Synthesis",
        icon: Brain,
        desc: "We define the hook and the narrative. What is the one thing we want the viewer to feel?",
      },
      {
        num: "02",
        title: "The Generation Phase",
        icon: Sparkles,
        desc: "Our AI architects use a tech stack of leading generative tools to create the raw visual and auditory assets.",
      },
      {
        num: "03",
        title: "The Human Polish",
        icon: Wand2,
        desc: "Our editors step in to add the 'soul.' We color grade, pace, and refine the AI output to ensure it meets our premium quality standards.",
      },
      {
        num: "04",
        title: "Version Scaling",
        icon: TrendingUp,
        desc: "We generate multiple variations of the ad for A/B testing, ensuring we find the highest-performing creative for your campaign.",
      },
    ],
    processHeader: {
      title: "social success",
      description:
        "We follow a simple and effective process to deliver high-performing video ads. Each step is focused on clarity, creativity, and results.",
    },
    stats: [
      {
        value: "Unbeatable Speed",
        label: "",
        desc: "Go from idea to high-end ad in days. While competitors book crews, your AI-driven ads are already live.",
      },
      {
        value: "Radical Cost Efficiency",
        label: "",
        desc: "Hollywood-level production value without the 5-figure overhead of travel, talent, and heavy equipment.",
      },
      {
        value: "Infinite Scaling",
        label: "",
        desc: "Generate dozens of variations for A/B testing instantly, allowing data to dictate your winning creative strategy.",
      },
      {
        value: "Human-Polish Quality",
        label: "",
        desc: "We blend cutting-edge AI with expert editing to ensure your content looks premium, not robotic.",
      },
    ],
    whyChooseUs: [
      {
        title: "Pioneering Tech-Stack",
        icon: Cpu,
        desc: "We use the most advanced 2026 AI models, ensuring your ads don't look 'robotic' or 'cheap.'",
      },
      {
        title: "Infinite Scalability",
        icon: Layers,
        desc: "Need 50 versions of an ad for 50 different audiences? We can deliver that in days, not months.",
      },
      {
        title: "Ethical AI Use",
        icon: ShieldCheck,
        desc: "We ensure all assets are generated using licensed and ethical frameworks.",
      },
      {
        title: "Hyper-Personalization",
        icon: Users,
        desc: "We can tailor AI content to specific demographics, making your audience feel like the ad was made just for them.",
      },
    ],
    faq: [
      {
        q: "Does AI video look 'real'?",
        a: "In 2026, the gap is gone. With our 'Human Polish' phase, we ensure the final output is indistinguishable from high-end traditional cinematography.",
      },
      {
        q: "Can I use my own voice or face in the AI ads?",
        a: "Yes. We can create 'Digital Twins' for founders or influencers, allowing you to scale your personal brand without spending every day in front of a camera.",
      },
    ],
  },

  growth: {
    hero: {
      titlePrimary: "Data into ",
      titleSecondary: "Dollars.", //
      titleThird: "Insights into ",
      titleFourth: "Impact.", //
      description:
        "We don't just hunt for clicks we secure the bag. Growth Alchemy is our precision-targeted approach to scaling your brand through high-velocity paid media.",
      heroImage: "/Img/growth.webp",
    },
    about: {
      label: "GROWTH ALCHEMY",
      title: "Growth Alchemy",
      highlight:
        "Performance marketing is often treated like a math problem, but we treat it like a science. Growth Alchemy is our framework for turning raw data into profitable growth. We combine aggressive A/B testing with high-end creative assets to find your ready-to-buy audience. Whether it's Meta, or Google , we optimize for the only metric that truly matters: Your Return on Investment (ROI).",
      subtext: "",
      bgText: "SCALE",
      aboutImage: "/Img/growth2.webp",
      aboutFeatures: [
        { title: "Paid Ads Strategy", icon: TrendingUp },
        { title: "Funnel Systems", icon: Zap },
        { title: "Data Optimization", icon: Users },
      ],
    },
    resultsImage: "/Img/growth3.webp",
    included: [
      {
        title: "Full-Funnel Meta & Google Ads",
        icon: TrendingUp,
        desc: "Managing your paid social from awareness to checkout with creative that stops the scroll.",
      },
      {
        title: "Search Engine Dominance (PPC)",
        icon: Search,
        desc: "Capturing high-intent customers on Google and YouTube exactly when they are looking for your solution.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        icon: Zap,
        desc: "Analyzing your landing pages to remove friction and ensure every paid click has the highest chance of converting.",
      },
      {
        title: "Website Content Creation",
        icon: MessageSquare,
        desc: "We develop clear and professional website content that explains your services effectively.",
      },
      {
        title: "Retargeting Blueprints",
        icon: Activity,
        desc: "Creating 'invisible' loops that follow your visitors and bring them back to complete their purchase.",
      },
    ],
    process: [
      {
        num: "01",
        title: "The Funnel Audit",
        icon: Search,
        desc: "We look at your current sales journey to find the 'leaks' where you’re losing money.",
      },
      {
        num: "02",
        title: "The Infrastructure Build",
        icon: Layers,
        desc: "We set up advanced tracking (Pixels, API, and GTM) so every cent is accounted for.",
      },
      {
        num: "03",
        title: "The Testing Phase",
        icon: Zap,
        desc: "We launch 'micro-campaigns' to test different creatives and audiences, identifying the winners early.",
      },
      {
        num: "04",
        title: "The Aggressive Scale",
        icon: Rocket,
        desc: "Once we find the winning formula, we pour fuel on the fire, increasing spend while maintaining your target acquisition cost.",
      },
    ],
    processHeader: {
      title: "Social Success",
      description:
        "We follow a simple and effective process to create content that performs well and delivers consistent results. Each step is focused on clarity, user intent, and long-term growth.",
    },
    stats: [
      {
        value: "Maximum Retention",
        label: "",
        desc: "We stop the 'scroll-past.' Our rhythmic editing ensures viewers stay engaged from the first hook to the final frame.",
      },
      {
        value: "Algorithmic Favor",
        label: "",
        desc: "High watch-time tells platforms your brand is 'Gold,' triggering massive organic reach without extra ad spend.",
      },
      {
        value: "Cinematic Authority",
        label: "",
        desc: "Elevate your brand instantly with 4K production that makes your business look like the industry's 'Main Character.'",
      },
      {
        value: "Auditory Branding",
        label: "",
        desc: "Sound design that makes your brand recognizable even with eyes closed. We treat audio as 50% of the experience.",
      },
    ],
    whyChooseUs: [
      {
        title: "Creative-First Performance",
        icon: Sparkles,
        desc: "Most 'math' agencies use ugly ads. We use Aura Architecture and Kinetic Studio assets to ensure your ads look as good as they perform.",
      },
      {
        title: "Algorithmic Mastery",
        icon: Brain,
        desc: "We don't fight the platform's AI; we feed it. We know exactly how to structure campaigns to work with the 2026 algorithms, not against them.",
      },
      {
        title: "Total Transparency",
        icon: Activity,
        desc: "You get a live dashboard. No hidden fees, no 'vague' reports—just real-time data.",
      },
      {
        title: "High-Aesthetic Conversion",
        icon: Target,
        desc: "We prove that 'high-end' and 'high-conversion' can exist in the same ad.",
      },
    ],
    faq: [
      {
        q: "What is the minimum ad budget you work with?",
        a: "We recommend a 'Testing Phase' budget of at least $1,500$–$2,000$ per month to gather enough data for the algorithms to learn.",
      },
      {
        q: "Do you guarantee results?",
        a: "No ethical agency guarantees sales, but we guarantee optimization. We guarantee that your cost per acquisition will decrease as our 'Alchemy' process refines your data.",
      },
    ],
  },

  echo: {
    hero: {
      titlePrimary: "Be", //
      titleSecondary: "Everywhere.", //
      titleThird: "Be",
      titleFourth: "Unforgettable.", //
      description:
        "Don't just show up dominate the space. The Echo System is our holistic digital marketing strategy designed to make your brand omnipresent, resonant, and impossible to ignore.",
      heroImage: "/Img/echo.webp",
    },
    about: {
      label: "THE ECHO SYSTEM",
      title: "Echo System",
      highlight:
        "Isolated marketing is wasted marketing. The Echo System is an omnichannel framework that synchronizes your Aura Architecture, Hype Engine, and Kinetic Studio assets into one seamless machine. We ensure that when a customer sees you on Google Ads, they find you on Google, and they remember you in their inbox. It’s about creating a digital echo that reinforces your value at every turn, turning a single impression into a lifelong obsession.",
      subtext: "",
      bgText: "ECHO",
      aboutImage: "/Img/echo2.webp",
      aboutFeatures: [
        { title: "Search Visibility", icon: Users },
        { title: "Content Systems", icon: Share2 },
        { title: "Omnichannel Presence", icon: Heart },
      ],
    },
    resultsImage: "/Img/echo3.webp",
    included: [
      {
        title: "Omnichannel Strategy",
        icon: Globe,
        desc: "A unified roadmap that ensures your brand voice and visuals are consistent across Social, Search, and Web.",
      },
      {
        title: "Search & Answer Engine Optimization (SEO/AEO)",
        icon: Search,
        desc: "Optimizing your digital footprint so that both humans and AI models (like Gemini and GPT) recommend your brand first.",
      },
      {
        title: "Retention & Lifecycle Marketing",
        icon: MessageSquare,
        desc: "Strategic email and SMS flows that keep your existing audience engaged and buying.",
      },
      {
        title: "Content Syndication",
        icon: Share2,
        desc: "Taking your high-performing assets and distributing them across the platforms where they will have the highest cultural impact.",
      },
    ],
    process: [
      {
        num: "01",
        title: "The Echosystem Audit",
        icon: Search,
        desc: "We map out your current digital touchpoints to see where the 'echo' is breaking.",
      },
      {
        num: "02",
        title: "The Strategic Blueprint",
        icon: Layers,
        desc: "We design a cross-platform flow that guides users from discovery to conversion without friction",
      },
      {
        num: "03",
        title: "The Deployment",
        icon: Rocket,
        desc: "We launch your integrated campaigns, ensuring that every piece of content supports the next.",
      },
      {
        num: "04",
        title: "The Synthesis",
        icon: Activity,
        desc: "We look at the holistic data—not just platform by platform—to see how the entire system is driving growth.",
      },
    ],
    processHeader: {
      title: "Social Success",
      description:
        "We follow a clear and simple process to grow your business online. Each step focuses on visibility, engagement, and results.",
    },
    stats: [
      {
        value: "Dominant Brand Omnipresence",
        label: "",
        desc: "Move from being 'a choice' to being 'the only choice.' Your brand bEchomes a constant presence in your customer’s digital life.",
      },
      {
        value: "Compounded Marketing ROI",
        label: "",
        desc: "By syncing all channels, you eliminate wasted spend. Each service (Ads, Social, SEO) begins to feed the other, lowering your total cost of acquisition.",
      },
      {
        value: "AI & Search Engine Authority",
        label: "",
        desc: "Be the first answer given by both Google and AI models. We ensure your brand’s 'Aura' is rEchognized and rEchommended by the latest algorithms.",
      },
      {
        value: "Lifecycle Revenue Growth",
        label: "",
        desc: "Stop losing customers after the first sale. Our integrated retention flows turn one-time buyers into brand advocates who drive recurring revenue.",
      },
    ],
    whyChooseUs: [
      {
        title: "Holistic Visionaries",
        icon: Globe,
        desc: "We don't think in 'silos.' we see the whole digital landscape and how your brand fits into it.",
      },
      {
        title: "AEO-Native",
        icon: Search,
        desc: "We were born in the era of AI. We optimize your brand for the way people search now, not five years ago.",
      },
      {
        title: "Aesthetic Consistency",
        icon: Star,
        desc: "We ensure your 'Vibe' is never diluted, no matter which platform the customer finds you on.",
      },
      {
        title: "Psychological Sequencing",
        icon: Brain,
        desc: "We understand the 'Customer Journey' and deliver the right message at the right psychological moment.",
      },
    ],
    faq: [
      {
        q: "Do I need all your services to use The Echo System?",
        a: "Not necessarily, but it works best when your Branding and Social are aligned. We can integrate our strategy with your existing assets or build them from scratch.",
      },
      {
        q: "How do you measure the success of an 'Echo'?",
        a: "We look at 'Blended ROI'—how your total marketing spend is driving total revenue, as well as organic brand search volume and direct traffic.",
      },
    ],
  },
};
