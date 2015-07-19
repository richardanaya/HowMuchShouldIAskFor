import CalculateStore from "../stores/calculateStore";
import CalculateActions from "../actions/calculateActions";

class Component extends React.Component {
    constructor(){
        super();
    }

    componentDidMount() {
        CalculateStore.instance.subscribe(this.onCalculateState.bind(this));
    }

    onCalculateState(state){
        this.setState({
            data:state
        })
    }

    onW2HourlyChange(e){
        CalculateActions.updateW2HourlySalary(e.target.value|0);
    }

    onW2AnnualChange(e){
        CalculateActions.updateW2AnnualSalary(e.target.value|0);
    }

    onTakehomeAnnualChange(e){
        CalculateActions.updateTakeHomeAnnualSalary(e.target.value|0);
    }
    onTakehomeMonthlyChange(e){
        CalculateActions.updateTakeHomeMonthlySalary(e.target.value|0);
    }
    onContractAnnualChange(e){
        CalculateActions.updateContractAnnualSalary(e.target.value|0);
    }
    onContractHourlyChange(e){
        CalculateActions.updateContractHourlySalary(e.target.value|0);
    }

    render() {
        if(!this.state){return (<div/>)}
        return (
            <div className="page">
                <form className="col s12">
                    <div className="row">
                        <h4>What is my contractor equivalent to my current salary?</h4>
                        <ol>
                            <li>Enter in annual w2 salary</li>
                            <li>Adjust tax rate until your monthly take home looks about right</li>
                            <li>Play with parameters until your conditions are approximated</li>
                        </ol>
                    </div>
                    <div className="row">
                        <h4>Salary</h4>
                        <p>These columns represent equivalant situations of quality of living.</p>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input placeholder="$" type="text"  onChange={this.onW2AnnualChange.bind(this)} value={this.state.data.get("w2Annual")||""}/>
                            <label className="active">W2 Annual</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="$" type="text" onChange={this.onTakehomeAnnualChange.bind(this)} value={this.state.data.get("takehomeAnnually")||""}/>
                            <label className="active">Takehome Annual</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="$" type="text" onChange={this.onContractAnnualChange.bind(this)} value={this.state.data.get("contractAnnual")||""}/>
                            <label className="active">Contract Annual</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">

                        </div>
                        <div className="input-field col s4">
                            <input placeholder="$" type="text" onChange={this.onTakehomeMonthlyChange.bind(this)} value={this.state.data.get("takehomeMonthly")||""}/>
                            <label className="active">Takehome Monthly</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="$" type="text" onChange={this.onContractHourlyChange.bind(this)} value={this.state.data.get("contractHourly")||""}/>
                            <label className="active">Contract Hourly</label>
                        </div>
                    </div>
                    <div className="row">
                        <h4>Parameters</h4>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input placeholder="$" type="text" onChange={(e)=>{CalculateActions.updateParameters(this.state.data.set("benefits",e.target.value|0))}} value={this.state.data.get("benefits")||""}/>
                            <label className="active">Benefits</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="%" type="text" onChange={(e)=>{CalculateActions.updateParameters(this.state.data.set("tax",e.target.value|0))}} value={this.state.data.get("tax")||""}/>
                            <label className="active">W2 Tax Rate</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="#" type="text" onChange={(e)=>{CalculateActions.updateParameters(this.state.data.set("vacationDays",e.target.value|0))}} value={this.state.data.get("vacationDays")||""}/>
                            <label className="active">Unpaid Vacation Days</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">

                        </div>
                        <div className="input-field col s4">
                            <input placeholder="%" type="text" readOnly value={this.state.data.get("selfEmploymentTax")}/>
                            <label className="active">Self Employment Tax</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="%" type="text" onChange={(e)=>{CalculateActions.updateParameters(this.state.data.set("percentWorkableYear",e.target.value|0))}} value={this.state.data.get("percentWorkableYear")||""}/>
                            <label className="active">% of Year Workable</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">

                        </div>
                        <div className="input-field col s4">

                        </div>
                        <div className="input-field col s4">
                            <input placeholder="#" type="text" readOnly value={this.state.data.get("workableDays")||""}/>
                            <label className="active">Workable Days</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">

                        </div>
                        <div className="input-field col s4">

                        </div>
                        <div className="input-field col s4">

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">

                        </div>
                        <div className="input-field col s4">

                        </div>
                        <div className="input-field col s4">

                        </div>
                    </div>
                </form>
                <form>

                </form>
            </div>
        )
    }
}

module.exports = Component;