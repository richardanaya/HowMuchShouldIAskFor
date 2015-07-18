let CalculateActions = require('../actions/calculateActions');

@Singleton
class DataStore extends Store {
    constructor() {
        super(Immutable.fromJS(
            {
                method: "w2",
                w2Annual: 50000,
                w2Hourly: 0,
                benefits: 0,
                contractAnnual: 0,
                contractHourly: 0,
                takehomeAnnually: 0,
                takehomeMonthly: 0,
                percentWorkableYear: 100,
                workableDays: 365,
                hoursPerDay: 8,
                tax: 25,
                selfEmploymentTax: 7.3,
                vacationDays: 30
            }
        ));
        CalculateActions.updateContractAnnualSalary.subscribe(this.updateContractAnnualSalary.bind(this));
        CalculateActions.updateContractHourlySalary.subscribe(this.updateContractHourlySalary.bind(this));
        CalculateActions.updateParameters.subscribe(this.updateParameters.bind(this));
        CalculateActions.updateTakeHomeAnnualSalary.subscribe(this.updateTakeHomeAnnualSalary.bind(this));
        CalculateActions.updateTakeHomeMonthlySalary.subscribe(this.updateTakeHomeMonthlySalary.bind(this));
        CalculateActions.updateW2HourlySalary.subscribe(this.updateW2HourlySalary.bind(this));
        CalculateActions.updateW2AnnualSalary.subscribe(this.updateW2AnnualSalary.bind(this));
        this.updateW2AnnualSalary(50000);
    }

    updaters = {
        "contractannual":this.updateContractAnnualSalary.bind(this),
        "contracthourly":this.updateContractHourlySalary.bind(this),
        "takehomeannually":this.updateTakeHomeAnnualSalary.bind(this),
        "takehomemonthly":this.updateTakeHomeMonthlySalary.bind(this),
        "w2annually":this.updateW2AnnualSalary.bind(this),
        "w2hourly":this.updateW2HourlySalary.bind(this)
    }

    updateParameters(state) {
        this.setState(state);
        this.updaters[this.state.get("method")]();
    }

    updateContractAnnualSalary(value) {
        this.updateCalcs("contractannual",(wDays, hrPerDay, tax, selfEmploymentTax, benefits) => {
            var contractAnnual = value!==undefined?value:this.state.get("contractAnnual");
            var contractHourly = value/wDays/hrPerDay
            var takehomeAnnually = contractAnnual*(1-tax/100-selfEmploymentTax/100)
            var takehomeMonthly = takehomeAnnually/12;
            var w2Annual = takehomeAnnually/(1-tax/100);
            var w2Hourly = w2Annual/(365*5/7)/hrPerDay;
            return {
                w2Hourly: w2Hourly,
                w2Annual: w2Annual,
                takehomeAnnually: takehomeAnnually,
                takehomeMonthly: takehomeMonthly,
                contractAnnual: contractAnnual,
                contractHourly: contractHourly
            };
        })
    }

    updateContractHourlySalary(value) {
        this.updateCalcs("contracthourly",(wDays, hrPerDay, tax, selfEmploymentTax, benefits) => {
            var contractHourly = value!==undefined?value:this.state.get("contractHourly");
            var contractAnnual = value*wDays*hrPerDay
            var takehomeAnnually = contractAnnual*(1-tax/100-selfEmploymentTax/100)
            var takehomeMonthly = takehomeAnnually/12;
            var w2Annual = takehomeAnnually/(1-tax/100);
            var w2Hourly = w2Annual/(365*5/7)/hrPerDay;
            return {
                w2Hourly: w2Hourly,
                w2Annual: w2Annual,
                takehomeAnnually: takehomeAnnually,
                takehomeMonthly: takehomeMonthly,
                contractAnnual: contractAnnual,
                contractHourly: contractHourly
            };
        })
    }

    updateTakeHomeAnnualSalary(value) {
        this.updateCalcs("takehomeannually",(wDays, hrPerDay, tax, selfEmploymentTax, benefits) => {
            var takehomeAnnually = value!==undefined?value:this.state.get("takehomeAnnually");
            var takehomeMonthly = takehomeAnnually/12;
            var w2Annual = takehomeAnnually/(1-tax/100);
            var w2Hourly = w2Annual/(365*5/7)/hrPerDay;
            var contractAnnual = (takehomeAnnually+benefits) / (1 - tax / 100 - selfEmploymentTax / 100)
            var contractHourly = contractAnnual / wDays / hrPerDay;
            return {
                w2Hourly: w2Hourly,
                w2Annual: w2Annual,
                takehomeAnnually: takehomeAnnually,
                takehomeMonthly: takehomeMonthly,
                contractAnnual: contractAnnual,
                contractHourly: contractHourly
            };
        })
    }

    updateTakeHomeMonthlySalary(value) {
        this.updateCalcs("takehomemonthly",(wDays, hrPerDay, tax, selfEmploymentTax, benefits) => {
            var takehomeMonthly = value!==undefined?value:this.state.get("takehomeMonthly");
            var takehomeAnnually = takehomeMonthly*12;
            var w2Annual = takehomeAnnually/(1-tax/100);
            var w2Hourly = w2Annual/(365*5/7)/hrPerDay;
            var contractAnnual = (takehomeAnnually+benefits) / (1 - tax / 100 - selfEmploymentTax / 100)
            var contractHourly = contractAnnual / wDays / hrPerDay;
            return {
                w2Hourly: w2Hourly,
                w2Annual: w2Annual,
                takehomeAnnually: takehomeAnnually,
                takehomeMonthly: takehomeMonthly,
                contractAnnual: contractAnnual,
                contractHourly: contractHourly
            };
        })
    }

    updateW2AnnualSalary(value) {
        this.updateCalcs("w2annually",(wDays, hrPerDay, tax, selfEmploymentTax, benefits) => {
            var w2Annual = value!==undefined?value:this.state.get("w2Annual");
            var w2Hourly = w2Annual/(365*5/7)/hrPerDay;
            var takehomeAnnually = w2Annual * (1 - tax / 100);
            var takehomeMonthly = takehomeAnnually / 12;
            var contractAnnual = (takehomeAnnually+benefits) / (1 - tax / 100 - selfEmploymentTax / 100)
            var contractHourly = contractAnnual / wDays / hrPerDay;
            return {
                w2Hourly: w2Hourly,
                w2Annual: w2Annual,
                takehomeAnnually: takehomeAnnually,
                takehomeMonthly: takehomeMonthly,
                contractAnnual: contractAnnual,
                contractHourly: contractHourly
            };
        })
    }

    updateW2HourlySalary(value) {
        this.updateCalcs("w2hourly",(wDays, hrPerDay, tax, selfEmploymentTax, benefits) => {
            var w2Hourly = value!==undefined?value:this.state.get("w2Hourly");
            var w2Annual = w2Hourly * (365*5/7) * hrPerDay;
            var takehomeAnnually = Math.ceil(w2Annual * (1 - tax / 100));
            var takehomeMonthly = Math.ceiltakehomeAnnually / 12;
            var contractAnnual = (takehomeAnnually+benefits) / (1 - tax / 100 - selfEmploymentTax / 100)
            var contractHourly = Math.ceil(contractAnnual / wDays / hrPerDay);
            return {
                w2Hourly: w2Hourly,
                w2Annual: w2Annual,
                takehomeAnnually: takehomeAnnually,
                takehomeMonthly: takehomeMonthly,
                contractAnnual: contractAnnual,
                contractHourly: contractHourly
            };
        })
    }

    updateCalcs(method,calc){
        var wDays = 365;
        wDays *= 5 / 7;
        wDays -= this.state.get("vacationDays")
        wDays = Math.ceil(wDays*this.state.get("percentWorkableYear")/100);

        var hrPerDay = this.state.get("hoursPerDay");
        var tax = this.state.get("tax");
        var selfEmploymentTax = this.state.get("selfEmploymentTax");

        var __ret = calc(wDays, hrPerDay, tax, selfEmploymentTax, this.state.get("benefits"));

        this.setState(
            this.state.withMutations((newState) => {
                newState.set("method", method)
                newState.set("workableDays", wDays)
                newState.set("w2Annual", Math.ceil(__ret.w2Annual))
                newState.set("w2Hourly", Math.ceil(__ret.w2Hourly))
                newState.set("contractAnnual", Math.ceil(__ret.contractAnnual))
                newState.set("contractHourly", Math.ceil(__ret.contractHourly))
                newState.set("takehomeAnnually", Math.ceil(__ret.takehomeAnnually))
                newState.set("takehomeMonthly", Math.ceil(__ret.takehomeMonthly))
            })
        );
    }
}

module.exports = DataStore;