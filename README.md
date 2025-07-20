# Gladiadores Supplements

Gladiadores Supplements is a full-stack e-commerce showcase project focused on premium user experience and performance. Built as a monorepo using **Next.js (frontend)** and **Django + Django REST Framework (backend)**, the platform serves as a professional solution for a local supplement store. The site is fully responsive and optimized for mobile and desktop.

---

## 📁 Monorepo Structure

.
├── frontend/ # Next.js frontend (deployed on Vercel)
├── backend/ # Django backend API (deployed on Render)

markdown
Copiar código

---

## ✨ Features

### Frontend (Next.js)
- Product listing by category and fitness goal
- Success highlights and best sellers section
- Search bar with autocomplete and thumbnail preview
- Product modal with multi-image slideshow
- WhatsApp integration for product inquiries
- Mobile-first responsive design
- Premium dark UI with purple highlight color
- Newsletter and FAQ sections
- Admin product registration form with image upload

### Backend (Django REST Framework)
- Models: `Product`, `Category`, `Brand`, `Goal`
- Admin panel with custom filters, search, and image management
- API endpoints:
  - `/products/`: full product list with filter & search support
  - `/categories/`, `/brands/`, `/goals/`: relational endpoints
- Search filter enabled with full-text support
- Cloudinary integration for multiple product images
- Dockerized setup with PostgreSQL support

---

## 🚀 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Lucide Icons, Vercel
- **Backend**: Django, DRF, PostgreSQL, Cloudinary, Render
- **DevOps**: Docker, GitHub Actions (planned), `.env` configs

---

## 🛠 Setup Instructions

### Prerequisites
- Node.js + npm
- Docker and Docker Compose
- Python 3.10+

### Frontend (Next.js)
```bash
cd frontend
npm install
cp .env.local.example .env.local  # add NEXT_PUBLIC_API_URL
npm run dev
Backend (Django)
bash
Copiar código
cd backend
docker-compose up --build
Admin Panel: http://localhost:8000/admin/

🗂 API Highlights
GET /products/?search=gladshock – Full-text product search

GET /products/?category=proteins – Filter by category

GET /products/?goal=hypertrophy – Filter by goal

Product response includes all nested relationships

📦 Deployment
Frontend: Deployed via Vercel (CI/CD ready)

Backend: Deployed on Render with Docker support

Cloudinary handles media hosting

🤝 Contributing
This project is not open to third-party contributors at the moment.
If you’re interested in partnership or reuse, feel free to contact the author.

👤 Author
Bruno Alves
alvesdeveloper.com
GitHub
LinkedIn
