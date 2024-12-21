const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .dev.vars if it exists
try {
  const devVars = dotenv.parse(fs.readFileSync('.dev.vars'));
  Object.assign(process.env, devVars);
} catch (error) {
  console.log('No .dev.vars file found, using existing environment variables');
}

// Get configuration from environment or arguments
const projectName = process.env.PROJECT_NAME || process.argv[2] || 'lists-cancun';
const compatibilityDate = new Date().toISOString().split('T')[0];

// Read existing wrangler.toml if it exists
let config = `# The name of your project on Cloudflare Pages
name = "${projectName}"

# Compatibility date for Workers runtime
compatibility_date = "${compatibilityDate}"

# The build configuration
[build]
command = "" # No build command needed for static site
publish = "." # The directory containing your static assets

# Exclude Next.js app and configuration
[site]
exclude = [
  "app/**/*",
  "next.config.js",
  ".next/**/*"
]

# Environment variables for different deployment environments
[env.production]
name = "production"
vars = { ENVIRONMENT = "production" }

[env.preview]
name = "preview"
vars = { ENVIRONMENT = "preview" }
`;

// Add environment variables from .dev.vars if they exist
if (process.env.CLOUDFLARE_API_TOKEN && process.env.CLOUDFLARE_ACCOUNT_ID) {
  config += `
# Environment variables from .dev.vars
[vars]
CLOUDFLARE_API_TOKEN = "${process.env.CLOUDFLARE_API_TOKEN}"
CLOUDFLARE_ACCOUNT_ID = "${process.env.CLOUDFLARE_ACCOUNT_ID}"
`;
}

// Ensure scripts directory exists
const scriptsDir = path.join(__dirname);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

// Write the configuration
fs.writeFileSync(path.join(process.cwd(), 'wrangler.toml'), config);

console.log(`Wrangler configuration updated:
- Project name: ${projectName}
- Compatibility date: ${compatibilityDate}
- Environment variables: ${process.env.CLOUDFLARE_API_TOKEN ? 'configured' : 'not found'}`); 