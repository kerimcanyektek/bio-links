import { ReactNode } from "react";

interface LinkCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const LinkCard = ({ 
  title, 
  subtitle, 
  icon, 
  href, 
  onClick, 
  className = "",
  children 
}: LinkCardProps) => {
  const content = (
    <>
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="text-2xl flex-shrink-0">
              {icon}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-card-foreground">{title}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
      {children && <div className="mt-4">{children}</div>}
    </>
  );

  const baseClasses = `
    bg-card border border-border rounded-2xl p-6
    transition-all duration-300
    hover:shadow-lg hover:bg-[hsl(var(--card-hover))]
    hover:border-primary/20 hover:-translate-y-1
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses + " text-left w-full"}>
        {content}
      </button>
    );
  }

  return <div className={baseClasses}>{content}</div>;
};

export default LinkCard;
