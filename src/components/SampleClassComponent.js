import React from "react";

export default class SampleClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Mensagem padrão"
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.alertMessage = this.alertMessage.bind(this);
  }

  alertMessage() {
    setTimeout(() => {
      alert(this.state.message);
    }, 3000);
  }

  handleSwitch(e) {
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Componente de Classe</h1>
        <select onChange={this.handleSwitch}>
          <option value="Oi! 😄">Oi</option>
          <option value="Tchau! 👋🏼">Tchau</option>
        </select>
        <br />
        <input type="button" value="Alerta" onClick={this.alertMessage} />
      </div>
    );
  }
}
