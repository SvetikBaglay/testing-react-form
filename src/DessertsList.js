// function DessertsList(props) {
//     // Implement the component here.
//     const lowCalorieDesserts = props.data
//     .filter(dessert => {
//       return dessert.calories <= 500
//       }
//     )
//     .sort((a, b) => {
//       return a.calories - b.calories
//   } );


//   const desserts = [
//   {
//     title: 'Chocolate Cake',
//     description: 'Chocolate cake is a cake flavored with melted chocolate',
//     calories: 500,
//   }
// ];

// const newDesserts = desserts.map((dessert) => {
//   return {
//     title: dessert.title.toUpperCase(),
//     ...dessert,
//     kCal: dessert.calories / 1000,
//   };
// });

// console.log('newDesserts ', newDesserts)
//   return (
//     <ul>
//       {lowCalorieDesserts.map((dessert, index) => (
//         <li key={index}>{dessert.name} - {dessert.calories} calories</li>
//       ))}
//     </ul>
//   );
//   }
  
//   export default DessertsList;

  