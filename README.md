# Test Code in a Real Browser

This repo illustrates how to test code in a real browser.

### Getting Started

The app is a basic [Next.js](https://nextjs.org/) project. You need a
recent version of node installed, probably > v16.

Then:

```
$ npm install
```

You can run the app locally with:

```
$ npm run dev
```

To run the tests headlessly:

```
$ npm run test
```

You can also run the tests with the browser visible:

```
$ npm run test:debug
```

Look at the [behaviors](./behaviors/) directory to find the tests.

### Overall Strategy

Our tests will run in node, but we will exercise the code under test in
a real browser. Here's how it will work:

When the test suite starts, we start a [Vite](https://vitejs.dev) development server,
and then start a browser using [Playwright](https://playwright.dev). We tell the
browser to load an HTML page served by Vite. This HTML will evaluate some javascript
on the page that gives us the ability to call a function that will render the
part of the app we want to test on the page. In our case, that is the `<Home>` component
defined in `/pages/index.tsx`. 

So, each test calls this function to render the `Home` component. Then, our test
uses Playwright to trigger any relevent user interactions (clicks, etc). And finally
our test uses Playwright to observe the state of the page so that we can evaluate
whether the effects of these user events occurred as we expect. 

