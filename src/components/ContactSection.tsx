import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Linkedin, Send, RotateCcw } from "lucide-react";
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
      link: "mailto:arushimishra3@gmail.com",
      icon: Mail
    },
    {
      title: "Location",
      value: "Seattle, WA",
      link: "#",
      icon: MapPin
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/arushi-mishra/",
      icon: Linkedin
    }
  ];



  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on innovative solutions? Let's discuss your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Send className="w-6 h-6" />
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Share your ideas and let's create something amazing together.
                  </p>
                </CardHeader>
                <CardContent>
                  <form key="contact-form" onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Input
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="off"
                          className="h-12 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="off"
                          className="h-12 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
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
                      className="h-12 border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                    />
                    
                    <Textarea
                      placeholder="Tell me about your project or opportunity..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      autoComplete="off"
                      className="border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none transition-all duration-200"
                    />
                    
                    <div className="flex gap-3">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-1 h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={clearForm}
                        disabled={isSubmitting}
                        className="h-12 px-6 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info - Takes 1 column */}
            <div className="space-y-6">
              <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-primary">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/20 to-muted/10 hover:from-primary/5 hover:to-primary/10 border border-border/30 hover:border-primary/20 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                            {info.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      I typically respond within 24 hours during business days.
                    </p>
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