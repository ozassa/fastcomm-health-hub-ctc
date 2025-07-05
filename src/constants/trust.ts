import { Shield, CheckCircle, Award, Zap, LucideIcon } from "lucide-react";

export interface Partner {
  name: string;
  logo: string;
  logoUrl: string | null;
}

export interface Certification {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export const partners: Partner[] = [
  { name: "Hospital Moinhos de Vento", logo: "MV", logoUrl: null },
  { name: "HCOR", logo: "HC", logoUrl: null },
  { name: "Oswaldo Cruz", logo: "OC", logoUrl: null },
  { name: "Hospital São Francisco", logo: "SF", logoUrl: null },
  { name: "Unimed", logo: "UN", logoUrl: "/src/assets/unimed-logo.png" },
  { name: "IOP", logo: "IO", logoUrl: null },
  { name: "BP Beneficência", logo: "BP", logoUrl: null },
  { name: "Santa Casa", logo: "SC", logoUrl: null },
  { name: "Transduson", logo: "TD", logoUrl: null },
  { name: "ACCG", logo: "AC", logoUrl: null },
  { name: "FSEX", logo: "FS", logoUrl: null },
  { name: "CTR", logo: "CT", logoUrl: null }
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