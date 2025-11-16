interface Article {
  title: string;
  date: string;
  imageUrl: string;
  href: string;
}

const LatestArticles = () => {
  const articles: Article[] = [
    {
      title: "Javascript İçinde CSS Yazmak: Styled Components",
      date: "8 Feb 2024",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      href: "https://www.kerokod.com/javascript-icinde-css-yazmak-styled-components/"
    },
    {
      title: "CSS Metodolojileri: Daha Temiz ve Daha Sürdürülebilir",
      date: "5 Feb 2024",
      imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=300&fit=crop",
      href: "https://www.kerokod.com/css-metodolojileri-daha-temiz-ve-daha-surdurulebilir/"
    },
    {
      title: "Vite Nedir? Yeni Nesil Hızlı Frontend Geliştirme",
      date: "2 Feb 2024",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      href: "https://www.kerokod.com/vite-nedir-yeni-nesil-hizli-frontend-gelistirme/"
    },
    {
      title: "S.O.L.I.D Prensipleri",
      date: "26 Jul 2024",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      href: "https://www.patika.dev/blog/solid-prensipleri-nedir"
    },
    {
      title: "Frontend Uygulamalarında Optimizasyon",
      date: "25 Jul 2024",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      href: "https://www.patika.dev/blog/frontend-uygulamalarinda-optimizasyon-ipuclari"
    }
  ];

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
        📰 Latest Articles
      </h2>
      
      <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 p-3 rounded-lg hover:bg-[hsl(var(--card-hover))] transition-colors group"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-primary group-hover:underline line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{article.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
