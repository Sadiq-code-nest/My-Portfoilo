# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (all, including dev for build)
RUN npm ci --prefer-offline --no-audit

# Copy source files
COPY . .

# Build the application
RUN npm run build && \
    # Remove source maps to save space
    find dist -name "*.map" -type f -delete && \
    # List the dist folder to verify build
    ls -lah dist/

# ---------- Stage 2: Production with nginx ----------
FROM nginx:1.27-alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Verify files were copied
RUN ls -lah /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
