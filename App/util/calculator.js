export const initialState = {
  currentValue: "0",
  displayValue: "0",
  operator: null,
  previousOperator: null,
  previousValue: null
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return {
      currentValue: `${value}`,
      displayValue: `${value}`
     };
  }

  return {
    currentValue: `${state.currentValue}${value}`,
    displayValue: `${state.currentValue}${value}`
  };
};

export const handleEqual = state => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
  };

  if (operator === "/") {
    return {
      currentValue: previous / current,
      displayValue: previous / current,
      previousOperator: '/',
      ...resetState
    };
  }

  if (operator === "*") {
    return {
      currentValue: previous * current,
      displayValue: previous * current,
      previousOperator: '*',
      ...resetState
    };
  }

  if (operator === "+") {
    return {
      currentValue: previous + current,
      displayValue: previous + current,
      previousOperator: '+',
      ...resetState
    };
  }

  if (operator === "-") {
    return {
      currentValue: previous - current,
      displayValue: previous - current,
      previousOperator: '-',
      ...resetState
    };
  }

  if (state.operator === null) return {
    currentValue: eval(`state.displayValue ` + state.previousOperator + ` previousValue`),
    displayValue: previous * current,
  }


  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        // displayValue: "0", when operators are pressed do not change disp
        currentValue: "0"
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

export default calculator;
