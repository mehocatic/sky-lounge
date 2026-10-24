# SkyLounge

Web stranica za SkyLounge, premium shisha i caffe bar u Sanskom Mostu.

## Lokalni razvoj

Potrebni su Node.js 22 i npm.

```sh
npm ci
npm run dev
```

Vite prikazuje lokalnu stranicu na portu `3000`.

## Produkcijski build

```sh
npm run build
npm run preview
```

Gotova stranica se generiše u `dist/`. Netlify koristi `npm run build` i
objavljuje sadržaj direktorija `dist/`, kako je podešeno u `netlify.toml`.
Datoteka `public/_redirects` omogućava direktno otvaranje React ruta kao što
je `/menu`.

## Struktura projekta

- `src/pages/`: početna stranica i kompletan meni
- `src/components/`: navigacija, rezervacije, kartice menija i podnožje
- `src/data/`: sadržaj menija i podaci o lokalu
- `src/styles.css`: zajednički stilovi i prilagodljiv izgled
- `public/assets/`: fotografije i grafički elementi

Adresa, radno vrijeme, Instagram i WhatsApp kontakt uređuju se u
`src/data/siteData.js`; okusi i cijene u `src/data/menuData.js`.
