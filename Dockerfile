# Stage 1: Build static assets
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package descriptors
COPY package*.json ./

# Install dependencies cleanly
RUN npm install

# Copy source code and configurations
COPY . ./

# Run quality checks (Typecheck & Unit Tests)
RUN npm test

# Build production bundle
RUN npm run build

# Stage 2: Production web server (Nginx Alpine)
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Health check (Use IPv4 loopback 127.0.0.1 and start-period to prevent premature failure on Alpine)
HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O - http://127.0.0.1/healthz | grep -q "healthy" || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
