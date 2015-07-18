(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  var Main = require('./components/main.jsx');
  var Calculate = require('./components/calculate.jsx');

  var routes = React.createElement(
    ReactRouter.Route,
    { handler: Main },
    React.createElement(ReactRouter.Route, { path: '/', handler: Calculate })
  );

  ReactRouter.run(routes, ReactRouter.HashLocation, function (Root) {
    React.render(React.createElement(Root, null), document.body);
  });
})();

},{"./components/calculate.jsx":3,"./components/main.jsx":4}],2:[function(require,module,exports){
"use strict";

exports.updateW2AnnualSalary = Action.create();
exports.updateW2HourlySalary = Action.create();
exports.updateTakeHomeAnnualSalary = Action.create();
exports.updateTakeHomeMonthlySalary = Action.create();
exports.updateContractAnnualSalary = Action.create();
exports.updateContractHourlySalary = Action.create();
exports.updateParameters = Action.create();

},{}],3:[function(require,module,exports){
"use strict";

var _storesCalculateStore = require("../stores/calculateStore");

var _storesCalculateStore2 = babelHelpers.interopRequireDefault(_storesCalculateStore);

var _actionsCalculateActions = require("../actions/calculateActions");

var _actionsCalculateActions2 = babelHelpers.interopRequireDefault(_actionsCalculateActions);

var Component = (function (_React$Component) {
    babelHelpers.inherits(Component, _React$Component);

    function Component() {
        babelHelpers.classCallCheck(this, Component);

        babelHelpers.get(Object.getPrototypeOf(Component.prototype), "constructor", this).call(this);
    }

    babelHelpers.createClass(Component, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            _storesCalculateStore2["default"].instance.subscribe(this.onCalculateState.bind(this));
        }
    }, {
        key: "onCalculateState",
        value: function onCalculateState(state) {
            this.setState({
                data: state
            });
        }
    }, {
        key: "onW2HourlyChange",
        value: function onW2HourlyChange(e) {
            _actionsCalculateActions2["default"].updateW2HourlySalary(e.target.value | 0);
        }
    }, {
        key: "onW2AnnualChange",
        value: function onW2AnnualChange(e) {
            _actionsCalculateActions2["default"].updateW2AnnualSalary(e.target.value | 0);
        }
    }, {
        key: "onTakehomeAnnualChange",
        value: function onTakehomeAnnualChange(e) {
            _actionsCalculateActions2["default"].updateTakeHomeAnnualSalary(e.target.value | 0);
        }
    }, {
        key: "onTakehomeMonthlyChange",
        value: function onTakehomeMonthlyChange(e) {
            _actionsCalculateActions2["default"].updateTakeHomeMonthlySalary(e.target.value | 0);
        }
    }, {
        key: "onContractAnnualChange",
        value: function onContractAnnualChange(e) {
            _actionsCalculateActions2["default"].updateContractAnnualSalary(e.target.value | 0);
        }
    }, {
        key: "onContractHourlyChange",
        value: function onContractHourlyChange(e) {
            _actionsCalculateActions2["default"].updateContractHourlySalary(e.target.value | 0);
        }
    }, {
        key: "render",
        value: function render() {
            var _this = this;

            if (!this.state) {
                return React.createElement("div", null);
            }
            return React.createElement(
                "div",
                { className: "page" },
                React.createElement(
                    "form",
                    { className: "col s12" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "h4",
                            null,
                            "How to use?"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is a form for discovering a rough estimate of how much one should charge as a contractor."
                        ),
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Enter in annual w2 salary"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Adjust tax rate until your monthly take home looks about right"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Play with parameters until your conditions are approximated"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "h4",
                            null,
                            "Salary"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "These columns represent equivalant situations of quality of living."
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onW2AnnualChange.bind(this), value: this.state.data.get("w2Annual") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "W2 Annual"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onTakehomeAnnualChange.bind(this), value: this.state.data.get("takehomeAnnually") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Takehome Annual"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onContractAnnualChange.bind(this), value: this.state.data.get("contractAnnual") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Contract Annual"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onTakehomeMonthlyChange.bind(this), value: this.state.data.get("takehomeMonthly") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Takehome Monthly"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onContractHourlyChange.bind(this), value: this.state.data.get("contractHourly") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Contract Hourly"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "h4",
                            null,
                            "Parameters"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: function (e) {
                                    _actionsCalculateActions2["default"].updateParameters(_this.state.data.set("benefits", e.target.value | 0));
                                }, value: this.state.data.get("benefits") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Benefits"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "%", type: "text", onChange: function (e) {
                                    _actionsCalculateActions2["default"].updateParameters(_this.state.data.set("tax", e.target.value | 0));
                                }, value: this.state.data.get("tax") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "W2 Tax Rate"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "#", type: "text", onChange: function (e) {
                                    _actionsCalculateActions2["default"].updateParameters(_this.state.data.set("vacationDays", e.target.value | 0));
                                }, value: this.state.data.get("vacationDays") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Unpaid Vacation Days"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "%", type: "text", readOnly: true, value: this.state.data.get("selfEmploymentTax") }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Self Employment Tax"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "%", type: "text", onChange: function (e) {
                                    _actionsCalculateActions2["default"].updateParameters(_this.state.data.set("percentWorkableYear", e.target.value | 0));
                                }, value: this.state.data.get("percentWorkableYear") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "% of Year Workable"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "#", type: "text", readOnly: true, value: this.state.data.get("workableDays") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Workable Days"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" })
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" })
                    )
                ),
                React.createElement("form", null)
            );
        }
    }]);
    return Component;
})(React.Component);

module.exports = Component;

},{"../actions/calculateActions":2,"../stores/calculateStore":5}],4:[function(require,module,exports){
"use strict";

var Main = (function (_React$Component) {
  babelHelpers.inherits(Main, _React$Component);

  function Main() {
    babelHelpers.classCallCheck(this, Main);
    babelHelpers.get(Object.getPrototypeOf(Main.prototype), "constructor", this).apply(this, arguments);
  }

  babelHelpers.createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(ReactRouter.RouteHandler, null)
      );
    }
  }], [{
    key: "childContextTypes",
    value: {
      router: React.PropTypes.object
    },
    enumerable: true
  }, {
    key: "contextTypes",
    value: {
      router: React.PropTypes.func
    },
    enumerable: true
  }]);
  return Main;
})(React.Component);

module.exports = Main;

},{}],5:[function(require,module,exports){
"use strict";

var CalculateActions = require("../actions/calculateActions");

var DataStore = (function (_Store) {
    babelHelpers.inherits(DataStore, _Store);

    function DataStore() {
        babelHelpers.classCallCheck(this, _DataStore);

        babelHelpers.get(Object.getPrototypeOf(_DataStore.prototype), "constructor", this).call(this, Immutable.fromJS({
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
            selfEmploymentTax: 7.65,
            vacationDays: 30
        }));
        this.updaters = {
            "contractannual": this.updateContractAnnualSalary.bind(this),
            "contracthourly": this.updateContractHourlySalary.bind(this),
            "takehomeannually": this.updateTakeHomeAnnualSalary.bind(this),
            "takehomemonthly": this.updateTakeHomeMonthlySalary.bind(this),
            "w2annually": this.updateW2AnnualSalary.bind(this),
            "w2hourly": this.updateW2HourlySalary.bind(this)
        };
        CalculateActions.updateContractAnnualSalary.subscribe(this.updateContractAnnualSalary.bind(this));
        CalculateActions.updateContractHourlySalary.subscribe(this.updateContractHourlySalary.bind(this));
        CalculateActions.updateParameters.subscribe(this.updateParameters.bind(this));
        CalculateActions.updateTakeHomeAnnualSalary.subscribe(this.updateTakeHomeAnnualSalary.bind(this));
        CalculateActions.updateTakeHomeMonthlySalary.subscribe(this.updateTakeHomeMonthlySalary.bind(this));
        CalculateActions.updateW2HourlySalary.subscribe(this.updateW2HourlySalary.bind(this));
        CalculateActions.updateW2AnnualSalary.subscribe(this.updateW2AnnualSalary.bind(this));
        this.updateW2AnnualSalary(50000);
    }

    babelHelpers.createClass(DataStore, [{
        key: "updateParameters",
        value: function updateParameters(state) {
            this.setState(state);
            this.updaters[this.state.get("method")]();
        }
    }, {
        key: "updateContractAnnualSalary",
        value: function updateContractAnnualSalary(value) {
            var _this = this;

            this.updateCalcs("contractannual", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var contractAnnual = value !== undefined ? value : _this.state.get("contractAnnual");
                var contractHourly = value / wDays / hrPerDay;
                var takehomeAnnually = contractAnnual * (1 - tax / 100 - selfEmploymentTax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateContractHourlySalary",
        value: function updateContractHourlySalary(value) {
            var _this2 = this;

            this.updateCalcs("contracthourly", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var contractHourly = value !== undefined ? value : _this2.state.get("contractHourly");
                var contractAnnual = value * wDays * hrPerDay;
                var takehomeAnnually = contractAnnual * (1 - tax / 100 - selfEmploymentTax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateTakeHomeAnnualSalary",
        value: function updateTakeHomeAnnualSalary(value) {
            var _this3 = this;

            this.updateCalcs("takehomeannually", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var takehomeAnnually = value !== undefined ? value : _this3.state.get("takehomeAnnually");
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                var contractAnnual = (takehomeAnnually + benefits) / (1 - tax / 100 - selfEmploymentTax / 100);
                var contractHourly = contractAnnual / wDays / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateTakeHomeMonthlySalary",
        value: function updateTakeHomeMonthlySalary(value) {
            var _this4 = this;

            this.updateCalcs("takehomemonthly", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var takehomeMonthly = value !== undefined ? value : _this4.state.get("takehomeMonthly");
                var takehomeAnnually = takehomeMonthly * 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                var contractAnnual = (takehomeAnnually + benefits) / (1 - tax / 100 - selfEmploymentTax / 100);
                var contractHourly = contractAnnual / wDays / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateW2AnnualSalary",
        value: function updateW2AnnualSalary(value) {
            var _this5 = this;

            this.updateCalcs("w2annually", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var w2Annual = value !== undefined ? value : _this5.state.get("w2Annual");
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                var takehomeAnnually = w2Annual * (1 - tax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var contractAnnual = (takehomeAnnually + benefits) / (1 - tax / 100 - selfEmploymentTax / 100);
                var contractHourly = contractAnnual / wDays / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateW2HourlySalary",
        value: function updateW2HourlySalary(value) {
            var _this6 = this;

            this.updateCalcs("w2hourly", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var w2Hourly = value !== undefined ? value : _this6.state.get("w2Hourly");
                var w2Annual = w2Hourly * (365 * 5 / 7) * hrPerDay;
                var takehomeAnnually = Math.ceil(w2Annual * (1 - tax / 100));
                var takehomeMonthly = Math.ceiltakehomeAnnually / 12;
                var contractAnnual = (takehomeAnnually + benefits) / (1 - tax / 100 - selfEmploymentTax / 100);
                var contractHourly = Math.ceil(contractAnnual / wDays / hrPerDay);
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateCalcs",
        value: function updateCalcs(method, calc) {
            var wDays = 365;
            wDays *= 5 / 7;
            wDays -= this.state.get("vacationDays");
            wDays = Math.ceil(wDays * this.state.get("percentWorkableYear") / 100);

            var hrPerDay = this.state.get("hoursPerDay");
            var tax = this.state.get("tax");
            var selfEmploymentTax = this.state.get("selfEmploymentTax");

            var __ret = calc(wDays, hrPerDay, tax, selfEmploymentTax, this.state.get("benefits"));

            this.setState(this.state.withMutations(function (newState) {
                newState.set("method", method);
                newState.set("workableDays", wDays);
                newState.set("w2Annual", Math.ceil(__ret.w2Annual));
                newState.set("w2Hourly", Math.ceil(__ret.w2Hourly));
                newState.set("contractAnnual", Math.ceil(__ret.contractAnnual));
                newState.set("contractHourly", Math.ceil(__ret.contractHourly));
                newState.set("takehomeAnnually", Math.ceil(__ret.takehomeAnnually));
                newState.set("takehomeMonthly", Math.ceil(__ret.takehomeMonthly));
            }));
        }
    }]);
    var _DataStore = DataStore;
    DataStore = Singleton(DataStore) || DataStore;
    return DataStore;
})(Store);

module.exports = DataStore;

},{"../actions/calculateActions":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hcHAuanN4IiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnMuanMiLCJjOi9Vc2Vycy9SaWNoYXJkL3NvdXJjZS9Ib3dNdWNoU2hvdWxkSUFza0Zvci9zcmMvYXBwL2NvbXBvbmVudHMvY2FsY3VsYXRlLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvY29tcG9uZW50cy9tYWluLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvc3RvcmVzL2NhbGN1bGF0ZVN0b3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVk7QUFDWCxNQUFJLElBQUksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM1QyxNQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFdEQsTUFBSSxNQUFNLEdBQ1I7QUFBQyxlQUFXLENBQUMsS0FBSztNQUFDLE9BQU8sRUFBRSxJQUFJLEFBQUM7SUFDL0Isb0JBQUMsV0FBVyxDQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxTQUFTLEFBQUMsR0FBRTtHQUMvQixDQUFBOztBQUV0QixhQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsWUFBWSxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQzFELFNBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsSUFBSSxPQUFHLEVBQUUsUUFBUSxDQUFDLElB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QkFBZ0IsQ0FBQyxDQUFDLENBQUE7QUFDbkUsd0JBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTthQUNwRSxDQUFDLENBQ0wsQ0FBQztTQUNMOztxQkF0TEMsU0FBUztBQUFULGFBQVMsR0FEZCxTQUFTLENBQ0osU0FBUyxLQUFULFNBQVM7V0FBVCxTQUFTO0dBQVMsS0FBSzs7QUF5TDdCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IE1haW4gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbWFpbi5qc3gnKTtcclxuICBsZXQgQ2FsY3VsYXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NhbGN1bGF0ZS5qc3gnKTtcclxuXHJcbiAgdmFyIHJvdXRlcyA9XHJcbiAgICA8UmVhY3RSb3V0ZXIuUm91dGUgaGFuZGxlcj17TWFpbn0+XHJcbiAgICAgIDxSZWFjdFJvdXRlci5Sb3V0ZSBwYXRoPVwiL1wiIGhhbmRsZXI9e0NhbGN1bGF0ZX0vPlxyXG4gICAgPC9SZWFjdFJvdXRlci5Sb3V0ZT5cclxuXHJcbiAgUmVhY3RSb3V0ZXIucnVuKHJvdXRlcywgUmVhY3RSb3V0ZXIuSGFzaExvY2F0aW9uLCAoUm9vdCkgPT4ge1xyXG4gICAgUmVhY3QucmVuZGVyKDxSb290IC8+LCBkb2N1bWVudC5ib2R5KTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiZXhwb3J0cy51cGRhdGVXMkFubnVhbFNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVXMkhvdXJseVNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlUGFyYW1ldGVycyA9IEFjdGlvbi5jcmVhdGUoKTsiLCJpbXBvcnQgQ2FsY3VsYXRlU3RvcmUgZnJvbSBcIi4uL3N0b3Jlcy9jYWxjdWxhdGVTdG9yZVwiO1xyXG5pbXBvcnQgQ2FsY3VsYXRlQWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9jYWxjdWxhdGVBY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIENhbGN1bGF0ZVN0b3JlLmluc3RhbmNlLnN1YnNjcmliZSh0aGlzLm9uQ2FsY3VsYXRlU3RhdGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYWxjdWxhdGVTdGF0ZShzdGF0ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6c3RhdGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uVzJIb3VybHlDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVXMkhvdXJseVNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuXHJcbiAgICBvblcyQW5udWFsQ2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVzJBbm51YWxTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYWtlaG9tZUFubnVhbENoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5KGUudGFyZ2V0LnZhbHVlfDApO1xyXG4gICAgfVxyXG4gICAgb25UYWtlaG9tZU1vbnRobHlDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcbiAgICBvbkNvbnRyYWN0QW5udWFsQ2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcbiAgICBvbkNvbnRyYWN0SG91cmx5Q2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlKXtyZXR1cm4gKDxkaXYvPil9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkhvdyB0byB1c2U/PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyBpcyBhIGZvcm0gZm9yIGRpc2NvdmVyaW5nIGEgcm91Z2ggZXN0aW1hdGUgb2YgaG93IG11Y2ggb25lIHNob3VsZCBjaGFyZ2UgYXMgYSBjb250cmFjdG9yLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkVudGVyIGluIGFubnVhbCB3MiBzYWxhcnk8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkanVzdCB0YXggcmF0ZSB1bnRpbCB5b3VyIG1vbnRobHkgdGFrZSBob21lIGxvb2tzIGFib3V0IHJpZ2h0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QbGF5IHdpdGggcGFyYW1ldGVycyB1bnRpbCB5b3VyIGNvbmRpdGlvbnMgYXJlIGFwcHJveGltYXRlZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNhbGFyeTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZXNlIGNvbHVtbnMgcmVwcmVzZW50IGVxdWl2YWxhbnQgc2l0dWF0aW9ucyBvZiBxdWFsaXR5IG9mIGxpdmluZy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiICBvbkNoYW5nZT17dGhpcy5vblcyQW5udWFsQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidzJBbm51YWxcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5XMiBBbm51YWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uVGFrZWhvbWVBbm51YWxDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ0YWtlaG9tZUFubnVhbGx5XCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VGFrZWhvbWUgQW5udWFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vbkNvbnRyYWN0QW5udWFsQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwiY29udHJhY3RBbm51YWxcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5Db250cmFjdCBBbm51YWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vblRha2Vob21lTW9udGhseUNoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcInRha2Vob21lTW9udGhseVwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlRha2Vob21lIE1vbnRobHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uQ29udHJhY3RIb3VybHlDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJjb250cmFjdEhvdXJseVwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPkNvbnRyYWN0IEhvdXJseTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QYXJhbWV0ZXJzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+e0NhbGN1bGF0ZUFjdGlvbnMudXBkYXRlUGFyYW1ldGVycyh0aGlzLnN0YXRlLmRhdGEuc2V0KFwiYmVuZWZpdHNcIixlLnRhcmdldC52YWx1ZXwwKSl9fSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcImJlbmVmaXRzXCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+QmVuZWZpdHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PntDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5zdGF0ZS5kYXRhLnNldChcInRheFwiLGUudGFyZ2V0LnZhbHVlfDApKX19IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidGF4XCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VzIgVGF4IFJhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiNcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PntDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5zdGF0ZS5kYXRhLnNldChcInZhY2F0aW9uRGF5c1wiLGUudGFyZ2V0LnZhbHVlfDApKX19IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidmFjYXRpb25EYXlzXCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VW5wYWlkIFZhY2F0aW9uIERheXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIlXCIgdHlwZT1cInRleHRcIiByZWFkT25seSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcInNlbGZFbXBsb3ltZW50VGF4XCIpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+U2VsZiBFbXBsb3ltZW50IFRheDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+e0NhbGN1bGF0ZUFjdGlvbnMudXBkYXRlUGFyYW1ldGVycyh0aGlzLnN0YXRlLmRhdGEuc2V0KFwicGVyY2VudFdvcmthYmxlWWVhclwiLGUudGFyZ2V0LnZhbHVlfDApKX19IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwicGVyY2VudFdvcmthYmxlWWVhclwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPiUgb2YgWWVhciBXb3JrYWJsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiI1wiIHR5cGU9XCJ0ZXh0XCIgcmVhZE9ubHkgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ3b3JrYWJsZURheXNcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5Xb3JrYWJsZSBEYXlzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50OyIsImNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcclxuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcclxuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFJlYWN0Um91dGVyLlJvdXRlSGFuZGxlci8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWFpbjtcclxuIiwibGV0IENhbGN1bGF0ZUFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnMnKTtcclxuXHJcbkBTaW5nbGV0b25cclxuY2xhc3MgRGF0YVN0b3JlIGV4dGVuZHMgU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoSW1tdXRhYmxlLmZyb21KUyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIncyXCIsXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogNTAwMDAsXHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogMCxcclxuICAgICAgICAgICAgICAgIGJlbmVmaXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IDAsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogMCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IDAsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IDAsXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50V29ya2FibGVZZWFyOiAxMDAsXHJcbiAgICAgICAgICAgICAgICB3b3JrYWJsZURheXM6IDM2NSxcclxuICAgICAgICAgICAgICAgIGhvdXJzUGVyRGF5OiA4LFxyXG4gICAgICAgICAgICAgICAgdGF4OiAyNSxcclxuICAgICAgICAgICAgICAgIHNlbGZFbXBsb3ltZW50VGF4OiA3LjY1LFxyXG4gICAgICAgICAgICAgICAgdmFjYXRpb25EYXlzOiAzMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZUNvbnRyYWN0SG91cmx5U2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZUNvbnRyYWN0SG91cmx5U2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlUGFyYW1ldGVycy5zdWJzY3JpYmUodGhpcy51cGRhdGVQYXJhbWV0ZXJzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVGFrZUhvbWVBbm51YWxTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlVGFrZUhvbWVBbm51YWxTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlVGFrZUhvbWVNb250aGx5U2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVzJIb3VybHlTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlVzJIb3VybHlTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVXMkFubnVhbFNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVXMkFubnVhbFNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVcyQW5udWFsU2FsYXJ5KDUwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVycyA9IHtcclxuICAgICAgICBcImNvbnRyYWN0YW5udWFsXCI6dGhpcy51cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIFwiY29udHJhY3Rob3VybHlcIjp0aGlzLnVwZGF0ZUNvbnRyYWN0SG91cmx5U2FsYXJ5LmJpbmQodGhpcyksXHJcbiAgICAgICAgXCJ0YWtlaG9tZWFubnVhbGx5XCI6dGhpcy51cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIFwidGFrZWhvbWVtb250aGx5XCI6dGhpcy51cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcIncyYW5udWFsbHlcIjp0aGlzLnVwZGF0ZVcyQW5udWFsU2FsYXJ5LmJpbmQodGhpcyksXHJcbiAgICAgICAgXCJ3MmhvdXJseVwiOnRoaXMudXBkYXRlVzJIb3VybHlTYWxhcnkuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhcmFtZXRlcnMoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzW3RoaXMuc3RhdGUuZ2V0KFwibWV0aG9kXCIpXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcImNvbnRyYWN0YW5udWFsXCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCwgYmVuZWZpdHMpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJjb250cmFjdEFubnVhbFwiKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gdmFsdWUvd0RheXMvaHJQZXJEYXlcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lQW5udWFsbHkgPSBjb250cmFjdEFubnVhbCooMS10YXgvMTAwLXNlbGZFbXBsb3ltZW50VGF4LzEwMClcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHRha2Vob21lQW5udWFsbHkvMTI7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHRha2Vob21lQW5udWFsbHkvKDEtdGF4LzEwMCk7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsLygzNjUqNS83KS9oclBlckRheTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiB3MkhvdXJseSxcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiB3MkFubnVhbCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IHRha2Vob21lQW5udWFsbHksXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IHRha2Vob21lTW9udGhseSxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0QW5udWFsOiBjb250cmFjdEFubnVhbCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiBjb250cmFjdEhvdXJseVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwiY29udHJhY3Rob3VybHlcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcImNvbnRyYWN0SG91cmx5XCIpO1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSB2YWx1ZSp3RGF5cypoclBlckRheVxyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IGNvbnRyYWN0QW5udWFsKigxLXRheC8xMDAtc2VsZkVtcGxveW1lbnRUYXgvMTAwKVxyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVNb250aGx5ID0gdGFrZWhvbWVBbm51YWxseS8xMjtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdGFrZWhvbWVBbm51YWxseS8oMS10YXgvMTAwKTtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdzJBbm51YWwvKDM2NSo1LzcpL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJ0YWtlaG9tZWFubnVhbGx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCwgYmVuZWZpdHMpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lQW5udWFsbHkgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcInRha2Vob21lQW5udWFsbHlcIik7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSB0YWtlaG9tZUFubnVhbGx5LzEyO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB0YWtlaG9tZUFubnVhbGx5LygxLXRheC8xMDApO1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB3MkFubnVhbC8oMzY1KjUvNykvaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9ICh0YWtlaG9tZUFubnVhbGx5K2JlbmVmaXRzKSAvICgxIC0gdGF4IC8gMTAwIC0gc2VsZkVtcGxveW1lbnRUYXggLyAxMDApXHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IGNvbnRyYWN0QW5udWFsIC8gd0RheXMgLyBoclBlckRheTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiB3MkhvdXJseSxcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiB3MkFubnVhbCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IHRha2Vob21lQW5udWFsbHksXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IHRha2Vob21lTW9udGhseSxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0QW5udWFsOiBjb250cmFjdEFubnVhbCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiBjb250cmFjdEhvdXJseVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFrZUhvbWVNb250aGx5U2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcInRha2Vob21lbW9udGhseVwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgsIGJlbmVmaXRzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcInRha2Vob21lTW9udGhseVwiKTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lQW5udWFsbHkgPSB0YWtlaG9tZU1vbnRobHkqMTI7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHRha2Vob21lQW5udWFsbHkvKDEtdGF4LzEwMCk7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsLygzNjUqNS83KS9oclBlckRheTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gKHRha2Vob21lQW5udWFsbHkrYmVuZWZpdHMpIC8gKDEgLSB0YXggLyAxMDAgLSBzZWxmRW1wbG95bWVudFRheCAvIDEwMClcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gY29udHJhY3RBbm51YWwgLyB3RGF5cyAvIGhyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVXMkFubnVhbFNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJ3MmFubnVhbGx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCwgYmVuZWZpdHMpID0+IHtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJ3MkFubnVhbFwiKTtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdzJBbm51YWwvKDM2NSo1LzcpL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IHcyQW5udWFsICogKDEgLSB0YXggLyAxMDApO1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVNb250aGx5ID0gdGFrZWhvbWVBbm51YWxseSAvIDEyO1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSAodGFrZWhvbWVBbm51YWxseStiZW5lZml0cykgLyAoMSAtIHRheCAvIDEwMCAtIHNlbGZFbXBsb3ltZW50VGF4IC8gMTAwKVxyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSBjb250cmFjdEFubnVhbCAvIHdEYXlzIC8gaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVcySG91cmx5U2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcIncyaG91cmx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCwgYmVuZWZpdHMpID0+IHtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJ3MkhvdXJseVwiKTtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdzJIb3VybHkgKiAoMzY1KjUvNykgKiBoclBlckRheTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lQW5udWFsbHkgPSBNYXRoLmNlaWwodzJBbm51YWwgKiAoMSAtIHRheCAvIDEwMCkpO1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVNb250aGx5ID0gTWF0aC5jZWlsdGFrZWhvbWVBbm51YWxseSAvIDEyO1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSAodGFrZWhvbWVBbm51YWxseStiZW5lZml0cykgLyAoMSAtIHRheCAvIDEwMCAtIHNlbGZFbXBsb3ltZW50VGF4IC8gMTAwKVxyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSBNYXRoLmNlaWwoY29udHJhY3RBbm51YWwgLyB3RGF5cyAvIGhyUGVyRGF5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiB3MkhvdXJseSxcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiB3MkFubnVhbCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IHRha2Vob21lQW5udWFsbHksXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IHRha2Vob21lTW9udGhseSxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0QW5udWFsOiBjb250cmFjdEFubnVhbCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiBjb250cmFjdEhvdXJseVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FsY3MobWV0aG9kLGNhbGMpe1xyXG4gICAgICAgIHZhciB3RGF5cyA9IDM2NTtcclxuICAgICAgICB3RGF5cyAqPSA1IC8gNztcclxuICAgICAgICB3RGF5cyAtPSB0aGlzLnN0YXRlLmdldChcInZhY2F0aW9uRGF5c1wiKVxyXG4gICAgICAgIHdEYXlzID0gTWF0aC5jZWlsKHdEYXlzKnRoaXMuc3RhdGUuZ2V0KFwicGVyY2VudFdvcmthYmxlWWVhclwiKS8xMDApO1xyXG5cclxuICAgICAgICB2YXIgaHJQZXJEYXkgPSB0aGlzLnN0YXRlLmdldChcImhvdXJzUGVyRGF5XCIpO1xyXG4gICAgICAgIHZhciB0YXggPSB0aGlzLnN0YXRlLmdldChcInRheFwiKTtcclxuICAgICAgICB2YXIgc2VsZkVtcGxveW1lbnRUYXggPSB0aGlzLnN0YXRlLmdldChcInNlbGZFbXBsb3ltZW50VGF4XCIpO1xyXG5cclxuICAgICAgICB2YXIgX19yZXQgPSBjYWxjKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCwgdGhpcy5zdGF0ZS5nZXQoXCJiZW5lZml0c1wiKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aE11dGF0aW9ucygobmV3U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcIm1ldGhvZFwiLCBtZXRob2QpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ3b3JrYWJsZURheXNcIiwgd0RheXMpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ3MkFubnVhbFwiLCBNYXRoLmNlaWwoX19yZXQudzJBbm51YWwpKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwidzJIb3VybHlcIiwgTWF0aC5jZWlsKF9fcmV0LncySG91cmx5KSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcImNvbnRyYWN0QW5udWFsXCIsIE1hdGguY2VpbChfX3JldC5jb250cmFjdEFubnVhbCkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJjb250cmFjdEhvdXJseVwiLCBNYXRoLmNlaWwoX19yZXQuY29udHJhY3RIb3VybHkpKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwidGFrZWhvbWVBbm51YWxseVwiLCBNYXRoLmNlaWwoX19yZXQudGFrZWhvbWVBbm51YWxseSkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ0YWtlaG9tZU1vbnRobHlcIiwgTWF0aC5jZWlsKF9fcmV0LnRha2Vob21lTW9udGhseSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEYXRhU3RvcmU7Il19
