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
    onTaxChange(e){
        CalculateActions.updateParameters(this.state.data.set("tax",e.target.value|0));
    }

    render() {
        if(!this.state){return (<div/>)}
        return (
            <div>
                <input placeholder="W2 Annual" type="text" onChange={this.onW2AnnualChange.bind(this)} value={this.state.data.get("w2Annual")}/>
                <input placeholder="W2 Hourly" type="text" onChange={this.onW2HourlyChange.bind(this)} value={this.state.data.get("w2Hourly")}/>
                <input placeholder="Takehome Annually" type="text" onChange={this.onTakehomeAnnualChange.bind(this)} value={this.state.data.get("takehomeAnnually")}/>
                <input placeholder="Takehome Monthly" type="text" onChange={this.onTakehomeMonthlyChange.bind(this)} value={this.state.data.get("takehomeMonthly")}/>
                <input placeholder="Contract Annually" type="text" onChange={this.onContractAnnualChange.bind(this)} value={this.state.data.get("contractAnnual")}/>
                <input placeholder="Contract Hourly" type="text" onChange={this.onContractHourlyChange.bind(this)} value={this.state.data.get("contractHourly")}/>
                <input placeholder="Tax" type="text" onChange={this.onTaxChange.bind(this)} value={this.state.data.get("tax")}/>
            </div>
        )
    }
}

module.exports = Component;