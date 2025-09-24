export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract geolocation data from Vercel headers and decode URL encoding
    const city = req.headers['x-vercel-ip-city'] ? decodeURIComponent(req.headers['x-vercel-ip-city']) : 'Unknown';
    const country = req.headers['x-vercel-ip-country'] ? decodeURIComponent(req.headers['x-vercel-ip-country']) : 'Unknown';
    const region = req.headers['x-vercel-ip-country-region'] ? decodeURIComponent(req.headers['x-vercel-ip-country-region']) : 'Unknown';
    const latitude = req.headers['x-vercel-ip-latitude'] || 'Unknown';
    const longitude = req.headers['x-vercel-ip-longitude'] || 'Unknown';
    const timezone = req.headers['x-vercel-ip-timezone'] ? decodeURIComponent(req.headers['x-vercel-ip-timezone']) : 'Unknown';
    
    return res.status(200).json({
      city,
      country,
      region,
      latitude,
      longitude,
      timezone
    });
  } catch (error) {
    console.error('Geolocation error:', error);
    return res.status(500).json({ 
      error: 'Failed to get location',
      city: 'Unknown',
      country: 'Unknown',
      region: 'Unknown',
      latitude: 'Unknown',
      longitude: 'Unknown',
      timezone: 'Unknown'
    });
  }
}

