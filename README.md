docker build -t testing ./ 
docker run -it -v "$(pwd):/app" -p 3000:3000 testing:latest bash 
npm start
