import './globals.css';

export const metadata = {
  title: 'Ubon District Health Dashboard',
  description: 'Dashboard สุขภาพระดับจังหวัด อำเภอ และ รพ.สต.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
