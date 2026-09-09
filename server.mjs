import { createReadStream } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";

const indexPath = fileURLToPath(new URL("./public/index.html", import.meta.url));
const port = Number.parseInt(process.env.PORT ?? "3000", 10);

const server = createServer((request, response) => {
  if (request.url !== "/" && request.url !== "/index.html") {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "cache-control": "no-store",
    "content-type": "text/html; charset=utf-8"
  });
  createReadStream(indexPath).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Hostinger development site listening on http://0.0.0.0:${port}`);
});
