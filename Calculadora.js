
import React, { Component } from 'react';
import {
Button,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';

import MensajeImc from './MensajeImc';

export default class Calculadora extends Component {
    constructor(props){
        super(props)

        this.state={
            alturaF : undefined,
            pesoF: undefined,
            imcF: '',
            resultadoF: 'Antonio'
        }
    }

    guardarAltura = (altura) => {
        this.setState({alturaF: altura});
    }

    guardarPeso = (peso) => {
        this.setState({pesoF: peso});
    }

    calcularIMC=()=>{

        //let pesoD = this.state.pesoF
        //let alturaD = this.state.alturaF
        let imc = this.state.pesoF/Math.pow(this.state.alturaF, 2);
        this.setState({imcF: imc});
        console.log(imc);
        //this.actualizarResultado();
    }

    //POR ACABAR
    

    render(){
        return(
            <View>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Altura"
                onChangeText={this.guardarAltura}/>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Peso"
                onChangeText={this.guardarPeso}/>
                <View>
                    <Button title="CALCULAR"
                    onPress={this.calcularIMC}
                    />
                </View>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="IMC" editable={false}
                value={"TU IMC ES DE " + this.state.imcF}/>
                <MensajeImc imc={this.state.imcF}/>

            </View>
        )
    }
}