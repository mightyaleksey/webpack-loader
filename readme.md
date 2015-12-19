webpack-loader
==============

Small example to show the way to use [memory-fs](https://github.com/webpack/memory-fs) to test the webpack loader.

Also you may find few helpers in the [fixture/helper.js](fixture/helper.js) file and it also can show additional information with `DEBUG=loader` environment variable provided (or use `npm run test:debug` for short).

**Tips**:
- You should provide absolute paths to the *memory-fs* instance.
- If you want to see the cached content in the *memory-fs* instance, you should look at the `fs.data` property.
