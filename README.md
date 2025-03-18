# SkillMatch

A modern job matching platform that connects recruiters with candidates using advanced ML/NLP algorithms.

## Features

- **Smart Matching**: ML/NLP-powered job and candidate matching
- **Real-time Chat**: WebSocket-based messaging between recruiters and candidates
- **Profile Management**: Comprehensive profiles for both candidates and recruiters
- **Skill Assessment**: Automated skill extraction and verification
- **Application Tracking**: End-to-end application lifecycle management

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Prisma ORM
- **ML/NLP**: TensorFlow.js for skill matching
- **Real-time**: WebSocket for messaging
- **Infrastructure**: Monorepo with Turborepo

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0
- PostgreSQL >= 14

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/skillmatch.git
cd skillmatch
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp packages/db/.env.example packages/db/.env
# Edit .env with your database credentials
```

4. Generate Prisma client:
```bash
cd packages/db && pnpm db:generate
```

5. Start development servers:
```bash
pnpm dev
```

## Project Structure

```
skillmatch/
├── apps/
│   ├── web/          # Next.js frontend
│   ├── backend/      # Express API server
│   └── websocket/    # WebSocket server
└── packages/
    ├── db/           # Database models & migrations
    ├── ui/           # Shared UI components
    └── config/       # Shared configurations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
