@echo off
echo Building Hope3 Foundation website...
npm run build
echo.
echo Build complete! 
echo.
echo Deploy options:
echo 1. Upload 'dist' folder to your web hosting
echo 2. Use Vercel: vercel --prod
echo 3. Use Netlify: netlify deploy --prod --dir=dist
echo.
pause