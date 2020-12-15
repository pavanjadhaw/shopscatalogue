## TechStack

#### scraper

- node
- typescript
- axios
- cheerio
- scrapingbee

#### server

- hasura (with postgres) hosted on heroku hobby dyno

#### client

- nextjs
- apollo (with ssr)
- graphql-codegen
- chakra-ui (ui library)
- react-icons (for icons)
- framer-motion (for transition and animations)

## Running Locally

<br/>

#### webapp  

<br/>

```sh
git clone git@github.com:pavanjadhaw/shopscatalogue.git

cd webapp

yarn
yarn dev
```

<br/>

#### scraper  

<br/>

```sh
cd scraper 

yarn

yarn build
yarn start
```

<br/>
<br/>

#### webscraper demo

<br/>

<p align="center">
  <img src="./scraper_demo.svg">
</p>

<br/>
<br/>

## Todo

- auth
- query caching
- client side testing
- dockerizing webapp
- page transition animation
- site preview in detailed view of website
