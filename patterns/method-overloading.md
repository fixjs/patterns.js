#JavaScript Method Overloading

This is somehow the initial motivation to set up the repo, let's see the different ways of providing Method Overloading in JavaScript and try to pick the best one.

I have faced with this very issue several times and in practice, I have answered it in couple of different ways. Before walking through the possible patterns, let's start with this code snippet:

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

With respect to the validation process and preventing other developers from calling the function incorrectly, the easiest way is diregarding the issue and relying on the API's documentaion or helpful inline comments. This way, since we don't do anything, we would even have speed improvements.

**BUT** regardless of checking for valid arguments, in the code snippet above, we also need a kind of type checking process to provide different signatures for the same function, which **can not be disregarded**.
