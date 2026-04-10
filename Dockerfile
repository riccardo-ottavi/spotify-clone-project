# =========================
# FRONTEND BUILD
# =========================
FROM node:20-alpine AS front-builder
WORKDIR /frontend

COPY spotify-clone-FE/package*.json ./
RUN npm install

COPY spotify-clone-FE/ ./
RUN npm run build


# =========================
# BACKEND
# =========================
FROM node:20-alpine
WORKDIR /app

COPY spotify-clone-BE/ ./

RUN npm install

# copia build FE dentro backend
COPY --from=front-builder /frontend/dist ./dist

RUN ls -la
RUN ls -la spotify-clone-BE

EXPOSE 3000

CMD ["node", "app.js"]