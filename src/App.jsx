import { useState } from 'react'
import React from 'react'
import './App.css'
import { FaCar } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { FiAlertTriangle } from "react-icons/fi";


function App() {
  const [monto, setMonto] = useState('');
  const [resultados, setResultados] = useState({
    carro: 0,
    conductor: 0,
    cobrador: 0,
    mensaje: '',
  });

  const calcularMontos = (M) => {
    const valor = parseFloat(M);
    if (isNaN(valor)) return;

    let carro = 0, conductor = 0, cobrador = 0;

    if (valor > 159 && valor < 180) {
      carro = (valor / 69) * 34;
      conductor = (valor / 69) * 22;
      cobrador = (valor / 69) * 13;
    } else if (valor > 179 && valor < 210) {
      carro = (valor / 69) * 31;
      conductor = (valor / 69) * 23;
      cobrador = (valor / 69) * 15;
    } else if (valor > 209 && valor < 230) {
      carro = (valor / 69) * 31;
      conductor = (valor / 69) * 23;
      cobrador = (valor / 69) * 15;
    } else if (valor > 229 && valor < 250) {
      carro = (valor / 69) * 33.5;
      conductor = (valor / 69) * 21;
      cobrador = (valor / 69) * 14.5;
    } else if (valor > 249 && valor < 270) {
      carro = (valor / 69) * 33.5;
      conductor = (valor / 69) * 20.5;
      cobrador = (valor / 69) * 15;
    } else if (valor > 269 && valor < 290) {
      carro = (valor / 69) * 33.5;
      conductor = (valor / 69) * 20.5;
      cobrador = (valor / 69) * 15;
    } else if (valor > 289 && valor < 310) {
      carro = (valor / 69) * 32.75;
      conductor = (valor / 69) * 21;
      cobrador = (valor / 69) * 15.25;
    } else if (valor > 309 && valor < 330) {
      carro = (valor / 69) * 32.5;
      conductor = (valor / 69) * 21.5;
      cobrador = (valor / 69) * 15;
    } else if (valor > 329 && valor < 350) {
      carro = (valor / 69) * 32.5;
      conductor = (valor / 69) * 21.5;
      cobrador = (valor / 69) * 15;
    } else if (valor > 349 && valor < 370) {
      carro = (valor / 69) * 32.5;
      conductor = (valor / 69) * 21.5;
      cobrador = (valor / 69) * 15;
    } else if (valor > 369 && valor < 390) {
      carro = (valor / 69) * 32.5;
      conductor = (valor / 69) * 21.5;
      cobrador = (valor / 69) * 15;
    } else if (valor > 389 && valor < 410) {
      carro = (valor / 69) * 32.5;
      conductor = (valor / 69) * 21.5;
      cobrador = (valor / 69) * 15;
    } else if (valor > 409 && valor < 430) {
      carro = (valor / 69) * 32.5;
      conductor = (valor / 69) * 21.5;
      cobrador = (valor / 69) * 15;
    } else if (valor > 429 && valor < 450) {
      carro = (valor / 69) * 32.5;
      conductor = (valor / 69) * 21.5;
      cobrador = (valor / 69) * 15;
    } else {
      setResultados({
        carro: 0,
        conductor: 0,
        cobrador: 0,
        mensaje: 'Monto fuera de rango.',
      });
      return;
    }

    // Redondear los montos
    const rCarro = Math.round(carro);
    const rConductor = Math.round(conductor);
    const rCobrador = Math.round(cobrador);
    const suma = rCarro + rConductor + rCobrador;

    let mensaje = '';
    const diferencia = Math.abs(suma - valor);

    if (suma === valor) {
      mensaje = 'La suma coincide con el monto ingresado.';
    } else if (diferencia <= 1) {
      mensaje = suma > valor
        ? `Te EXCEDISTE ${Math.round(diferencia)} sol. DEBES QUITAR 1 sol a uno de ellos`
        : `Te SOBRA ${Math.round(diferencia)} sol. DEBES AGREGAR 1 sol a uno de ellos`;
    } else {
      mensaje = 'La diferencia es mayor a 1 sol.';
    }

    setResultados({
      carro: rCarro,
      conductor: rConductor,
      cobrador: rCobrador,
      sumatotal:suma,
      mensaje,
    });
  };

  const handleChange = (e) => {
    const nuevoMonto = e.target.value;
    setMonto(nuevoMonto);
    calcularMontos(nuevoMonto);
  };

  return (
    <div className="container">
      <h1>CALCULAR MONTOS</h1>
      <label>Ingrese el monto:</label>
      <input
        
        value={monto}
        onChange={handleChange}
        placeholder="000"
      />

      <div className="resultados">
        <div className='resultado_contenido'>
          <p><span className='icono'><FaCar /></span>Carro:</p><p>S/</p> <div className='div_resultado'>{resultados.carro}</div>
        </div>
        <div className='resultado_contenido'>
          <p><span className='icono'><GiSteeringWheel /></span>Conductor:</p><p>S/</p> <div className='div_resultado'>{resultados.conductor}</div>
        </div>
        <div className='resultado_contenido'>
          <p><span className='icono'><GiReceiveMoney /></span>Cobrador:</p><p>S/</p> <div className='div_resultado'>{resultados.cobrador}</div>
        </div>
        
                     
      </div>

      <div className='separador'>
          <div className='separador_contenido'>
            <p>Monto ingresado</p>
            <p className='monto'>S/ {monto}</p>
          </div>

          <div className='separador_1'></div>

          <div className='separador_contenido'>
            <p>Suma total</p>
            <p className='monto'>S/ {resultados.sumatotal}</p>
          </div>
          
      </div>

      <footer>
        <strong><span className='icono_alert'><FiAlertTriangle /></span>{resultados.mensaje}</strong>
      </footer>
        
    </div>
  );
}

export default App
