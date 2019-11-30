# Nodejs optimization using c++ addons
Service using node js to create 'QR codes'(CPU intensive task) to understand how can we use C++ for optimizations.

# docker commands
docker build -t qrcode .
docker run -p 3000:3000 qrcode


# request to test
http://localhost:3000/nodejs?no=10000
http://localhost:3000/cpp?no=10000