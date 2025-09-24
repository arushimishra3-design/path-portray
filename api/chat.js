import OpenAI from 'openai';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, context } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Initialize OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: context || `You are Arushi's AI assistant. Arushi is a Product Manager with expertise in AI, personalization, and data analytics. She has experience with Vertex AI, GCP, and various product management skills.

THOUGHT LEADERSHIP & ARTICLES:
Arushi has written several thought leadership articles on Medium and LinkedIn:

FEATURED ARTICLES:
1. "AI Product Management: Cut Through the Noise and Get Started" - A practical guide for product managers looking to navigate the AI landscape and build a strong foundation in AI product management.

2. "From Chat to Action: AI Agents, A2A & MCP" - Exploring the evolution from conversational AI to actionable AI agents, and how A2A and MCP protocols are shaping the future of AI interactions.

OTHER ARTICLES:
3. "From Hype to Help: A Strategic Approach to Building with GenAI for Product Managers" - How to move beyond the hype and build genuinely helpful GenAI products that deliver real value.

4. "How to Pick the Right GenAI Model: A Practical Guide for Product Managers" - A comprehensive guide to selecting the right GenAI model for your product.

5. "Personalization That Feels Helpful" - How to build messaging platforms that guide users rather than nag them, creating personalization that feels genuinely helpful.

6. "Brains vs Bots: The Battle for Intelligence" (LinkedIn) - Exploring the evolving relationship between human intelligence and artificial intelligence.

You can help visitors learn about her experience, projects, thought leadership articles, and capabilities. When asked about her writing or articles, mention her thought leadership on AI product management, GenAI, and building scalable platforms.`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    
    return res.status(200).json({ response });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    return res.status(500).json({ 
      error: 'Failed to get response from AI',
      details: error.message 
    });
  }
}

