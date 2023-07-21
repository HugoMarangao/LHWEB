// pages/api/sitemap.xml.js
import { SitemapStream, streamToPromise } from 'sitemap';

export default async (req, res) => {
  if (!res) return {};
  res.setHeader('Content-Type', 'application/xml');
  
  // Iniciando SitemapStream sem o gzip por enquanto.
  const smStream = new SitemapStream({
    hostname: 'https://lhweb.vercel.app/',
  });

  // Lista de rotas
  const routes = [
    '/',
    '/Produtos',
    '/Produtos/criacaodeapps',
    '/Produtos/designweb',
    '/Produtos/marketingdigital',
    '/Produtos/seo',
    '/SobreNois'
  ];

  // Línguas suportadas
  const languages = ['pt', 'fr', 'de', 'it'];

  for (let route of routes) {
    // Adicionar rota padrão (sem prefixo de linguagem)
    smStream.write({ url: route, changefreq: 'daily', priority: 0.8 });

    // Adicionar rotas localizadas
    for (let lang of languages) {
      let localizedRoute = route === '/' ? `${lang}` : `${lang}${route}`;
      smStream.write({ url: localizedRoute, changefreq: 'daily', priority: 0.8 });
    }
  }

  smStream.end();

  // Finaliza a stream e envia o sitemap para o cliente
  streamToPromise(smStream).then((sm) => res.write(sm)).finally(() => res.end());
};
