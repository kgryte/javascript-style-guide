JavaScript Style Guide
======================

## Table of Contents

	1. 	[Whitespace](#whitespace)
	1. 	[Variables](#variables)


## Whitespace

Use tab indentation. Tab indentation allows the developer to specify the space indentation equivalent in her editor. For example, in [Sublime Text](http://www.sublimetext.com/), specify in your user preferences

```
"tab_width": 4
```

Even if must use spaces, __never__ mix tabs and spaces. This is formatting hell, as a simple find-and-replace is helpless in the face of such chaos.




## Variables

Do __not__ use leading commas when declaring multiple variables.

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

Do declare assigned variables first.

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

Do use a single `var` statement to declare multiple variables.

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

Do declare variables at the top of their scope. Doing so makes explicit variable hoisting.

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

