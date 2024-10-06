In vite.config ,
  base: '/alaani',  // Set this to match your repository name



in .env.production
VITE_API_URL=https://hibaalaani.github.io/alaani



to double check our base I added base in App.js

  <Router basename='alaani' >