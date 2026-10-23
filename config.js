/**
 * PLAIN DAYZ — EDIT THIS FILE TO CUSTOMIZE THE WEBSITE.
 * No coding experience needed: change the quoted text and save.
 * Keep commas, quotation marks and brackets intact.
 */
window.PLAIN_DAYZ_CONFIG = {
  site: {
    name: "PLAIN DAYZ",
    eyebrow: "THE COMMUNITY SURVIVES",
    headlineFirst: "WELCOME TO",
    headlineAccent: "THE\nWASTELAND.",
    tagline: "A place for survivors, close calls, fresh starts, and stories worth telling.",
    footerText: "Built by survivors. For survivors."
  },

  // Shared community links used throughout the website.
  links: {
    discord: "https://discord.gg/hCGqqxbfHd",
    support: "https://discord.gg/hCGqqxbfHd", // Players can open a support ticket after joining Discord.
    donate: "https://paypal.me/TrIM81"
  },

  // Every server links to its own page. The shared tips guide is at guides.html.
  // No fake live status or unverified game modes are shown.
  servers: [
    {
      name: "ARSTEINEN",
      slug: "arsteinen",
      page: "arsteinen.html",
      subtitle: "PLAIN DAYZ SERVER",
      map: "ARSTEINEN",
      playstyle: "SERVER DETAILS COMING SOON",
      status: "ADDRESS AVAILABLE",
      description: "Start your journey on Arsteinen. Explore the server hub, copy the direct connection address, or open the shared survivor guides.",
      features: ["DIRECT CONNECTION", "SHARED TIPS & TRICKS", "MOD INFO"],
      address: "208.115.206.252",
      port: "2680",
      mods: [] // Add exact server mod names and Workshop URLs when confirmed.
    },
    {
      name: "BANOV",
      slug: "banov",
      page: "banov.html",
      subtitle: "PLAIN DAYZ SERVER",
      map: "BANOV",
      playstyle: "SERVER DETAILS COMING SOON",
      status: "ADDRESS AVAILABLE",
      description: "Explore Banov with PLAIN DAYZ. Visit the server hub for mod information and community guides.",
      features: ["DIRECT CONNECTION", "SHARED TIPS & TRICKS", "MOD INFO"],
      address: "5.226.142.46",
      port: "2491",
      mods: []
    },
    {
      name: "DEERISLE",
      slug: "deerisle",
      page: "deerisle.html",
      subtitle: "PLAIN DAYZ SERVER",
      map: "DEERISLE",
      playstyle: "SERVER DETAILS COMING SOON",
      status: "ADDRESS AVAILABLE",
      description: "Head to DeerIsle and prepare for your next survival story. Use the dedicated server hub for connection details and guides.",
      features: ["DIRECT CONNECTION", "SHARED TIPS & TRICKS", "MOD INFO"],
      address: "208.115.248.157",
      port: "2302",
      mods: []
    },
    {
      name: "ONFORIN",
      slug: "onforin",
      page: "onforin.html",
      subtitle: "PLAIN DAYZ SERVER",
      map: "ONFORIN",
      playstyle: "SERVER DETAILS COMING SOON",
      status: "ADDRESS AVAILABLE",
      description: "Explore Onforin with PLAIN DAYZ. Find the direct connection address, future mod information and a shared survival guide.",
      features: ["DIRECT CONNECTION", "SHARED TIPS & TRICKS", "MOD INFO"],
      address: "213.166.84.4",
      port: "2302",
      mods: []
    }
  ],

  // Dates intentionally say TBA until the server owner announces them.
  events: [
    {
      day: "TBA",
      month: "SOON",
      type: "COMMUNITY",
      title: "OUR FIRST COMMUNITY EVENT",
      description: "The first event announcement will go here. Check the Discord event channel for details."
    },
    {
      day: "TBA",
      month: "SOON",
      type: "SERVER NEWS",
      title: "WHAT'S NEXT FOR PLAIN DAYZ",
      description: "Server news, launch announcements, and upcoming community plans will be shared here."
    }
  ],

  // Replace placeholders with your actual team members.
  staff: [
    { name: "STAFF NAME", role: "OWNER", initials: "PD", bio: "Community leadership" },
    { name: "STAFF NAME", role: "ADMIN", initials: "PD", bio: "Server administration" },
    { name: "STAFF NAME", role: "SUPPORT", initials: "PD", bio: "Player assistance" }
  ]
};
