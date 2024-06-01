FROM node:lts-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

COPY --from=build /app/dist/ci-frontend/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
