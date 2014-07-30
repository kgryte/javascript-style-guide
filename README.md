JavaScript Style Guide
======================

## Table of Contents

1. 	[Arrays](#arrays)
1. 	[Strings](#strings)
1. 	[Whitespace](#whitespace)
1. 	[Variables](#variables)


## Arrays

* In general, use array literal syntax.

``` javascript
// Do:
var arr = [];

// Don't:
var arr = new Array();
```

* Do instantiate a new array when you know the array length.

``` javascript
// Do:
var arr = new Array( 100 );

for ( var i = 0; i < arr.length; i++ ) {
	arr[ i ] = Math.random();
}

// Don't:
var arr = [];

for ( var i = 0; i < 100; i++ ) {
	arr.push( Math.random() );
}
```

* Use `array.slice()` to copy an array ([JSPerf](http://jsperf.com/converting-arguments-to-an-array/7)).

``` javascript
// Do:
var copy = arr.slice();

// Don't:
var copy = [];

for ( var i = 0; i < arr.length; i++ ) {
	copy.push( arr[ i ] );
}
```

* To convert an array-like object to an array, use `array.slice()`.

``` javascript
// Do:
var args = Array.prototype.slice.call( arguments );

// Don't:
var args = [];

for ( var i = 0; i < arguments.length; i++ ) {
	args.push( arguments[ i ] );
}
```


## Strings

* Use single quotes for strings.

``` javascript
// Do:
var str = 'Hello';

// Don't:
var str = "Hello";
```



## Whitespace

* Use tab indentation. Tab indentation allows the developer to specify the space indentation equivalent in her editor. For example, in [Sublime Text](http://www.sublimetext.com/), you can specify in your user preferences

```
"tab_width": 4
```

Even if you must use spaces, __never__ mix tabs and spaces. This is formatting hell, as a simple find-and-replace is helpless in the face of such chaos.




## Variables

* Do __not__ use leading commas when declaring multiple variables.

``` javascript
// Do:
var foo = 3,
	bar = null,
	beep = false,
	boop = 'hello';

// Don't:
var foo = 3
  , bar = null
  , beep = false
  , boop = 'hello';
```

* Do declare assigned variables first.

``` javascript
// Do:
var foo = 3,
	bar = null,
	beep,
	boop;

// Don't:
var beep, boop,
	foo = 3,
	bar = null;
```

* Do use a single `var` statement to declare multiple variables.

``` javascript
// Do:
var foo = 3,
	bar = null,
	beep = false,
	boop = 'hello';

// Don't:
var foo = 3;
var bar = null;
var beep = false;
var boop = 'hello';
```

* Do declare variables at the top of their scope. Doing so makes explicit variable hoisting.

``` javascript
// Do:
function myFunction() {
	var foo = 3,
		bar = null;

	if ( foo ) {
		// Do something...
	}

	bar = foo * 5;
}

// Don't:
function myFunction() {
	var foo = 3;

	if ( foo ) {
		// Do something...
	}

	var bar = foo * 5;
}
```

