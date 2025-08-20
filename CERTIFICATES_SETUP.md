# Certificates Setup Guide

Your certifications section is now ready to display actual PDF certificates! Here's how to set it up:

## 📁 **File Structure:**
```
public/
└── certificates/
    ├── stanford-genai-certificate.pdf
    ├── safe-agile-certification.pdf
    └── okr-coach-certification.pdf
```

## 🔧 **How to Add Your Certificates:**

### **Step 1: Add PDF Files**
1. **Place your actual PDF certificates** in the `public/certificates/` folder
2. **Rename them** to match the paths in the component:
   - `stanford-genai-certificate.pdf` - Your Stanford GenAI certificate
   - `safe-agile-certification.pdf` - Your SAFe Agile certificate
   - `okr-coach-certification.pdf` - Your OKR Coach certificate

### **Step 2: Update File Paths (if needed)**
If your PDFs have different names, update the `pdfPath` in `src/components/CertificationsSection.tsx`:

```typescript
{
  // ... other properties
  pdfPath: "/certificates/your-actual-filename.pdf"
}
```

### **Step 3: Test the Links**
- **"Show credential"** buttons will now open PDFs in new tabs
- **PDFs will display** in the browser or download (depending on browser settings)

## 🎯 **Current Setup:**

### **Stanford GenAI Certificate:**
- **File**: `/certificates/stanford-genai-certificate.pdf`
- **Button**: Opens PDF in new tab
- **Skills**: GenAI, Product Management, Product Strategy

### **SAFe Agile Certificate:**
- **File**: `/certificates/safe-agile-certification.pdf`
- **Button**: Opens PDF in new tab
- **Credential ID**: 01203733-2467
- **Skills**: SAFe, Agile, Product Management

### **OKR Coach Certificate:**
- **File**: `/certificates/okr-coach-certification.pdf`
- **Button**: Opens PDF in new tab
- **Skills**: OKR, Coaching, Strategy

## 🚀 **Features:**

### **PDF Links:**
- ✅ **"Show credential"** buttons are now functional
- ✅ **Opens PDFs in new tabs** (target="_blank")
- ✅ **Secure links** (rel="noopener noreferrer")
- ✅ **Hover effects** with underline

### **File Display:**
- ✅ **Certificate file names** shown below buttons
- ✅ **PDF icons** (📄) for visual clarity
- ✅ **Professional appearance** matching LinkedIn style

## 📋 **Next Steps:**

1. **Add your actual PDF certificates** to the `public/certificates/` folder
2. **Test the links** by clicking "Show credential" buttons
3. **Customize file names** if needed
4. **Deploy to Vercel** - PDFs will work in production too!

## ⚠️ **Important Notes:**

- **PDFs must be in the `public` folder** to be accessible
- **File paths are case-sensitive**
- **PDFs will open in new tabs** for better user experience
- **Works both locally and in production**

Your certifications section is now fully functional with PDF linking! 🎉📜
