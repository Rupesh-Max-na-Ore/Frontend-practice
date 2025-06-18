
const App = () => {
  return (
    <div className="App">
      <h1>Images Gallery</h1>
    </div>
  );
}

export default App;

// // Above is same as this plain js code
// import { jsx as _jsx } from "react/jsx-runtime";
// const App = () => {
//   return /*#__PURE__*/_jsx("div", {
//     className: "App",
//     children: /*#__PURE__*/_jsx("h1", {
//       children: "Images Gallery"
//     })
//   });
// };
// export default App;