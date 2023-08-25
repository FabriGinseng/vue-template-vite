# Usa una immagine Node.js come base
FROM node:lts-alpine AS Builder

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia il file package.json e package-lock.json
COPY package.json package-lock.json ./

# Installa le dipendenze
RUN npm ci

# Copia il resto del codice dell'applicazione
COPY . .

# Compila l'applicazione con Vite
RUN npm run build

# Usa un server leggero come base per l'applicazione finale
FROM nginx:1.21

# Copia l'output di Vite nel server Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Espone la porta 8080 per il server Nginx
EXPOSE 8080

# Comando di avvio del server Nginx
CMD ["nginx", "-g", "daemon off;"]