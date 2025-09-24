import { track } from '@vercel/analytics';

// Track page views with location data
export const trackPageView = (pageName: string, location?: { city?: string; country?: string }) => {
  track('page_view', {
    page: pageName,
    location: location ? `${location.city}, ${location.country}` : 'unknown'
  });
};

// Track custom events
export const trackCustomEvent = (eventName: string, properties?: Record<string, any>) => {
  track(eventName, properties);
};

// Track portfolio interactions
export const trackPortfolioInteraction = (action: string, section: string) => {
  track('portfolio_interaction', {
    action,
    section,
    timestamp: new Date().toISOString()
  });
};

// Track chat usage
export const trackChatUsage = (action: 'open' | 'close' | 'message_sent') => {
  track('chat_usage', {
    action,
    timestamp: new Date().toISOString()
  });
};

