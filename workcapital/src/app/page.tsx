import { redirect } from 'next/navigation';

export default function HomePage() {
  // Esta função redireciona o usuário para a página de login
  // sempre que a página inicial for acessada.
  redirect('/login');

  // Como o redirect acontece, nenhum conteúdo abaixo será renderizado.
  // Você pode deixar um return null ou até mesmo remover, pois a função
  // de redirect já interrompe a renderização.
  return null;
}