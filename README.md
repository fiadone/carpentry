# @fiad/carpentry

A nostalgic but modern front-end boilerplate


## Overview
*Carpentry* is essentially a custom vanilla template for [Vite](https://vitejs.dev/) with an enhanced scaffolding and a ready-made integration for [Twig](https://github.com/twigjs/twig.js/).

It also comes along with built-in additional utilities and basic configurations aimed to speed up your workflow.


## Get started
```sh
npx degit fiadone/carpentry my-project

cd my-project

npm install
```

#### Development
```sh
npm run dev
```

#### Production
```sh
npm run build
```

Take a look to [Vite documentation](https://vitejs.dev/) to learn more.


## Main features

### Twig template engine
The usage of template engines is very common in backend frameworks (like *Laravel* or *Symfony*), but is extremely useful in static sites development too. This boilerplate offers a ready-made integration of *Twig*, so you can prevent markup redundancy by splitting and reusing your templates and partials.

Take a look to [vite-plugin-twig](https://github.com/fiadone/vite-plugin-twig) to learn more.

### Built-in SCSS and vanilla JS utilities
Since there is no front-end framework involved here, this boilerplate comes with some "old but gold" *SCSS* and *vanilla JS* utilities out of the box.

Take a look to [@fiad/stitchery](https://github.com/fiadone/stitchery) and [@fiad/toolbox](https://github.com/fiadone/toolbox) to learn more.

### Pre-structured router with page lazy loading and transitions
Take a look to [barba.js](https://barba.js.org/) to learn more.