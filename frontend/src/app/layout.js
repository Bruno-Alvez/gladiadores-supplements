import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Gladiadores Suplementos',
  description: 'Product catalog with WhatsApp integration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
