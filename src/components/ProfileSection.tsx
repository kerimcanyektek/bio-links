import { FaGithub } from "react-icons/fa";

interface ProfileSectionProps {
  name: string;
  bio: string;
  avatarUrl: string;
  website?: string;
}

const ProfileSection = ({ name, bio, avatarUrl, website }: ProfileSectionProps) => {
  return (
    <div className="flex flex-col items-start space-y-6">
      <div className="relative">
        <img
          src={avatarUrl}
          alt={name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-card shadow-lg"
        />
      </div>
      
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          {name}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
