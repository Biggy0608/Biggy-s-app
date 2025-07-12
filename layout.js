export const metadata = {
  title: "Biggy's app",
  description: "App perso pour gérer ma collection de jeux",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
