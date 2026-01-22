import './App.css'

function App() {
  
  //cargo de variables y funciones
  const nombre = "Javier";
  const edad = 30;
  const esMayorDeEdad = edad >= 18;
  const mensaje = esMayorDeEdad ? "Es mayor de edad" : "Es menor de edad";
  const lista = [1, 2, 3, 4, 5];
  const lista2 = ["a", "b", "c", "d", "e"];

  //funcion para mostar datos
  const mostrarDatos = () => {
    console.log(nombre);
    console.log(edad);
    console.log(esMayorDeEdad);
    console.log(mensaje);
    console.log(lista);
    console.log(lista2);
  }

  return (
    <>
      <div>
        <h1>Hello, World!</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>          
        </nav>
        <div>
          <p>Welcome to our website. This is a simple React application.</p>
        </div>
          declaracion de privacidad
          <a href="https://www.google.com">Link</a>
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <button type="submit">Submit</button>
          </form>
        <footer>
          <p>Copyright &copy; 2023 My Website</p>
        </footer>        
      </div>
    </>
  )
}

export default App
