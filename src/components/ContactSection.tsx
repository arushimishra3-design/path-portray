import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "@/lib/emailjs-config";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Reset form when component mounts to prevent cached values
  useEffect(() => {
    setFormData({ name: "", email: "", subject: "", message: "" });
  }, []);

  // Function to clear form completely
  const clearForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Reset the form element
    const form = document.querySelector('form[key="contact-form"]') as HTMLFormElement;
    if (form) {
      form.reset();
      // Also clear any remaining input values
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach((input: Element) => {
        if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
          input.value = '';
        }
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Check if EmailJS is properly configured
      if (emailjsConfig.serviceId === 'YOUR_SERVICE_ID' || 
          emailjsConfig.templateId === 'YOUR_TEMPLATE_ID' || 
          emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY') {
        
        // Temporary fallback: show form data and provide direct email option
        console.log('Contact Form Data:', formData);
        
        toast({
          title: "Form Submitted (Development Mode)",
          description: `Name: ${formData.name}, Email: ${formData.email}, Subject: ${formData.subject}`,
        });
        
        // Reset form after showing the data
        clearForm();
        return;
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          to_email: emailjsConfig.toEmail,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        emailjsConfig.publicKey
      );
      
      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        // Reset form completely using our clearForm function
        clearForm();
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Show different messages based on error type
      if (error instanceof Error && error.message.includes('EmailJS not configured')) {
        toast({
          title: "Contact Form Not Ready",
          description: "Please complete EmailJS setup or contact me directly at arushi.mishra3@gmail.com",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again or contact me directly at arushi.mishra3@gmail.com",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      title: "Email",
      value: "arushimishra3@gmail.com",
      link: "mailto:arushimishra3@gmail.com"
    },
    {
      title: "Location",
      value: "Seattle, WA",
      link: "#"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/arushi-mishra/", icon: "in" },
    { name: "GitHub", url: "#", icon: "🔗" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "Portfolio", url: "#", icon: "🌐" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Send Message
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  {emailjsConfig.serviceId === 'YOUR_SERVICE_ID' ? 
                    "⚠️ EmailJS not configured yet. Form will show data in console for now." : 
                    "✅ Contact form is ready to send emails!"
                  }
                </p>
              </CardHeader>
              <CardContent>
                <form key="contact-form" onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="border-border focus:border-accent"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="border-border focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    className="border-border focus:border-accent"
                  />
                  
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    autoComplete="off"
                    className="border-border focus:border-accent resize-none"
                  />
                  
                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-hero hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={clearForm}
                      disabled={isSubmitting}
                      className="px-6"
                    >
                      Clear
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-accent/5 transition-colors duration-200">
                      <span className="font-medium text-foreground">{info.title}</span>
                      <a 
                        href={info.link} 
                        className="text-accent hover:text-accent-hover transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                          social.name === "LinkedIn" 
                            ? "bg-blue-600 hover:bg-blue-700 text-white" 
                            : "bg-accent/5 hover:bg-accent/10"
                        }`}
                      >
                        {social.name === "LinkedIn" ? (
                          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">in</span>
                          </div>
                        ) : (
                          <span className="text-xl">{social.icon}</span>
                        )}
                        <span className={`font-medium transition-colors duration-200 ${
                          social.name === "LinkedIn" 
                            ? "text-white group-hover:text-white" 
                            : "text-foreground group-hover:text-accent"
                        }`}>
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;