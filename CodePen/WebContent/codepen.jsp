<!DOCTYPE html>
<html>
    <head>
        <title>CodePen Responsive Mock</title>
        <link type="text/css" rel="stylesheet" href="codepen.css" />
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />   
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.js"></script>
		<script type="text/javascript" src="polyfills/matchMedia.js"></script>
        <script type="text/javascript" src="polyfills/matchMedia.addListener.js"></script>		      
        <script type="text/javascript" src="codepen.js"></script>
    </head>

    <body>
		<div class=top><p></p></div>
		<div class="container">
		  <header>
		  	<h1>CodePen Responsive Mock</h1>
		  	<nav><button class="nav-sidebar">Sidebar</button></nav>
		    <div style="clear: both"></div>
		  </header> 
		
		  <main> 
		    <section class="left">
				<p></p>
		        <button class="nav-back">Back</button>
		    </section>
		    <section class="middle">
		      <p></p>
		      <button class="nav-next">Next</button>
		    </section> 
		  </main>  
		
		  <aside class="sidebar">
		    <div class="right"><p></p></div>
		  </aside>
		</div>
    </body>
</html>