import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
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
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@fastcomm.health",
      description: "Resposta em até 4 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 11 3000-0000",
      description: "Seg-Sex 8h às 18h"
    },
    {
      icon: MapPin,
      title: "Escritório",
      value: "São Paulo, SP",
      description: "Faria Lima, 1000"
    },
    {
      icon: Clock,
      title: "Suporte",
      value: "24/7",
      description: "Para clientes Premium"
    }
  ];

  const benefits = [
    "Demonstração personalizada da plataforma",
    "Análise gratuita da sua arquitetura atual",
    "Roadmap de implementação detalhado",
    "Estimativa de ROI e economia de custos",
    "Acesso a case studies relevantes"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Pronto para <span className="text-primary">Transformar</span> suas Integrações?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agende uma demonstração personalizada e descubra como o Fastcomm pode 
              acelerar suas integrações de saúde.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Solicitar Demonstração</h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário e nossa equipe técnica entrará em contato.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail corporativo</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="email@empresa.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Nome da empresa"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Cargo</Label>
                      <Select onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu cargo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cto">CTO</SelectItem>
                          <SelectItem value="cio">CIO</SelectItem>
                          <SelectItem value="tech-lead">Tech Lead</SelectItem>
                          <SelectItem value="architect">Arquiteto de Software</SelectItem>
                          <SelectItem value="director">Diretor de TI</SelectItem>
                          <SelectItem value="manager">Gerente de TI</SelectItem>
                          <SelectItem value="developer">Desenvolvedor</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Área de interesse</Label>
                    <Select onValueChange={(value) => handleInputChange("interest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="O que mais te interessa?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fhir">Integrações FHIR</SelectItem>
                        <SelectItem value="hl7">Conectividade HL7</SelectItem>
                        <SelectItem value="tiss">Padrão TISS</SelectItem>
                        <SelectItem value="legacy">Modernização de sistemas legados</SelectItem>
                        <SelectItem value="healthtech">Conexão com healthtechs</SelectItem>
                        <SelectItem value="analytics">Analytics e BI</SelectItem>
                        <SelectItem value="compliance">Compliance e segurança</SelectItem>
                        <SelectItem value="all">Solução completa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Desafio ou necessidade específica</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descreva brevemente seu desafio atual com integrações..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar Demonstração"}
                  </Button>
                </form>
              </div>
            </Card>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              
              {/* What you'll get */}
              <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">
                    O que você receberá:
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
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
                  <h4 className="text-lg font-bold">Resposta Garantida</h4>
                  <p className="text-sm text-muted-foreground">
                    Nossa equipe técnica responde todas as solicitações em até 
                    <span className="font-semibold text-primary"> 4 horas úteis</span>.
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