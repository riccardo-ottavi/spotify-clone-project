# =========================
# 1) FRONTEND BUILD (VITE)
# =========================
FROM node:20-alpine AS frontend

WORKDIR /app/frontend

COPY spotify-clone-FE/package*.json ./
RUN npm install

COPY spotify-clone-FE/ ./
RUN npm run build


# =========================
# 2) BACKEND + FINAL IMAGE
# =========================
FROM node:20-alpine AS backend

WORKDIR /app

# install backend deps
COPY spotify-clone-BE/package*.json ./
RUN npm install

# copy backend source
COPY spotify-clone-BE/ ./

# copy frontend build into backend (static serving)
COPY --from=frontend /app/frontend/dist ./public

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "app.js"]