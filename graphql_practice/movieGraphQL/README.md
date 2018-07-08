# Movie API with GraphQL
started at 180702

## Over-fetching & Under-fetching
- Over Fetching
  - Get All eventhough Need is Small
  - Suppose that only you needed is user.firstName but for that you would get the { user } with bunch of useless dummy data !
  - Ask Frontend and then ask DB only for the need !
- Under Fetching
  - Request lots of request account to accomplish one thing ( think about render a home view. Since you can't end with only one call from DB, you'll need to fetch /user/, /oauth/, /feeds/, etc )
  - Under-fetching is not having enough data with a call to an endpoint, leading you to call a second endpoint.

> #### **But With GraphQL**, you can describe and get what you need with only **one query**

: Send a one Query to GraphQL Backend
```
query {
  user {
    first
    last
  }
  oauth {
    token
    isExpired
  }
  feeds {
    comments
    likeNumber
  }
  ...
}
```

```js
// THIS IS JS SYNTAX
Res {
  user: [
    {
      first: Seung,
      last: Kwak
    }
  ],
  oauth: [
    {
      token: 123,
      isExpired: false
    }
  ],
  feeds: [
    {
      comments: 1,
      likeNumber: 20
    },
    {
      comments: 3,
      likeNumber: 2
    }
  ]
}
```

## Creating GraphQL Server with GraphQL Yoga
```js
// old fashioned way
const graphqlYoga = require('graphql-yoga')
```

For using a `import` method,
```bash
yarn add babel-node --dev
or
yarn global add babel-cli
```

And then, 
- edit the script like below
```json
"scripts": {
    "start": "nodemon --exec babel-node index.js"
  }
```

- make `.babelrc` for a configuration of babel
  ```json
  {
    "presets": ["env", "stage-3"]
  }
  ```
  - install dependencies 
    - `yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev`
- 

## node-fetch

