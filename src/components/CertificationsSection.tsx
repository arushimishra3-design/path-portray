import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      logo: "🎓", // Stanford Online logo placeholder
      title: "XAPRO210 - Mastering Generative AI for Product Innovation",
      issuer: "Stanford Online",
      issuedDate: "Apr 2025",
      credentialId: "",
      showCredential: "Show credential",
      skills: ["GenAI", "Product Management", "Product Strategy"],
      certificateFile: "Stanford Online Certificate.pdf",
      pdfPath: "/certificates/stanford-genai-certificate.pdf"
    },
    {
      id: 2,
      logo: "🚀", // Scaled Agile logo placeholder
      title: "Certified SAFe 5 Agile Product Manager",
      issuer: "Scaled Agile, Inc.",
      issuedDate: "Oct 2022",
      credentialId: "01203733-2467",
      showCredential: "Show credential",
      skills: ["SAFe", "Agile", "Product Management"],
      certificateFile: "SAFe Agile Certification",
      pdfPath: "/certificates/safe-agile-certification.pdf"
    },
    {
      id: 3,
      logo: "🎯", // Results Foundry logo placeholder
      title: "OKR Certified Coach",
      issuer: "Results Foundry at WorkBoard",
      issuedDate: "Nov 2021",
      credentialId: "",
      showCredential: "Show credential",
      skills: ["OKR", "Coaching", "Strategy"],
      certificateFile: "",
      pdfPath: "/certificates/okr-coach-certification.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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

          <div className="space-y-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
                        {cert.logo}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {cert.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-2">
                            {cert.issuer}
                          </p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>Issued {cert.issuedDate}</p>
                          {cert.credentialId && (
                            <p className="mt-1">Credential ID {cert.credentialId}</p>
                          )}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <a
                            href={cert.pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors hover:underline"
                          >
                            {cert.showCredential}
                          </a>
                          {cert.certificateFile && (
                            <span className="text-sm text-muted-foreground">
                              📄 {cert.certificateFile}
                            </span>
                          )}
                        </div>
                        
                        {/* Issuer Logo Placeholder */}
                        <div className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              All certifications are verified and can be validated through their respective issuing organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
