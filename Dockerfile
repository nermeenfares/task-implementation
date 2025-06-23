FROM node:20-alpine
WORKDIR /app
COPY . .
ENV INSTALL_CYPRESS=false
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
