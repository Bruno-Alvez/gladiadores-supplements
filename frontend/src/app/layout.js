import '../../src/styles/globals.css'
import Header from '@/components/common/Header'

export const metadata = {
  title: 'Gladiadores Suplementos',
  description: 'Seu portal de saúde e performance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-0 sm:pt-20">{children}</main>
      </body>
    </html>
  );
}
