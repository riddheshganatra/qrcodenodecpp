docker stop qrcodet
docker rm qrcodet
docker build -t qrcodetest .
docker run -p 3000:3000 --name qrcodet qrcodetest