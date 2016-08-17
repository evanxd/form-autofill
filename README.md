# Form Autofill
A Firefox Add-on fills form automatically.

## Build
To build the Add-ons, we need to install [gulp](http://gulpjs.com) and dependent modules first.
```
npm -g install gulp
npm install
```

Then run
```
gulp build
```
to build form-autofill, and it'll generate `form-autofill.xpi` file in the `~/path/to/form-autofill/build` directory.
