console.log("Funciona")

    /* PROBABILICARTAS   */
        const nombresCartas = ["lanzar una moneda", "lanzar un dado", "tomar un naipe", "girar la ruleta", 
            "lanzar la moneda 2 veces", "lanzar la moneda y el dado", "lanzar el dado en 2 tiros (uno suma y el otro resta puntos)", 
            "Tomar 2 naipes (uno suma y el otro resta)", "girar la ruleta 2 veces y suma", "lanzar el dado, elegir un naipe y tirar la moneda"];
      
        function voltearCarta(elemento, numero) {
            // Genera un número aleatorio entre 1 y 6 (representa las cartas)
            const numeroAleatorio = Math.floor(Math.random() * 10);
            const nombreCarta = nombresCartas[numeroAleatorio];
            

            // Cambia la imagen del naipe seleccionado para mostrar la carta aleatoria
            elemento.style.backgroundImage = `url('img/proba${numeroAleatorio}.png')`;

            // Muestra el resultado
            document.getElementById('resultadoCarta').textContent = `Has seleccionado el la carta ${numero} y ahora debes ${nombreCarta}`;
        

        // Vuelve a dar vuelta la carta al reverso después de 10 segundos
            setTimeout(function() {
                elemento.style.backgroundImage = "url('img/proba.png')";
                document.getElementById('resultadoCarta').textContent = "Selecciona una carta para realizar una acción";
            }, 10000); // 10000 milisegundos = 10 segundos
        }

	/* DADO */
        function lanzarDado() {
            // Obtiene un número aleatorio entre 1 y 6 (las caras del dado)
            const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
            
            // Cambia la imagen del dado para mostrar la cara seleccionada
            document.getElementById('dado').style.backgroundImage = `url('img/dado${numeroAleatorio}.jpg')`;
            
            // Muestra el resultado
            document.getElementById('resultadoDado').textContent = `Resultado: ${numeroAleatorio} puntos`;
        
                    // Restablece la imagen a la original después de 4 segundos
            setTimeout(function() {
                document.getElementById('dado').style.backgroundImage = "url('img/dado.jpg')";
                document.getElementById('resultadoDado').textContent = "Resultado:";
            }, 4000); // 4000 milisegundos = 4 segundos
        }
    /* MONEDA */
         function lanzarMoneda() {
            // Genera un número aleatorio (0 o 1) para representar cara o cruz
            const numeroAleatorio = Math.floor(Math.random() * 2);

            // Define el resultado en función del número aleatorio
            let resultado = "Cara"; // 0 representa cara
            if (numeroAleatorio === 1) {
                resultado = "Cruz"; // 1 representa cruz
            }
            // Cambia la imagen del dado para mostrar la cara seleccionada
            document.getElementById('moneda').style.backgroundImage = `url('img/moneda${numeroAleatorio}.png')`;


            // Muestra el resultado
            document.getElementById('resultadoMoneda').textContent = `Resultado: ${resultado}`;

             // Restablece la imagen a la original después de 4 segundos
            setTimeout(function() {
                document.getElementById('moneda').style.backgroundImage = "url('img/moneda.jpg')";
                document.getElementById('resultadoMoneda').textContent = "Resultado:";
            }, 4000); // 4000 milisegundos = 4 segundos
        }
    /* NAIPES */
        const nombresNaipes = ["0", "5", "10", "Jack", "Reina", "Rey", "As"];
      
        function voltearNaipe(elemento, numero) {
            // Genera un número aleatorio entre 1 y 6 (representa los naipes)
            const numeroAleatorio = Math.floor(Math.random() * 6)   + 1;
            const nombreNaipe = nombresNaipes[numeroAleatorio];
            

            // Cambia la imagen del naipe seleccionado para mostrar la carta aleatoria
            elemento.style.backgroundImage = `url('img/naipe${numeroAleatorio}.jpg')`;

            // Muestra el resultado
            document.getElementById('resultadoNaipe').textContent = `Has seleccionado el naipe ${numero} y has obtenido la carta ${nombreNaipe}. Tienes ${numeroAleatorio} puntos`;
        

        // Vuelve a dar vuelta la carta al reverso después de 5 segundos
            setTimeout(function() {
                elemento.style.backgroundImage = "url('img/naipes.jpg')";
                document.getElementById('resultadoNaipe').textContent = "Selecciona un naipe para ver la carta.";
            }, 5000); // 5000 milisegundos = 5 segundos
		}
	/* RULETA */
		const flecha = document.getElementById("flecha");
        const girarBtn = document.getElementById("girar-btn");
        const resultadoPuntos = document.getElementById("resultado-puntos");

        // Variable para rastrear el ángulo de rotación actual de la flecha
        let anguloFlechaActual = 0;

        // Define los rangos de ángulos y los puntajes correspondientes
        const rangosPuntaje = [
            { rango: [0, 72], puntaje: 5 },
            { rango: [73, 197], puntaje: 3 },
            { rango: [198, 359], puntaje: 1 }
        ];

        // Variable para rastrear si la animación de la flecha ha terminado
        let animacionTerminada = true;

        // Función para girar la flecha aleatoriamente
        function girarFlechaAleatoriamente() {
            if (animacionTerminada) {
                animacionTerminada = false;

                // Generar un número aleatorio de vueltas completas entre 5 y 10
                const vueltasAleatorias = Math.floor(Math.random() * 6) + 5;

                // Calcular el ángulo aleatorio dentro de un ciclo de 360 grados
                const anguloAleatorio = Math.floor(Math.random() * 360);

                // Calcular el ángulo total de destino, incluyendo las vueltas completas
                const anguloDestino = vueltasAleatorias * 360 + anguloAleatorio;

                // Aplicar la animación de giro a la flecha
                flecha.style.transition = "transform 2.5s ease-out";
                flecha.style.transform = `rotate(${anguloDestino}deg)`;

                // Actualizar el ángulo actual de la flecha
                anguloFlechaActual = anguloDestino;
            }
        }

        // Función para calcular el puntaje basado en el ángulo
        function calcularPuntaje(angulo) {
            // Encuentra el puntaje correspondiente al ángulo
            for (const rango of rangosPuntaje) {
                if (angulo >= rango.rango[0] && angulo <= rango.rango[1]) {
                    return rango.puntaje;
                }
            }

            return 0; // Si no se encuentra un rango, devuelve 0 puntos
        }

        // Función para reiniciar el puntaje
        function reiniciarPuntaje() {
            resultadoPuntos.textContent = "Puntaje: 0";
        }

        // Evento para detectar el final de la animación de la flecha
        flecha.addEventListener("transitionend", function () {
            animacionTerminada = true;

            // Calcular el puntaje basado en el ángulo actual
            const puntaje = calcularPuntaje(anguloFlechaActual % 360); // Tomamos el módulo 360

            // Mostrar el puntaje en el resultado
            resultadoPuntos.textContent = `Puntaje: ${puntaje}`;

            // Reiniciar el puntaje después de 5 segundos
            setTimeout(reiniciarPuntaje, 5000);
        });

        // Agregar un evento al botón para iniciar el giro de la flecha
        girarBtn.addEventListener("click", girarFlechaAleatoriamente);
