import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
    'bolumler',
    'yurtlar',
    'kampus-cevresi',
    'ucuz-yerler',
    'ulasim',
    'ev-tutma',
    'acil',
    'blog',
    // Detay sayfaları için de klasör oluşturuyoruz
    'bolumler/bilgisayar-muhendisligi',
    'bolumler/ilahiyat',
    'bolumler/hemsirelik',
    'bolumler/ozel-egitim-ogretmenligi',
    'bolumler/insaat-muhendisligi',
    'bolumler/arap-dili-ve-edebiyati',
    'bolumler/cografya',
    'bolumler/iktisat',
    'bolumler/turkce-ogretmenligi',
    'bolumler/elektrik-elektronik-muhendisligi',
    'bolumler/cocukgelisimi-myo',
    'bolumler/gastronomi-ve-mutfak-sanatlari',
    'bolumler/fizyoterapi-myo',
    'bolumler/yazilim-muhendisligi',
    'bolumler/matematik',
    'bolumler/okul-oncesi-ogretmenligi',
    'bolumler/dis-ticaret-myo'
];

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');

    routes.forEach(route => {
        const routePath = path.join(distPath, route);
        if (!fs.existsSync(routePath)) {
            fs.mkdirSync(routePath, { recursive: true });
        }
        fs.writeFileSync(path.join(routePath, 'index.html'), indexContent);
        console.log(`Created: ${route}/index.html`);
    });

    // 404.html'i de kopyala (fallback için)
    fs.writeFileSync(path.join(distPath, '404.html'), indexContent);
    console.log('Created: 404.html');
} else {
    console.error('dist/index.html not found! Run npm run build first.');
}
