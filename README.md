# Directory Site Generator

A flexible directory website generator with two integrated applications:

1. **Static Directory Site (Root)**: A customizable business listings website, currently configured for Mexican restaurants in Cancun.
   - Located in the root directory
   - Built with vanilla JavaScript, HTML, and CSS
   - Deployed via Cloudflare Pages
   - Run with: `npm run wrangler:dev`
   - Deploy with: `npm run wrangler:deploy`

2. **Next.js Admin Application (`/app`)**: A modern web application for managing the directory content.
   - Located in the `/app` directory
   - Built with Next.js, TypeScript, and Tailwind CSS
   - Independent from the main directory site
   - Run with: `npm run next:dev`
   - Build with: `npm run next:build`
   - Start production server with: `npm run next:start`

## Creating a New Directory

You can create a new directory project by following these steps:

1. Clone this repository as a template:
   ```bash
   git clone https://github.com/yourusername/lists-cancun.git my-new-directory
   cd my-new-directory
   ```

2. Update `sitedata.js` with your directory information:
   ```javascript
   const siteData = {
     site: {
       name: "Your Directory Name",     // e.g., "London Coffee Shops"
       title: "Your Site Title",        // e.g., "Find the Best Coffee in London"
       description: "Description...",    // e.g., "Discover London's finest cafes"
       logo: "path/to/your/logo.png",
       favicon: "path/to/favicon.png"
     },
     // ... customize other sections
   };
   ```

3. Clear and update `directorydata.js` with your listings:
   ```javascript
   const directoryData = [
     {
       "Title": "Business Name",
       "tags": "your, category, tags",    // e.g., "coffee, breakfast, wifi"
       "Likes": 4.5,
       "topLeftText": "Contact info",
       "description": "Short description",
       "modalDescription": "Full details",
       "imageUrl": "path/to/image.jpg",
       "linkUrl": "https://business-website.com",
       "bottomText": "Additional info"     // e.g., "Open 7AM-7PM"
     }
   ];
   ```

4. Customize the theme in `style.css`:
   ```css
   :root {
     --background-dark: #YOUR_COLOR;
     --background-light: #YOUR_COLOR;
     --text-dark: #YOUR_COLOR;
     --accent: #YOUR_COLOR;
   }
   ```

5. Update images and assets:
   - Replace the hero background image
   - Update feature icons
   - Change the logo

6. Modify category filters in `sitedata.js`:
   ```javascript
   filters: {
     all: "Show All",
     categories: [
       "Your Category 1",
       "Your Category 2",
       "Your Category 3"
     ]
   }
   ```

7. Customize pricing plans in `sitedata.js` if offering business listings:
   ```javascript
   pricing: {
     basic: {
       name: "Basic Listing",
       price: "Your Price",
       features: ["Feature 1", "Feature 2", "Feature 3"]
     },
     // ... other plans
   }
   ```

### Example Directories You Could Create

- 🏠 Real Estate Listings
- 🎨 Art Galleries
- 🏋️ Fitness Centers
- 🎸 Music Venues
- 🏥 Medical Clinics
- 📚 Bookstores
- 🎮 Gaming Centers
- 🐾 Pet Services
- 🎨 Tattoo Studios
- 🚗 Auto Services

## Features

- 🔍 Search functionality
- 🏷️ Category filtering
- 📱 Responsive design
- 🌙 Dark mode
- 🖼️ Image galleries
- ⭐ Rating system
- 📍 Location information
- 💼 Business submission portal

## Getting Started

### Prerequisites

- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript
- A web browser
- Git (optional)

### Local Development

1. Clone this repository or download the files
2. Open the project in your code editor
3. To avoid CORS issues, run a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```
4. Visit `http://localhost:8000` in your browser

## Customizing Content

### Site Content

All site-specific content is stored in `sitedata.js`. This includes:

```javascript
const siteData = {
  site: {
    name: "Your Site Name",
    title: "Your Site Title",
    description: "Your site description",
    logo: "path/to/logo.png",
    favicon: "path/to/favicon.png"
  },
  hero: {
    title: "Main headline",
    subtitle: "Subheadline text",
    cta: "Call to action button text"
  },
  features: {
    discovery: {
      icon: "path/to/icon.png",
      title: "Feature title",
      description: "Feature description"
    },
    // ... more features
  },
  // ... additional sections
};
```

### Adding Listings

Restaurant listings are stored in `directorydata.js`:

```javascript
const directoryData = [
  {
    "Title": "Restaurant Name",
    "tags": "restaurant, mexican, seafood", // Categories for filtering
    "Likes": 4.5,                          // Rating out of 5
    "topLeftText": "+1 234 567 8900",      // Usually phone number
    "description": "Short description",     // Card description
    "modalDescription": "Full description", // Modal description
    "imageUrl": "path/to/image.jpg",       // Main image
    "linkUrl": "https://restaurant.com",    // Restaurant website
    "bottomText": "Additional info"         // Optional bottom text
  },
  // ... more restaurants
];
```

### Customizing Styles

The site uses CSS variables for easy theme customization. Main colors and styles can be modified in `style.css`:

```css
:root {
  --background-dark: #202227;
  --background-light: #f7faff;
  --text-dark: #2d3748;
  --accent: #04F5F8;
}
```

## Deployment

### Directory Site Deployment (Root)

#### Option 1: Using Wrangler CLI with Automatic Configuration (Recommended)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment:
   - Create a `.dev.vars` file in the root directory (optional):
     ```
     CLOUDFLARE_API_TOKEN=your_api_token
     CLOUDFLARE_ACCOUNT_ID=your_account_id
     PROJECT_NAME=your_project_name  # Optional, defaults to lists-cancun
     ```
   - Or set these as environment variables
   - Or pass the project name as an argument (see step 4)

3. Login to Cloudflare (if not using environment variables):
   ```bash
   npx wrangler login
   ```

4. Development with automatic configuration:
   ```bash
   # Using environment variables or .dev.vars
   npm run wrangler:dev-auto

   # Or specify project name directly
   npm run wrangler:dev-auto your-project-name
   ```

5. Deploy with automatic configuration:
   ```bash
   # Using environment variables or .dev.vars
   npm run wrangler:deploy-auto

   # Or specify project name directly
   npm run wrangler:deploy-auto your-project-name
   ```

The configuration script will:
- Set up wrangler.toml with your project name
- Configure the current date as compatibility_date
- Include your Cloudflare credentials if available
- Exclude the Next.js app from deployment

#### Option 2: Using Wrangler CLI (Manual Configuration)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Login to Cloudflare:
   ```bash
   npx wrangler login
   ```

3. Development:
   ```bash
   # Start local development server
   npm run wrangler:dev
   ```

4. Deploy:
   ```bash
   # Deploy to Cloudflare Pages
   npm run wrangler:deploy
   ```

The directory site will be deployed to `https://lists-cancun.pages.dev` (or your custom domain if configured).

### Next.js App Deployment

The Next.js application in the `/app` directory can be deployed independently:

1. Build the application:
   ```bash
   npm run next:build
   ```

2. Choose your deployment platform:
   - **Vercel** (Recommended):
     - Connect your GitHub repository
     - Set the root directory to `/app`
     - Vercel will automatically detect Next.js settings
   
   - **Manual deployment**:
     - Run `npm run next:build`
     - Deploy the `.next` directory to your hosting provider
     - Start the production server with `npm run next:start`

### Custom Domain Setup

1. In your Cloudflare Pages project settings:
   - Go to "Custom domains"
   - Click "Set up a custom domain"
   - Follow the prompts to add your domain
2. Update your domain's DNS settings to point to Cloudflare

### Project Structure

```
.
├── components/           # Reusable HTML components
├── .github/             # GitHub Actions workflows
├── wrangler.toml        # Cloudflare Wrangler configuration
├── package.json         # Project dependencies and scripts
├── index.html           # Main entry point
├── sitedata.js          # Site content configuration
├── directorydata.js     # Restaurant listings data
├── script.js            # Main JavaScript functionality
└── style.css           # Global styles
```

## Business Features

### Restaurant Submission

The site includes a submission form for restaurants (`list-your-restaurant.html`):

1. Restaurants can choose from three plans:
   - Basic Listing
   - Premium Listing
   - Enterprise
2. 7-day free trial available
3. Form collects:
   - Restaurant name
   - Address
   - Contact information
   - Description
   - Website
   - Plan selection

### Admin Features

To manage submissions:
1. Implement a backend service (not included)
2. Connect the form submission in `script.js`
3. Add validation and processing logic
4. Set up email notifications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 