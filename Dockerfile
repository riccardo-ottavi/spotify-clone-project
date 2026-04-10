FROM node:20-alpine AS build

WORKDIR /app

# ======================
# BACKEND
# ======================
COPY spotify-clone-BE ./backend
WORKDIR /app/backend

RUN ls -la
RUN npm install


# ======================
# FRONTEND
# ======================
WORKDIR /app

COPY spotify-clone-FE ./frontend
WORKDIR /app/frontend

RUN ls -la
RUN npm install
RUN npm run build


# ======================
# MOVE BUILD INTO BACKEND
# ======================
RUN cp -r dist ../backend/dist


# ======================
# RUN BACKEND
# ======================
WORKDIR /app/backend

EXPOSE 3000

CMD ["node", "app.js"]