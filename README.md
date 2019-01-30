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
jQuery.js

#### Mobile Navigation
The **navbar-mobile.css & navbar-mobile.js** files provide a wide variety of styling for you to choose from.
```
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="uniformimages.css" rel="stylesheet" type="text/css"/>
  <script src="uniformimages.js" type="text/javascript"></script>
</head>

<body>
  <section>
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-3">
                  <a href="product1.html">
                      <img src="image1.jpg" class="unim"/>
                  </a>
              </div>
          </div>
      </div>
  </section>
</body>
</html>
```


#### No Image
In the absence of an image, uniformimages displays a placeholder containing an empty ash background with an icon in the middle.

### Contributions
Anyone and everyone is welcome to contribute. 
