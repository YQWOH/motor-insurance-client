# Motor Insurance - Frontend

This is a React-based frontend application for a motor insurance website. It provides functionalities for users to log in with Google OAuth, view a list of users (with masked emails until revealed), and manage authentication status. The application is built with **Next.js**, **NextAuth.js**, **React Redux**, **Tailwind CSS**, and is Dockerized for easy deployment.

## Features

- Login with Google OAuth: Users can log in using their Google accounts via NextAuth.js.
- Protected User List: Displays users filtered by specific criteria (first name starts with "G" or last name starts with "W"). Email addresses are initially masked and can be revealed by clicking a button.
- Session Management: Uses NextAuth.js for session management and authentication.
- Responsive UI: Styled using Tailwind CSS.
- Dockerized: For easy containerization and deployment.
- API Pagination: Fetches and traverses paginated API data to display a complete list of users.

## Tech Stack

- Next.js: React framework for server-side rendering and static site generation.
- NextAuth.js: Authentication solution for Next.js applications.
- React Redux: For state management.
- Tailwind CSS: Utility-first CSS framework for responsive design.
- Axios: For making API requests.
- Docker: For containerization and deployment.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 18 or higher recommended)
- [Docker](https://www.docker.com/get-started)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Configuration

The project uses environment variables to configure Google OAuth credentials and other settings.
These variables are stored in .env.local:

bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

## Installation

1. **Clone the repository**:

bash
git clone https://github.com/YQWOH/motor-insurance-client.git
cd motor-insurance-client

2. **Install dependencies and start development server**:

bash
npm install
npm start

3. **To run in docker**:

- Build the Docker image and Run the Docker container:

bash
docker build -t motor-insurance-client .
docker run -p 3000:3000 motor-insurance-client

4. **If you want to run the app using Docker Compose:**:

- Create a docker-compose.yml (if not already present):

yaml
version: "3.8"
services:
motor-insurance-client:
build: .
ports: - "3000:3000"
environment:
NEXTAUTH_URL: "http://localhost:3000"
NEXTAUTH_SECRET: "your-nextauth-secret"
GOOGLE_CLIENT_ID: "your-google-client-id"
GOOGLE_CLIENT_SECRET: "your-google-client-secret"

- Run the app using Docker Compose:

bash
docker-compose up --build

5. **Available Scripts**:
   In the project directory, you can run

- npm start

  Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

- npm run build

  Builds the app for production in the build folder. It optimizes the build for best performance.
