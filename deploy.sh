#!/bin/bash

# Build both the main app and Storybook
echo "Building main application..."
npm run build

echo "Building Storybook..."
npm run build-storybook

# Create the directory structure
echo "Organizing files..."
mkdir -p dist/app dist/storybook

# Move main app files to app subdirectory
mv dist/assets dist/app/
mv dist/index.html dist/app/

# Copy Storybook files to storybook subdirectory
cp -r storybook-static/* dist/storybook/

# Copy 404.html for client-side routing
cp public/404.html dist/app/

# Create landing page
cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fender Play UI - Design System</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 40px;
            background: linear-gradient(135deg, #232DCE 0%, #C82B9F 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: #FFFFFF;
            border-radius: 16px;
            padding: 40px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.12);
            text-align: center;
            max-width: 500px;
            width: 100%;
        }
        h1 {
            color: #212529;
            margin-bottom: 10px;
            font-size: 2.5em;
            font-weight: 600;
        }
        p {
            color: #545454;
            margin-bottom: 30px;
            font-size: 1.1em;
            line-height: 1.5;
        }
        .links {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .link {
            display: inline-block;
            padding: 15px 30px;
            background: #D7263D;
            color: #FFFFFF;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.3s ease;
            min-width: 150px;
            border: none;
            cursor: pointer;
        }
        .link:hover {
            background: #E96278;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.12);
        }
        .link.storybook {
            background: #84C3A8;
            color: #212529;
        }
        .link.storybook:hover {
            background: #A9D4C1;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎸 Fender Play UI</h1>
        <p>Welcome to the Fender Design System. Choose what you'd like to explore:</p>
        <div class="links">
            <a href="./app/" class="link">Main Application</a>
            <a href="./storybook/" class="link storybook">Storybook</a>
        </div>
    </div>
</body>
</html>
EOF

# Fix asset paths in the app's index.html
sed -i 's|/riff-design-system/assets/|./assets/|g' dist/app/index.html

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete!"
echo "Your site should be available at: https://ozziekins.github.io/riff-design-system/" 