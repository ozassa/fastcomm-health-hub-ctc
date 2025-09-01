import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbNavigation = ({ items }: BreadcrumbNavigationProps) => {
  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fastcomm.com.br"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://www.fastcomm.com.br${item.href}` : undefined
      }))
    ]
  };

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      
      <nav className="flex" aria-label="Breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        <ol className="flex items-center space-x-2">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a 
              href="/" 
              className="text-gray-400 hover:text-gray-600 flex items-center"
              aria-label="Home"
              itemProp="item"
            >
              <span itemProp="name" className="sr-only">Home</span>
              <Home className="h-4 w-4" />
            </a>
            <meta itemProp="position" content="1" />
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              {item.current ? (
                <span className="text-gray-600 font-medium" aria-current="page" itemProp="name">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </a>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};