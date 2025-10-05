// src/app/layout.tsx

import './globals.css';
import StyledComponentsRegistry from '@/components/providers/StyledComponentsRegistry';
import '@ant-design/v5-patch-for-react-19'; 

// Adicione a importação do seu AuthProvider
import { AuthProvider } from '@/hooks/AuthContext'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/*
          ADICIONADO: Tag para referenciar o favicon.
          O caminho '/' aponta para a raiz da pasta /app.
          Certifique-se de que o arquivo 'favicon.jpg' está em src/app/
        */}
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
      </head>
      <body>
        {/*
          CRUCIAL: O AuthProvider deve envolver toda a aplicação.
          Ele é o provedor do contexto que o hook useAuthContext consome.
        */}
        <AuthProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}