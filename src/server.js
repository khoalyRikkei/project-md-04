import "dotenv/config";

import http from "http";
import url from "url";
import fs from "fs";
import querystring from "querystring";

const server = http.createServer((req, res) => {
  // log để kiểm tra thằng req.url
  const { pathname, query } = url.parse(req.url);

  res.setHeader("Content-Type", "application/json");

  Ro;
  if (req.method === "GET") {
    switch (pathname) {
      case "/api/products":
        console.log("Kiểm tra query", query); // --> query chỉ là string --> chuyển đổi để lấy thông tin

        // Tự xử lý
        const conditions2 = query.split("&").map((condition) => {
          const data = condition.split("=");
          return { key: data[0], value: data[1] };
        });

        const conditions = querystring.parse(query);

        console.log("Kiểm tra conditions", conditions);
        const productsJSON = fs.readFileSync(
          "src/models/products.json",
          "utf8"
        );

        const productsArray = JSON.parse(productsJSON);
        // Filter theo điều kiện
        // const productFilter = productsArray.filter((product) => {
        //   for (const key in conditions) {
        //     if (product[key] == conditions[key]) {
        //       return true;
        //     }
        //   }
        // });

        const productFilter = productsArray.filter((product) =>
          conditions2.find(
            (condition) => condition.value == product[condition.key]
          )
        );

        // convert JSON to send res
        const productFilterJSON = JSON.stringify(productFilter);

        res.write(productFilterJSON);

        break;

      default:
        break;
    }
    res.end();
  }

  if (req.method === "POST") {
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`connecting to http://localhost:${port}`);
});

// tạo ra những api cho những sản phẩm từ models

// Ví dụ:
// --- localhost:8888/api/products?id=10 ---> danh sách sản phẩm bằng json
// --- localhost:8888/api/products/1 ---> sản phẩm có id là 1
