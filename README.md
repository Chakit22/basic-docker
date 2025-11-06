# Webhook Receiver - Docker Practice

A simple Node.js webhook receiver to learn Docker basics.

## What This Does

Receives POST requests on `/webhook` and logs them to console.

## Project Structure

```
.
├── Dockerfile
├── server.js
├── package.json
└── README.md
```

## Files

**server.js** - Express server that listens on port 3000  
**Dockerfile** - Instructions to containerize the app  
**package.json** - Node.js dependencies (express)

## How to Run

### Build the Docker image
```bash
docker build -t webhook-receiver .
```

### Run the container
```bash
docker run -p 3000:3000 --name webhook-server webhook-receiver
```

### Test it
```bash
curl -X POST http://localhost:3000/webhook \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

## Port Mapping Explained

`-p 3000:3000` means:
- Left (3000) = Port on your laptop (localhost:3000)
- Right (3000) = Port inside the container

## Useful Commands

```bash
# See running containers
docker ps

# See all containers (including stopped)
docker ps -a

# Stop the container
docker stop webhook-server

# Remove the container
docker rm webhook-server

# Remove the image
docker rmi webhook-receiver

# View logs
docker logs webhook-server
```

## Key Learnings

- Dockerfile defines how to build an image
- Image = blueprint, Container = running instance
- Apps run INSIDE containers (isolated)
- `-p` flag creates port mapping to access from localhost
- Containers only run locally unless deployed to cloud
- Here, we basically are running a container named `webhook-reciever` using the image which we have built named `webhook-reciever`

## Next Steps

- Add environment variables
- Use Docker Compose for multi-container apps
- Add volumes for persistent data
- Deploy to Railway/AWS/DigitalOcean
