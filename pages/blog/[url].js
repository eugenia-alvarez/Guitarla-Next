import Layout from "../../components/layout"
import Image from "next/image"

import styles from "../../styles/blog.module.css"
import { formatearFecha } from "../../utils/helpers"

function Post({data}) {

    const {titulo, contenido, imagen, publishedAt} = data[0].attributes
  return (
    <Layout>
     <article className={`${styles.post} ${styles["mt-3"]}`}>
            <Image src={imagen.data.attributes.url} alt={`Imagen ${titulo}`} width={1000} height={600}/>

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido[0].children[0].text}</p>
              
    
            </div>
        </article>
    </Layout>
  )
}

export default Post


/**Consultamos la API - tambien podemos utilizar la funcion getServerSideProps*/
export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/posts`)
    const {data} = await respuesta.json()


    const paths = data.map(post => ({
        params: {
            url: post.attributes.url
        }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params : {url}}){
  
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data} = await respuesta.json() /**const resultado = respuesta.json() */
 
        
    return{
        props: {
            data
        }
    }
}
