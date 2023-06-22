"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./modules/addScore.js":
/*!*****************************!*\
  !*** ./modules/addScore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addScore = (scores) => {
  // Create elements
  const divContainer = document.createElement('div');
  const pName = document.createElement('p');
  const pScore = document.createElement('p');

  // Add classes and content
  divContainer.classList.add('scores');
  pName.textContent = `${scores.user}: `;
  pScore.textContent = scores.score;

  // Append elements
  divContainer.appendChild(pName);
  divContainer.appendChild(pScore);
  document.getElementById('scores-container').appendChild(divContainer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);

/***/ }),

/***/ "./modules/constructor.js":
/*!********************************!*\
  !*** ./modules/constructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Score)
/* harmony export */ });
function Score(name, score) {
  this.user = name;
  this.score = score;
}


/***/ }),

/***/ "./modules/elements.js":
/*!*****************************!*\
  !*** ./modules/elements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   inputName: () => (/* binding */ inputName),
/* harmony export */   inputScore: () => (/* binding */ inputScore),
/* harmony export */   refreshButton: () => (/* binding */ refreshButton)
/* harmony export */ });
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const form = document.querySelector('form');
const refreshButton = document.getElementById('refresh-button');



/***/ }),

/***/ "./modules/newScores.js":
/*!******************************!*\
  !*** ./modules/newScores.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor.js */ "./modules/constructor.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./modules/elements.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./modules/storage.js");
/* harmony import */ var _addScore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addScore.js */ "./modules/addScore.js");





const newScore = async (event) => {
  // If the name and score inputs are not empty.
  if (!_elements_js__WEBPACK_IMPORTED_MODULE_1__.inputName.validity.valueMissing && !_elements_js__WEBPACK_IMPORTED_MODULE_1__.inputScore.validity.valueMissing) {
    event.preventDefault();
    // Creates a new object.
    const myScore = new _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"](_elements_js__WEBPACK_IMPORTED_MODULE_1__.inputName.value, _elements_js__WEBPACK_IMPORTED_MODULE_1__.inputScore.value);
    // Adds the score to the table.
    (0,_addScore_js__WEBPACK_IMPORTED_MODULE_3__["default"])(myScore);
    try {
      // Save the updated array in the API
      await (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage)({ score: myScore.score, user: myScore.user });

      // Resets the form.
      _elements_js__WEBPACK_IMPORTED_MODULE_1__.form.reset();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newScore);

/***/ }),

/***/ "./modules/storage.js":
/*!****************************!*\
  !*** ./modules/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScores: () => (/* binding */ createScores),
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
const createScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3iGcEUE1HlerNd8QYix/scores/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Error at getting the scores');
    }

    // eslint-disable-next-line no-return-await
    return await response.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const storage = async (scores) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3iGcEUE1HlerNd8QYix/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: scores.user,
      score: scores.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error at adding the score');
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(`${error}`);
    });
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Diphylleia&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  font-family: 'Diphylleia', serif;
}

body {
  min-height: 100vh;
  background-color: #930d29;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed;
  background-size: cover;
}

h1 {
  margin-left: 20%;
  padding: 30px 0;
}

h3 {
  margin-bottom: 25px;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 0 5px 2px black;
}

#score-section,
#recent-scores {
  display: flex;
  justify-content: space-evenly;
}

#left-container,
#right-container,
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#score-section {
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding: 30px 10px;
  box-shadow: 0 0 0 5px #020202;
  min-height: 100vh;
}

.scores {
  display: flex;
  padding: 10px 10px;
  gap: 10px;
  font-weight: bolder;
}

.scores:nth-child(even) {
  background-color: #af0734;
}

#left-container {
  width: 90%;
  max-width: 400px;
}

#scores-container {
  border: 2px solid black;
  border-radius: 10px;
}

#recent-scores {
  justify-content: space-between;
  margin-bottom: 20px;
}

#right-container {
  justify-content: flex-start;
  align-items: flex-start;
}

form {
  gap: 20px;
}

form input {
  padding: 5px 10px;
  font-weight: bolder;
  outline: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid black;
}

#submit-button,
#refresh-button {
  align-self: flex-end;
  padding: 10px 20px;
  border-radius: 10px 0 10px 10px;
  border: 2px solid black;
  font-weight: bolder;
  background: none;
  transition: all 0.5s ease-in-out;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 2.3em;
  }

  #score-section {
    flex-direction: row;
    align-items: flex-start;
    font-size: 1.3em;
  }

  form input,
  #submit-button,
  #refresh-button {
    font-size: 1em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,yDAAoxF;EACpxF,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,6BAA6B;AAC/B;;AAEA;;EAEE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,0CAA0C;EAC1C,uBAAuB;AACzB;;AAEA;;EAEE,oBAAoB;EACpB,kBAAkB;EAClB,+BAA+B;EAC/B,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;EAClB;;EAEA;;;IAGE,cAAc;EAChB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Diphylleia&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Diphylleia', serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: #930d29;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FFA702'/%3E%3Cstop offset='1' stop-color='%23930D29'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23c95a16'/%3E%3Cstop offset='1' stop-color='%23930D29'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=''%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\nh1 {\r\n  margin-left: 20%;\r\n  padding: 30px 0;\r\n}\r\n\r\nh3 {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 0 5px 2px black;\r\n}\r\n\r\n#score-section,\r\n#recent-scores {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n#left-container,\r\n#right-container,\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n#score-section {\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  align-items: center;\r\n  padding: 30px 10px;\r\n  box-shadow: 0 0 0 5px #020202;\r\n  min-height: 100vh;\r\n}\r\n\r\n.scores {\r\n  display: flex;\r\n  padding: 10px 10px;\r\n  gap: 10px;\r\n  font-weight: bolder;\r\n}\r\n\r\n.scores:nth-child(even) {\r\n  background-color: #af0734;\r\n}\r\n\r\n#left-container {\r\n  width: 90%;\r\n  max-width: 400px;\r\n}\r\n\r\n#scores-container {\r\n  border: 2px solid black;\r\n  border-radius: 10px;\r\n}\r\n\r\n#recent-scores {\r\n  justify-content: space-between;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#right-container {\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\nform {\r\n  gap: 20px;\r\n}\r\n\r\nform input {\r\n  padding: 5px 10px;\r\n  font-weight: bolder;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border: 2px solid black;\r\n}\r\n\r\n#submit-button,\r\n#refresh-button {\r\n  align-self: flex-end;\r\n  padding: 10px 20px;\r\n  border-radius: 10px 0 10px 10px;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n  background: none;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  h1 {\r\n    font-size: 2.3em;\r\n  }\r\n\r\n  #score-section {\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  form input,\r\n  #submit-button,\r\n  #refresh-button {\r\n    font-size: 1em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/elements.js */ "./modules/elements.js");
/* harmony import */ var _modules_newScores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/newScores.js */ "./modules/newScores.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/storage.js */ "./modules/storage.js");
/* harmony import */ var _modules_addScore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/addScore.js */ "./modules/addScore.js");
/* harmony import */ var _assets_puntuacion_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/puntuacion.png */ "./src/assets/puntuacion.png");


// eslint-disable-next-line import/no-named-as-default





// Add web icon
const link = document.createElement('link');
link.href = _assets_puntuacion_png__WEBPACK_IMPORTED_MODULE_5__;
link.rel = 'icon';
document.querySelector('head').appendChild(link);

// Display the scores in the table.
const loadScores = async () => {
  try {
    const scores = await (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.createScores)();

    scores.result.forEach((obj) => {
      (0,_modules_addScore_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj);
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};

loadScores();

_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.refreshButton.addEventListener('click', () => {
  document.getElementById('scores-container').innerHTML = '';
  loadScores();
});
_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', _modules_newScores_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "./src/assets/puntuacion.png":
/*!***********************************!*\
  !*** ./src/assets/puntuacion.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d41a333880f92334acb.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxzREFBSSw0QkFBNEIsNkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9hZGRTY29yZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9uZXdTY29yZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRTY29yZSA9IChzY29yZXMpID0+IHtcclxuICAvLyBDcmVhdGUgZWxlbWVudHNcclxuICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBwU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIC8vIEFkZCBjbGFzc2VzIGFuZCBjb250ZW50XHJcbiAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njb3JlcycpO1xyXG4gIHBOYW1lLnRleHRDb250ZW50ID0gYCR7c2NvcmVzLnVzZXJ9OiBgO1xyXG4gIHBTY29yZS50ZXh0Q29udGVudCA9IHNjb3Jlcy5zY29yZTtcclxuXHJcbiAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHBOYW1lKTtcclxuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQocFNjb3JlKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmVzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTY29yZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY29yZShuYW1lLCBzY29yZSkge1xuICB0aGlzLnVzZXIgPSBuYW1lO1xuICB0aGlzLnNjb3JlID0gc2NvcmU7XG59XG4iLCJjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xyXG5jb25zdCBpbnB1dFNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbmNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaC1idXR0b24nKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaW5wdXROYW1lLCBpbnB1dFNjb3JlLFxyXG4gIGZvcm0sIHJlZnJlc2hCdXR0b24sXHJcbn07IiwiaW1wb3J0IFNjb3JlIGZyb20gJy4vY29uc3RydWN0b3IuanMnO1xyXG5pbXBvcnQgeyBmb3JtLCBpbnB1dE5hbWUsIGlucHV0U2NvcmUgfSBmcm9tICcuL2VsZW1lbnRzLmpzJztcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCBhZGRTY29yZSBmcm9tICcuL2FkZFNjb3JlLmpzJztcclxuXHJcbmNvbnN0IG5ld1Njb3JlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgLy8gSWYgdGhlIG5hbWUgYW5kIHNjb3JlIGlucHV0cyBhcmUgbm90IGVtcHR5LlxyXG4gIGlmICghaW5wdXROYW1lLnZhbGlkaXR5LnZhbHVlTWlzc2luZyAmJiAhaW5wdXRTY29yZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDcmVhdGVzIGEgbmV3IG9iamVjdC5cclxuICAgIGNvbnN0IG15U2NvcmUgPSBuZXcgU2NvcmUoaW5wdXROYW1lLnZhbHVlLCBpbnB1dFNjb3JlLnZhbHVlKTtcclxuICAgIC8vIEFkZHMgdGhlIHNjb3JlIHRvIHRoZSB0YWJsZS5cclxuICAgIGFkZFNjb3JlKG15U2NvcmUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBhcnJheSBpbiB0aGUgQVBJXHJcbiAgICAgIGF3YWl0IHN0b3JhZ2UoeyBzY29yZTogbXlTY29yZS5zY29yZSwgdXNlcjogbXlTY29yZS51c2VyIH0pO1xyXG5cclxuICAgICAgLy8gUmVzZXRzIHRoZSBmb3JtLlxyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3U2NvcmU7IiwiY29uc3QgY3JlYXRlU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9aM2lHY0VVRTFIbGVyTmQ4UVlpeC9zY29yZXMvJywge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBhdCBnZXR0aW5nIHRoZSBzY29yZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmV0dXJuLWF3YWl0XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXJyb3J9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9IGFzeW5jIChzY29yZXMpID0+IHtcclxuICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvWjNpR2NFVUUxSGxlck5kOFFZaXgvc2NvcmVzLycsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICB1c2VyOiBzY29yZXMudXNlcixcclxuICAgICAgc2NvcmU6IHNjb3Jlcy5zY29yZSxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGF0IGFkZGluZyB0aGUgc2NvcmUnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2Vycm9yfWApO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTY29yZXMsIHN0b3JhZ2UgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB2aWV3Qm94PSUyNzAgMCAyMDAwIDE1MDAlMjclM0UlM0NkZWZzJTNFJTNDcmFkaWFsR3JhZGllbnQgaWQ9JTI3YSUyNyBncmFkaWVudFVuaXRzPSUyN29iamVjdEJvdW5kaW5nQm94JTI3JTNFJTNDc3RvcCBvZmZzZXQ9JTI3MCUyNyBzdG9wLWNvbG9yPSUyNyUyM0ZGQTcwMiUyNy8lM0UlM0NzdG9wIG9mZnNldD0lMjcxJTI3IHN0b3AtY29sb3I9JTI3JTIzOTMwRDI5JTI3LyUzRSUzQy9yYWRpYWxHcmFkaWVudCUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSUyN2IlMjcgZ3JhZGllbnRVbml0cz0lMjd1c2VyU3BhY2VPblVzZSUyNyB4MT0lMjcwJTI3IHkxPSUyNzc1MCUyNyB4Mj0lMjcxNTUwJTI3IHkyPSUyNzc1MCUyNyUzRSUzQ3N0b3Agb2Zmc2V0PSUyNzAlMjcgc3RvcC1jb2xvcj0lMjclMjNjOTVhMTYlMjcvJTNFJTNDc3RvcCBvZmZzZXQ9JTI3MSUyNyBzdG9wLWNvbG9yPSUyNyUyMzkzMEQyOSUyNy8lM0UlM0MvbGluZWFyR3JhZGllbnQlM0UlM0NwYXRoIGlkPSUyN3MlMjcgZmlsbD0lMjd1cmwlMjglMjNiJTI5JTI3IGQ9JTI3TTE1NDkuMiA1MS42Yy01LjQgOTkuMS0yMC4yIDE5Ny42LTQ0LjIgMjkzLjZjLTI0LjEgOTYtNTcuNCAxODkuNC05OS4zIDI3OC42Yy00MS45IDg5LjItOTIuNCAxNzQuMS0xNTAuMyAyNTMuM2MtNTggNzkuMi0xMjMuNCAxNTIuNi0xOTUuMSAyMTljLTcxLjcgNjYuNC0xNDkuNiAxMjUuOC0yMzIuMiAxNzcuMmMtODIuNyA1MS40LTE3MC4xIDk0LjctMjYwLjcgMTI5LjFjLTkwLjYgMzQuNC0xODQuNCA2MC0yNzkuNSA3Ni4zQzE5Mi42IDE0OTUgOTYuMSAxNTAyIDAgMTUwMGM5Ni4xLTIuMSAxOTEuOC0xMy4zIDI4NS40LTMzLjZjOTMuNi0yMC4yIDE4NS00OS41IDI3Mi41LTg3LjJjODcuNi0zNy43IDE3MS4zLTgzLjggMjQ5LjYtMTM3LjNjNzguNC01My41IDE1MS41LTExNC41IDIxNy45LTE4MS43YzY2LjUtNjcuMiAxMjYuNC0xNDAuNyAxNzguNi0yMTguOWM1Mi4zLTc4LjMgOTYuOS0xNjEuNCAxMzMtMjQ3LjljMzYuMS04Ni41IDYzLjgtMTc2LjIgODIuNi0yNjcuNmMxOC44LTkxLjQgMjguNi0xODQuNCAyOS42LTI3Ny40YzAuMy0yNy42IDIzLjItNDguNyA1MC44LTQ4LjRzNDkuNSAyMS44IDQ5LjIgNDkuNWMwIDAuNyAwIDEuMy0wLjEgMkwxNTQ5LjIgNTEuNnolMjcvJTNFJTNDZyBpZD0lMjdnJTI3JTNFJTNDdXNlIGhyZWY9JTI3JTIzcyUyNyB0cmFuc2Zvcm09JTI3c2NhbGUlMjgwLjEyJTI5IHJvdGF0ZSUyODYwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC4yJTI5IHJvdGF0ZSUyODEwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC4yNSUyOSByb3RhdGUlMjg0MCUyOSUyNy8lM0UlM0N1c2UgaHJlZj0lMjclMjNzJTI3IHRyYW5zZm9ybT0lMjdzY2FsZSUyODAuMyUyOSByb3RhdGUlMjgtMjAlMjklMjcvJTNFJTNDdXNlIGhyZWY9JTI3JTIzcyUyNyB0cmFuc2Zvcm09JTI3c2NhbGUlMjgwLjQlMjkgcm90YXRlJTI4LTMwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC41JTI5IHJvdGF0ZSUyODIwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC42JTI5IHJvdGF0ZSUyODYwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC43JTI5IHJvdGF0ZSUyODEwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC44MzUlMjkgcm90YXRlJTI4LTQwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC45JTI5IHJvdGF0ZSUyODQwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MS4wNSUyOSByb3RhdGUlMjgyNSUyOSUyNy8lM0UlM0N1c2UgaHJlZj0lMjclMjNzJTI3IHRyYW5zZm9ybT0lMjdzY2FsZSUyODEuMiUyOSByb3RhdGUlMjg4JTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MS4zMzMlMjkgcm90YXRlJTI4LTYwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MS40NSUyOSByb3RhdGUlMjgtMzAlMjklMjcvJTNFJTNDdXNlIGhyZWY9JTI3JTIzcyUyNyB0cmFuc2Zvcm09JTI3c2NhbGUlMjgxLjYlMjkgcm90YXRlJTI4MTAlMjklMjcvJTNFJTNDL2clM0UlM0MvZGVmcyUzRSUzQ2cgJTNFJTNDZyB0cmFuc2Zvcm09JTI3JTI3JTNFJTNDY2lyY2xlIGZpbGw9JTI3dXJsJTI4JTIzYSUyOSUyNyByPSUyNzMwMDAlMjcvJTNFJTNDZyBvcGFjaXR5PSUyNzAuNSUyNyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcyMDAwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxODAwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxNzAwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxNjUxJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxNDUwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxMjUwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxMTc1JTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjc5MDAlMjcvJTNFJTNDY2lyY2xlIGZpbGw9JTI3dXJsJTI4JTIzYSUyOSUyNyByPSUyNzc1MCUyNy8lM0UlM0NjaXJjbGUgZmlsbD0lMjd1cmwlMjglMjNhJTI5JTI3IHI9JTI3NTAwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjczODAlMjcvJTNFJTNDY2lyY2xlIGZpbGw9JTI3dXJsJTI4JTIzYSUyOSUyNyByPSUyNzI1MCUyNy8lM0UlM0MvZyUzRSUzQ2cgdHJhbnNmb3JtPSUyNyUyNyUzRSUzQ3VzZSBocmVmPSUyNyUyM2clMjcgdHJhbnNmb3JtPSUyN3JvdGF0ZSUyODEwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM2clMjcgdHJhbnNmb3JtPSUyN3JvdGF0ZSUyODEyMCUyOSUyNy8lM0UlM0N1c2UgaHJlZj0lMjclMjNnJTI3IHRyYW5zZm9ybT0lMjdyb3RhdGUlMjgyNDAlMjklMjcvJTNFJTNDL2clM0UlM0NjaXJjbGUgZmlsbC1vcGFjaXR5PSUyNzAuMSUyNyBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjczMDAwJTI3LyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EaXBoeWxsZWlhJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnRGlwaHlsbGVpYScsIHNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTMwZDI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IGJsYWNrO1xyXG59XHJcblxyXG4jc2NvcmUtc2VjdGlvbixcclxuI3JlY2VudC1zY29yZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbiNsZWZ0LWNvbnRhaW5lcixcclxuI3JpZ2h0LWNvbnRhaW5lcixcclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4jc2NvcmUtc2VjdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICMwMjAyMDI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5zY29yZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGdhcDogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uc2NvcmVzOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmMDczNDtcclxufVxyXG5cclxuI2xlZnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbiNzY29yZXMtY29udGFpbmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jcmVjZW50LXNjb3JlcyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNyaWdodC1jb250YWluZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG5mb3JtIGlucHV0IHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI3N1Ym1pdC1idXR0b24sXHJcbiNyZWZyZXNoLWJ1dHRvbiB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyLjNlbTtcclxuICB9XHJcblxyXG4gICNzY29yZS1zZWN0aW9uIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgfVxyXG5cclxuICBmb3JtIGlucHV0LFxyXG4gICNzdWJtaXQtYnV0dG9uLFxyXG4gICNyZWZyZXNoLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qix5REFBb3hGO0VBQ3B4Riw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjs7RUFFQTs7O0lBR0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURpcGh5bGxlaWEmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdEaXBoeWxsZWlhJywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTMwZDI5O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwMDAgMTUwMCclM0UlM0NkZWZzJTNFJTNDcmFkaWFsR3JhZGllbnQgaWQ9J2EnIGdyYWRpZW50VW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyUzRSUzQ3N0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSclMjNGRkE3MDInLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjM5MzBEMjknLyUzRSUzQy9yYWRpYWxHcmFkaWVudCUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSdiJyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgeDE9JzAnIHkxPSc3NTAnIHgyPScxNTUwJyB5Mj0nNzUwJyUzRSUzQ3N0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPSclMjNjOTVhMTYnLyUzRSUzQ3N0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPSclMjM5MzBEMjknLyUzRSUzQy9saW5lYXJHcmFkaWVudCUzRSUzQ3BhdGggaWQ9J3MnIGZpbGw9J3VybCglMjNiKScgZD0nTTE1NDkuMiA1MS42Yy01LjQgOTkuMS0yMC4yIDE5Ny42LTQ0LjIgMjkzLjZjLTI0LjEgOTYtNTcuNCAxODkuNC05OS4zIDI3OC42Yy00MS45IDg5LjItOTIuNCAxNzQuMS0xNTAuMyAyNTMuM2MtNTggNzkuMi0xMjMuNCAxNTIuNi0xOTUuMSAyMTljLTcxLjcgNjYuNC0xNDkuNiAxMjUuOC0yMzIuMiAxNzcuMmMtODIuNyA1MS40LTE3MC4xIDk0LjctMjYwLjcgMTI5LjFjLTkwLjYgMzQuNC0xODQuNCA2MC0yNzkuNSA3Ni4zQzE5Mi42IDE0OTUgOTYuMSAxNTAyIDAgMTUwMGM5Ni4xLTIuMSAxOTEuOC0xMy4zIDI4NS40LTMzLjZjOTMuNi0yMC4yIDE4NS00OS41IDI3Mi41LTg3LjJjODcuNi0zNy43IDE3MS4zLTgzLjggMjQ5LjYtMTM3LjNjNzguNC01My41IDE1MS41LTExNC41IDIxNy45LTE4MS43YzY2LjUtNjcuMiAxMjYuNC0xNDAuNyAxNzguNi0yMTguOWM1Mi4zLTc4LjMgOTYuOS0xNjEuNCAxMzMtMjQ3LjljMzYuMS04Ni41IDYzLjgtMTc2LjIgODIuNi0yNjcuNmMxOC44LTkxLjQgMjguNi0xODQuNCAyOS42LTI3Ny40YzAuMy0yNy42IDIzLjItNDguNyA1MC44LTQ4LjRzNDkuNSAyMS44IDQ5LjIgNDkuNWMwIDAuNyAwIDEuMy0wLjEgMkwxNTQ5LjIgNTEuNnonLyUzRSUzQ2cgaWQ9J2cnJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMC4xMikgcm90YXRlKDYwKScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMC4yKSByb3RhdGUoMTApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgwLjI1KSByb3RhdGUoNDApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgwLjMpIHJvdGF0ZSgtMjApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgwLjQpIHJvdGF0ZSgtMzApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgwLjUpIHJvdGF0ZSgyMCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDAuNikgcm90YXRlKDYwKScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMC43KSByb3RhdGUoMTApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgwLjgzNSkgcm90YXRlKC00MCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDAuOSkgcm90YXRlKDQwKScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMS4wNSkgcm90YXRlKDI1KScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMS4yKSByb3RhdGUoOCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDEuMzMzKSByb3RhdGUoLTYwKScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMS40NSkgcm90YXRlKC0zMCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDEuNikgcm90YXRlKDEwKScvJTNFJTNDL2clM0UlM0MvZGVmcyUzRSUzQ2cgJTNFJTNDZyB0cmFuc2Zvcm09JyclM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPSczMDAwJy8lM0UlM0NnIG9wYWNpdHk9JzAuNSclM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPScyMDAwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPScxODAwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPScxNzAwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPScxNjUxJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPScxNDUwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPScxMjUwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPScxMTc1Jy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPSc5MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9Jzc1MCcvJTNFJTNDY2lyY2xlIGZpbGw9J3VybCglMjNhKScgcj0nNTAwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPSczODAnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzI1MCcvJTNFJTNDL2clM0UlM0NnIHRyYW5zZm9ybT0nJyUzRSUzQ3VzZSBocmVmPSclMjNnJyB0cmFuc2Zvcm09J3JvdGF0ZSgxMCknLyUzRSUzQ3VzZSBocmVmPSclMjNnJyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjApJy8lM0UlM0N1c2UgaHJlZj0nJTIzZycgdHJhbnNmb3JtPSdyb3RhdGUoMjQwKScvJTNFJTNDL2clM0UlM0NjaXJjbGUgZmlsbC1vcGFjaXR5PScwLjEnIGZpbGw9J3VybCglMjNhKScgcj0nMzAwMCcvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjAlO1xcclxcbiAgcGFkZGluZzogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNzY29yZS1zZWN0aW9uLFxcclxcbiNyZWNlbnQtc2NvcmVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtY29udGFpbmVyLFxcclxcbiNyaWdodC1jb250YWluZXIsXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jc2NvcmUtc2VjdGlvbiB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjMDIwMjAyO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZXM6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjA3MzQ7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Njb3Jlcy1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVjZW50LXNjb3JlcyB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnV0dG9uLFxcclxcbiNyZWZyZXNoLWJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAxMHB4IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjNlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzY29yZS1zZWN0aW9uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb3JtIGlucHV0LFxcclxcbiAgI3N1Ym1pdC1idXR0b24sXFxyXFxuICAjcmVmcmVzaC1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGZvcm0sIHJlZnJlc2hCdXR0b24gfSBmcm9tICcuLi9tb2R1bGVzL2VsZW1lbnRzLmpzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdFxuaW1wb3J0IG5ld1Njb3JlIGZyb20gJy4uL21vZHVsZXMvbmV3U2NvcmVzLmpzJztcbmltcG9ydCB7IGNyZWF0ZVNjb3JlcyB9IGZyb20gJy4uL21vZHVsZXMvc3RvcmFnZS5qcyc7XG5pbXBvcnQgYWRkU2NvcmUgZnJvbSAnLi4vbW9kdWxlcy9hZGRTY29yZS5qcyc7XG5pbXBvcnQgd2ViSWNvbiBmcm9tICcuL2Fzc2V0cy9wdW50dWFjaW9uLnBuZyc7XG5cbi8vIEFkZCB3ZWIgaWNvblxuY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbmxpbmsuaHJlZiA9IHdlYkljb247XG5saW5rLnJlbCA9ICdpY29uJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChsaW5rKTtcblxuLy8gRGlzcGxheSB0aGUgc2NvcmVzIGluIHRoZSB0YWJsZS5cbmNvbnN0IGxvYWRTY29yZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2NvcmVzID0gYXdhaXQgY3JlYXRlU2NvcmVzKCk7XG5cbiAgICBzY29yZXMucmVzdWx0LmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgYWRkU2NvcmUob2JqKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXJyb3J9YCk7XG4gIH1cbn07XG5cbmxvYWRTY29yZXMoKTtcblxucmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3Jlcy1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgbG9hZFNjb3JlcygpO1xufSk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG5ld1Njb3JlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=