FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]

# steps
# docker build . -t reactimage
# docker images
# docker run reactimage
# open duplicate terminal
# docker ps
# docker exec -it <container id> sh
# if ypu want to push your image to docker hub then follow below steps
# docker tag d13643077095 avadhutthorat/reactdocker:reactimage
# docker push avadhutthorat/reactdocker:reactimage