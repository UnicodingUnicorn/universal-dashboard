import React,{Suspense} from 'react';
const UdTerminal = React.lazy(() => import( './ud-terminal.jsx' /* webpackChunkName: "ud-terminal" */))

export default class UDDesigner extends React.Component {

    constructor() {
        super();

        this.state = {
            open : false
        }
    }

    componentDidMount() {
        $(this.modal).modal();
    }

    toggleTerminal() {
        $(this.modal).modal(this.state.open ? 'close' : 'open');
    }

    render() {
        return (
            [
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red" onClick={this.toggleTerminal.bind(this)}>
                        <i className="large fa fa-terminal"></i>
                    </a>
                </div>,
                <div ref={modal => this.modal = modal} className="modal bottom-sheet">
                    <div className="modal-content">
                        <h4>UD Terminal</h4>
                        <Suspense fallback={<div/>}><UdTerminal /> </Suspense>
                    </div>
                </div>
            ]
        )
    }
}