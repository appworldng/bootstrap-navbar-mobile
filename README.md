# bootstrap-navbar-mobile
A simple CSS &amp; Javascript library to help you style your default bootstrap navigation bar into a conventional mobile navigation that slides in and out.

## NPM
You can install directly by running npm directly from your command line interface like so: 
```
npm install bootstrap-navbar-mobile
```

### Usage
The "**bootstrap-navbar-mobile**" library comes in handy when you need to get a mobile menu navigation that slides in and out for a mobile user. It is practically the cheapest way of doing this.

### Requirements
jQuery.js, BootStrap

#### Mobile Navigation
The **navbar-mobile.css & navbar-mobile.js** once added to your project can be used in teh following way...
```
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="bootstrap-navbar-mobile.css" rel="stylesheet" type="text/css"/>
  <script src="bootstrap-navbar-mobile.js" type="text/javascript"></script>
</head>

<body>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" id="navbarMobileBtn">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Bootstrap Navbar Mobile</a>
            </div>
            <!--<div id="navbar" class="navbar-collapse collapse">-->
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="../anchor1/">Anchor 1</a></li>
                    <li><a href="../anchor2/">Anchor 2</a></li>
                    <li><a href="../anchor3/">Anchor 3</a></li>
                    <li><a href="../anchor4/">Anchor 4</a></li>
                    <li><a href="../anchor5/">Anchor 5</a></li>
                </ul>
            <!--</div>-->
        </div>
    </nav>
</body>
</html>
```

### Contributions
Anyone and everyone is welcome to contribute. 
