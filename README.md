# Carpentry

A nostalgic but modern front-end boilerplate


## Overview
*Carpentry* is essentially a custom vanilla template for [Vite](https://vitejs.dev/) with an enhanced scaffolding and a ready-made integration of [Twig](https://github.com/twigjs/twig.js/) and [windicss](https://github.com/windicss/windicss).

It also comes along with built-in additional utilities and basic configurations aimed to speed up your workflow.


## Get started
```sh
npm init @fiad/carpentry my-project

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

Take a look to [vite-plugin-twig](https://github.com/fiadone/vite-plugin-twig/) to learn more.

#### Looking for backend integration?
Using Twig is not only a comfortable and efficient way to handle markup during static sites development, but it could be a project requirement too (e.g. when dealing with a cms or when you're asked to provide both bundle and views to be integrated in a backend).
In those cases, the *twig* files from the source tree can be ejected (and normalized) during the build process and made available under the *dist/views* directory.
To take advantage of this feature, use the *npm run build:views* command.

> ⚠️ Attention: this feature is experimental and comes with some relevant limitations. For example, by using the built-in extensions from *@fiad/twig-addons* you'll be led to have parsing errors since they won't be available in the Twig environment of the target backend. Also, the ejection doesn't provide any automatic assets injection, so you'll need to implement it by yourself (by the way the build process will generate a manifest.json for that purpose).

### Built-in SCSS and vanilla JS utilities
Since there is no front-end framework involved here, this boilerplate comes with some "old but gold" *SCSS* and *vanilla JS* utilities out of the box.

Take a look to [@fiad/stitchery](https://github.com/fiadone/stitchery/) and [@fiad/toolbox](https://github.com/fiadone/toolbox/) to learn more.

### Pre-configured WindiCSS
Take a look to [windicss](https://github.com/windicss/windicss) to learn more.

### Pre-configured *CSS* purging for production
Take a look to [postcss-purgecss](https://github.com/FullHuman/purgecss/tree/main/packages/postcss-purgecss/) to learn more.
