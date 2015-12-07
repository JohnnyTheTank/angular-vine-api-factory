**angular-vine-api-factory** is an angularjs module with a vine api factory.

Author: Jonathan Hornung ([JohnnyTheTank](https://github.com/JohnnyTheTank))

# NOTE
This plugin use an unofficial Vine REST API. Maybe you will get problems with CORS

## Usage

1. Install via [bower](http://bower.io/) :
    1. `bower install --save angular-vine-api-factory`
2. Add `jtt_vine` to your application's module dependencies.
3. Include dependencies in your HTML.
    1. When using bower:

    ```html
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-vine-api-factory/src/angular-vine-api-factory.js"></script>
    ```

4. Use the factory `vineFactory`.

### factory methods

#### getVideos

```js
vineFactory.getVideosFromTag({
    tag:"<TAG_NAME>",
}).success(function(_data){
    //on success
}).error(function (_data) {
    //on error
});
```

## Vine JSON API
* docs: https://github.com/starlock/vino/wiki/API-Reference


## License

MIT