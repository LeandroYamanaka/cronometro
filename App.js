import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import estilo from './style/estilo.js';

class cronometro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      horas: 0,
      minutos: 0,
      segundos: 0,
      ativo: false,
      voltas: []
    }

    this.pulsoDeClock = this.pulsoDeClock.bind(this);
    this.iniciaRelogio = this.iniciaRelogio.bind(this);
    this.pararRelogio = this.pararRelogio.bind(this);
    this.marcarRelogio = this.marcarRelogio.bind(this);
    this.zerarRelogio = this.zerarRelogio.bind(this);
  }

  iniciaRelogio() {
    if (!this.state.ativo) {
      this.setState({ clock: setInterval(this.pulsoDeClock, 1000) });
      this.setState({ ativo: true })
    }
  }

  pulsoDeClock() {
    var h = this.state.horas;
    var m = this.state.minutos;
    var s = this.state.segundos;

    if (s < 59) {
      s++;
    } else {
      s = 0;
      if (m < 59) {
        m++;
      } else {
        m = 0;
        h++
      }
    }

    this.setState({ segundos: s, minutos: m, horas: h })
  }

  pararRelogio() {

    if (this.state.ativo) {
      clearInterval(this.state.clock);
      this.setState({ ativo: false });
    }
  }

  marcarRelogio() {

    var txtCronometro = this.formatar(this.state.horas) + ":" + this.formatar(this.state.minutos) + ":" + this.formatar(this.state.segundos) + "\n";
    this.state.voltas.push(txtCronometro);
    this.forceUpdate();
  }

  formatar(t) {
    return (t < 10) ? "0" + t.toString() : t.toString();
  }

  zerarRelogio() {
    this.pararRelogio();
    this.setState({ segundos: 0, minutos: 0, horas: 0 });

    if (this.state.voltas.length > 0) {
      this.state.voltas.push(' ------------ \n');
    }
  }

  render() {

    var txtH = this.formatar(this.state.horas);
    var txtM = this.formatar(this.state.minutos);
    var txtS = this.formatar(this.state.segundos);

    return (
      <ScrollView style={estilo.corpo}>
        <View style={estilo.header}>
            <Text style={estilo.titulo}>Cronômetro</Text>
        </View>
        <View  style={estilo.container}>
          <Text style={estilo.contador}>{txtH}:{txtM}:{txtS}</Text>
        </View>
        <View style={estilo.container}>
          <TouchableOpacity onPress={(this.state.ativo ? this.pararRelogio : this.iniciaRelogio)} style={estilo.botao}>
            <Text style={estilo.textoBotao}>{(this.state.ativo ? 'Pausar' : 'Começar')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.marcarRelogio} style={estilo.botao}>
            <Text style={estilo.textoBotao}>Marcar Volta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.zerarRelogio} style={estilo.botao}>
             <Text style={estilo.textoBotao}>Zerar</Text>
          </TouchableOpacity>
        </View>
       <View style={estilo.container}>
          <Text style={estilo.voltas}>{this.state.voltas}</Text>
        </View>
      </ScrollView>
    )
  }
}
export default cronometro;
