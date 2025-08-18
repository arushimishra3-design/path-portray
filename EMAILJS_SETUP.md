# EmailJS Setup Guide

Your contact form is now configured to send real emails to `arushi.mishra3@gmail.com`, but you need to complete the EmailJS setup.

## 🔧 Setup Steps:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the authentication steps
- Note down your **Service ID**

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```html
Subject: New Contact Form Message from {{from_name}}

Hello Arushi,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Website
```

- Note down your **Template ID**

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

### 5. Update Configuration
- Open `src/lib/emailjs-config.ts`
- Replace the placeholder values:

```typescript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id_here',
  templateId: 'your_actual_template_id_here',
  publicKey: 'your_actual_public_key_here',
  toEmail: 'arushi.mishra3@gmail.com'
};
```

## ✅ After Setup:
- Your contact form will send real emails to `arushi.mishra3@gmail.com`
- Each form submission will include the sender's name, email, subject, and message
- You'll receive notifications in your Gmail inbox

## 🆓 Free Tier Limits:
- EmailJS free tier allows 200 emails per month
- Perfect for a portfolio website

## 🚨 Important:
- Never commit your actual EmailJS credentials to Git
- Consider using environment variables for production
- Test the form after setup to ensure emails are being sent
