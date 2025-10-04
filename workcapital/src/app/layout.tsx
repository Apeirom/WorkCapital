// src/app/layout.tsx
import './globals.css';
import StyledComponentsRegistry from '@/components/providers/StyledComponentsRegistry';
import '@ant-design/v5-patch-for-react-19'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}