import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qventiv — AI-Powered Website QA & Funnel Monitoring',
  description: 'Qventiv silently monitors your real estate website 24/7 — catching broken forms, slow pages, and conversion killers before they cost you leads. No calls. Just results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>{`* { margin: 0; padding: 0; box-sizing: border-box; }`}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
