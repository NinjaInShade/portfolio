import OnlineShop from './assets/projects/image-online-shop.png';
import PodLandingPage from './assets/projects/image-pod-landing-page.png';
import FAQAccordion from './assets/projects/image-faq-accordion.png';
import MeetLandingPage from './assets/projects/image-meet-landing-page.png';
import OrderSummaryCard from './assets/projects/image-order-summary-card.png';
import BootcampTestimonials from './assets/projects/image-bootcamp-testimonials.png';
import TipCalculator from './assets/projects/image-tip-calculator.png';
import StatsCard from './assets/projects/image-stats-card.png';
import DataStorageComponent from './assets/projects/image-data-storage-component.png';
import TypemasterLandingPage from './assets/projects/image-typemaster-landing-page.png';
import ProjectTrackingPage from './assets/projects/image-project-tracking-page.png';
import TestimonialsGrid from './assets/projects/image-testimonials-grid.png';
import InteractivePricingCard from './assets/projects/image-interactive-price-card.png';
import PingComingSoonPage from './assets/projects/image-ping-coming-soon.png';
import HuddleLandingPage from './assets/projects/image-huddle-landing-page.png';
import PriceGridComponent from './assets/projects/image-price-grid-card.png';
import FourCardFeatureSection from './assets/projects/image-4-card-section.png';
import SiteBuild from './assets/projects/image-site-build.png';
import BAComingSoonPage from './assets/projects/image-ba-coming-soon.png';
import IntroSignup from './assets/projects/image-intro-signup.png';
import ColPreviewCard from './assets/projects/image-3col-card.png';
import ProfileCard from './assets/projects/image-profile-card.png';
import SocialProofSection from './assets/projects/image-social-proof.png';
import ArticlePreview from './assets/projects/image-article-preview.png';
import FyloDark from './assets/projects/image-fylo-dark-landing-page.png';
import GithubSearch from './assets/projects/image-github-search.png';
import Fylo2col from './assets/projects/image-fylo-2col-landing-page.png';
import SocialMediaDashboard from './assets/projects/image-social-media-dashboard.png';
import TodoApp from './assets/projects/image-todo-app.png';
import PlanetFactSite from './assets/projects/image-planet-fact-site.png';

export const projects = [
  {
    title: 'Online shop project',
    description: 'Online shop (e-commerce) project with all major functionalities.',
    liveSite: 'https://onlineshop-430be.web.app/',
    github: 'https://github.com/NinjaInShade/online-shop',
    tabs: ['HTML', 'CSS', 'Javascript', 'ReactJS', 'NodeJS', 'Full Stack', 'API', 'Multi Page'],
    imgSrc: OnlineShop,
    imgAlt:
      'Mockup of online shop project. Has a navigation for admin products, product, add products, cart, profile. Shows product cards for main content with "Add to cart" and "Detail" buttons.',
  },
  {
    title: 'Planet fact site',
    description: 'Planet fact site where you can view 8 planets and their compositions and facts.',
    liveSite: 'https://lm-planet-fact-site.netlify.app/',
    github: 'https://lm-planet-fact-site.netlify.app/',
    tabs: ['HTML', 'CSS', 'Javascript', 'ReactJS', 'API', 'Multi Page'],
    imgSrc: PlanetFactSite,
    imgAlt: 'Mockup of the planet fact site, showing facts and information about planets.',
  },
  {
    title: 'Pod landing page',
    description: 'Landing page for imaginary business "Pod"',
    liveSite: 'https://lm-pod-landing-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/pod-landing-page',
    tabs: ['HTML', 'CSS', 'Javascript', 'Landing Page'],
    imgSrc: PodLandingPage,
    imgAlt: 'Mockup of pod landing page. Pod is an imaginary business for streaming podcasts. ',
  },
  {
    title: 'Social media dashboard',
    description: 'Social media dashboard showing some social media stats with dark/light theme switcher',
    liveSite: 'https://lm-social-media-dashboard.netlify.app/',
    github: 'https://github.com/NinjaInShade/social-media-dashboard',
    tabs: ['HTML', 'CSS', 'Javascript', 'Theme switch'],
    imgSrc: SocialMediaDashboard,
    imgAlt: 'Mockup of social media dashboard showcasing some social media stats in card format.',
  },
  {
    title: 'Todo app',
    description: 'Full stack todo app with dark/light theme + Drag n Drop!',
    liveSite: 'https://todoapp-48ccc.web.app/',
    github: 'https://github.com/NinjaInShade/todo',
    tabs: ['HTML', 'CSS', 'Javascript', 'API', 'Theme switch', 'ReactJS', 'NodeJS', 'Full stack'],
    imgSrc: TodoApp,
    imgAlt: 'Mockup of todo app with dark/light theme switch and drag n drop',
  },
  {
    title: 'Github API Search app',
    description: 'Github user search app using GitHub API + dark/light theme switcher',
    liveSite: 'https://lm-github-user-search.netlify.app/',
    github: 'https://github.com/NinjaInShade/github-user-search',
    tabs: ['HTML', 'CSS', 'Javascript', 'API', 'Theme switch'],
    imgSrc: GithubSearch,
    imgAlt: 'Mockup of github API search app.',
  },
  {
    title: 'FAQ Accordion card',
    description: 'FAQ Accordion card with javascript.',
    liveSite: 'https://lm-faq-accordion-card.netlify.app/',
    github: 'https://github.com/NinjaInShade/faq-accordion-card',
    tabs: ['HTML', 'CSS', 'Javascript', 'Component', 'Animation'],
    imgSrc: FAQAccordion,
    imgAlt: 'Mockup of a FAQ (Frequently Asked Questions) card component.',
  },
  {
    title: 'Bootcamp testimonials',
    description: 'Coding bootcamp testimonials page with sliders.',
    liveSite: 'https://lm-bootcamp-testimonials.netlify.app/',
    github: 'https://github.com/NinjaInShade/bootcamp-testimonials',
    tabs: ['HTML', 'CSS', 'Javascript'],
    imgSrc: BootcampTestimonials,
    imgAlt:
      'Mockup of a order summary card card. Can proceed to payment or cancel order. Shows the current plan and a button to change it.',
  },
  {
    title: 'Meet landing page',
    description: 'Landing page for imaginary business "Meet"',
    liveSite: 'https://lm-meet-landing-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/meet-landing-page',
    tabs: ['HTML', 'CSS', 'Landing Page'],
    imgSrc: MeetLandingPage,
    imgAlt: 'Mockup of meet landing page. Meet is an imaginary business for collaborative group and video chat. ',
  },
  {
    title: 'Order summary card',
    description: 'Order summary card component',
    liveSite: 'https://lm-order-summary-component.netlify.app/',
    github: 'https://github.com/NinjaInShade/order-summary-component',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: OrderSummaryCard,
    imgAlt:
      'Mockup of a order summary card card. Can proceed to payment or cancel order. Shows the current plan and a button to change it.',
  },
  {
    title: 'Tip calculator',
    description: 'Calculate tip cost per person and overall cost per person.',
    liveSite: 'https://lm-tip-calculator.netlify.app/',
    github: 'https://github.com/NinjaInShade/tip-calculator',
    tabs: ['HTML', 'CSS', 'Javascript', 'Component'],
    imgSrc: TipCalculator,
    imgAlt:
      'Mockup of tip calculator project. Can input overall bill, tip % and how many people are paying, and shows the calculated values.',
  },
  {
    title: 'Typemaster landing page',
    description: 'Pre-launch landing page for imaginary business "Typemaster"',
    liveSite: 'https://lm-typemaster-landing-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/typemaster-landing-page',
    tabs: ['HTML', 'CSS', 'Landing Page'],
    imgSrc: TypemasterLandingPage,
    imgAlt: 'Mockup of a stats card. Includes a title, a short description, image and some statistics.',
  },
  {
    title: 'Fylo Data storage component',
    description: 'Data storage component for imaginary business "Fylo"',
    liveSite: 'https://lm-data-storage-component.netlify.app/',
    github: 'https://github.com/NinjaInShade/data-storage-component',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: DataStorageComponent,
    imgAlt: 'Mockup of a stats card. Includes a title, a short description, image and some statistics.',
  },
  {
    title: 'Fylo 2 column landing page',
    description: '2 column landing page for imaginary business "Fylo"',
    liveSite: 'https://lm-fylo-2col-landing-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/fylo-2col-landing-page',
    tabs: ['HTML', 'CSS', 'Javascript', 'Landing page'],
    imgSrc: Fylo2col,
    imgAlt: 'Mockup of a 2 column layed out landing page for imaginary business "Fylo"',
  },
  {
    title: 'Fylo dark landing page',
    description: 'Dark theme landing page for imaginary business "Fylo"',
    liveSite: 'https://lm-fylo-dark-landing-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/fylo-dark-landing-page',
    tabs: ['HTML', 'CSS', 'Javascript', 'Landing page'],
    imgSrc: FyloDark,
    imgAlt: 'Mockup of a dark themed landing page for imaginary business "Fylo"',
  },
  {
    title: 'Stats card',
    description: 'Stats preview card component',
    liveSite: 'https://lm-stats-preview-card.netlify.app/',
    github: 'https://github.com/NinjaInShade/stats-preview-card',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: StatsCard,
    imgAlt: 'Mockup of a stats card. Includes a title, a short description, image and some statistics.',
  },
  {
    title: 'Testimonials grid',
    description: 'Testimonials in a grid layout',
    liveSite: 'https://lm-testimonials-grid.netlify.app/',
    github: 'https://github.com/NinjaInShade/testimonials-grid',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: TestimonialsGrid,
    imgAlt: 'Mockup of a bunch of testimonials, in a grid layout.',
  },
  {
    title: 'Interactive price component',
    description: 'Interactive pricing component (Traffic based pricing calculator)',
    liveSite: 'https://lm-interactive-price-component.netlify.app/',
    github: 'https://github.com/NinjaInShade/interactive-price-component',
    tabs: ['HTML', 'CSS', 'Javascript', 'Component'],
    imgSrc: InteractivePricingCard,
    imgAlt:
      'Mockup of an interactive pricing component. Choose between monthly/yearly billing and use a slider to calculate how much you have to pay.',
  },
  {
    title: 'Ping coming soon page',
    description: 'Coming soon page for imaginary business "Ping"',
    liveSite: 'https://lm-ping-coming-soon-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/ping-coming-soon-page',
    tabs: ['HTML', 'CSS', 'Javascript'],
    imgSrc: PingComingSoonPage,
    imgAlt:
      'Mockup of a coming soon page for imaginary business "Ping". Has a form where you can be notified for when it releases and an illustration with placeholder elements of the websites UI.',
  },
  {
    title: 'Project tracking page',
    description: 'Project tracking intro page',
    liveSite: 'https://lm-project-tracking-intro.netlify.app/',
    github: 'https://github.com/NinjaInShade/project-tracking-intro',
    tabs: ['HTML', 'CSS'],
    imgSrc: ProjectTrackingPage,
    imgAlt: 'Mockup of a stats card. Includes a title, a short description, image and some statistics.',
  },
  {
    title: 'Huddle landing page',
    description: 'Landing page for imaginary business "Huddle"',
    liveSite: 'https://lm-huddle-landing-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/ping-coming-soon-page',
    tabs: ['HTML', 'CSS', 'Landing Page'],
    imgSrc: HuddleLandingPage,
    imgAlt:
      'Mockup of a landing page for Huddle. Has a big illustration of placeholder elements representing the websites UI, and some text and a register button, with some social links in the bottom.',
  },
  {
    title: 'Price grid card',
    description: 'Price grid card component',
    liveSite: 'https://lm-price-grid-component.netlify.app/',
    github: 'https://github.com/NinjaInShade/price-grid-component',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: PriceGridComponent,
    imgAlt:
      'Mockup of a price card. Shows the monthly subscription price, why you should join and a little bit of background information',
  },
  {
    title: '4 Card feature section',
    description: '4 Card feature section component',
    liveSite: 'https://lm-4card-feature-section.netlify.app/',
    github: 'https://github.com/NinjaInShade/4card-feature-section',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: FourCardFeatureSection,
    imgAlt: 'Mockup of a 4 card feature section component. 4 Cards in a grid layout.',
  },
  {
    title: 'Site build',
    description: 'Helps with topics like UI/UX, SEO, Security, Clean, Reusable Code and much more.',
    liveSite: 'https://sitebuilder-66d12.web.app/',
    github: 'https://github.com/NinjaInShade/4card-feature-section',
    tabs: ['HTML', 'CSS', 'Javascript', 'Multi Page', 'ReactJS', 'NodeJS', 'Full Stack', 'API'],
    imgSrc: SiteBuild,
    imgAlt: 'Mockup of site build home page.',
  },
  {
    title: 'Intro signup page',
    description: 'Introduction page with a sign up form',
    liveSite: 'https://lm-intro-signup-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/intro-signup-page',
    tabs: ['HTML', 'CSS', 'Javascript'],
    imgSrc: IntroSignup,
    imgAlt: 'Mockup of a signup form for an introduction page.',
  },
  {
    title: '3 Column preview card section',
    description: '3-column preview card component',
    liveSite: 'https://lm-3col-preview-card.netlify.app/',
    github: 'https://github.com/NinjaInShade/3col-preview-card',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: ColPreviewCard,
    imgAlt: 'Mockup of a 3 columns of cards.',
  },
  {
    title: 'Base Apparel coming soon page',
    description: 'Coming soon page for imaginary business "Base Apparel"',
    liveSite: 'https://lm-ba-coming-soon-page.netlify.app/',
    github: 'https://github.com/NinjaInShade/ba-coming-soon-page',
    tabs: ['HTML', 'CSS', 'Javascript'],
    imgSrc: BAComingSoonPage,
    imgAlt: 'Mockup of base apparel coming soon page, with a form to be notified of the release.',
  },
  {
    title: 'Social proof section',
    description: 'Social proof section',
    liveSite: 'https://lm-social-proof-section.netlify.app/',
    github: 'https://github.com/NinjaInShade/social-proof-section',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: SocialProofSection,
    imgAlt: 'Mockup of a social proof section, with testimonials from customers.',
  },
  {
    title: 'Profile card',
    description: 'Profile card component',
    liveSite: 'https://lm-profile-card.netlify.app/',
    github: 'https://github.com/NinjaInShade/profile-card',
    tabs: ['HTML', 'CSS', 'Component'],
    imgSrc: ProfileCard,
    imgAlt: 'Mockup of a profile card component with information about a person.',
  },
  {
    title: 'Article preview card',
    description: 'Article preview card component with cool javascript share tooltip',
    liveSite: 'https://lm-article-preview-component.netlify.app/',
    github: 'https://github.com/NinjaInShade/article-preview-component',
    tabs: ['HTML', 'CSS', 'Javascript', 'Component'],
    imgSrc: ArticlePreview,
    imgAlt: 'Mockup of an article preview (blog preview) with social links to author.',
  },
];
