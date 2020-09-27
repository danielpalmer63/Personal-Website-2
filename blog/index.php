<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/index.css">
  <script src="https://kit.fontawesome.com/8e747eb614.js" crossorigin="anonymous"></script>

  <title>Blog</title>
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
          <li class="nav-item">
            <a class="nav-link" href="http://palmtreedev.com/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://palmtreedev.com/about/">About</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="http://palmtreedev.com/blog/">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://palmtreedev.com/projects/">Projects</a>
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

  <section>
    <div class="container">
      <div class="border-bottom">
        <div class="lead mt-5">Recent Posts</div>
      </div>
      <div><a id="blogList"></a></div>
      <div class="spinner-border text-primary mt-5 mb-5" role="status" id="spinner">
        <span class="sr-only">Loading...</span>
      </div>
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
            <p>Well, it looks like I'm officially a blogger. My blog page is up and running! I may not be a great writer, but hopefully you'll enjoy this tiny insight you have into my life!</p>
            <p>Thank's for being so patient, and you can look forward to more interesting features to come!</p>
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
</body>

</html>