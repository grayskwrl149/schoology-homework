const openApiDocumentation = {
  openapi: "3.0.1",
  info: {
    title: "Starter API",
    description: "Starter package for an API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "local",
    },
  ],
  paths: {
    "/": {
      get: {
        summary: "returns package info",
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                    },
                    version: {
                      type: "string",
                    },
                  },
                  example: {
                    name: "schoology-homework",
                    version: "1.0.0",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default openApiDocumentation
