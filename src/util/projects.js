import FlashcardsThumbnail from "../assets/thumbnails/FlashcardsThumbnail.png";
import SiteBuilderThumbnail from "../assets/thumbnails/SiteBuilderThumbnail.png";
import OnlineShopThumbnail from "../assets/thumbnails/OnlineShopThumbnail.png";
import HubThumbnail from "../assets/thumbnails/HubThumbnail.png";

const projects = [
  {
    img: OnlineShopThumbnail,
    title: "Online shop app",
    description:
      "I made this app to incorporate as many features that showcase what I'm capable of making. Auth system included, you can view products, add to cart, fake pay, check orders etc. Admin user's can add/edit/delete products too.",
    live_URL: "https://onlineshop-430be.web.app/",
    github_URL: "https://github.com/NinjaInShade/online-shop",
    reversed: false,
    white: false,
  },
  {
    img: SiteBuilderThumbnail,
    title: "Site builder app",
    description:
      "This app’s idea is to help people with making a polished website through providing the user with resources, tips and things that should be included to provide a good user experience with strong UI.",
    live_URL: "https://sitebuilder-66d12.web.app/",
    github_URL: "https://github.com/NinjaInShade/site-builder",
    reversed: true,
    white: true,
  },
  {
    img: FlashcardsThumbnail,
    title: "Flashcards app",
    description:
      "This app is designed to help with revision by letting you make flashcards which you can flip to reveal the answer. You can group flashcard into a collection and even test yourself.",
    live_URL: "https://leonsflashcards.web.app/",
    github_URL: "https://github.com/NinjaInShade/flashcards",
    reversed: false,
    white: false,
  },
  {
    img: HubThumbnail,
    title: "Personal hub app",
    description:
      "I made this for myself and included some useful tools like links to my site builder app and todo app, code docs and experimented with a settings page where you can customize bits of the app.",
    live_URL: "https://leonshub-ec26e.web.app/",
    github_URL: "https://github.com/NinjaInShade/leons_hub",
    reversed: true,
    white: true,
  },
];

export default projects;
