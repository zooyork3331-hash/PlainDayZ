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

  // Paste the complete https:// link between the quotes.
  links: {
    discord: "", // e.g. "https://discord.gg/yourinvite"
    support: ""  // e.g. "https://discord.com/channels/..." or a help-desk link
  },

  // Add, remove, or edit server objects. No fake live statuses are shown.
  servers: [
    {
      name: "SERVER ONE",
      subtitle: "THE FIRST CHAPTER",
      map: "MAP TO BE ANNOUNCED",
      playstyle: "PLAYSTYLE TO BE ANNOUNCED",
      status: "COMING SOON", // manually updated, not real-time
      description: "Your first server description goes here. Describe the map, gameplay style, mods, and what makes this world worth surviving.",
      features: ["SERVER INFO PENDING", "COMMUNITY FOCUSED", "DETAILS SOON"],
      address: "", // e.g. "123.123.123.123"
      port: ""     // e.g. "2302"
    },
    {
      name: "SERVER TWO",
      subtitle: "ANOTHER WAY TO SURVIVE",
      map: "MAP TO BE ANNOUNCED",
      playstyle: "PLAYSTYLE TO BE ANNOUNCED",
      status: "COMING SOON",
      description: "A second home for a different kind of survivor. Swap this out for real information once the server is ready.",
      features: ["MORE TO EXPLORE", "NEW ADVENTURES", "DETAILS SOON"],
      address: "",
      port: ""
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
