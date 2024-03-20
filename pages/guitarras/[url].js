import { useState } from "react"
import Layout from "../../components/layout"
import Image from "next/image"
import styles from "../../styles/guitarras.module.css"

function Guitarra({guitarra, agregarCarrito}) {
    
    const [cantidad, setCantidad] = useState(0)
    const {nombre, descripcion, imagen, precio} = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1){
            alert("Cantidad no válida ")
            return
        }

        //Construir el objeto
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)
    }



  return (
   
    <Layout
      title={`Guitarra ${nombre}`}
    >
    <div className={styles.guitarra}>
    <Image src={imagen.data.attributes.url} alt={`Imagen Guitarra: ${nombre}`} height={400} width={600}/>

    <div className={styles.contenido}>
       <h3>{nombre}</h3>
       <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
       <p className={styles.precio}>${precio}</p>

       <form className={styles.formulario}
        onSubmit={handleSubmit}
       >
        <label htmlFor="cantidad">Cantidad</label>

        <select id="cantidad" onChange={e => setCantidad(+e.target.value)}>  
            <option value="0">--Seleccione la Cantidad--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        <input type="submit" value="Agregar al Carrito"/>
    
       </form>
       
    </div>
</div>
</Layout>
  )}


export default Guitarra

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json()

    
    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params : {url}}){
  
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json() /**const resultado = respuesta.json() */
 
    return{
        props: {
            guitarra
        }
    }
}

// export async function getServerSideProps({query : {url}}){
  
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = respuesta.json() /**const resultado = respuesta.json() */
 
//     return{
//         props: {
//             guitarra
//         }
//     }
// }