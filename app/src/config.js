exports.CONFIG = {
  redis: {
    port: 6379, // Redis port
    host: 'redis', // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    db: 0
  },
  firebase: {
    credential: {
      type: 'service_account',
      project_id: 'wtako-minecraft-coinauth',
      private_key_id: '9360c6dd414a25cf7ddac495fdc1a743b07ede8a',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+OjGcggzA5VYg\nxAnfeXKY9swt9DczPuNvF76EnDQMD1PUeSCHnnieUi5Y6w/3aTcUsr7HnIR7RTIl\n1fRzFCCi5PF0kE5yFzYKYMmZ/oPjfdbXS3K1OIAkOZgTW53iM5lOSuYOr3aO57uv\n7N0I/iZQkUIUvzrgtv5ZDD7znLwPAhNqWMk4MKxgpFEFylNJT9npxxeGVALniYhc\nb7jechwLBUEmurHehn5bMJvJPbEkAPf0EJN3rVb88W+86n5gKm0jsny4rlem9nwc\n0tLMFig7relgAWLi3i5FJG+nSWJB0lfjtHTmlh6JClR3QwMU+JmNKmYdc61WewCE\nzy9y42stAgMBAAECggEAJuOSvOJBZTX9U5mAQzV63hamS0a/+jQDHvUFt+qPIWAI\nzUkuA0u8cPFwFDGKBBR4dDzOj9RJqUHOLLn+zX/x5BtV2XSe9OgV3i1HSbokkF9r\ninwcKTwxxjYYBu0V6+aMktrxCVOJs1Fgp2iPD4WVo6bukXs+uC3w9ZdxTzBdqdty\nTOLhJmTrFjqDKZieoQl+p2x8GDdEP/U/prVqoiYZ0zkQU1Q9ABnXF45IIAM1c99/\ngwnaMDA3FFy0oXrVh5COuvtCwG3LOTlGPLEvytPmIk9YJ8W18s9CWnKlP7xFbIy6\njDFTNFhqEAkcrOQNeq6tff7LOJ6DA+wA7n6SZ5pNKQKBgQDt4pcvb1ItObjdmK5s\nuxt1la7CVjdtg532c+qTl8hJHAKv3o0nkM9FPZXZhQnPlyhT2jAZnwZE9B+Zl7Ab\ngZSSEBtZ1JeCWJ1TTPPiQA0LoQpfm42iwpKKd4Cpm4GC6lGCADRGi7QsL0nrifO6\nDmNAqDsG781szTObp+JdQBbrWwKBgQDMtovyV4XszmJPY0D26vzLpLTK876knVQE\noScmbkcnejWEKrQgQFzcYVU22o1Gfh2NxgIBRzz2WyNeHBEYV+CFhdBs157sGcsp\n/05nDOa9BnPMlV/OymdwGrzi7dRiepTWycjgetZcHsORbznDackf8QsrN7R5lRsg\nB2QcLb2yFwKBgCqs5Kxozxg367ctRdVRt7pfcOuCJg1qeDMXVnTF3PNop/6+8Rmw\n+84TH0fXewwXtO9eDBT8l1ZVaTnXoYs9staFNzLlVYzXstmXy4TCMtTsPf0q3bze\nJQXcLGPA9vnyaU7mFHq3Y0ot7ZfotqWhISMfSv+Sk4q6QVDiTFSoQ7RTAoGAVPwH\nlyDcmVWInJqA0sD1F3mWEJcl8uLZiV55iUvIwEvMwcSUqLrvkhHaNX5/nd8nV773\nAB7Z4RAu25fdRPTeYbAOudC9yhhfLl0t6DwD4j82fZ0ZfBis3m5LMg432HY5Kf31\nJbP5H58p40uAeG6HL3p6/4MNqlfLPf2zgrs+gBsCgYB6Ho6ChBzEpXLp/rjXEeeN\nLtVBGorQ19AylenVYXZE4aoGCL10zuEh2X3wgdHioQ0lIOU6Y8qLD5vCvm8IOplV\nXWvxTgQ8ViqVePBrG/hAtZFQCzfYXOVc7hkDgGaKYUbbOyCje1QFDYBpcpTFQY8S\nXIlcr+0RHy4Wfyx3NX/afg==\n-----END PRIVATE KEY-----\n',
      client_email: 'firebase-adminsdk-uppae@wtako-minecraft-coinauth.iam.gserviceaccount.com',
      client_id: '116666336706817584254',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://accounts.google.com/o/oauth2/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uppae%40wtako-minecraft-coinauth.iam.gserviceaccount.com'
    },
    databaseURL: 'https://wtako-minecraft-coinauth.firebaseio.com'
  },
  entry_path: '' // Change views/templates/base.pug, public/assets/app/js/config.js as well
};
