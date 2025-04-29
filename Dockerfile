# Build stage
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build application
RUN npm run build

# Production stage
FROM python:3-alpine AS runner

# Copy static files from builder
COPY --from=builder /app/dist /app

WORKDIR /app

# Expose the port the app runs on
EXPOSE 3000

# Start Python HTTP server
CMD ["python", "-m", "http.server", "3000"]
