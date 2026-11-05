const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 4188;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // 1. Backend API Status Endpoint: /api/v1/status
  if (pathname === '/api/v1/status') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });
    const statusPayload = {
      system: 'operational',
      uptime_90d: 99.99,
      last_updated: new Date().toISOString(),
      models_count: 31,
      providers: ['Anthropic', 'OpenAI', 'Zhipu AI'],
      services: {
        edge_routing: 'operational',
        chat_playground: 'operational',
        billing_ledger: 'operational',
        auth_keys: 'operational'
      }
    };
    res.end(JSON.stringify(statusPayload, null, 2));
    return;
  }

  // 2. Static file serving
  let filePath = path.join(ROOT, pathname);
  if (pathname === '/sign-in' || pathname === '/login') {
    filePath = path.join(ROOT, 'login', 'index.html');
  }


  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + '/index.html')) {
      filePath = filePath + '/index.html';
    } else if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else {
      filePath = path.join(ROOT, 'index.html');
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error: ' + err.code);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Free Router Platform Server running at http://localhost:${PORT}/`);
});
