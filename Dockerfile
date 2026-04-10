# --- Frontend ---
FROM node:20-alpine AS front-builder
WORKDIR /app

COPY spotify-clone-FE/package*.json ./
RUN npm install

COPY spotify-clone-FE/ ./
RUN npm run build


# --- Backend ---
FROM node:20-alpine AS back-builder
WORKDIR /app

COPY spotify-clone-BE/package*.json ./
RUN npm install

COPY spotify-clone-BE/ ./

# copia build frontend nel backend
COPY --from=front-builder /app/dist ./dist

RUN fund .

EXPOSE 3000

CMD ["node", "app.js"]