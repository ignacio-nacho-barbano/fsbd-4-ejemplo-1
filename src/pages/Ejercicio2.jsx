import "./Ejercicio2.css";
import banner from "../../public/img/banner.jpg";
import { useState } from "react";

export const Ejercicio2 = () => {
  const [valor, setValor] = useState(5);

  console.log("COMPONENTE CARGO", valor);
  const unaCosaAlAzar = Math.random();

  const incrementar = () => {
    setValor(valor + 5);
  };

  return (
    <>
      <main style={{ background: unaCosaAlAzar > 0.5 ? "red" : "green" }}>
        <header>
          <h1>
            {valor} 💩 {unaCosaAlAzar}
          </h1>
          <button onClick={incrementar}>Incrementar</button>
          <img src={banner} alt="una gente haciendo cosas en la compu" />
        </header>
        <nav id="menu1">
          <div>
            <a href="">Inicio</a>
          </div>
          <div>
            <a href="">Cursos</a>
          </div>
          <div>
            <a href="">Libros</a>
          </div>
          <div>
            <a href="">Contacto</a>
          </div>
        </nav>
        <article>
          <h1>Acerca de nosotros</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>{" "}
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>{" "}
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>{" "}
          <br />
        </article>
        <aside>
          <h2>Nuevo curso</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>{" "}
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>{" "}
          <br />
        </aside>
        <footer>
          <p>Marca registrada &copy; 202x</p>
          <nav id="menu2">
            <div>
              <a href="">Inicio</a>
            </div>
            <div>
              <a href="">Cursos</a>
            </div>
            <div>
              <a href="">Libros</a>
            </div>
            <div>
              <a href="">Contacto</a>
            </div>
          </nav>
        </footer>
      </main>
    </>
  );
};
