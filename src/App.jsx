import React, { useState } from 'react';
import { FaCar, FaCheckCircle } from 'react-icons/fa';
import { GiSteeringWheel, GiReceiveMoney } from 'react-icons/gi';
import { FiAlertTriangle } from 'react-icons/fi';
import { FcMoneyTransfer } from "react-icons/fc";
import { RiRestaurantFill } from 'react-icons/ri';
import { GrMoney } from "react-icons/gr";
import { BsFuelPumpFill } from 'react-icons/bs';
import './App.css';



function App() {
  
  const [monto, setMonto] = useState('');
  const [yape, setYape] = useState('');
  const [gastos, setGastos] = useState(42);
  const [combustible, setCombustible] = useState('');
  const [resultados, setResultados] = useState({
    carro: 0,
    conductor: 0,
    cobrador: 0,
    sumatotal: 0,
    mensaje: '',
    mensajeColor: 'red',
    coincide: false
  });

  const calcularMontos = (M, Y, G, C) => {
    const montoIngresado = parseFloat(M) || 0;
    const montoYape = parseFloat(Y) || 0;
    const montoGastos = parseFloat(G) || 0;
    const montoCombustible = parseFloat(C) || 0;

    const montoTotal = montoIngresado + montoYape - montoGastos - montoCombustible;

    if (isNaN(montoTotal) || montoTotal <= 0) {
      setResultados({
        carro: 0,
        conductor: 0,
        cobrador: 0,
        sumatotal: 0,
        mensaje: 'Monto total inválido.',
        mensajeColor: 'red',
        coincide: false
      });
      return;
    }

    let carro = 0, conductor = 0, cobrador = 0;

    if (montoTotal > 159 && montoTotal < 180) {
      carro = (montoTotal / 69) * 34;
      conductor = (montoTotal / 69) * 22;
      cobrador = (montoTotal / 69) * 13;
    } else if (montoTotal > 179 && montoTotal < 210) {
      carro = (montoTotal / 69) * 31;
      conductor = (montoTotal / 69) * 23;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 209 && montoTotal < 230) {
      carro = (montoTotal / 69) * 31;
      conductor = (montoTotal / 69) * 23;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 229 && montoTotal < 250) {
      carro = (montoTotal / 69) * 33.5;
      conductor = (montoTotal / 69) * 21;
      cobrador = (montoTotal / 69) * 14.5;
    } else if (montoTotal > 249 && montoTotal < 270) {
      carro = (montoTotal / 69) * 33.5;
      conductor = (montoTotal / 69) * 20.5;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 269 && montoTotal < 290) {
      carro = (montoTotal / 69) * 33.5;
      conductor = (montoTotal / 69) * 20.5;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 289 && montoTotal < 310) {
      carro = (montoTotal / 69) * 32.75;
      conductor = (montoTotal / 69) * 21;
      cobrador = (montoTotal / 69) * 15.25;
    } else if (montoTotal > 309 && montoTotal < 330) {
      carro = (montoTotal / 69) * 32.5;
      conductor = (montoTotal / 69) * 21.5;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 329 && montoTotal < 350) {
      carro = (montoTotal / 69) * 32.5;
      conductor = (montoTotal / 69) * 21.5;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 349 && montoTotal < 370) {
      carro = (montoTotal / 69) * 32.5;
      conductor = (montoTotal / 69) * 21.5;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 369 && montoTotal < 390) {
      carro = (montoTotal / 69) * 32.5;
      conductor = (montoTotal / 69) * 21.5;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 389 && montoTotal < 410) {
      carro = (montoTotal / 69) * 32.5;
      conductor = (montoTotal / 69) * 21.5;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 409 && montoTotal < 430) {
      carro = (montoTotal / 69) * 32.5;
      conductor = (montoTotal / 69) * 21.5;
      cobrador = (montoTotal / 69) * 15;
    } else if (montoTotal > 429 && montoTotal < 450) {
      carro = (montoTotal / 69) * 32.5;
      conductor = (montoTotal / 69) * 21.5;
      cobrador = (montoTotal / 69) * 15;
    } else {
      setResultados({
        carro: 0,
        conductor: 0,
        cobrador: 0,
        sumatotal: 0,
        mensaje: 'Monto total fuera de rango.',
        mensajeColor: 'red',
        coincide: false
      });
      return;
    }

    const rCarro = Math.round(carro);
    const rConductor = Math.round(conductor);
    const rCobrador = Math.round(cobrador);
    const suma = rCarro + rConductor + rCobrador;
    const fisicoCarro = rCarro - montoYape;

    
    
    const diferencia = Math.abs(suma - montoTotal);
    let mensaje = '';
    let mensajeColor = 'red';
    let coincide = false;

    if (suma === montoTotal) {
      mensaje = 'La suma coincide con el monto total.';
      mensajeColor = 'green';
      coincide = true;
    } else if (diferencia <= 1) {
      mensaje = suma > montoTotal
        ? `Te EXCEDISTE ${Math.round(diferencia)} sol. Quita 1 sol a uno de ellos.`
        : `Te SOBRA ${Math.round(diferencia)} sol. Agrega 1 sol a uno de ellos.`;
      coincide = false;
    } else {
      mensaje = 'La diferencia es mayor a 1 sol.';
      coincide = false;
    }

    setResultados({
      carro: rCarro,
      conductor: rConductor,
      cobrador: rCobrador,
      sumatotal: suma,
      fisicocarro: fisicoCarro,
      mensaje,
      mensajeColor,
      coincide
    });
  };

  const handleChange = (campo, valor) => {
    if (campo === 'monto') setMonto(valor);
    if (campo === 'yape') setYape(valor);
    if (campo === 'gastos') setGastos(valor);
    if (campo === 'combustible') setCombustible(valor);
    calcularMontos(
      campo === 'monto' ? valor : monto,
      campo === 'yape' ? valor : yape,
      campo === 'gastos' ? valor : gastos,
      campo === 'combustible' ? valor : combustible
    );
  };

  const montoTotal = (parseFloat(monto) || 0) + (parseFloat(yape) || 0) - (parseFloat(gastos) || 0) - (parseFloat(combustible) || 0);
  
  

  return (
    <div className="container">
      <h1>CALCULAR MONTOS</h1>

      <div className='container_0'>
        <div className='container_1'>
          <label className='label_0'> 
            <span className='icono_0'><GrMoney /></span>
            Monto en fisico:</label>
          <input value={monto} onChange={(e) => handleChange('monto', e.target.value)} placeholder="000" />
          
          <label className='label_0'> 
            <span className='icono_0'><FcMoneyTransfer /></span>
            Yape:</label>
          <input value={yape} onChange={(e) => handleChange('yape', e.target.value)} placeholder="000" />
        </div>

        <div className='container_2'>
          <label className='label_0'> 
            <span className='icono_0'><RiRestaurantFill /></span>
            Gastos:</label>
          <input value={gastos} onChange={(e) => handleChange('gastos', e.target.value)} placeholder="000" />

          <label className='label_0'> 
            <span className='icono_0'><BsFuelPumpFill /></span>
            Combustible:</label>
          <input value={combustible} onChange={(e) => handleChange('combustible', e.target.value)} placeholder="000" />
        </div>
      </div>
      

      <div className="resultados">
        <div className='resultado_contenido'>
          <p><span className='icono'><FaCar /></span>Carro:</p><p>S/</p> 
          
          <div className='div_resultado div_yape_resaltado'><span className='cabecera'>Yape</span>{yape}</div>
          <p>+</p>
          <div className='div_resultado div_fisico_resaltado'><span className='cabecera'>Fisico</span>{resultados.fisicocarro}</div>
          <p>=</p>
          <div className='div_resultado div_resultado_resaltado_1'><span className='cabecera'>Total</span>{resultados.carro}</div>
          
        </div>
        <div className='resultado_contenido'>
          <p><span className='icono'><GiSteeringWheel /></span>Conductor:</p><p>S/</p> 
          <div className='div_resultado div_resultado_resaltado'>{resultados.conductor}</div>
        </div>
        <div className='resultado_contenido'>
          <p><span className='icono'><GiReceiveMoney /></span>Cobrador:</p><p>S/</p> 
          <div className='div_resultado div_resultado_resaltado'>{resultados.cobrador}</div>
        </div>
      </div>

      <div className='separador'>
        <div className='separador_contenido'>
          <p>Monto Total Entregado</p>
          <p className='monto'>S/ {montoTotal || 0}</p>
        </div>

        <div className='separador_1'></div>

        <div className='separador_contenido'>
          <p>Suma total</p>
          <p className='monto'>S/ {resultados.sumatotal}</p>
        </div>
      </div>

      <footer>
        <strong style={{ color: resultados.mensajeColor }}>
          {resultados.coincide 
            ? <FaCheckCircle style={{ fontSize: '40px', color: 'green', marginRight: '5px' }} /> 
            : <FiAlertTriangle style={{ fontSize: '40px', color: 'red', marginRight: '5px' }} />}
          {resultados.mensaje}
        </strong>
        
      </footer>
    </div>
  );
}

export default App;
