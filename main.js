const gateway = require('fast-gateway')
const port = process.env.PORT || 8080;
const server = gateway({
  routes: [{
      prefix: '/api/s1',
      target: 'http://127.0.0.1:8081',
      methods: ['GET', 'POST'],
      pathRegex: '/*',
    },
    {
      prefix: '/api/s2',
      target: 'http://127.0.0.1:8082',
      methods: ['GET', 'POST'],
      pathRegex: '/*',
    },
    {
      prefix: '/api/s3',
      target: 'http://127.0.0.1:8083',
      methods: ['GET', 'POST'],
      pathRegex: '/*',
    }
 ]
})

server.get('*/', (req , res)=>{
  res.status(404).send('Page Not Found 404');
})

server.start(port).then(server => {
  console.log(`Application is started on http://localhost:${port}`);
})