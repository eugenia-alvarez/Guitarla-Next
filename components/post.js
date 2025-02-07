import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../utils/helpers"
import styles from "../styles/blog.module.css"


function Post({post}) {

    const {titulo, contenido, imagen, url, publishedAt} = post


  return (

        <article>
            <Image src={imagen.data.attributes.url} alt={`Imagen ${titulo}`} width={600} height={400}/>

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido[0].children[0].text}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>
                        Leer Post
                    </a>
                </Link>
              
            </div>
        </article>
      
   
  )
}

export default Post
