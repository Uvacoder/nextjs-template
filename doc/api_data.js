define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Status check",
    "name": "CheckStatus",
    "group": "General",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of api server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status: 'ok'\n}",
          "type": "type"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/index.js",
    "groupTitle": "General"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Status check",
    "name": "CheckStatus",
    "group": "General",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of api server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status: 'ok'\n}",
          "type": "type"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "pages/api/index.ts",
    "groupTitle": "General"
  }
] });
