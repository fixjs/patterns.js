#PatternsJS

It's not an application or a JavaScript library, it is here to showcase the JavaScript's best practices and coding style guides.

As JavaScript developers we have always had a whole bunch of repetitive tasks and patterns to deal with and I thought why not gathering all together and put them forward to the JavaScript community.

The initial point which made me set up this repo, was a simple known pattern:

##JavaScript Method Overloading in our public APIs?
I have faced with this very question several times and in practice, I have answered it in couple of different ways. Before walking through the possible patterns, let's start with this code snippet:

```
/*
* getData(url)
* getData(url, callback)
* getData(params) params:{ url: '', callback: function(){}, ... }
*/
function getData(){
  //...
}
```
[Read more about this pattern.](https://github.com/fixjs/patterns.js/blob/master/patterns/method-overloading.md)
