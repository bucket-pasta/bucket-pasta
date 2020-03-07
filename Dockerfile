FROM node:12

COPY package.json package.json  
RUN npm install

# Add your source files
COPY ./bucket-pasta-server .  
CMD ["npm","start"]  