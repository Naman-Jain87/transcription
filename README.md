# Transcription Service

A minimal Node.js + TypeScript API for mocking audio transcription and storing results in MongoDB.

## Features
- **POST /transcription**: Accepts `audioUrl`, mocks transcription, stores in MongoDB, returns record ID.
- Clean structure (routes, controllers, services, models).
- Uses dotenv for config.

## Requirements
- Node.js v20.19.5
- MongoDB (local or Atlas)

## Setup

```bash
npm install
npm run dev
```

API will run on `http://localhost:4000`

### Example Request
```bash
curl -X POST http://localhost:4000/transcription   -H "Content-Type: application/json"   -d '{ "audioUrl": "https://example.com/sample.mp3" }'
```

Response:
```json
{ "id": "652c1b..." }
```