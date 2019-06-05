# kollex Coding Challenge – Shop Frontend

kollex digitalizes the traditional B2B wholesale by building a digital beverage ecosystem. With our platform gastronomy
customers can order everything in a one-stop-shop from their associated wholesalers.

It's a decentralized concept, which implies, that kollex integrates with many different wholesalers and gastronomy 
systems in all kind of ways and formats. The heart of the platform is the shop frontend, providing our gastronomy 
customers a state-of-the-art, easy to use e-commerce expirience for e.g. ordering beverages from their wholesalers.


## Your Task
Your task is building a small SPA **based on Vue.js** , with two views:
- a product listing page and
- a product details page

The focus of the task is on the JavaScript side of things. That means, you are free to choose a CSS framework or toolkit
that fulfills your needs to provide a **modern, elegant & aesthetically pleasing UI**. The design of the views 
will not be part of the evaluation, the look and feel will though.

The challenge is to create a modern, maintainable, testable and extendable application, which:
- follows a pragmatic, but clean approach by 
  - building a smart software architecture 
  - e.g. utilizing the right design patterns without over-engineering
- follows best practices 
- is testable for continuous integration and delivery


## The Data
In `/data/products.json`, you can find example product data, which should be rendered by your application. In addition
you can find the full schema definition of an exemplary API endpoint in `Swagger.yaml`.


## The Goal
The goal is a runnable application, which fetches product data from a JSON based API endpoint and renders the data
in a product listing page as an overview. Be creative and let your personal ecommerce experience flow into your design.
The listing page should show at least the products:
- name
- manufacturer
- price (in Euros)
- packaging
- listing photo

In addition, the applications renders a product details page, which shows all additional product information, like the 
long description, a bigger image, etc.


## What We expect
- clean, well structured code, that follows best practices
- tests. It's up to you which type of tests you want to write
- documentation of code, concepts or possible extensions in a way you think it fits best 


## Voluntary Tasks
- Sorting: let the user be able to sort the products on the listing page by name, price or packaging 
- Docker setup: a Dockerfile and a docker-compose file, to run the whole app via `docker-compose up`
- descriptions, why you chose a specific structure or pattern, framework, tool or library compared to other options 
- an description of how you decided what tests to write