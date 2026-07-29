# syntax=docker/dockerfile:1

# --- Build stage: compile the static production bundle ---
FROM node:alpine AS build

WORKDIR /app

# Install dependencies (leverage layer caching)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build the optimized production bundle into /app/dist
COPY . .
RUN npm run build

# --- Runtime stage: serve the static bundle with nginx ---
FROM nginx:alpine AS runtime

# SPA-aware nginx config (client-side routing fallback to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
