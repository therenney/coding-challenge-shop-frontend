# Development Documentation

After bootstrapping with [Vue-CLI](https://cli.vuejs.org) i removed unnecessary files and organized assets, components, views, router and store into separate folders.

As HTTP client used [Axios](https://github.com/axios/axios) instead of [superagent](https://github.com/visionmedia/superagent) or [Fetch](https://github.com/github/fetch), mainly in favor of better error handling, security and automatic JSON transformation. [UIkit](https://github.com/uikit/uikit) i choose as front-end CSS framework for it's simplistic but visual very appealing approach. Vuetify would have been another good option but for this task UIkit seemed to be the better option for me. I also added a dedicated kollex theme that enables us to fully customize UIkits components to a unique look and feel. I did not optimize for speed or a small footprint, by for example, removing unused styles from UIkit.

To provide a near production scenario i integrated [json-server](https://github.com/typicode/json-server) to have a full fake REST API which uses the `product.json` file provided for the test. This way we can develop locally without having a fully implemented and working API service.

The App consists of basically two pages and two components, ProductList and ProductDetail. I did not create more granular components for this small Demo. Some elements could have been created as separate functional and simple components that don't have a state (NavBar or Back button on Detail page).

Sorting the ProductList is done within the component, this could also be done in the Store mutating the state based on the sort parameters, similar to the methods used in the component. That only works for smaller datasets. Ideally though the API should handle this when dealing with thousands of records. The json-server i use does provide also sort and filtering, i chose though to not leverage this and instead to the sorting 'manually'.

All views are responsive using UIkits styles. I decided at some point to create a separate route and view for the detail page instead of only a modal that triggers on clicking the 'more' CTA on the product list page. That makes it easier also to directly share the URL and deeplink into a specific product.

The Vuex Store is namespaced by choice, this ensure for easier maintainability in case other components, other then products, are to be added.

## Available Scripts

To start developing run npm install in the projects root.

In the project directory, you can run the following scripts:

### `npm run serve`

Runs the app in the development mode and starts the json-server via `npm run serve-api` that serves the API on port 3000.<br> Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in the console.

### `npm run serve-api`

Runs the json-server that provides a fully mocked version of the product API. You can access the API via [http://localhost:3000](http://localhost:3000), [ProductList](http://localhost:3000/products), [ProductDetail](http://localhost:3000/products/ABC1234567800)

### `npm run test:unit`

Launches the test runner and executes all unit tests under tests/unit.

### `docker-compose up`

The App can be also started using Docker via `docker-compose up` to provide a quick way of running the project.

## Tests

I used Jest to do basic testing for the components. There are dedicated tests for the ProductList and ProductDetail page. Ideally i would test also the store and functionality related to changing items and updates in the DOM, due to time constraints i did not manage to do so.

## Commit Guidelines

Usually i advocate following specified commit guidelines as those that can be found here: [https://www.conventionalcommits.org](https://www.conventionalcommits.org)

---

# kollex Coding Challenge – Shop Frontend

kollex digitalizes the traditional B2B wholesale by building a digital beverage ecosystem. With our platform gastronomy customers can order everything in a one-stop-shop from their associated wholesalers.

It's a decentralized concept, which implies, that kollex integrates with many different wholesalers and gastronomy systems in all kind of ways and formats. The heart of the platform is the shop frontend, providing our gastronomy customers a state-of-the-art, easy to use e-commerce expirience for e.g. ordering beverages from their wholesalers.

## Your Task

Your task is building a small SPA **based on Vue.js** , with two views:

-   a product listing page and
-   a product details page

The focus of the task is on the JavaScript side of things. That means, you are free to choose a CSS framework or toolkit that fulfills your needs to provide a **modern, elegant & aesthetically pleasing UI**. The design of the views will not be part of the evaluation, the look and feel will though.

The challenge is to create a modern, maintainable, testable and extendable application, which:

-   follows a pragmatic, but clean approach by
    -   building a smart software architecture
    -   e.g. utilizing the right design patterns without over-engineering
-   follows best practices
-   is testable for continuous integration and delivery

## The Data

In `/data/products.json`, you can find example product data, which should be rendered by your application. In addition you can find the full schema definition of an exemplary API endpoint in `Swagger.yaml`.

## The Goal

The goal is a runnable application, which fetches product data from a JSON based API endpoint and renders the data in a product listing page as an overview. Be creative and let your personal ecommerce experience flow into your design. The listing page should show at least the products:

-   name
-   manufacturer
-   price (in Euros)
-   packaging
-   listing photo

In addition, the applications renders a product details page, which shows all additional product information, like the long description, a bigger image, etc.

## What We expect

-   clean, well structured code, that follows best practices
-   tests. It's up to you which type of tests you want to write
-   documentation of code, concepts or possible extensions in a way you think it fits best

## Voluntary Tasks

-   Sorting: let the user be able to sort the products on the listing page by name, price or packaging
-   Docker setup: a Dockerfile and a docker-compose file, to run the whole app via `docker-compose up`
-   descriptions, why you chose a specific structure or pattern, framework, tool or library compared to other options
-   an description of how you decided what tests to write
