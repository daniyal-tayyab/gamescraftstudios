import { ReactComponent as Events } from "../images/sidebar-icons/events-icon.svg";
import { ReactComponent as EventsActive } from "../images/sidebar-icons/events-icon-active.svg";
import { ReactComponent as Map } from "../images/sidebar-icons/map-icon.svg";
import { ReactComponent as MapActive } from "../images/sidebar-icons/map-icon-active.svg";
import { ReactComponent as Avatar } from "../images/sidebar-icons/avatar-icon.svg";
import { ReactComponent as AvatarActive } from "../images/sidebar-icons/avatar-icon-active.svg";
import { ReactComponent as Partnership } from "../images/sidebar-icons/partnerships-icon.svg";
import { ReactComponent as PartnershipActive } from "../images/sidebar-icons/partnerships-icon-active.svg";
import { ReactComponent as About } from "../images/sidebar-icons/about-icon.svg";
import { ReactComponent as AboutActive } from "../images/sidebar-icons/about-icon-active.svg";

import { ReactComponent as Discord } from "../images/svgs/social/discord-white.svg";
import { ReactComponent as Facebook } from "../images/svgs/social/facebook-white.svg";
import { ReactComponent as Instagram } from "../images/svgs/social/instagram-white.svg";
import { ReactComponent as Medium } from "../images/svgs/social/medium-white.svg";
import { ReactComponent as Telegram } from "../images/svgs/social/telegram-white.svg";
import { ReactComponent as Twitch } from "../images/svgs/social/twitch-white.svg";
import { ReactComponent as Twitter } from "../images/svgs/social/twitter-white.svg";
import { ReactComponent as Youtube } from "../images/svgs/social/youtube-white.svg";

export const sidebarItems = [
  {
    title: "About",
    Icon: About,
    Active: AboutActive,
    to: "/about",
  },
  {
    title: "Services",
    Icon: Partnership,
    Active: PartnershipActive,
    to: "/services",
  },
  {
    title: "Careers",
    Icon: Avatar,
    Active: AvatarActive,
    to: "/careers",
  },
  {
    title: "Contact Us",
    Icon: Map,
    Active: MapActive,
    to: "/contact-us",
  },
  {
    title: "Portfolio",
    Icon: Events,
    Active: EventsActive,
    to: "/portfolio",
  },
];

export const c1 = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "About",
    to: "/about"
  },
  {
    title: "Services",
    to: "/services"
  }
]

export const c2 = [
  {
    title: "Careers",
    to: "/carrer"
  },
  {
    title: "Contact Us",
    to: "/contact-us"
  },
  {
    title: "Portfolio",
    to: "/portfolio"
  }
];

export const c3 = ["Terms of use", "Privacy Policy", "Help Center"];

export const socialIcons = [
  // Discord,
  Facebook,
  Instagram,
  // Medium,
  // Telegram,
  Twitter,
  // Twitch,
  // Youtube,
];
