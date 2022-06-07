module.exports = {
  siteUrl: "https://goldko.co.il", // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "goldko", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "goldko", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "goldko", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://wordpress.theasdfghjkl.com",
  subscribeWidget: {
    visible: true,
    title: "goldko",
    helpText: "הישארו מעודכנים",
    successMessage: "תודה ההודעה נשלחה בהצלחה",
  },
  header: {
    navigation: [
      {
        label: "דף הבית",
        url: "https://goldko.co.il/",
      },
      {
        label: "יצירת קשר",
        url: "https://goldko.co.il/contact",
      },
    ],
  },
  footer: {
    copyright: "כל הזכויות שמורות ",
    navigation: [
      {
        label: "דף הבית",
        url: "https://goldko.co.il/",
      },
      {
        label: "Sitemap",
        url: "https://goldko.co.il/sitemap.xml",
      },
      
      {
        label: "יצירת קשר",
        url: "https://goldko.co.il/contact",
      },
     
    ],
  },
  socialLinks: {
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "https://goldko.co.il/",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "goldko",
    description:
      "goldko",
  },
  twitterCard: {
    title: "",
    description:
      "",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "2391725224459953",
  },
  siteTitle: "goldko",
  siteDescription:
    "goldko",
  language: "he",
  direction: "rtl",
  logoUrl: "logo.png",
  iconUrl: "favicon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "logo.png",
  themeConfig: {
    variables: [
      {
        varName: "--primary-color",
        value: `#ff0030`,
      },
      {
        varName: "--primary-color-active",
        value: `#ff0030`,
      },
      {
        varName: "--primary-color-light",
        value: `#ff0030`,
      },
     
    
    ],
    	 stylesheets: [
    'https://goldko.ussl.info/style.css',
    {
      href: 'https://goldko.ussl.info/style.css',
      type: 'text/css',
    },
  ],

   
  },
};
