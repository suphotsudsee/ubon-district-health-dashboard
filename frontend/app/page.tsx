const kpis = [
  { label: 'ประชากรทั้งหมด', value: '85,620', unit: 'คน' },
  { label: 'OPD เดือนนี้', value: '4,360', unit: 'ครั้ง' },
  { label: 'DM Control', value: '61.5', unit: '%' },
  { label: 'HT Control', value: '68.2', unit: '%' },
  { label: 'ANC ก่อน 12 สัปดาห์', value: '91.0', unit: '%' },
  { label: 'Vaccine Coverage', value: '97.8', unit: '%' },
  { label: '43 แฟ้ม', value: '98.7', unit: '%' },
];

const ranking = [
  { rank: 1, hname: 'รพ.สต.คำไฮใหญ่', score: 96.5 },
  { rank: 2, hname: 'รพ.สต.เมืองเดช', score: 94.1 },
  { rank: 18, hname: 'รพ.สต.บ้านนา', score: 72.4 },
];

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <section style={{ background: 'linear-gradient(135deg,#0f766e,#2563eb)', color: 'white', borderRadius: 24, padding: 28 }}>
        <p style={{ margin: 0, opacity: 0.85 }}>District Health Intelligence Dashboard</p>
        <h1 style={{ margin: '8px 0 0', fontSize: 34 }}>Dashboard สุขภาพอำเภอเดชอุดม</h1>
        <p style={{ margin: '8px 0 0', opacity: 0.9 }}>ข้อมูลจาก JHCIS รพ.สต. 18 แห่ง | Update: วันนี้</p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, marginTop: 20 }}>
        {kpis.map((item) => (
          <div key={item.label} style={{ background: 'white', borderRadius: 18, padding: 18, boxShadow: '0 8px 24px rgba(15,23,42,.08)' }}>
            <div style={{ fontSize: 14, color: '#64748b' }}>{item.label}</div>
            <div style={{ marginTop: 8, fontSize: 30, fontWeight: 800 }}>{item.value}</div>
            <div style={{ color: '#64748b' }}>{item.unit}</div>
          </div>
        ))}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginTop: 20 }}>
        <div style={{ background: 'white', borderRadius: 18, padding: 20, minHeight: 280 }}>
          <h2>ภาพรวมพื้นที่</h2>
          <div style={{ height: 190, borderRadius: 16, background: '#e0f2fe', display: 'grid', placeItems: 'center', color: '#0369a1' }}>
            แผนที่ รพ.สต. / Leaflet จะเพิ่มในขั้นถัดไป
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: 18, padding: 20 }}>
          <h2>Alert ต้องแก้ไข</h2>
          <p style={{ background: '#fee2e2', color: '#991b1b', padding: 12, borderRadius: 12 }}>รพ.สต.บ้านนา: 43 แฟ้มต่ำกว่า 85%</p>
          <p style={{ background: '#fef3c7', color: '#92400e', padding: 12, borderRadius: 12 }}>รพ.สต.โพธิ์ใหญ่: EPI ต่ำกว่าเป้าหมาย</p>
        </div>
      </section>

      <section style={{ background: 'white', borderRadius: 18, padding: 20, marginTop: 20 }}>
        <h2>Ranking รพ.สต.</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#64748b' }}>
              <th>อันดับ</th><th>หน่วยบริการ</th><th>คะแนน</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((r) => (
              <tr key={r.hname}>
                <td style={{ padding: 10 }}>{r.rank}</td>
                <td style={{ padding: 10 }}>{r.hname}</td>
                <td style={{ padding: 10 }}>{r.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
