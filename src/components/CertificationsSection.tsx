import { Badge } from "@/components/ui/badge";
import { GraduationCap, Rocket, Target } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Stanford GenAI",
      issuer: "Stanford Online",
      color: "from-red-500 to-red-600",
      pdfPath: "/certificates/stanford-genai-certificate.pdf",
      isImage: true,
      imageSrc: "/lovable-uploads/27307c8f-ed00-48d8-90a9-f4361665ecc2.png"
    },
    {
      id: 2,
      icon: Rocket,
      title: "SAFe APM",
      issuer: "Scaled Agile",
      color: "from-blue-500 to-blue-600",
      pdfPath: "/certificates/safe-agile-certification.pdf",
      isImage: true,
      imageSrc: "/lovable-uploads/67a5ccce-cd05-4e68-9207-4dde00fb1dae.png"
    },
    {
      id: 3,
      icon: Target,
      title: "OKR Coach",
      issuer: "WorkBoard",
      color: "from-purple-500 to-purple-600",
      pdfPath: "/certificates/okr-coach-certification.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Licenses & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements that demonstrate expertise in key areas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
              >
                {/* Circular Badge */}
                <div className={`w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 mb-3 ${cert.isImage ? 'p-2' : `bg-gradient-to-br ${cert.color} text-white`}`}>
                  {cert.isImage ? (
                    <img 
                      src={cert.imageSrc} 
                      alt={cert.title}
                      className="w-full h-full object-contain rounded-full"
                    />
                  ) : (
                    <cert.icon size={32} className="md:w-10 md:h-10" />
                  )}
                </div>
                
                {/* Title and Issuer */}
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
