from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.dashboard import router as dashboard_router

app = FastAPI(
    title="Ubon District Health Dashboard API",
    version="0.1.0",
    description="API สำหรับ Dashboard สุขภาพจังหวัด/อำเภอ/รพ.สต. จากข้อมูล JHCIS",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok"}


app.include_router(dashboard_router, prefix="/api/dashboard", tags=["dashboard"])
