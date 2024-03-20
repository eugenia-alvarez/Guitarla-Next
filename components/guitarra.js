import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"

function Guitarra({guitarra}) {
    
    const {descripcion, nombre, precio, imagen, url} = guitarra

  return (
    <div className={styles.guitarra}>
         <Image src={imagen.data.attributes.url} alt={`Imagen Guitarra: ${nombre}`} height={400} width={600}/>

         <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={` /guitarras/${url}` }>
                <a className={styles.enlace}>
                    Ver Producto
                </a>
            </Link>
         </div>


    </div>
  )
}

export default Guitarra
