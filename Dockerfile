# Alpine Node Image
FROM node:12-alpine AS builder

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package.json ./
RUN npm install

# Build source
COPY ./.git ./.git
COPY ./wiki ./wiki
RUN  npm run build

# Static Web Server
FROM nginx:alpine

# Copy Prod Build
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/wiki/.vuepress/dist /usr/share/nginx/html

# Expose port and run
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]