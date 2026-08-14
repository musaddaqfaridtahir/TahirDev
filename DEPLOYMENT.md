# Production VPS Deployment Guide for Musaddaq.dev

This guide outlines step-by-step instructions to deploy the Next.js portfolio website on an Ubuntu Linux VPS with Nginx, PM2, and SSL.

---

## 1. System Preparation (Ubuntu Linux VPS)

Connect to your VPS via SSH and update packages:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git build-essential nginx
```

Install Node.js v20 LTS:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Install PM2 process manager globally:
```bash
sudo npm install -g pm2
```

---

## 2. Clone Project & Build Production Bundle

Clone or copy the repository to `/var/www/musaddaq-portfolio`:
```bash
sudo mkdir -p /var/www/musaddaq-portfolio
sudo chown -R $USER:$USER /var/www/musaddaq-portfolio
cd /var/www/musaddaq-portfolio

# Install production dependencies and build Next.js
npm install --production=false
npm run build
```

---

## 3. Start Application with PM2

Start the application using the included `ecosystem.config.js`:
```bash
pm2 start ecosystem.config.js
pm2 save
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp /home/$USER
```

---

## 4. Nginx Reverse Proxy Setup

Create an Nginx configuration file at `/etc/nginx/sites-available/musaddaq-portfolio`:
```nginx
server {
    listen 80;
    server_name musaddaq.dev www.musaddaq.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the Nginx configuration:
```bash
sudo ln -s /etc/nginx/sites-available/musaddaq-portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 5. Free SSL Certificate with Certbot

Install Certbot and obtain an SSL certificate:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d musaddaq.dev -d www.musaddaq.dev
```

Certbot will automatically update Nginx for HTTPS redirect and auto-renewal.
