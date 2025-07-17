# Build stage
FROM node:24-alpine AS build

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++ autoconf automake libtool zlib-dev

# Copy package files
COPY package*.json ./

# Install dependencies without optional packages that cause build issues
RUN npm ci --ignore-scripts

# Copy source code
COPY . .

# Build the application (use simple build without optimization)
RUN npm run build:dev

# Production stage
FROM nginx:alpine AS production

# Install curl for health checks
RUN apk add --no-cache curl

# Copy built application from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create SSL directory
RUN mkdir -p /etc/nginx/ssl

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1

# Expose ports
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]