# TripBot MCP

An AI-powered travel chatbot POC designed with Model Context Protocol (MCP) architecture.

## 🌍 What It Does
Given a natural language prompt like:
> "I want to go to Greece from July 17 to July 21 with $1000 budget per person"

TripBot extracts structured travel data, checks for flight and hotel matches, and returns possible packages using modular agents.

## 📁 Folder Structure
- `agents/`: Each "agent" handles one step (parse, plan, search, respond)
- `context/`: Shared MCP-style context schema passed between agents
- `app.js`: Orchestrates agent pipeline
- `.env`: For storing API keys (not included in repo)

## 🛠 Tech Stack
- Node.js backend (can be adapted to Python)
- Regex-based prompt parsing (fallback to GPT optional)
- MCP-style JSON context for modular pipeline
- Kiwi API (for flights), dummy hotels for now

## 🚀 How to Run
1. `npm install` (if using Node)
2. `node app.js` (or however you orchestrate it)
3. Test with Postman or curl

## 💡 Goals
- Showcase modular AI systems using MCP principles
- Integrate multi-provider (future-ready) travel APIs
- Keep costs low with local logic and minimal GPT usage

## 🔐 .env Example
```
KIWI_API_KEY=your-key-here
DEBUG_MODE=true
```
