docker build -t testing ./ 
docker run -it -v "$(pwd):/app" -p 3000:3000 testing:latest bash 
npm start


///
npx create-react-app dashboard
cd my-app
npm start
//


// ng serve --host 0.0.0.0//
