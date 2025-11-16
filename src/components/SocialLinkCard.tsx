import { ReactNode } from "react";
import { Button } from "./ui/button";
interface SocialLinkCardProps {
  platform: string;
  username?: string;
  icon: ReactNode;
  iconColor: string;
  href: string;
  buttonText?: string;
  followerCount?: string;
  backgroundColor?: string;
}
const SocialLinkCard = ({
  platform,
  username,
  icon,
  iconColor,
  href,
  buttonText = "Follow",
  followerCount,
  backgroundColor = "bg-card"
}: SocialLinkCardProps) => {
  return <div className={`${backgroundColor} border border-border rounded-2xl p-6 
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1 
        hover:border-primary/20`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-5xl flex items-center justify-center" style={{
        color: iconColor
      }}>
          {icon}
        </div>
        
        <div>
          <h3 className="font-semibold text-card-foreground">{platform}</h3>
          {username}
        </div>

        <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" size="sm" className="w-full hover:bg-accent">
            {buttonText} {followerCount}
          </Button>
        </a>
      </div>
    </div>;
};
export default SocialLinkCard;