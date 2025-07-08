import { Shield, CheckCircle, Award, Zap, LucideIcon } from "lucide-react";

export interface Partner {
  name: string;
  logo: string;
  logoUrl: string | null;
  websiteUrl: string | null;
}

export interface Certification {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export const partners: Partner[] = [
  { 
    name: "Hospital Moinhos de Vento", 
    logo: "MV", 
    logoUrl: "/logos/hospitals/hospital-moinhos.jpg",
    websiteUrl: "https://www.hospitalmoinhos.org.br"
  },
  { 
    name: "HCOR", 
    logo: "HC", 
    logoUrl: "/logos/hospitals/hcor.png",
    websiteUrl: "https://www.hcor.com.br"
  },
  { 
    name: "Oswaldo Cruz", 
    logo: "OC", 
    logoUrl: "/logos/hospitals/oswaldo-cruz.svg",
    websiteUrl: "https://www.hospitaloswaldocruz.org.br"
  },
  { 
    name: "Hospital São Francisco", 
    logo: "SF", 
    logoUrl: "/logos/hospitals/placeholder-logo.svg",
    websiteUrl: "https://www.hsf.org.br"
  },
  { 
    name: "Unimed", 
    logo: "UN", 
    logoUrl: "/logos/hospitals/unimed.svg",
    websiteUrl: "https://www.unimed.coop.br"
  },
  { 
    name: "IOP", 
    logo: "IO", 
    logoUrl: "/logos/hospitals/placeholder-logo.svg",
    websiteUrl: "https://www.iop.com.br"
  },
  { 
    name: "BP Beneficência", 
    logo: "BP", 
    logoUrl: "/logos/hospitals/bp-oficial.jpeg",
    websiteUrl: "https://www.bp.org.br"
  },
  { 
    name: "Santa Casa", 
    logo: "SC", 
    logoUrl: "/logos/hospitals/santa-casa.svg",
    websiteUrl: "https://santacasapg.com"
  },
  { 
    name: "Transduson", 
    logo: "TD", 
    logoUrl: "/logos/hospitals/placeholder-logo.svg",
    websiteUrl: "https://www.transduson.com.br"
  },
  { 
    name: "ACCG", 
    logo: "AC", 
    logoUrl: "/logos/hospitals/placeholder-logo.svg",
    websiteUrl: "https://www.accg.org.br"
  },
  { 
    name: "FSFX", 
    logo: "FS", 
    logoUrl: "/logos/hospitals/fsfx.svg",
    websiteUrl: "https://www.fsfx.com.br"
  },
  { 
    name: "CTR", 
    logo: "CT", 
    logoUrl: "/logos/hospitals/ctr.png",
    websiteUrl: "https://ctr.med.br"
  }
];

export const certifications: Certification[] = [
  {
    icon: Shield,
    title: "FHIR R4",
    subtitle: "Certified"
  },
  {
    icon: CheckCircle,
    title: "HL7 Brasil",
    subtitle: "Mantenedor"
  },
  {
    icon: Award,
    title: "RNDS",
    subtitle: "Conector"
  },
  {
    icon: Zap,
    title: "Cloud First",
    subtitle: "AWS + Oracle"
  }
];

export const trustContent = {
  partnersSection: {
    description: "Confiado por mais de",
    highlight: "200+ organizações",
    subtitle: "de saúde no Brasil"
  }
};