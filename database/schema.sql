CREATE TABLE IF NOT EXISTS dim_hospital (
  hcode VARCHAR(5) PRIMARY KEY,
  hname VARCHAR(255) NOT NULL,
  ampur_code VARCHAR(4) NOT NULL,
  ampur_name VARCHAR(255) NOT NULL,
  tambon_code VARCHAR(6),
  tambon_name VARCHAR(255),
  lat DECIMAL(10,7),
  lng DECIMAL(10,7),
  is_active TINYINT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS fact_kpi_monthly (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  hcode VARCHAR(5) NOT NULL,
  year_month VARCHAR(7) NOT NULL,
  population_total INT DEFAULT 0,
  opd_total INT DEFAULT 0,
  dm_total INT DEFAULT 0,
  dm_control INT DEFAULT 0,
  ht_total INT DEFAULT 0,
  ht_control INT DEFAULT 0,
  anc_total INT DEFAULT 0,
  anc_before_12w INT DEFAULT 0,
  epi_target INT DEFAULT 0,
  epi_complete INT DEFAULT 0,
  home_bound INT DEFAULT 0,
  bed_bound INT DEFAULT 0,
  data_quality_percent DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_kpi_hcode_month (hcode, year_month),
  INDEX idx_kpi_month (year_month)
);
