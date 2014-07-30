TODO
====

1. 	Callbacks; prefer closures and function factories.
2. 	Top-of-file description, todo, fixme, dependencies, notes, etc.
3. 	Applications
	* 	readmes
	* 	tests
	* 	todos
	* 	style-guide
4. 	Split object properties over multiple lines:

``` javascript
foo({
	'a': true,
	'b': false
});
```

5. 	Early returns
6. 	Do one thing; do one thing well
7. 	Bind this (instead of self)
8. 	For public libraries, do type/sanity check input arguments. Yes, type checking has computational cost (possibly a few extra conditional comparisions), but not providing such checking can be a considerable drain on your user's time. Subtle bugs can arise from using unexpected types. Be explicit in what you expect and write tests confirming your expectations.
9. 	Use semver (https://github.com/mojombo/semver/blob/master/semver.md)

1. 	[Intro](#intro)
1. 	[Whitespace](#whitespace)
1. 	[Semicolons](#semicolons)
1. 	[Variables](#variables)
1. 	[Strings](#strings)
1. 	[Arrays](#arrays)
1. 	[Equality](#equality)
1. 	[Blocks](#blocks)
1. 	[Comments](#comments)
1. 	[Naming](#naming)
1. 	[Setters and Getters](#setters-and-getters)
1. 	[Method Chaining](#method-chaining)
1. 	[Native JavaScript](#native-javascript)
1. 	[Versioning](#versioning)