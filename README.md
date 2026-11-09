# Nuova Zelanda in auto

Pagina privata di un viaggio. Il contenuto di `index.html` è cifrato (AES-256, [StatiCrypt](https://github.com/robinmoisson/staticrypt)) e si apre solo con la frase d’accesso. Si installa sul telefono e funziona offline dopo la prima apertura.

## Installare sul telefono
- **iPhone (Safari):** apri il sito, tocca Condividi → "Aggiungi alla schermata Home".
- **Android (Chrome):** apri il sito, menu ⋮ → "Installa app" o "Aggiungi a schermata Home".

Aprilo una volta con la connessione: da lì in poi funziona anche senza rete.

## Aggiornare
Sostituisci `index.html` con la nuova versione cifrata, poi cambia `VERSION` in `sw.js`, così i telefoni scaricano la versione nuova alla prossima apertura con rete.

## Crediti
- Contorno della Nuova Zelanda: Natural Earth (pubblico dominio), tramite world-atlas.
- [StatiCrypt](https://github.com/robinmoisson/staticrypt) (licenza MIT).
- [D3](https://d3js.org) (licenza ISC).
- Carattere Overpass (SIL Open Font License), tramite Fontsource.
- I tracciati stradali sono indicativi: per guidare usate un navigatore.
