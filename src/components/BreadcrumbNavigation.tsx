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
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <a 
            href="/" 
            className="text-gray-400 hover:text-gray-600 flex items-center"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
            {item.current ? (
              <span className="text-gray-600 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};