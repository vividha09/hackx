// import React, { useState } from 'react';

// const App = () => {
//   const [searchInput, setSearchInput] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedSuggestions, setSelectedSuggestions] = useState([]);
//   const [selectedValues, setSelectedValues] = useState({});
//   const [currentValue, setCurrentValue] = useState('');

//   // Sample data for autocomplete suggestions
//   const autocompleteSuggestions = [
//     'Apple',
//     'Banana',
//     'Cherry',
//     'Grapes',
//     'Lemon',
//     'Orange',
//     'Peach',
//     'Pineapple',
//     'Strawberry',
//     'Watermelon',
//   ];

//   // Function to handle search input change
//   const handleSearchInputChange = (e) => {
//     const newValue = e.target.value;
//     setSearchInput(newValue);

//     // Filter suggestions based on the search input
//     const filteredSuggestions = autocompleteSuggestions.filter((suggestion) =>
//       suggestion.toLowerCase().includes(newValue.toLowerCase())
//     );
//     setSuggestions(filteredSuggestions);
//   };

//   // Function to handle selecting a suggestion
//   const handleSuggestionClick = (suggestion) => {
//     if (!selectedSuggestions.includes(suggestion)) {
//       setSelectedSuggestions([...selectedSuggestions, suggestion]);
//       setCurrentValue('');
//     }
//   };

//   // Function to handle entering a value for the selected suggestions
//   const handleValueInputChange = (e) => {
//     const newValue = e.target.value;
//     setCurrentValue(newValue);
//   };

//   // Function to associate a value with a selected suggestion
//   const associateValue = (suggestion, value) => {
//     setSelectedValues((prevValues) => ({
//       ...prevValues,
//       [suggestion]: parseInt(value, 10),
//     }));
//   };

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       <h1 className="text-2xl font-bold mb-4">Auto-Complete Word App with Values</h1>
//       <div className="mb-4">
//         <input
//           type="text"
//           value={searchInput}
//           onChange={handleSearchInputChange}
//           placeholder="Search for a word..."
//           className="border rounded px-2 py-1"
//         />
//         <ul className="mt-2">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               className={`${
//                 selectedSuggestions.includes(suggestion)
//                   ? 'bg-blue-200'
//                   : 'bg-gray-100 hover:bg-gray-200'
//               } rounded py-1 px-2 cursor-pointer`}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       </div>
//       {selectedSuggestions.length > 0 && (
//         <div>
//           {selectedSuggestions.map((suggestion, index) => (
//             <div key={index} className="mb-4">
//               <input
//                 type="text"
//                 value={currentValue}
//                 onChange={handleValueInputChange}
//                 placeholder={`Enter a value for ${suggestion}...`}
//                 className="border rounded px-2 py-1"
//               />
//               <button
//                 onClick={() => {
//                   associateValue(suggestion, currentValue);
//                   setCurrentValue('');
//                 }}
//                 className="bg-blue-500 text-white rounded px-2 py-1 ml-2 cursor-pointer"
//               >
//                 Assign Value
//               </button>
//               <p>
//                 {suggestion} - {selectedValues[suggestion]}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
