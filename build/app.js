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
                            "What is my contractor equivalent to my current salary?"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hcHAuanN4IiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnMuanMiLCJjOi9Vc2Vycy9SaWNoYXJkL3NvdXJjZS9Ib3dNdWNoU2hvdWxkSUFza0Zvci9zcmMvYXBwL2NvbXBvbmVudHMvY2FsY3VsYXRlLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvY29tcG9uZW50cy9tYWluLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvc3RvcmVzL2NhbGN1bGF0ZVN0b3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVk7QUFDWCxNQUFJLElBQUksR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM1QyxNQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQzs7QUFFdEQsTUFBSSxNQUFNLEdBQ1I7QUFBQyxlQUFXLENBQUMsS0FBSztNQUFDLE9BQU8sRUFBRSxJQUFJLEFBQUM7SUFDL0Isb0JBQUMsV0FBVyxDQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxTQUFTLEFBQUMsR0FBRTtHQUMvQixDQUFBOztBQUV0QixhQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsWUFBWSxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQzFELFNBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsSUFBSSxPQUFHLEVBQUUsUUFBUSxDQUFDLElB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QUFBO0FBQ25FLHdCQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7YUFDcEUsQ0FBQyxDQUNMLENBQUM7U0FDTDs7cUJBdExDLFNBQVM7QUFBVCxhQUFTLEdBRGQsU0FBUyxDQUNKLFNBQVMsS0FBVCxTQUFTO1dBQVQsU0FBUztHQUFTLEtBQUs7O0FBeUw3QixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBNYWluID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21haW4uanN4Jyk7XHJcbiAgbGV0IENhbGN1bGF0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jYWxjdWxhdGUuanN4Jyk7XHJcblxyXG4gIHZhciByb3V0ZXMgPVxyXG4gICAgPFJlYWN0Um91dGVyLlJvdXRlIGhhbmRsZXI9e01haW59PlxyXG4gICAgICA8UmVhY3RSb3V0ZXIuUm91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtDYWxjdWxhdGV9Lz5cclxuICAgIDwvUmVhY3RSb3V0ZXIuUm91dGU+XHJcblxyXG4gIFJlYWN0Um91dGVyLnJ1bihyb3V0ZXMsIFJlYWN0Um91dGVyLkhhc2hMb2NhdGlvbiwgKFJvb3QpID0+IHtcclxuICAgIFJlYWN0LnJlbmRlcig8Um9vdCAvPiwgZG9jdW1lbnQuYm9keSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImV4cG9ydHMudXBkYXRlVzJBbm51YWxTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlVzJIb3VybHlTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlVGFrZUhvbWVBbm51YWxTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlVGFrZUhvbWVNb250aGx5U2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZUNvbnRyYWN0SG91cmx5U2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZVBhcmFtZXRlcnMgPSBBY3Rpb24uY3JlYXRlKCk7IiwiaW1wb3J0IENhbGN1bGF0ZVN0b3JlIGZyb20gXCIuLi9zdG9yZXMvY2FsY3VsYXRlU3RvcmVcIjtcclxuaW1wb3J0IENhbGN1bGF0ZUFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvY2FsY3VsYXRlQWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBDYWxjdWxhdGVTdG9yZS5pbnN0YW5jZS5zdWJzY3JpYmUodGhpcy5vbkNhbGN1bGF0ZVN0YXRlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FsY3VsYXRlU3RhdGUoc3RhdGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOnN0YXRlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblcySG91cmx5Q2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVzJIb3VybHlTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XMkFubnVhbENoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVcyQW5udWFsU2FsYXJ5KGUudGFyZ2V0LnZhbHVlfDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFrZWhvbWVBbm51YWxDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuICAgIG9uVGFrZWhvbWVNb250aGx5Q2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVGFrZUhvbWVNb250aGx5U2FsYXJ5KGUudGFyZ2V0LnZhbHVlfDApO1xyXG4gICAgfVxyXG4gICAgb25Db250cmFjdEFubnVhbENoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5KGUudGFyZ2V0LnZhbHVlfDApO1xyXG4gICAgfVxyXG4gICAgb25Db250cmFjdEhvdXJseUNoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZUNvbnRyYWN0SG91cmx5U2FsYXJ5KGUudGFyZ2V0LnZhbHVlfDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZSl7cmV0dXJuICg8ZGl2Lz4pfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5XaGF0IGlzIG15IGNvbnRyYWN0b3IgZXF1aXZhbGVudCB0byBteSBjdXJyZW50IHNhbGFyeT88L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RW50ZXIgaW4gYW5udWFsIHcyIHNhbGFyeTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRqdXN0IHRheCByYXRlIHVudGlsIHlvdXIgbW9udGhseSB0YWtlIGhvbWUgbG9va3MgYWJvdXQgcmlnaHQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBsYXkgd2l0aCBwYXJhbWV0ZXJzIHVudGlsIHlvdXIgY29uZGl0aW9ucyBhcmUgYXBwcm94aW1hdGVkPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U2FsYXJ5PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlc2UgY29sdW1ucyByZXByZXNlbnQgZXF1aXZhbGFudCBzaXR1YXRpb25zIG9mIHF1YWxpdHkgb2YgbGl2aW5nLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJFwiIHR5cGU9XCJ0ZXh0XCIgIG9uQ2hhbmdlPXt0aGlzLm9uVzJBbm51YWxDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ3MkFubnVhbFwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlcyIEFubnVhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25UYWtlaG9tZUFubnVhbENoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcInRha2Vob21lQW5udWFsbHlcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5UYWtlaG9tZSBBbm51YWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uQ29udHJhY3RBbm51YWxDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJjb250cmFjdEFubnVhbFwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPkNvbnRyYWN0IEFubnVhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uVGFrZWhvbWVNb250aGx5Q2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidGFrZWhvbWVNb250aGx5XCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VGFrZWhvbWUgTW9udGhseTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25Db250cmFjdEhvdXJseUNoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcImNvbnRyYWN0SG91cmx5XCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+Q29udHJhY3QgSG91cmx5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBhcmFtZXRlcnM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpPT57Q2FsY3VsYXRlQWN0aW9ucy51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuc3RhdGUuZGF0YS5zZXQoXCJiZW5lZml0c1wiLGUudGFyZ2V0LnZhbHVlfDApKX19IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwiYmVuZWZpdHNcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5CZW5lZml0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+e0NhbGN1bGF0ZUFjdGlvbnMudXBkYXRlUGFyYW1ldGVycyh0aGlzLnN0YXRlLmRhdGEuc2V0KFwidGF4XCIsZS50YXJnZXQudmFsdWV8MCkpfX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ0YXhcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5XMiBUYXggUmF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiI1wiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+e0NhbGN1bGF0ZUFjdGlvbnMudXBkYXRlUGFyYW1ldGVycyh0aGlzLnN0YXRlLmRhdGEuc2V0KFwidmFjYXRpb25EYXlzXCIsZS50YXJnZXQudmFsdWV8MCkpfX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ2YWNhdGlvbkRheXNcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5VbnBhaWQgVmFjYXRpb24gRGF5czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiVcIiB0eXBlPVwidGV4dFwiIHJlYWRPbmx5IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwic2VsZkVtcGxveW1lbnRUYXhcIil9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5TZWxmIEVtcGxveW1lbnQgVGF4PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIlXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpPT57Q2FsY3VsYXRlQWN0aW9ucy51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuc3RhdGUuZGF0YS5zZXQoXCJwZXJjZW50V29ya2FibGVZZWFyXCIsZS50YXJnZXQudmFsdWV8MCkpfX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJwZXJjZW50V29ya2FibGVZZWFyXCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+JSBvZiBZZWFyIFdvcmthYmxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIjXCIgdHlwZT1cInRleHRcIiByZWFkT25seSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcIndvcmthYmxlRGF5c1wiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPldvcmthYmxlIERheXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7IiwiY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xyXG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xyXG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8UmVhY3RSb3V0ZXIuUm91dGVIYW5kbGVyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xyXG4iLCJsZXQgQ2FsY3VsYXRlQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvY2FsY3VsYXRlQWN0aW9ucycpO1xyXG5cclxuQFNpbmdsZXRvblxyXG5jbGFzcyBEYXRhU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihJbW11dGFibGUuZnJvbUpTKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwidzJcIixcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiA1MDAwMCxcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiAwLFxyXG4gICAgICAgICAgICAgICAgYmVuZWZpdHM6IDAsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogMCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiAwLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogMCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogMCxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRXb3JrYWJsZVllYXI6IDEwMCxcclxuICAgICAgICAgICAgICAgIHdvcmthYmxlRGF5czogMzY1LFxyXG4gICAgICAgICAgICAgICAgaG91cnNQZXJEYXk6IDgsXHJcbiAgICAgICAgICAgICAgICB0YXg6IDI1LFxyXG4gICAgICAgICAgICAgICAgc2VsZkVtcGxveW1lbnRUYXg6IDcuNjUsXHJcbiAgICAgICAgICAgICAgICB2YWNhdGlvbkRheXM6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVQYXJhbWV0ZXJzLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVBhcmFtZXRlcnMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVXMkhvdXJseVNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVXMkhvdXJseVNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVcyQW5udWFsU2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVcyQW5udWFsU2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVzJBbm51YWxTYWxhcnkoNTAwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZXJzID0ge1xyXG4gICAgICAgIFwiY29udHJhY3Rhbm51YWxcIjp0aGlzLnVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5LmJpbmQodGhpcyksXHJcbiAgICAgICAgXCJjb250cmFjdGhvdXJseVwiOnRoaXMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcInRha2Vob21lYW5udWFsbHlcIjp0aGlzLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5LmJpbmQodGhpcyksXHJcbiAgICAgICAgXCJ0YWtlaG9tZW1vbnRobHlcIjp0aGlzLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIFwidzJhbm51YWxseVwiOnRoaXMudXBkYXRlVzJBbm51YWxTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcIncyaG91cmx5XCI6dGhpcy51cGRhdGVXMkhvdXJseVNhbGFyeS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGFyYW1ldGVycyhzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnNbdGhpcy5zdGF0ZS5nZXQoXCJtZXRob2RcIildKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwiY29udHJhY3Rhbm51YWxcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcImNvbnRyYWN0QW5udWFsXCIpO1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSB2YWx1ZS93RGF5cy9oclBlckRheVxyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IGNvbnRyYWN0QW5udWFsKigxLXRheC8xMDAtc2VsZkVtcGxveW1lbnRUYXgvMTAwKVxyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVNb250aGx5ID0gdGFrZWhvbWVBbm51YWxseS8xMjtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdGFrZWhvbWVBbm51YWxseS8oMS10YXgvMTAwKTtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdzJBbm51YWwvKDM2NSo1LzcpL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJjb250cmFjdGhvdXJseVwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgsIGJlbmVmaXRzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwiY29udHJhY3RIb3VybHlcIik7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9IHZhbHVlKndEYXlzKmhyUGVyRGF5XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gY29udHJhY3RBbm51YWwqKDEtdGF4LzEwMC1zZWxmRW1wbG95bWVudFRheC8xMDApXHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSB0YWtlaG9tZUFubnVhbGx5LzEyO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB0YWtlaG9tZUFubnVhbGx5LygxLXRheC8xMDApO1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB3MkFubnVhbC8oMzY1KjUvNykvaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcInRha2Vob21lYW5udWFsbHlcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwidGFrZWhvbWVBbm51YWxseVwiKTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHRha2Vob21lQW5udWFsbHkvMTI7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHRha2Vob21lQW5udWFsbHkvKDEtdGF4LzEwMCk7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsLygzNjUqNS83KS9oclBlckRheTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gKHRha2Vob21lQW5udWFsbHkrYmVuZWZpdHMpIC8gKDEgLSB0YXggLyAxMDAgLSBzZWxmRW1wbG95bWVudFRheCAvIDEwMClcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gY29udHJhY3RBbm51YWwgLyB3RGF5cyAvIGhyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwidGFrZWhvbWVtb250aGx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCwgYmVuZWZpdHMpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwidGFrZWhvbWVNb250aGx5XCIpO1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IHRha2Vob21lTW9udGhseSoxMjtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdGFrZWhvbWVBbm51YWxseS8oMS10YXgvMTAwKTtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdzJBbm51YWwvKDM2NSo1LzcpL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSAodGFrZWhvbWVBbm51YWxseStiZW5lZml0cykgLyAoMSAtIHRheCAvIDEwMCAtIHNlbGZFbXBsb3ltZW50VGF4IC8gMTAwKVxyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSBjb250cmFjdEFubnVhbCAvIHdEYXlzIC8gaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVcyQW5udWFsU2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcIncyYW5udWFsbHlcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcIncyQW5udWFsXCIpO1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB3MkFubnVhbC8oMzY1KjUvNykvaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gdzJBbm51YWwgKiAoMSAtIHRheCAvIDEwMCk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSB0YWtlaG9tZUFubnVhbGx5IC8gMTI7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9ICh0YWtlaG9tZUFubnVhbGx5K2JlbmVmaXRzKSAvICgxIC0gdGF4IC8gMTAwIC0gc2VsZkVtcGxveW1lbnRUYXggLyAxMDApXHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IGNvbnRyYWN0QW5udWFsIC8gd0RheXMgLyBoclBlckRheTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiB3MkhvdXJseSxcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiB3MkFubnVhbCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IHRha2Vob21lQW5udWFsbHksXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IHRha2Vob21lTW9udGhseSxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0QW5udWFsOiBjb250cmFjdEFubnVhbCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiBjb250cmFjdEhvdXJseVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVzJIb3VybHlTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwidzJob3VybHlcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcIncySG91cmx5XCIpO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB3MkhvdXJseSAqICgzNjUqNS83KSAqIGhyUGVyRGF5O1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IE1hdGguY2VpbCh3MkFubnVhbCAqICgxIC0gdGF4IC8gMTAwKSk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSBNYXRoLmNlaWx0YWtlaG9tZUFubnVhbGx5IC8gMTI7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9ICh0YWtlaG9tZUFubnVhbGx5K2JlbmVmaXRzKSAvICgxIC0gdGF4IC8gMTAwIC0gc2VsZkVtcGxveW1lbnRUYXggLyAxMDApXHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IE1hdGguY2VpbChjb250cmFjdEFubnVhbCAvIHdEYXlzIC8gaHJQZXJEYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYWxjcyhtZXRob2QsY2FsYyl7XHJcbiAgICAgICAgdmFyIHdEYXlzID0gMzY1O1xyXG4gICAgICAgIHdEYXlzICo9IDUgLyA3O1xyXG4gICAgICAgIHdEYXlzIC09IHRoaXMuc3RhdGUuZ2V0KFwidmFjYXRpb25EYXlzXCIpXHJcbiAgICAgICAgd0RheXMgPSBNYXRoLmNlaWwod0RheXMqdGhpcy5zdGF0ZS5nZXQoXCJwZXJjZW50V29ya2FibGVZZWFyXCIpLzEwMCk7XHJcblxyXG4gICAgICAgIHZhciBoclBlckRheSA9IHRoaXMuc3RhdGUuZ2V0KFwiaG91cnNQZXJEYXlcIik7XHJcbiAgICAgICAgdmFyIHRheCA9IHRoaXMuc3RhdGUuZ2V0KFwidGF4XCIpO1xyXG4gICAgICAgIHZhciBzZWxmRW1wbG95bWVudFRheCA9IHRoaXMuc3RhdGUuZ2V0KFwic2VsZkVtcGxveW1lbnRUYXhcIik7XHJcblxyXG4gICAgICAgIHZhciBfX3JldCA9IGNhbGMod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCB0aGlzLnN0YXRlLmdldChcImJlbmVmaXRzXCIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoTXV0YXRpb25zKChuZXdTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwibWV0aG9kXCIsIG1ldGhvZClcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcIndvcmthYmxlRGF5c1wiLCB3RGF5cylcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcIncyQW5udWFsXCIsIE1hdGguY2VpbChfX3JldC53MkFubnVhbCkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ3MkhvdXJseVwiLCBNYXRoLmNlaWwoX19yZXQudzJIb3VybHkpKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwiY29udHJhY3RBbm51YWxcIiwgTWF0aC5jZWlsKF9fcmV0LmNvbnRyYWN0QW5udWFsKSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcImNvbnRyYWN0SG91cmx5XCIsIE1hdGguY2VpbChfX3JldC5jb250cmFjdEhvdXJseSkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ0YWtlaG9tZUFubnVhbGx5XCIsIE1hdGguY2VpbChfX3JldC50YWtlaG9tZUFubnVhbGx5KSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcInRha2Vob21lTW9udGhseVwiLCBNYXRoLmNlaWwoX19yZXQudGFrZWhvbWVNb250aGx5KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFTdG9yZTsiXX0=
