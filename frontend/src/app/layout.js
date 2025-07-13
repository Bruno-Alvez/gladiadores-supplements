export const metadata = {
  title: 'Gladiadores Suplementos',
  description: 'Catálogo de produtos com integração via WhatsApp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}