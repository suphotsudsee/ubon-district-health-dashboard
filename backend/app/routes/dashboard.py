from fastapi import APIRouter

router = APIRouter()


@router.get("/province")
def province_dashboard():
    return {
        "province_name": "อุบลราชธานี",
        "districts": 25,
        "hospitals": 318,
        "population_total": 1869236,
        "opd_month": 128450,
        "dm_total": 94520,
        "dm_control_percent": 61.5,
        "ht_total": 132840,
        "ht_control_percent": 68.2,
        "anc_before_12w_percent": 91.0,
        "epi_complete_percent": 97.8,
        "data_quality_percent": 98.7,
    }


@router.get("/district/{ampur_code}")
def district_dashboard(ampur_code: str):
    return {
        "ampur_code": ampur_code,
        "ampur_name": "เดชอุดม",
        "hospitals": 18,
        "population_total": 85620,
        "opd_month": 4360,
        "dm_total": 5280,
        "dm_control_percent": 61.5,
        "ht_total": 8610,
        "ht_control_percent": 68.2,
        "anc_before_12w_percent": 91.0,
        "epi_complete_percent": 97.8,
        "data_quality_percent": 98.7,
        "alerts": [
            {"level": "danger", "hcode": "34001", "hname": "รพ.สต.บ้านนา", "message": "43 แฟ้มต่ำกว่า 85%"},
            {"level": "warning", "hcode": "34002", "hname": "รพ.สต.โพธิ์ใหญ่", "message": "EPI ต่ำกว่าเป้าหมาย"},
        ],
    }


@router.get("/hospital/{hcode}")
def hospital_dashboard(hcode: str):
    return {
        "hcode": hcode,
        "hname": "รพ.สต.บ้านนา",
        "population_total": 4820,
        "opd_month": 356,
        "dm_total": 280,
        "dm_control_percent": 58.3,
        "ht_total": 430,
        "ht_control_percent": 65.4,
        "anc_before_12w_percent": 88.9,
        "epi_complete_percent": 94.5,
        "data_quality_percent": 82.0,
    }


@router.get("/district/{ampur_code}/trend")
def district_trend(ampur_code: str):
    return [
        {"month": "ม.ค.", "opd": 3800, "dm_control": 58, "ht_control": 65},
        {"month": "ก.พ.", "opd": 4100, "dm_control": 59, "ht_control": 66},
        {"month": "มี.ค.", "opd": 4360, "dm_control": 61, "ht_control": 68},
    ]


@router.get("/district/{ampur_code}/ranking")
def district_ranking(ampur_code: str):
    return [
        {"rank": 1, "hcode": "34003", "hname": "รพ.สต.คำไฮใหญ่", "score": 96.5, "data_quality": 99.2},
        {"rank": 2, "hcode": "34004", "hname": "รพ.สต.เมืองเดช", "score": 94.1, "data_quality": 98.8},
        {"rank": 18, "hcode": "34001", "hname": "รพ.สต.บ้านนา", "score": 72.4, "data_quality": 82.0},
    ]
