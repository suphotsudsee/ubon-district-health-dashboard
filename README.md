# Ubon District Health Dashboard

ระบบ Dashboard ภาพรวมสุขภาพระดับจังหวัด / อำเภอ / รพ.สต. สำหรับรวบรวมข้อมูลจาก JHCIS ของ รพ.สต. ในอำเภอ แล้วแสดง KPI สำคัญให้ผู้บริหารเห็นภาพรวมได้รวดเร็ว

## V1 Features

- Dashboard จังหวัด
- Dashboard อำเภอ
- Dashboard รพ.สต.
- KPI หลัก 7 ตัว
  - ประชากรทั้งหมด
  - OPD เดือนนี้
  - DM Control
  - HT Control
  - ANC ก่อน 12 สัปดาห์
  - Vaccine Coverage
  - คุณภาพข้อมูล 43 แฟ้ม
- Ranking รพ.สต.
- Alert จุดที่ต้องแก้ไข
- API ด้วย FastAPI
- Frontend ด้วย Next.js + Tailwind CSS
- Database กลาง MariaDB/MySQL

## Project Structure

```txt
backend/      FastAPI API server
frontend/     Next.js dashboard UI
database/     schema และ sample data
scripts/      helper scripts
```

## Quick Start

### Database

```bash
mysql -u root -p < database/schema.sql
mysql -u root -p ubon_health_dashboard < database/sample_data.sql
```

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API Docs: http://localhost:8000/docs

### Frontend

```bash
cd frontend
npm install
copy .env.example .env.local
npm run dev
```

Web: http://localhost:3000
