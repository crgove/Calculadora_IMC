import React, {Component} from 'react';
import {Text} from 'react-native';

class MensajeImc extends Component {



    mensajeSobreImc = ()=>{
        let resultado = ""
        let imc = this.props.imc;
      
        if(!imc) {
            return resultado;
        }

        if(imc < 18.5) {
            resultado = "Peso insuficiente";
        } else if(imc >= 18.5 && imc < 24.9){
            resultado = "Peso normal"
        } else if(imc >= 25 && imc <= 26.9){
            resultado = "Sobrepeso grado I"
        } else if(imc >= 27 && imc <= 29.9){
            resultado ="Sobrepeso grado II"
        } else if(imc >= 30 && imc <= 34.9){
            resultado = "Obesidad tipo I"
        } else if(imc >= 35 && imc  <= 39.9){
            resultado = "Obesidad tipo II"
        } else if(imc >= 40 && imc <= 49.9){
            resultado = "Obesidad mórbida"
        } else if(imc >= 50){
            resultado = "Obesidad extrema"
        }

        //this.setState({resultadoF: resultado})
        console.log(resultado, "HOLI");
        return resultado;
    }

    render(){
        let mensaje = this.mensajeSobreImc();
        return(
            <Text>{mensaje}</Text>
        )
    }
}

export default MensajeImc;