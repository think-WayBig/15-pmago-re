import './App.css';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import SabpaisaSdk from './SabpaisaSdk.tsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    var mail = urlParams.get('mail');
    var phone = urlParams.get('phone');
    var amt = urlParams.get('amt');
    var address = urlParams.get('address');
    this.state = {
      isOpen: false,
      clientCode: 'MAKU78',
      transUserName: 'pmago6722_8984',
      txtnId: Math.random().toString(),
      transUserPassword: 'MAKU78_SP8984',
      authkey: '8ROURD6akwmcUQMq',
      authiv: 'V3vFYNNdRbSdGvt7',
      callbackUrl: 'https://pmago.co.in',
      payerName: name,
      payerEmail: mail,
      payerMobile: phone,
      payerAddress: address,
      amount: amt,
      udf1: "", udf2: "", udf3: "", udf4: "", udf5: "", udf6: "", udf7: "", udf8: "", udf9: "", udf10: "", udf11: "", udf12: "", udf13: "", udf14: "", udf15: "", udf16: "", udf17: "", udf18: "", udf19: "", udf20: "", channelId: "", programId: "", mcc: "",
    };

    this.handlePayerName = this.handlePayerName.bind(this);
    this.handlePayerEmail = this.handlePayerEmail.bind(this);
    this.handlePayerPhone = this.handlePayerPhone.bind(this);
    this.handlePayerAmount = this.handlePayerAmount.bind(this);
    this.handlePayerAddress = this.handlePayerAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePayerName(event) {
    this.setState({ payerName: event.target.value });
  }

  handlePayerEmail(event) {
    this.setState({ payerEmail: event.target.value });
  }
  handlePayerPhone(event) {
    this.setState({ payerMobile: event.target.value });
  }
  handlePayerAmount(event) {
    this.setState({ amount: event.target.value });
  }
  handlePayerAddress(event) {
    this.setState({ payerAddress: event.target.value });
  }

  handleSubmit() {
    const rootElement = document.getElementById("renderSabPaisa");
    ReactDOM.render(
      <SabpaisaSdk txtnId={this.state.txtnId} sabPaisaUrl={this.state.sabPaisaUrl} clientCode={this.state.clientCode} transUserPassword={this.state.transUserPassword} transUserName={this.state.transUserName} callbackUrl={this.state.callbackUrl} isOpen={this.state.isOpen} authkey={this.state.authkey} authiv={this.state.authiv} payerName={this.state.payerName} payerEmail={this.state.payerEmail} payerMobile={this.state.payerMobile} payerAddress={this.state.payerAddress} amount={this.state.amount} udf1={this.state.udf1} udf2={this.state.udf2} udf3={this.state.udf3} udf4={this.state.udf4} udf5={this.state.udf5} udf6={this.state.udf6} udf7={this.state.udf6} udf8={this.state.udf8} udf9={this.state.udf9} udf10={this.state.udf10} udf11={this.state.udf11} udf12={this.state.udf12} udf13={this.state.udf13} udf14={this.state.udf14} udf15={this.state.udf15} udf16={this.state.udf16} udf17={this.state.udf17} udf18={this.state.udf18} udf19={this.state.udf19} udf20={this.state.udf20} channelId={this.state.channelId} programId={this.state.programId} mcc={this.state.mcc} />, rootElement
    );
    const btn = document.getElementById('submitSabPaisaBtn');
    btn.click();
  }

  render() {
    setTimeout(this.handleSubmit, 50)

    return (
      <form style={{visibility: "hidden"}} class="main-frm" onSubmit={this.handleSubmit}>
        <div class="wrapper">
          <div><h2>Sabpaisa Payment</h2></div>
          <div id='renderSabPaisa'></div>
          <div class="frm">
            <label for=""> Name : </label> <br />
            <input type="text" value={this.state.payerName} onChange={this.handlePayerName} />
          </div>
          <div class="frm">
            <label for=""> Email : </label> <br />
            <input type="text" value={this.state.payerEmail} onChange={this.handlePayerEmail} />
          </div>
          <div class="frm">
            <label for=""> Phone : </label> <br />
            <input type="text" value={this.state.payerMobile} onChange={this.handlePayerPhone} />
          </div>
          <div class="frm">
            <label for=""> Amount : </label> <br />
            <input type="text" value={this.state.amount} onChange={this.handlePayerAmount} />
          </div>
          <div class="frm">
            <label for=""> Address : </label> <br />
            <input type="text" value={this.state.payerAddress} onChange={this.handlePayerAddress} />
          </div>
          <div class="frm">
            <button type="submit" value="Submit" class="pay-btn">Pay</button>
          </div>

        </div>
      </form>
    );
  }
}
export default App;