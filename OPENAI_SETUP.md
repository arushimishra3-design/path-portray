# OpenAI Integration Setup Guide

Your chat widget is now ready for OpenAI integration! Here's how to set it up:

## 🔑 **Step 1: Get Your OpenAI API Key**

1. **Go to**: [platform.openai.com](https://platform.openai.com)
2. **Sign in** with your ChatGPT account
3. **Click "API Keys"** in the left sidebar
4. **Click "Create new secret key"**
5. **Copy the API key** (starts with `sk-...`)

## 📁 **Step 2: Create Environment File**

Create a `.env` file in your project root:

```bash
# Create .env file
touch .env
```

Add your API key to the `.env` file:

```env
OPENAI_API_KEY=sk-your_actual_api_key_here
PORT=3001
```

## 🚀 **Step 3: Start the Chat Server**

Open a new terminal and run:

```bash
node server.js
```

You should see:
```
🚀 Chat server running on http://localhost:3001
📝 Chat endpoint: http://localhost:3001/api/chat
💚 Health check: http://localhost:3001/health
```

## 🌐 **Step 4: Update ChatWidget API URL**

The ChatWidget is already configured to use `/api/chat`, but since we're running the backend on port 3001, update the fetch URL in `src/components/ChatWidget.tsx`:

```typescript
// Change this line:
const response = await fetch('/api/chat', {

// To this:
const response = await fetch('http://localhost:3001/api/chat', {
```

## 🧪 **Step 5: Test the Chat**

1. **Keep the backend server running** (terminal 1)
2. **Keep your frontend running** (terminal 2): `npm run dev`
3. **Open your website**: http://localhost:8080
4. **Click the chat button** and ask a question!

## 💰 **Cost Information**

- **GPT-4**: ~$0.03 per 1K input tokens, ~$0.06 per 1K output tokens
- **Typical chat**: $0.01-0.05 per conversation
- **Monthly cost**: $2-10 depending on usage

## 🔧 **Troubleshooting**

### **If you get CORS errors:**
The server is already configured with CORS enabled.

### **If you get API key errors:**
- Check your `.env` file exists
- Verify the API key is correct
- Make sure the backend server is running

### **If the chat doesn't respond:**
- Check the backend server console for errors
- Verify the API endpoint URL is correct
- Check your OpenAI account has credits

## 🎯 **What You'll Get:**

✅ **Fully functional AI chat** on your portfolio
✅ **Professional responses** about your experience
✅ **Real-time AI interaction** for visitors
✅ **Showcase of your technical skills**

## 🚀 **Ready to Launch:**

Once you complete these steps, your portfolio will have a **working AI chat assistant** that can answer questions about your experience, projects, and skills!

**Your visitors will be amazed by the interactive AI experience!** 🤖✨


