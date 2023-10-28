// function routeApp(pathname, res, controller) {
//   function get(path, controller) {
//     if (pathname === path) {
//       const data = controller();
//       res.write(data);
//       res.end();
//     } else {
//       res.statusCode = 404;
//       res.statusMessage = "Not Found";
//       res.write("Page not found");
//       res.end();
//     }
//   }

//   return { get };
// }
// export default routeApp;
