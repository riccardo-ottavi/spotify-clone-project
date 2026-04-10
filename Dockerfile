# --- Stage 1: Build Front-end ---
FROM node:20-alpine AS front-builder
WORKDIR /app

# Copia package.json e package-lock del front-end e installa dipendenze
COPY spotify-clone-FE/package*.json ./
RUN npm install

# Copia tutto il front-end e build
COPY spotify-clone-FE/ ./
RUN npm run build

# --- Stage 2: Build Back-end ---
FROM node:20-alpine AS back-builder
WORKDIR /app

# Copia package.json e package-lock del back-end e installa dipendenze
COPY spotify-clone-BE/package*.json ./
RUN npm install

# Copia tutto il back-end
COPY spotify-clone-BE/ ./

# Copia la build del front-end nel back-end
COPY --from=front-builder /app/dist ./dist

# Espone la porta del server
EXPOSE 3000

# Avvia il server
CMD ["node", "app.js"]