FROM node:20-alpine

WORKDIR /app

# =====================
# BACKEND
# =====================
COPY spotify-clone-BE/package*.json ./backend/
WORKDIR /app/backend
RUN npm install

COPY spotify-clone-BE/ ./


# =====================
# FRONTEND BUILD  
# =====================
WORKDIR /app

COPY spotify-clone-FE/ ./frontend
WORKDIR /app/frontend

RUN npm install
RUN npm run build

# sposta build nel backend
RUN cp -r dist ../backend/dist

# =====================
# RITORNO BACKEND START
# =====================
WORKDIR /app/backend

EXPOSE 3000

CMD ["node", "app.js"]