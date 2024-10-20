# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the Next.js project
RUN npm run build

# Use a minimal image for production
FROM node:18-alpine AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy only the built output and node_modules from the builder stage
COPY --from=builder /app/ .

# Expose the application port
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]