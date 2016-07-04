# angular-one-day-timeline
Simple one day timeline directive for AngularJS

#inspired by
https://github.com/eowo/angular-horizontal-timeline

# Install
You can download all necessary angular-one-day-timeline files manually or install it with bower:

```
$ bower install --save angular-horizontal-timeline
```

# Load
To use the directive, include the angular-horizontal-timeline's javascript and css files in your web page:

```
<script src="angular-one-day-timeline.js"></script>
<link rel="stylesheet" href="angular-one-day-timeline.css">
```

# Add module dependency
```
angular.module('app', ['angular-one-day-timeline']);
```

# Usage
```
<one-day-timeline 
  start="2015-01" 
  end="2015-05"
</one-day-timeline>
```
