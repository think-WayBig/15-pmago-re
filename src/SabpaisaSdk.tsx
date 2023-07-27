import { PaymentInitModal } from 'pg-test-project';
import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import uniqid from 'uniqid' // If user wants to redirect to PG without checkout form.import this package

export interface SabPaisaSdkProps {
    isOpen: boolean;
    sabPaisaUrl: string;
    clientCode: string;
    transUserName: string;
    txtnId: string;
    transUserPassword: string;
    authkey: string;
    authiv: string;
    callbackUrl: string;
    payerName: string;
    payerEmail: string;
    payerMobile: string;
    payerAddress: string;
    amount: string;
    udf1: string; udf2: string; udf3: string; udf4: string; udf5: string; udf6: string; udf7: string; udf8: string; udf9: string; udf10: string; udf11: string; udf12: string; udf13: string; udf14: string; udf15: string; udf16: string; udf17: string; udf18: string; udf19: string; udf20: string; channelId: string; programId: string; mcc: string;
}

const SabpaisaSdk: FunctionComponent<SabPaisaSdkProps> = (props: SabPaisaSdkProps) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const [clientCode, setClientCode] = useState(props.clientCode);
    const [transUserName, setTransUserName] = useState(props.transUserName);
    const [transUserPassword, setTransUserPassword] = useState(props.transUserPassword);
    const [authkey, setAuthkey] = useState(props.authkey);
    const [authiv, setAuthiv] = useState(props.authiv);
    const [callbackUrl, setCallbackUrl] = useState(props.callbackUrl);

    const onSubmit = (e?: any) => {
        console.log('Submit called is the working fine - > ', props);
        e.preventDefault();
        if (clientCode && callbackUrl && transUserPassword && transUserName && authkey && authiv) {
            setIsOpen(true)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <form className="ui form" onSubmit={onSubmit} style={{ width: "350px" }}>
                    <div className="field">
                        <label style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px", letterSpacing: "0.4px" }}>ClientCode</label>
                        <input type="text" value={clientCode} onChange={(e) => setClientCode(e.target.value)} />
                    </div>
                    <div className="field" style={{ marginTop: "25px" }}>
                        <label style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px", letterSpacing: "0.4px" }}>Trans User Name</label>
                        <input type="text" value={transUserName} onChange={(e) => setTransUserName(e.target.value)} />
                    </div>
                    <div className="field" style={{ marginTop: "25px" }}>
                        <label style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px", letterSpacing: "0.4px" }}>Trans User Password</label>
                        <input type="text" value={transUserPassword} onChange={(e) => setTransUserPassword(e.target.value)} />
                    </div>
                    <div className="field" style={{ marginTop: "25px" }}>
                        <label style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px", letterSpacing: "0.4px" }}>Auth Key</label>
                        <input type="text" value={authkey} onChange={(e) => setAuthkey(e.target.value)} />
                    </div>
                    <div className="field" style={{ marginTop: "25px" }}>
                        <label style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px", letterSpacing: "0.4px" }}>Auth IV</label>
                        <input type="text" value={authiv} onChange={(e) => setAuthiv(e.target.value)} />
                    </div>
                    <div className="field" style={{ marginTop: "25px" }}>
                        <label style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px", letterSpacing: "0.4px" }}>Call Back Url</label>
                        <input type="text" value={callbackUrl} onChange={(e) => setCallbackUrl(e.target.value)} />
                    </div>
                    <button id="submitSabPaisaBtn" className="ui button" type="submit">Submit</button>
                </form>

    //If user wants to redirect to PG without checkout form pass the uniqid() in clientTxnId other wise no need to pass anything.
    //If user wants to test on production then env={"prod"} 
    //If user wants to test on development then env={"dev"}
    //If user wants to test on staging then env={"stag"} or env={""}

                {
                    (clientCode && callbackUrl && transUserPassword && transUserName && authkey && authiv) && isOpen &&
                    <PaymentInitModal env={"prod"} clientCode={clientCode} transUserPassword={transUserPassword} transUserName={transUserName} isOpen={isOpen} authkey={authkey} authiv={authiv} clientTxnId={uniqid()} payerName={props.payerName} payerEmail={props.payerEmail} payerMobile={props.payerMobile} payerAddress={props.payerAddress} amount={props.amount} amountType={''} udf1={''} udf2={''} udf3={''} udf4={''} udf5={''} udf6={''} udf7={''} udf8={''} udf9={''} udf10={''} udf11={''} udf12={''} udf13={''} udf14={''} udf15={''} udf16={''} udf17={''} udf18={''} udf19={''} udf20={''} channelId={''} programId={''} mcc={''} />
                }

            </header>
        </div>
    );
}
export default SabpaisaSdk;
