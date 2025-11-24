// En cualquier componente (por ejemplo, en el menú o en la página principal)

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          {/* El atributo `href` usa la ruta definida en tu sistema de archivos */}
          <Link href="/">Inicio</Link> 
        </li>
        <li>
          <Link href="/workspace">Workspace</Link> 
        </li>
        <li>
          <Link href="/acerca">Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
}