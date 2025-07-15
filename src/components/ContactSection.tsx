import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { sendContactEmail } from "@/lib/emailjs";
import { 
  contactInfo, 
  contactBenefits, 
  roleOptions, 
  interestOptions, 
  contactContent, 
  formLabels, 
  formPlaceholders 
} from "@/constants/contact";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "Empresa deve ter pelo menos 2 caracteres"),
  role: z.string().min(1, "Cargo é obrigatório"),
  interest: z.string().min(1, "Interesse é obrigatório"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  website: z.string().max(0, "Campo deve permanecer vazio") // Honeypot field
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    message: "",
    website: "" // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const validatedData = contactFormSchema.parse(formData);
      
      // Send email using Resend
      await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        role: validatedData.role,
        interest: validatedData.interest,
        message: validatedData.message,
        website: validatedData.website // Honeypot field
      });
      
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em até 24 horas úteis.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        interest: "",
        message: "",
        website: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Erro na validação",
          description: "Por favor, corrija os campos destacados.",
          variant: "destructive",
        });
      } else {
        console.error('EmailJS Error:', error);
        toast({
          title: "Erro no envio",
          description: "Ocorreu um erro ao enviar o formulário. Tente novamente ou entre em contato pelo email faleconosco@ctctech.com.br",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };


  return (
    <section 
      id="contact-section"
      className="py-20 bg-muted/30"
      aria-labelledby="contact-title"
      role="contentinfo"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 id="contact-title" className="text-4xl font-bold mb-4">
              {contactContent.title} <span className="text-primary">{contactContent.titleHighlight}</span> {contactContent.subtitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {contactContent.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 id="form-title" className="text-2xl font-bold">{contactContent.form.title}</h3>
                  <p className="text-muted-foreground">
                    {contactContent.form.description}
                  </p>
                </div>

                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  aria-labelledby="form-title"
                  noValidate
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{formLabels.name}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={formPlaceholders.name}
                        required
                        aria-describedby={errors.name ? "name-error" : undefined}
                        aria-invalid={errors.name ? "true" : "false"}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{formLabels.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={formPlaceholders.email}
                        required
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={errors.email ? "true" : "false"}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">{formLabels.company}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder={formPlaceholders.company}
                        required
                        aria-describedby={errors.company ? "company-error" : undefined}
                        aria-invalid={errors.company ? "true" : "false"}
                        className={errors.company ? "border-red-500" : ""}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">{formLabels.role}</Label>
                      <Select onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger 
                          className={errors.role ? "border-red-500" : ""}
                          aria-describedby={errors.role ? "role-error" : undefined}
                          aria-invalid={errors.role ? "true" : "false"}
                        >
                          <SelectValue placeholder={formPlaceholders.role} />
                        </SelectTrigger>
                        <SelectContent>
                          {roleOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.role && (
                        <p id="role-error" className="text-sm text-red-500 flex items-center gap-1" role="alert">
                          <AlertCircle className="h-4 w-4" aria-hidden="true" />
                          {errors.role}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">{formLabels.interest}</Label>
                    <Select onValueChange={(value) => handleInputChange("interest", value)}>
                      <SelectTrigger 
                        className={errors.interest ? "border-red-500" : ""}
                        aria-describedby={errors.interest ? "interest-error" : undefined}
                        aria-invalid={errors.interest ? "true" : "false"}
                      >
                        <SelectValue placeholder={formPlaceholders.interest} />
                      </SelectTrigger>
                      <SelectContent>
                        {interestOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.interest && (
                      <p id="interest-error" className="text-sm text-red-500 flex items-center gap-1" role="alert">
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{formLabels.message}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={formPlaceholders.message}
                      rows={4}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={errors.message ? "true" : "false"}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-500 flex items-center gap-1" role="alert">
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot field - hidden from users but visible to bots */}
                  <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
                    <label htmlFor="website">Website (deixe vazio)</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                    aria-describedby="submit-description"
                  >
                    {isSubmitting ? contactContent.form.submittingText : contactContent.form.submitButton}
                  </Button>
                  <div id="submit-description" className="sr-only">
                    Enviar formulário de contato para solicitar demonstração
                  </div>
                </form>
                
                {/* ARIA Live Region for form status updates */}
                <div 
                  aria-live="polite" 
                  aria-atomic="true" 
                  className="sr-only"
                  id="form-status"
                >
                  {isSubmitting && "Enviando formulário..."}
                </div>
              </div>
            </Card>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              
              {/* What you'll get */}
              <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10">
                <div className="space-y-6">
                  <h3 id="benefits-title" className="text-2xl font-bold">
                    {contactContent.benefitsSection.title}
                  </h3>
                  <ul className="space-y-3" aria-labelledby="benefits-title">
                    {contactBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="space-y-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{info.title}</div>
                        <div className="text-sm font-medium text-primary">{info.value}</div>
                        <div className="text-xs text-muted-foreground">{info.description}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Urgency */}
              <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
                <div className="text-center space-y-3">
                  <h4 className="text-lg font-bold">{contactContent.urgencySection.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {contactContent.urgencySection.description}
                    <span className="font-semibold text-primary"> {contactContent.urgencySection.highlightText}</span>.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;