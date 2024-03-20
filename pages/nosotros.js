import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre Nosotros, GuitarLA"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" alt="imagen sobre nosotros" width={1000} height={800}></Image>


          <div>
            <p>
              Phasellus laoreet neque id lacus finibus finibus. 
              Etiam a mi pulvinar, condimentum urna non, pretium justo. 
              Proin eget sollicitudin sem. Curabitur a nisi et est sagittis aliquam sit amet in urna. 
              Etiam a mi pulvinar, condimentum urna non, pretium justo. 
              </p>
              <p>
                Donec quis efficitur mauris, nec blandit tellus. Aliquam vel turpis tellus. Nam luctus nibh magna, vitae tincidunt leo luctus ac. 
                Duis eget quam commodo, pellentesque arcu posuere, imperdiet erat.
                Proin massa sem, volutpat eu metus eget, suscipit porttitor neque. 
                Ut eget magna convallis, cursus massa quis, ullamcorper neque. Nullam sit amet felis suscipit, tincidunt augue consectetur, posuere leo.
              </p>
          </div>

        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
