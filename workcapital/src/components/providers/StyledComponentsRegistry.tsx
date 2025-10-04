// src/components/providers/StyledComponentsRegistry.tsx

'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // A folha de estilos é criada apenas no cliente (para evitar problemas de cache)
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // Hook que injeta o CSS coletado no <head> durante o SSR
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // Se for a primeira renderização (SSR), usa o StyleSheetManager
  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  // Envolve a aplicação com o StyleSheetManager para coletar os estilos
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}