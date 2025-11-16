import ProfileSection from "@/components/ProfileSection";
import LinkCard from "@/components/LinkCard";
import SocialLinkCard from "@/components/SocialLinkCard";
import LatestArticles from "@/components/LatestArticles";
import { FaGithub, FaInstagram, FaTwitter, FaSpotify, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoGlobeOutline } from "react-icons/io5";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Profile Section */}
          <div className="lg:col-span-4 space-y-8">
            <ProfileSection
              name="Kerimcan Yektek"
              bio="Her zaman yeni bir şeyler öğrenmek isteyen, işleri hep nasıl daha iyi yapabileceğini düşünen ve bu konuda ilginç fikirleri olan hayalperest bir developer aynı zamanda içerik üreticisi."
              avatarUrl="public/images/kerimcanyektek.jpeg"
            />
            <LatestArticles />
          </div>

          {/* Right Side - Bento Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
              {/* Web Site Header */}
              <div className="md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  🌐 Web Site
                </h2>
              </div>

              {/* Personal Website Card */}
              <LinkCard
                title="Kerimcan Yektek"
                subtitle="kerimcanyektek.com.tr"
                icon={<IoGlobeOutline className="text-primary text-xl" />}
                href="https://kerimcanyektek.com"
              />

              {/* Social Links Header */}
              <div className="md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  🎄 Social Links
                </h2>
              </div>

              {/* GitHub */}
              <SocialLinkCard
                platform="GitHub"
                icon={<FaGithub />}
                iconColor="#000000"
                href="https://github.com/kerimcanyektek"
                buttonText="Follow"
                backgroundColor="bg-gradient-to-br from-gray-100 to-slate-100"
              />

              {/* Instagram */}
              <SocialLinkCard
                platform="Instagram"
                icon={<FaInstagram />}
                iconColor="#E4405F"
                href="https://instagram.com/kerimcanyektek"
                buttonText="Follow"
                backgroundColor="bg-gradient-to-br from-pink-50 to-purple-50"
              />

              {/* Twitter */}
              <SocialLinkCard
                platform="Twitter"
                icon={<FaTwitter />}
                iconColor="#1DA1F2"
                href="https://twitter.com/kerimcanjs"
                buttonText="Follow"
                backgroundColor="bg-gradient-to-br from-blue-50 to-cyan-50"
              />

              {/* Google Developer Profile */}
              <SocialLinkCard
                platform="Google Developers"
                icon={<FcGoogle />}
                iconColor="#4285F4"
                href="https://developers.google.com/profile/u/kerimcan"
                buttonText="Follow"
                backgroundColor="bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50"
              />

              {/* Spotify */}
              <SocialLinkCard
                platform="Spotify"
                icon={<FaSpotify />}
                iconColor="#1DB954"
                href="https://open.spotify.com/user/n21s0ks55wsqc1gq8zkyeqhd1?si=AnqXfQ9yTaScIA4GBpJNRQ"
                buttonText="Follow"
                backgroundColor="bg-gradient-to-br from-green-50 to-emerald-50"
              />

              {/* LinkedIn */}
              <SocialLinkCard
                platform="LinkedIn"
                icon={<FaLinkedin />}
                iconColor="#0077B5"
                href="https://linkedin.com/in/kerimcanyektek"
                buttonText="Follow"
                backgroundColor="bg-gradient-to-br from-blue-50 to-indigo-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
