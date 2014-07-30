JavaScript Style Guide
======================

_An opinionated style guide for writing JavaScript._


## Table of Contents

1. 	[Intro](#intro)
1. 	[Arrays](#arrays)
1. 	[Strings](#strings)
1. 	[Whitespace](#whitespace)
1. 	[Semicolons](#semicolons)
1. 	[Variables](#variables)
1. 	[Equality](#equality)
1. 	[Blocks](#blocks)
1. 	[Comments](#comments)


## Intro

Always abide by the __Law of Code Style Consistency__, or, in other words, _when in Rome, do as the Romans do_. 

While the code base to which you want to contribute may be a horrific mess in terms of aesthetic appearance and style, style consistency takes precendent over personal preference and canon. The more consistent a code base is in terms of style, the more readers of the code can focus on what the code does rather than deciphering changes in style.

So, if your peers commit various _faux pas_ outlined below, as long as you are contributing to their code base, abide by their conventions.

A code base--module, repository, application, library, etc--should always appear to have a single author and not be a schizophrenic franken-mess. 

This stated, for those opportunities where are you the primary author, you should lead by example and write clean, readable, and testable code.

Hopefully, most of the conventions outlined below will help enable you to do so.


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

* Even if you must use spaces, __never__ mix tabs and spaces. This is formatting hell, as a simple find-and-replace is useless in the face of such chaos.

* Include 1 space before a leading brace.

``` javascript
// Do:
function query() {
	// Do something...
}

// Don't:
function query(){
	// Do something...
}
```

* Include 1 space before and after arguments for readability.

``` javascript
// Do:
function test( arg1, arg2, arg3 ) {
	// Do something...
}

// Don't:
function test(arg1,arg2,arg3) {
	// Do something...
}
```

* Include 1 space before and after array indices (when readability is maintained).

``` javascript
// Do:
var foo = bar[ 10 ];

// Don't:
var foo = bar[10];
```

* Use discretion when using spaces around array indices buried in braces.

``` javascript
var foo = myFunction( ( a === b ) ? bar[0] : bar[1] ) );
```

* Include 1 space before and after operators.

``` javascript
// Do:
var a = 1 + 1;

// Don't:
var a=1+1;
```

* Indent when using method chaining.

``` javascript
// Do:
var svg = d3.select( '.main' )
	.append( 'svg:svg' )
		.attr( 'class', 'canvas' )
		.attr( 'data-id', Date.now() )
		.attr( 'width', 100 )
		.attr( 'height', 100 );

// Don't:
var svg = d3.select( '.main' ).append( 'svg:svg' ).attr( 'class', 'canvas' ).attr( 'data-id', Date.now() ).attr( 'width', 100 ).attr( 'height', 100 );
```


## Semicolons

* Always use semicolons. Missing semicolons are a source of bugs.

``` javascript
// Do:
if ( foo === bar ) {
	return true;
}

// Don't:
if ( foo === bar ) {
	return true
}
```



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

* Do declare variables at the top of their scope. Doing so makes variable hoisting explicit.

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


## Equality

* Always prefer `===` and `!==` to `==` and `!=`. No enforcing type equality is a source of bugs.

``` javascript
// Do:
if ( foo === bar ) {
	// Do something...
}

// Don't:
if ( foo != bar ) {
	// Do something...
}
```


## Blocks

* Always use curly braces. Not using them is a common source of bugs.

``` javascript
// Do:
if ( foo === bar ) {
	return true;
}

// Don't:
if ( foo === bar ) return true;
```

* Always place the leading brace on the same line.

``` javascript
// Do:
if ( foo === bar ) {
	// Do something...
}

function query() {
	// Do something...
}

// Don't:
if ( foo === bar )
{
	// Do something...
}

function query()
{
	// Do something...
}
```


## Comments

* Use `/** Comments */` for multine line comments.

``` javascript
// Do:

/**
* FUNCTION: beep()
*	Beep to go boop.
*/
function beep() {
	// Do something...
}

// Don't:

// FUNCTION: beep()
//	Beep to go boop.
function beep() {
	// Do something...
}
```

* Do use [JSDoc](http://usejsdoc.org/#Getting_Started) and do so for every function. Be sure to include descriptions, parameters, and other information.

``` javascript
// Do:

/**
* FUNCTION: transform( str )
*	String transformer.
*
* @param {String} str - string to be transformed.
* @returns {String} transformed string
*/
function transform( str ) {
	return str + ' has been transformed.';
}

// Don't:
function transform( str ) {
	return str + ' has been transformed.';
}
```

* Do not include space indention in your multiline comments.

``` javascript
// Do:

/**
* This is a multiline comment.
* The comment continues and continues...
* ...until it no longer does.
*/

// Don't:

/**
 * This is a multiline comment.
 * The comment continues and continues...
 * ...until it no longer does.
 */
```

* Use `//` for single line comments. Place the comment above the comment subject, and place an empty line above the comment.

``` javascript
// Do:

// Set the default value to null.
var foo = bar || null;


// Don't:
var foo = bar || null; // set the default value to null.
```

* Use `// FIXME:` to annotate problems.

``` javascript
// FIXME: misses the case where value is 0. Want to check if value is not numeric.
if ( !value ) {
	return false;
}
```

* Use `// TODO:` to annotate tasks.

``` javascript
function Ctor() {

	// TODO: make `name` property value publicly accessible.
	this.name = 'foobar';

	return this;
}
```

* Do comment closing braces. Doing so helps lessen bracket hell when dealing with long code blocks.

``` javascript
function longFunction() {
	
	// [0] Do first thing.
	firstThing();

	// [1] Do second thing.
	secondThing();

	// [2] Do third thing.
	thirdThing();

	// ...

	// [N-1] Do Nth thing.
	nthThing(); 

	return true;
} // end FUNCTION longFunction()
```




## Additional Resources

* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/)

