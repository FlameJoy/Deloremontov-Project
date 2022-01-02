// "use strict"
// // Calculator

// let renovationTypes = document.getElementsByName('renovationType');
// let buildingTypes = document.getElementsByName('buildingType');
// let square = document.getElementById('square');
// let plaster = document.getElementById('plaster');
// let drywall = document.getElementById('drywall');
// let wallpaper = document.getElementById('wallpaper');

// let renovationTypeValue = -1;
// let buildingTypeValue = -1;

// function calc(){
//   for(let i = 0; i < renovationTypes.length; i++) {
//     if(renovationTypes[i].checked) {
//       renovationTypeValue = renovationTypes[i].value;
//       break;
//     }
//   }

//   let squareValue = square.value;

//   for(let j = 0; j < buildingTypes.length; j++) {
//     if(buildingTypes[j].checked) {
//       buildingTypeValue = buildingTypes[j].value;
//       break;
//     }
//   }

//   // walls
//   let plasterValue = plaster.value;
//   let drywallValue = drywall.value;
//   let wallpaperValue = wallpaper.value;
  
//   if ((renovationTypeValue || buildingTypeValue || squareValue) < 0) {
//     alert("Empty value");
//   } else if(renovationTypeValue > 0 && buildingTypeValue > 0) {
//     alert(renovationTypeValue + " " + squareValue + " " + buildingTypeValue);
//   } else if(plaster.checked) {
//     alert(plasterValue);
//   }
// }


