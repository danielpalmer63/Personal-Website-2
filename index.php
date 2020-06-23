<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/index.css">
  <script src="https://kit.fontawesome.com/8e747eb614.js" crossorigin="anonymous"></script>

  <title>Daniel Palmer - Home</title>
</head>

<body>
  <section> <!--This entire section handles the nav bar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="https://i.imgur.com/eB5FYLA.png" height="3%" width="3%" style="padding-right: 8px">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="http://palmtreedev.com/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://palmtreedev.com/about/">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://palmtreedev.com/blog/">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./projects/">Projects</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Social Media
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="https://www.linkedin.com/in/daniel-palmer2020/"><i
                  class="fab fa-linkedin" style="color: #2867B2;"></i> LinkedIn</a>
              <a class="dropdown-item" href="https://github.com/danielpalmer63"><i class="fab fa-github" style="color: #211F1F;"></i> GitHub</a>
              <a class="dropdown-item" href="https://stackoverflow.com/users/13592077/daniel-palmer"><i class="fab fa-stack-overflow"></i> Stack Overflow</a>
            </div>
          </li>
        </ul>
        <a class="nav-link nav-item" style="color:#495057;" href="http://palmtreedev.com/downloads/resume.pdf" download>Download Resume <i
            class="fas fa-download"></i></a>
      </div>
    </nav>
  </section>

  <section> <!--This section handles the content in the main body-->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Daniel Palmer</h1>
        <p class="lead">Software Developer | Web Designer
        </p>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
    <div id="carouselExampleCaptions" class="carousel slide mb-4 shadow" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.imgur.com/hEwawTq.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>My Own Class of 2020</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://i.imgur.com/ik601vm.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Bella Partigan</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://i.imgur.com/X6i8CiS.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Akali Partigan</h5>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm">         
          <div class="card mb-4 shadow" style="width: 18rem; margin-left:auto; margin-right:auto;">
            <div style="text-align: center" id="spinner0">
              <div class="spinner-border text-primary mt-5" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div id="blogImage0"></div>
            <div class="card-body">
              <h5 class="card-title" id="blogTitle0"></h5>
              <p class="card-text"><small class="text-muted" id="blogDate0"></small></p>
              <p class="card-text" id="blogText0"></p>
              <a href="./blog" class="btn btn-outline-primary">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card mb-4 shadow" style="width: 18rem; margin-left:auto; margin-right:auto;">
            <div style="text-align: center" id="spinner1">
              <div class="spinner-border text-primary mt-5" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div id="blogImage1"></div>
            <div class="card-body">
              <h5 class="card-title" id="blogTitle1"></h5>
              <p class="card-text"><small class="text-muted" id="blogDate1"></small></p>
              <p class="card-text" id="blogText1"></p>
              <a href="./blog" class="btn btn-outline-primary">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card mb-4 shadow" style="width: 18rem; margin-left:auto; margin-right:auto;">
            <div style="text-align: center" id="spinner2">
              <div class="spinner-border text-primary mt-5" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div id="blogImage2"></div>
            <div class="card-body">
              <h5 class="card-title" id="blogTitle2"></h5>
              <p class="card-text"><small class="text-muted" id="blogDate2"></small></p>
              <p class="card-text" id="blogText2"></p>
              <a href="./blog" class="btn btn-outline-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>             

  <section>
    <div class="container">
      <a href="http://palmtreedev.com/projects/">
      <div class="card mb-4 shadow">
        <div class="row no-gutters">
          <div class="col-md-4" id="gitHubImage">
          </div>
          <div class="col-md-8">
            <div class="card-body text-dark">
              <h5 class="card-title">Projects</h5>
              <p class="card-text">From the classroom, my office, and my bedroom, these are the projects I am most proud of. All of these projects have been completed using familiar languages like Java, HTML, CSS, JavaScript, and ColdFusion. If you have any questions, please contact me. I would be delighted to talk about them!</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    </div>
  </section>

  <section>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <img class="img-thumbnail" src="https://i.imgur.com/Vjk0RHx.png" style="margin-bottom: 1rem;">
            <h5 style="margin-bottom: 1rem;">Daniel Palmer</h5>
            <p><a href="http://palmtreedev.com/about/">About</a><br><a href="http://palmtreedev.com/blog/">Blog</a><br><a href="http://palmtreedev.com/projects/">Projects</a></p>
            <a href="https://www.linkedin.com/in/daniel-palmer2020/"><i class="fab fa-linkedin" style="color: #2867B2;"></i></a>
            <a href="https://github.com/danielpalmer63"><i class="fab fa-github-square" style="color: #211F1F;"></i></a>
            <a href="https://stackoverflow.com/users/13592077/daniel-palmer"><i class="fab fa-stack-overflow" style="color: #211F1F;"></i></a>
          </div>
          <div class="col-md">
            <h4 style="margin-bottom: 1rem;">Recent News</h4>
            <p>As of May 9th, 2020, I am an official graduate of Penn State University! While I will no longer be required to attend anymore lectures, I will continue working and educating myself throughout my entire life.</p>
            <p>Hopefully, this website can continue to act as a platform to display my skills, projects, and hobbies. We Are!</p>
          </div>
          <div class="col-md">
            <h4 style="margin-bottom: 1rem;">Contact Me</h4>
            <form method="post" name="contact-form" action="http://palmtreedev.com/contactform.php">
              <div class="form-group" style="text-align: center;">
                <input  class="form-control" name="name" type="text" aria-describedby="emailHelp" style="margin-bottom: 1rem;" placeholder="Full Name" required>
                <input  class="form-control" name="email" type="text" aria-describedby="emailHelp" style="margin-bottom: 1rem;" placeholder="Email" required>
                <input  class="form-control" name="subject" type="text" aria-describedby="emailHelp" style="margin-bottom: 1rem;" placeholder="Subject" required>
                <textarea class="form-control" name="message" type="text" rows="6"  style="margin-bottom: 1rem;" placeholder="Message" required></textarea>
                <button type="submit" name="submit" class="btn btn-primary" >Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  

</body>
<footer>
  <script src="./js/index.js" defer></script>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>
</footer>

</html>