const siteData = {
  // Site Metadata
  site: {
    name: "MexicanFood.mx",
    title: "Ultimate Directory Listing - The best place to find exactly what you need, where you are.",
    description: "Find the best Mexican restaurants in Cancun, from traditional taquerias to modern fine dining experiences.",
    logo: "https://ik.imagekit.io/listskit/Lists%20Kit%20demo/listskit-logo-transparent-whiteicon.png",
    favicon: "https://ik.imagekit.io/listskit/Lists%20Kit%20home/listskit-icon-32px.png"
  },

  // Hero Section
  hero: {
    title: "Discover Authentic Mexican Cuisine",
    subtitle: "Find the best Mexican restaurants in your area, from traditional taquerias to modern fine dining experiences. Your next memorable meal is just a click away.",
    cta: "Explore Restaurants"
  },

  // Features Section
  features: {
    discovery: {
      title: "Local Discovery",
      description: "Find authentic Mexican restaurants near you, from street tacos to fine dining experiences.",
      icon: "https://ik.imagekit.io/listskit/Lists%20Kit%20demo/point-on-map-perspective-svgrepo-com.png"
    },
    reviews: {
      title: "Verified Reviews",
      description: "Real reviews from local diners help you discover the best Mexican cuisine in your area.",
      icon: "https://ik.imagekit.io/listskit/Lists%20Kit%20demo/hand-stars-svgrepo-com.png"
    },
    details: {
      title: "Complete Details",
      description: "View menus, prices, opening hours, and special dishes before you visit.",
      icon: "https://ik.imagekit.io/listskit/Lists%20Kit%20demo/box-svgrepo-com.png"
    }
  },

  // Business Features Section
  businessFeatures: {
    visibility: {
      title: "Increased Visibility",
      description: "Get discovered by thousands of hungry diners looking for authentic Mexican cuisine. Our platform helps you reach both locals and tourists searching for the best restaurants.",
      icon: "https://ik.imagekit.io/listskit/Lists%20Kit%20demo/passport-svgrepo-com.png"
    },
    management: {
      title: "Easy Management",
      description: "Update your menu, hours, and special offers in real-time. Respond to customer reviews and showcase your restaurant's unique atmosphere with high-quality photos.",
      icon: "https://ik.imagekit.io/listskit/Lists%20Kit%20demo/high-speed-rail-svgrepo-com.png"
    },
    analytics: {
      title: "Insights & Analytics",
      description: "Track your listing's performance with detailed analytics. See how many people view your restaurant, click through to your website, or save your location for later.",
      icon: "https://ik.imagekit.io/listskit/Lists%20Kit%20demo/bank-card-svgrepo-com.png"
    }
  },

  // Pricing Section
  pricing: {
    title: "Choose Your Plan",
    trialText: "7-day free trial, no credit card required",
    plans: {
      basic: {
        name: "Basic Listing",
        price: 29,
        features: [
          "Basic Restaurant Profile",
          "Photo Gallery (up to 5 photos)",
          "Contact Information",
          "Basic Analytics",
          "Customer Reviews"
        ]
      },
      premium: {
        name: "Premium Listing",
        price: 49,
        featured: true,
        features: [
          "Enhanced Restaurant Profile",
          "Unlimited Photo Gallery",
          "Menu Display",
          "Featured in Search Results",
          "Advanced Analytics",
          "Priority Support"
        ]
      },
      enterprise: {
        name: "Enterprise",
        price: 99,
        features: [
          "Everything in Premium",
          "Multiple Location Management",
          "Social Media Integration",
          "Promotional Tools",
          "API Access",
          "Dedicated Account Manager"
        ]
      }
    }
  },

  // Call to Action Sections
  cta: {
    main: {
      title: "Are You a Restaurant Owner?",
      description: "Join our growing community of Mexican restaurants and reach thousands of potential customers. List your restaurant today and start growing your business.",
      buttonText: "List Your Restaurant"
    },
    business: {
      title: "Grow Your Restaurant Business",
      description: "Join the largest directory of Mexican restaurants and reach thousands of potential customers",
      buttonText: "Start Free Trial"
    }
  },

  // Form Labels
  form: {
    title: "Start Your Free Trial",
    fields: {
      name: "Restaurant Name",
      address: "Address",
      phone: "Phone Number",
      email: "Email",
      website: "Website",
      description: "Description"
    },
    submitButton: "Start Free Trial",
    successMessage: "Thank you for signing up! Your 7-day free trial has started. We will contact you shortly with next steps."
  },

  // Filter Categories
  filters: {
    all: "All",
    categories: [
      "Restaurant",
      "Bar",
      "Cafe",
      "Street Food",
      "Fine Dining"
    ]
  }
};

// Make it available globally
if (typeof window !== 'undefined') {
  window.siteData = siteData;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
} 