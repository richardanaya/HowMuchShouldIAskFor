(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  var Main = require('./components/main.jsx'); // Our custom react component
  var Calculate = require('./components/calculate.jsx');
  var Negotiating = require('./components/negotiating.jsx');

  var routes = React.createElement(
    ReactRouter.Route,
    { handler: Main },
    React.createElement(ReactRouter.Route, { path: '/', handler: Calculate }),
    React.createElement(ReactRouter.Route, { path: '/negotiating', handler: Negotiating })
  );

  ReactRouter.run(routes, ReactRouter.HashLocation, function (Root) {
    React.render(React.createElement(Root, null), document.body);
  });
})();

},{"./components/calculate.jsx":3,"./components/main.jsx":4,"./components/negotiating.jsx":5}],2:[function(require,module,exports){
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
        key: "onTaxChange",
        value: function onTaxChange(e) {
            _actionsCalculateActions2["default"].updateParameters(this.state.data.set("tax", e.target.value | 0));
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.state) {
                return React.createElement("div", null);
            }
            return React.createElement(
                "div",
                null,
                React.createElement("input", { placeholder: "W2 Annual", type: "text", onChange: this.onW2AnnualChange.bind(this), value: this.state.data.get("w2Annual") }),
                React.createElement("input", { placeholder: "W2 Hourly", type: "text", onChange: this.onW2HourlyChange.bind(this), value: this.state.data.get("w2Hourly") }),
                React.createElement("input", { placeholder: "Takehome Annually", type: "text", onChange: this.onTakehomeAnnualChange.bind(this), value: this.state.data.get("takehomeAnnually") }),
                React.createElement("input", { placeholder: "Takehome Monthly", type: "text", onChange: this.onTakehomeMonthlyChange.bind(this), value: this.state.data.get("takehomeMonthly") }),
                React.createElement("input", { placeholder: "Contract Annually", type: "text", onChange: this.onContractAnnualChange.bind(this), value: this.state.data.get("contractAnnual") }),
                React.createElement("input", { placeholder: "Contract Hourly", type: "text", onChange: this.onContractHourlyChange.bind(this), value: this.state.data.get("contractHourly") }),
                React.createElement("input", { placeholder: "Tax", type: "text", onChange: this.onTaxChange.bind(this), value: this.state.data.get("tax") })
            );
        }
    }]);
    return Component;
})(React.Component);

module.exports = Component;

},{"../actions/calculateActions":2,"../stores/calculateStore":6}],4:[function(require,module,exports){
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
        React.createElement(
          "nav",
          { className: "grey darken-3" },
          React.createElement(
            "div",
            { className: "nav-wrapper" },
            React.createElement(
              "a",
              { ref: "menuButton", "data-activates": "slide-out", className: "brand-logo" },
              " ",
              React.createElement("span", { className: "fa fa-bars" }),
              " How Much Should I Ask For?"
            ),
            React.createElement("ul", { className: "right hide-on-med-and-down" }),
            React.createElement(
              "ul",
              { id: "slide-out", className: "side-nav" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { onClick: this.goToLink.bind(this, "/") },
                  "Calculate"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { onClick: this.goToLink.bind(this, "/negotiating") },
                  "Negotiating"
                )
              )
            )
          )
        ),
        React.createElement(ReactRouter.RouteHandler, null)
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(this.refs.menuButton.getDOMNode()).sideNav();
    }
  }, {
    key: "goToLink",
    value: function goToLink(route) {
      this.context.router.transitionTo(route);
      $(this.refs.menuButton.getDOMNode()).sideNav("hide");
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

var Component = (function (_React$Component) {
    babelHelpers.inherits(Component, _React$Component);

    function Component() {
        babelHelpers.classCallCheck(this, Component);
        babelHelpers.get(Object.getPrototypeOf(Component.prototype), "constructor", this).apply(this, arguments);
    }

    babelHelpers.createClass(Component, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "Meet half way."
            );
        }
    }]);
    return Component;
})(React.Component);

module.exports = Component;

},{}],6:[function(require,module,exports){
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
            contractAnnual: 0,
            contractHourly: 0,
            takehomeAnnually: 0,
            takehomeMonthly: 0,
            workableDays: 365,
            hoursPerDay: 8,
            tax: 25,
            selfEmploymentTax: 7.3,
            dontCountWeekends: false,
            vacationDays: 30,
            dontCountVacationDays: true
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

            this.updateCalcs("contractannual", function (wDays, hrPerDay, tax, selfEmploymentTax) {
                var contractAnnual = value !== undefined ? value : _this.state.get("contractAnnual");
                var contractHourly = value / wDays / hrPerDay;
                var takehomeAnnually = contractAnnual * (1 - tax / 100 - selfEmploymentTax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / wDays / hrPerDay;
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

            this.updateCalcs("contracthourly", function (wDays, hrPerDay, tax, selfEmploymentTax) {
                var contractHourly = value !== undefined ? value : _this2.state.get("contractHourly");
                var contractAnnual = value * wDays * hrPerDay;
                var takehomeAnnually = contractAnnual * (1 - tax / 100 - selfEmploymentTax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / wDays / hrPerDay;
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

            this.updateCalcs("takehomeannually", function (wDays, hrPerDay, tax, selfEmploymentTax) {
                var takehomeAnnually = value !== undefined ? value : _this3.state.get("takehomeAnnually");
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / wDays / hrPerDay;
                var contractAnnual = takehomeAnnually / (1 - tax / 100 - selfEmploymentTax / 100);
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

            this.updateCalcs("takehomemonthly", function (wDays, hrPerDay, tax, selfEmploymentTax) {
                var takehomeMonthly = value !== undefined ? value : _this4.state.get("takehomeMonthly");
                var takehomeAnnually = takehomeMonthly * 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / wDays / hrPerDay;
                var contractAnnual = takehomeAnnually / (1 - tax / 100 - selfEmploymentTax / 100);
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

            this.updateCalcs("w2annually", function (wDays, hrPerDay, tax, selfEmploymentTax) {
                var w2Annual = value !== undefined ? value : _this5.state.get("w2Annual");
                var w2Hourly = w2Annual / wDays / hrPerDay;
                var takehomeAnnually = w2Annual * (1 - tax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var contractAnnual = takehomeAnnually / (1 - tax / 100 - selfEmploymentTax / 100);
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

            this.updateCalcs("w2hourly", function (wDays, hrPerDay, tax, selfEmploymentTax) {
                var w2Hourly = value !== undefined ? value : _this6.state.get("w2Hourly");
                var w2Annual = w2Hourly * wDays * hrPerDay;
                var takehomeAnnually = Math.ceil(w2Annual * (1 - tax / 100));
                var takehomeMonthly = Math.ceiltakehomeAnnually / 12;
                var contractAnnual = takehomeAnnually / (1 - tax / 100 - selfEmploymentTax / 100);
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
            var wDays = this.state.get("workableDays");
            if (this.state.get("dontCountWeekends")) {
                wDays *= 5 / 7;
            }
            if (this.state.get("dontCountVacationDays")) {
                wDays -= this.state.get("vacationDays");
            }
            var hrPerDay = this.state.get("hoursPerDay");
            var tax = this.state.get("tax");
            var selfEmploymentTax = this.state.get("selfEmploymentTax");

            var __ret = calc(wDays, hrPerDay, tax, selfEmploymentTax);

            this.setState(this.state.withMutations(function (newState) {
                newState.set("method", method);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hcHAuanN4IiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnMuanMiLCJjOi9Vc2Vycy9SaWNoYXJkL3NvdXJjZS9Ib3dNdWNoU2hvdWxkSUFza0Zvci9zcmMvYXBwL2NvbXBvbmVudHMvY2FsY3VsYXRlLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvY29tcG9uZW50cy9tYWluLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvY29tcG9uZW50cy9uZWdvdGlhdGluZy5qc3giLCJjOi9Vc2Vycy9SaWNoYXJkL3NvdXJjZS9Ib3dNdWNoU2hvdWxkSUFza0Zvci9zcmMvYXBwL3N0b3Jlcy9jYWxjdWxhdGVTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1gsTUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUMsTUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDdEQsTUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7O0FBRTFELE1BQUksTUFBTSxHQUNSO0FBQUMsZUFBVyxDQUFDLEtBQUs7TUFBQyxPQUFPLEVBQUUsSUFBSSxBQUFDO0lBQy9CLG9CQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsU0FBUyxBQUFDLEdBQUU7SUFDakQsb0JBQUMs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UyxHQURkLFNBQVMsQ0FDSixTQUFTLEtBQVQsU0FBUztXQUFULFNBQVM7R0FBUyxLQUFLOztBQTBMN0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgTWFpbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tYWluLmpzeCcpOyAvLyBPdXIgY3VzdG9tIHJlYWN0IGNvbXBvbmVudFxyXG4gIGxldCBDYWxjdWxhdGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2FsY3VsYXRlLmpzeCcpO1xyXG4gIGxldCBOZWdvdGlhdGluZyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9uZWdvdGlhdGluZy5qc3gnKTtcclxuXHJcbiAgdmFyIHJvdXRlcyA9XHJcbiAgICA8UmVhY3RSb3V0ZXIuUm91dGUgaGFuZGxlcj17TWFpbn0+XHJcbiAgICAgIDxSZWFjdFJvdXRlci5Sb3V0ZSBwYXRoPVwiL1wiIGhhbmRsZXI9e0NhbGN1bGF0ZX0vPlxyXG4gICAgICA8UmVhY3RSb3V0ZXIuUm91dGUgcGF0aD1cIi9uZWdvdGlhdGluZ1wiIGhhbmRsZXI9e05lZ290aWF0aW5nfS8+XHJcbiAgICA8L1JlYWN0Um91dGVyLlJvdXRlPlxyXG5cclxuICBSZWFjdFJvdXRlci5ydW4ocm91dGVzLCBSZWFjdFJvdXRlci5IYXNoTG9jYXRpb24sIChSb290KSA9PiB7XHJcbiAgICBSZWFjdC5yZW5kZXIoPFJvb3QgLz4sIGRvY3VtZW50LmJvZHkpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4iLCJleHBvcnRzLnVwZGF0ZVcyQW5udWFsU2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZVcySG91cmx5U2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVQYXJhbWV0ZXJzID0gQWN0aW9uLmNyZWF0ZSgpOyIsImltcG9ydCBDYWxjdWxhdGVTdG9yZSBmcm9tIFwiLi4vc3RvcmVzL2NhbGN1bGF0ZVN0b3JlXCI7XHJcbmltcG9ydCBDYWxjdWxhdGVBY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnNcIjtcclxuXHJcbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgQ2FsY3VsYXRlU3RvcmUuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMub25DYWxjdWxhdGVTdGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbGN1bGF0ZVN0YXRlKHN0YXRlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTpzdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25XMkhvdXJseUNoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVcySG91cmx5U2FsYXJ5KGUudGFyZ2V0LnZhbHVlfDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVzJBbm51YWxDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVXMkFubnVhbFNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRha2Vob21lQW5udWFsQ2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVGFrZUhvbWVBbm51YWxTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcbiAgICBvblRha2Vob21lTW9udGhseUNoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuICAgIG9uQ29udHJhY3RBbm51YWxDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuICAgIG9uQ29udHJhY3RIb3VybHlDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuICAgIG9uVGF4Q2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlUGFyYW1ldGVycyh0aGlzLnN0YXRlLmRhdGEuc2V0KFwidGF4XCIsZS50YXJnZXQudmFsdWV8MCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZSl7cmV0dXJuICg8ZGl2Lz4pfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJXMiBBbm51YWxcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uVzJBbm51YWxDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ3MkFubnVhbFwiKX0vPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVzIgSG91cmx5XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vblcySG91cmx5Q2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidzJIb3VybHlcIil9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlRha2Vob21lIEFubnVhbGx5XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vblRha2Vob21lQW5udWFsQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidGFrZWhvbWVBbm51YWxseVwiKX0vPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVGFrZWhvbWUgTW9udGhseVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25UYWtlaG9tZU1vbnRobHlDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ0YWtlaG9tZU1vbnRobHlcIil9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkNvbnRyYWN0IEFubnVhbGx5XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vbkNvbnRyYWN0QW5udWFsQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwiY29udHJhY3RBbm51YWxcIil9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkNvbnRyYWN0IEhvdXJseVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25Db250cmFjdEhvdXJseUNoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcImNvbnRyYWN0SG91cmx5XCIpfS8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJUYXhcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uVGF4Q2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidGF4XCIpfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7IiwiY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xyXG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xyXG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImdyZXkgZGFya2VuLTNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGEgcmVmPVwibWVudUJ1dHRvblwiIGRhdGEtYWN0aXZhdGVzPVwic2xpZGUtb3V0XCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPiZuYnNwOzxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L3NwYW4+IEhvdyBNdWNoIFNob3VsZCBJIEFzayBGb3I/PC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGlkPVwic2xpZGUtb3V0XCIgY2xhc3NOYW1lPVwic2lkZS1uYXZcIj5cclxuICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17dGhpcy5nb1RvTGluay5iaW5kKHRoaXMsXCIvXCIpfT5DYWxjdWxhdGU8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17dGhpcy5nb1RvTGluay5iaW5kKHRoaXMsXCIvbmVnb3RpYXRpbmdcIil9Pk5lZ290aWF0aW5nPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8UmVhY3RSb3V0ZXIuUm91dGVIYW5kbGVyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAkKHRoaXMucmVmcy5tZW51QnV0dG9uLmdldERPTU5vZGUoKSkuc2lkZU5hdigpO1xyXG4gIH1cclxuXHJcbiAgZ29Ub0xpbmsocm91dGUpe1xyXG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci50cmFuc2l0aW9uVG8ocm91dGUpO1xyXG4gICAgJCh0aGlzLnJlZnMubWVudUJ1dHRvbi5nZXRET01Ob2RlKCkpLnNpZGVOYXYoXCJoaWRlXCIpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xyXG4iLCJjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICAgICAgTWVldCBoYWxmIHdheS5cclxuICAgICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50OyIsImxldCBDYWxjdWxhdGVBY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9jYWxjdWxhdGVBY3Rpb25zJyk7XHJcblxyXG5AU2luZ2xldG9uXHJcbmNsYXNzIERhdGFTdG9yZSBleHRlbmRzIFN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKEltbXV0YWJsZS5mcm9tSlMoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJ3MlwiLFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IDUwMDAwLFxyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IDAsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogMCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiAwLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogMCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogMCxcclxuICAgICAgICAgICAgICAgIHdvcmthYmxlRGF5czogMzY1LFxyXG4gICAgICAgICAgICAgICAgaG91cnNQZXJEYXk6IDgsXHJcbiAgICAgICAgICAgICAgICB0YXg6IDI1LFxyXG4gICAgICAgICAgICAgICAgc2VsZkVtcGxveW1lbnRUYXg6IDcuMyxcclxuICAgICAgICAgICAgICAgIGRvbnRDb3VudFdlZWtlbmRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhY2F0aW9uRGF5czogMzAsXHJcbiAgICAgICAgICAgICAgICBkb250Q291bnRWYWNhdGlvbkRheXM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVBhcmFtZXRlcnMuc3Vic2NyaWJlKHRoaXMudXBkYXRlUGFyYW1ldGVycy5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVGFrZUhvbWVNb250aGx5U2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVcySG91cmx5U2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVcySG91cmx5U2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVzJBbm51YWxTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlVzJBbm51YWxTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXMkFubnVhbFNhbGFyeSg1MDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlcnMgPSB7XHJcbiAgICAgICAgXCJjb250cmFjdGFubnVhbFwiOnRoaXMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcImNvbnRyYWN0aG91cmx5XCI6dGhpcy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIFwidGFrZWhvbWVhbm51YWxseVwiOnRoaXMudXBkYXRlVGFrZUhvbWVBbm51YWxTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcInRha2Vob21lbW9udGhseVwiOnRoaXMudXBkYXRlVGFrZUhvbWVNb250aGx5U2FsYXJ5LmJpbmQodGhpcyksXHJcbiAgICAgICAgXCJ3MmFubnVhbGx5XCI6dGhpcy51cGRhdGVXMkFubnVhbFNhbGFyeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIFwidzJob3VybHlcIjp0aGlzLnVwZGF0ZVcySG91cmx5U2FsYXJ5LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXJhbWV0ZXJzKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyc1t0aGlzLnN0YXRlLmdldChcIm1ldGhvZFwiKV0oKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJjb250cmFjdGFubnVhbFwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJjb250cmFjdEFubnVhbFwiKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gdmFsdWUvd0RheXMvaHJQZXJEYXlcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lQW5udWFsbHkgPSBjb250cmFjdEFubnVhbCooMS10YXgvMTAwLXNlbGZFbXBsb3ltZW50VGF4LzEwMClcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHRha2Vob21lQW5udWFsbHkvMTI7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHRha2Vob21lQW5udWFsbHkvKDEtdGF4LzEwMCk7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsL3dEYXlzL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJjb250cmFjdGhvdXJseVwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJjb250cmFjdEhvdXJseVwiKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gdmFsdWUqd0RheXMqaHJQZXJEYXlcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lQW5udWFsbHkgPSBjb250cmFjdEFubnVhbCooMS10YXgvMTAwLXNlbGZFbXBsb3ltZW50VGF4LzEwMClcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHRha2Vob21lQW5udWFsbHkvMTI7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHRha2Vob21lQW5udWFsbHkvKDEtdGF4LzEwMCk7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsL3dEYXlzL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJ0YWtlaG9tZWFubnVhbGx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwidGFrZWhvbWVBbm51YWxseVwiKTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHRha2Vob21lQW5udWFsbHkvMTI7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHRha2Vob21lQW5udWFsbHkvKDEtdGF4LzEwMCk7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsL3dEYXlzL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSB0YWtlaG9tZUFubnVhbGx5IC8gKDEgLSB0YXggLyAxMDAgLSBzZWxmRW1wbG95bWVudFRheCAvIDEwMClcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gY29udHJhY3RBbm51YWwgLyB3RGF5cyAvIGhyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwidGFrZWhvbWVtb250aGx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVNb250aGx5ID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJ0YWtlaG9tZU1vbnRobHlcIik7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gdGFrZWhvbWVNb250aGx5KjEyO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB0YWtlaG9tZUFubnVhbGx5LygxLXRheC8xMDApO1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB3MkFubnVhbC93RGF5cy9oclBlckRheTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gdGFrZWhvbWVBbm51YWxseSAvICgxIC0gdGF4IC8gMTAwIC0gc2VsZkVtcGxveW1lbnRUYXggLyAxMDApXHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IGNvbnRyYWN0QW5udWFsIC8gd0RheXMgLyBoclBlckRheTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiB3MkhvdXJseSxcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiB3MkFubnVhbCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IHRha2Vob21lQW5udWFsbHksXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IHRha2Vob21lTW9udGhseSxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0QW5udWFsOiBjb250cmFjdEFubnVhbCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiBjb250cmFjdEhvdXJseVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVzJBbm51YWxTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwidzJhbm51YWxseVwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJ3MkFubnVhbFwiKTtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdzJBbm51YWwvd0RheXMvaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gdzJBbm51YWwgKiAoMSAtIHRheCAvIDEwMCk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSB0YWtlaG9tZUFubnVhbGx5IC8gMTI7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9IHRha2Vob21lQW5udWFsbHkgLyAoMSAtIHRheCAvIDEwMCAtIHNlbGZFbXBsb3ltZW50VGF4IC8gMTAwKVxyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSBjb250cmFjdEFubnVhbCAvIHdEYXlzIC8gaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVcySG91cmx5U2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcIncyaG91cmx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcIncySG91cmx5XCIpO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB3MkhvdXJseSAqIHdEYXlzICogaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gTWF0aC5jZWlsKHcyQW5udWFsICogKDEgLSB0YXggLyAxMDApKTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IE1hdGguY2VpbHRha2Vob21lQW5udWFsbHkgLyAxMjtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gdGFrZWhvbWVBbm51YWxseSAvICgxIC0gdGF4IC8gMTAwIC0gc2VsZkVtcGxveW1lbnRUYXggLyAxMDApXHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IE1hdGguY2VpbChjb250cmFjdEFubnVhbCAvIHdEYXlzIC8gaHJQZXJEYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYWxjcyhtZXRob2QsY2FsYyl7XHJcbiAgICAgICAgdmFyIHdEYXlzID0gdGhpcy5zdGF0ZS5nZXQoXCJ3b3JrYWJsZURheXNcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2V0KFwiZG9udENvdW50V2Vla2VuZHNcIikpIHtcclxuICAgICAgICAgICAgd0RheXMgKj0gNSAvIDc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdldChcImRvbnRDb3VudFZhY2F0aW9uRGF5c1wiKSkge1xyXG4gICAgICAgICAgICB3RGF5cyAtPSB0aGlzLnN0YXRlLmdldChcInZhY2F0aW9uRGF5c1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHJQZXJEYXkgPSB0aGlzLnN0YXRlLmdldChcImhvdXJzUGVyRGF5XCIpO1xyXG4gICAgICAgIHZhciB0YXggPSB0aGlzLnN0YXRlLmdldChcInRheFwiKTtcclxuICAgICAgICB2YXIgc2VsZkVtcGxveW1lbnRUYXggPSB0aGlzLnN0YXRlLmdldChcInNlbGZFbXBsb3ltZW50VGF4XCIpO1xyXG5cclxuICAgICAgICB2YXIgX19yZXQgPSBjYWxjKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2l0aE11dGF0aW9ucygobmV3U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcIm1ldGhvZFwiLCBtZXRob2QpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ3MkFubnVhbFwiLCBNYXRoLmNlaWwoX19yZXQudzJBbm51YWwpKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwidzJIb3VybHlcIiwgTWF0aC5jZWlsKF9fcmV0LncySG91cmx5KSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcImNvbnRyYWN0QW5udWFsXCIsIE1hdGguY2VpbChfX3JldC5jb250cmFjdEFubnVhbCkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJjb250cmFjdEhvdXJseVwiLCBNYXRoLmNlaWwoX19yZXQuY29udHJhY3RIb3VybHkpKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwidGFrZWhvbWVBbm51YWxseVwiLCBNYXRoLmNlaWwoX19yZXQudGFrZWhvbWVBbm51YWxseSkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ0YWtlaG9tZU1vbnRobHlcIiwgTWF0aC5jZWlsKF9fcmV0LnRha2Vob21lTW9udGhseSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEYXRhU3RvcmU7Il19
