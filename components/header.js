import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"
import img from "../public/img/logo.svg"

function Header() {

  const router = useRouter()

  return (
        <header className={styles.header}>
            
            <div  className={`contenedor ${styles.barra}`}>
              <Link href={"/"}>
                <a>
                <Image src={img} width={300} height={60} alt="imagen logotipo"/>
                </a>
              </Link>
                

                <nav className={styles.navegacion}>

                  <Link href="/">
                    <a className={router.pathname === "/" ? styles.active : ""}>Inicio</a>
                  </Link>

                  <Link href="/nosotros">
                  <a className={router.pathname === "/nosotros" ? styles.active : ""}>Nosotros</a>
                  </Link>

                  <Link  href="/tienda">
                  <a className={router.pathname === "/tienda" ? styles.active : ""}>Tienda</a>
                  </Link>
                  
                  <Link href="/blog">
                  <a className={router.pathname === "/blog" ? styles.active : ""}>Blog</a>
                  </Link>

                  <Link href="/carrito">
                    <a>
                      <Image src="/img/carrito.png" width={30} height={25} alt="Imagen carrito"/>
                    </a>
                  </Link>

               </nav>
            </div>
      
        </header>
  )
}

export default Header
