export {};
// /* eslint-disable */
// import React, { useState, useEffect } from 'react';
// import { IBFiltersProps, FilterItem } from './filters.types';
// import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';
// import { TextField } from '@fluentui/react/lib/TextField';
// import { IBBox } from '../Box/Box';

// const Filters = ({ setFilterState, items = [] }: IBFiltersProps) => {
//   const searchBoxStyles = { root: { width: 200 } };
//   const textBoxStyles = { root: { width: 200 } };

//   const [state, setState] = useState<any>({});

//   useEffect(() => {
//     setFilterState(state)
//   }, [state])

//   // + NUMBER ----------------------------------
//   const [numberInputError, setNumberInputError] = useState('');
//   const [numberInputState, setNumberInputState] = useState(0);

//   const handleNumericInputChange: any = (value: string) => {
//     const onlyNumberRegex = new RegExp('^[0-9]*$');

//     const isOnlyNumeric = onlyNumberRegex.test(value);

//     if (!value) {
//       setNumberInputState(0);
//       setNumberInputError('');
//       return;
//     }

//     if (!isOnlyNumeric) {
//       setNumberInputState(0);
//       setNumberInputError('Invalid format');
//       return;
//     }

//     const num = Number(value);
//     setNumberInputState(num);
//     setNumberInputError('');
//   };

//   // + CURRENCY ----------------------------------
//   const [currencyInputError, setCurrencyInputError] = useState('');

//   const handleCurrencyInputChange: any = (value: string) => {
//     const currencyRegex = new RegExp(
//       '^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:.[0-9]{1,2})?$',
//     );

//     const isCurrencyCompliant = currencyRegex.test(value);

//     console.log(isCurrencyCompliant);

//     if (!value) {
//       setCurrencyInputError('');
//       return;
//     }

//     if (!isCurrencyCompliant) {
//       console.log(1.1);
//       setCurrencyInputError('Invalid format');
//     }

//     const parsedValue = value.replace(',', '');
//     const num = Number(parsedValue);
//     setCurrencyInputError('');
//   };

//   // + SWITCH ----------------------------------
//   const handleRenderFilters = (filters: FilterItem[]) => {
//     return filters.map(({ id, name, label, type, placeholder }: FilterItem) => {
//       switch (type) {
//         case 0:
//           return (
//             <SearchBox
//               key={id}
//               styles={searchBoxStyles}
//               placeholder={placeholder ?? 'Search'}
//               onEscape={ev => {
//                 console.log('Custom onEscape Called');
//               }}
//               onClear={ev => {
//                 console.log('Custom onClear Called');
//               }}
//               onChange={(_, newValue) => {
//                 console.log('SearchBox onChange fired: ' + newValue);
//                 setState({ ...state, [name]: { value: newValue, fieldError: '' } });
//               }}
//               onSearch={newValue =>
//                 console.log('SearchBox onSearch fired: ' + newValue)
//               }
//             />
//           );

//         case 1:
//           return (
//             <TextField
//               styles={textBoxStyles}
//               key={id}
//               name={name}
//               placeholder={placeholder ?? 'Number'}
//               onChange={(e: any) => handleNumericInputChange(e.target.value)} // TODO remove any
//               onGetErrorMessage={() => state[name]?.error}
//             />
//           );

//         case 2:
//           return <div key={id}>2</div>;

//         case 3:
//           return (
//             <TextField
//               styles={textBoxStyles}
//               key={id}
//               name={name}
//               placeholder={placeholder ?? 'Currency'}
//               onChange={(e: any) => handleCurrencyInputChange(e.target.value)} // TODO remove any
//               onGetErrorMessage={() => state[name]?.error}
//             />
//           );

//         default:
//           return <div key={id}>0</div>;
//       }
//     });
//   };

//   return (
//     <IBBox mb={4}>
//       {handleRenderFilters(items)}
//     </IBBox>
//   );
// };

// export default Filters;
