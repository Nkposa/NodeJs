# Use a lightweight Node.js base image
FROM node:18-alpine3.17

# Set working directory
WORKDIR /usr/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Ensure environment variables are loaded (dotenv will handle this in code)
ENV MONGO_URI=uriPlaceholder
ENV MONGO_USERNAME=usernamePlaceholder
ENV MONGO_PASSWORD=passwordPlaceholder

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
