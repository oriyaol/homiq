# --- שלב 1: Build ---
FROM node:20-alpine AS build
WORKDIR /app

# התקנת תלויות
COPY package*.json ./
RUN npm ci

# העתקת כל הקבצים ובניית הפרויקט
COPY . .
RUN npm run build

# --- שלב 2: Run (nginx) ---
FROM nginx:alpine

# מחיקת קונפיג ברירת המחדל של nginx והכנסת שלנו
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# העתקת קבצי הבילד ל-nginx
COPY --from=build /app/dist /usr/share/nginx/html

# פתיחת פורט 80
EXPOSE 80

# הפעלת nginx
CMD ["nginx", "-g", "daemon off;"]
