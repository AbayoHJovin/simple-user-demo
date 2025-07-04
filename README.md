## User simple demo

This is a simple REST API built for the backend development internship application. It provides endpoints to create and retrieve user data, stored in memory.
Programming Language and Framework

Language: TypeScript
Framework: Express.js
Dependencies:
express: For building the REST API
uuid: For generating unique user IDs
TypeScript-related dev dependencies for type safety and development

Setup Instructions

Prerequisites:

Node.js (version 16 or higher)
pnpm (comes with Node.js). Also npm can work

Clone the Repository:
git clone <https://github.com/AbayoHJovin/simple-user-demo.git>
cd user-project

Install Dependencies:
pnpm install

Build the Project:
pnpm run build

Run the API:
pnpm start

The server will start on http://localhost:3000.

Development Mode (optional):To run with live reloading using ts-node:
pnpm run dev

API Endpoints
POST /users
Creates a new user.
Request:
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john@example.com"}'

Response (201 Created):
{
"id": "generated-uuid",
"name": "John Doe",
"email": "john@example.com"
}

Error Response (400 Bad Request):
{ "error": "Name is required and must be a string" }

GET /users/:id
Retrieves a user by ID.
Request:
curl http://localhost:3000/users/<user-id>

Response (200 OK):
{
"id": "<user-id>",
"name": "John Doe",
"email": "john@example.com"
}

Error Response (404 Not Found):
{ "error": "User not found" }

Notes

User data is stored in memory and will be cleared when the server restarts.
Basic error handling is implemented for missing fields, invalid email format, and non-existent users.
The API uses UUIDs for unique user IDs.
