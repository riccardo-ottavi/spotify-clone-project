# =========================
# FRONTEND BUILD
# =========================
FROM node:20-alpine AS front-builder

WORKDIR /app

COPY spotify-clone-FE/package*.json ./
RUN ls -la
RUN npm install

COPY spotify-clone-FE/ ./
RUN npm run build


# =========================
# BACKEND
# =========================
FROM node:20-alpine

WORKDIR /app

COPY spotify-clone-BE/package*.json ./
RUN ls -la
RUN npm install

COPY spotify-clone-BE/ ./

COPY --from=front-builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "app.js"]