export default (req, res) => {
    const baseUrl = 'https://lhweb.vercel.app';
    const languages = ['en', 'pt', 'de', 'it', 'fr'];
  
    const pages = [
      '/',
      '/Produtos',
      '/Produtos/criacaodeapps',
      '/Produtos/designweb',
      '/Produtos/marketingdigital',
      '/Produtos/seo',
      '/SobreNois'
    ];
  
    let urls = [];
  
    languages.forEach((lang) => {
      pages.forEach((page) => {
        const prefix = lang === 'en' ? '' : `/${lang}`;
        urls.push({
          loc: `${baseUrl}${prefix}${page}`,
          changefreq: 'daily',
          priority: 0.8
        });
      });
    });
  
    const sitemap = generateSitemap(urls);
  
    res.setHeader('Content-Type', 'text/xml');
    res.status(200).send(sitemap);
  };
  
  function generateSitemap(urls) {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  
    urls.forEach((url) => {
      sitemap += `
        <url>
            <loc>${url.loc}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
        </url>
      `;
    });
  
    sitemap += '</urlset>';
    return sitemap;
  }
  