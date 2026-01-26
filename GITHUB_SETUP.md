# GitHub Repository Setup Instructions

## Option 1: Create Repository via GitHub Web Interface

1. Go to https://github.com/new
2. Repository name: `five-windows`
3. Description: `Premium website for The Five Windows Weekend - An invitation-only gathering for couples`
4. Choose: **Private** (or Public if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Option 2: After Creating the Repository

Once you've created the repository on GitHub, run these commands:

```bash
# Add the new remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/five-windows.git

# Push to the new repository
git push -u origin main
```

## Current Status

✅ Local git repository initialized
✅ Initial commit created with all files
✅ .gitignore configured to exclude:
   - node_modules
   - dist files
   - backup folders
   - credential files
   - macOS metadata files

## What's Included in the Commit

- Complete IndexNew.tsx with premium design
- All custom CSS variables (gold, cream, charcoal, teal)
- All images (Five Windows.png, five.png, ocean.jpg, mount.jpg, pic.jpg, ship.jpg)
- Video modal component
- Responsive layout components
- Framer Motion animations
- Tailwind configuration

## Next Steps After Pushing to GitHub

1. Deploy to Contabo server
2. Pull the repository on the server
3. Build and serve the application

