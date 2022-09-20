 	* {
			padding: 0;
			margin: 0;
			font-family: sans-serif;
		}

		body {
			background: yellowreen;
		}

		.container {
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
		}

		.container span {
			display: block;
		}

		.text1 {
			color: white;
			font-size: 25px;
			font-weight: 700;
			letter-spacing: 10px;
			margin-bottom: 30px;
			background: yellowgreen;
			position: relative;
			animation: text 5s 1;
		}

		.text2 {
			font-size: 20px;
			color: darkgreen;
			font-family: Georgia, serif;
		}

		@keyframes text {
			1% {
				color: black;
				margin-bottom: -40px;
			}

			30% {
				letter-spacing: 27px;
				margin-bottom: -40px;
			}

			85% {
				letter-spacing: 8px;
				margin-bottom: -40px;
			}
		}
    
.btn {
  background-color: #00cc66;
  border:none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 15px;
  border-radius: 10px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #00cc6;
 
border:none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 15px;
  border-radius: 10px;
}

HTML CSS Result Skip Results Iframe
/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

/* Global */
html{
  min-height: 100%;
  overflow: hidden;
}
bodly{
  height: calc(100vh - 8em);
  padding: 4em;
  color: rgba(255,255,255,.75);
  font-family: 'Anonymous Pro', monospace;  
  background-color: rgb(25,25,25);  
}
.lie-1{
    position: relative;
    top: 50%;  
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

/* Animation */
.anim-typewriter{
  animation: typewriter 2s steps(50) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}


<!-- A1 -->
body{
  background: navajowhite;
  background-size: cover;
  font-family: 'Trebuchet MS', sans-serif; 
}
.containr{
  display: inline-block;
}
.typed-out{
  overflow: hidden;
  border-right: .1em solid-fix green ;
  white-space: nowrap;
  animation: 
    typing 15s forwards;
  font-size: 80%;
  width: 0;
}
.typed-out1{
  overflow: hidden;
  border-right: .1em solid-fix green ;
  white-space: nowrap;
  animation: 
    typing 29s forwards;
  font-size: 80%;
  width: 0;
}
.typed-out2{
  overflow: hidden;
  border-right: .15em solid-fix green ;
  white-space: nowrap;
  animation: 
    typing 50s forwards;
  font-size: 80%;
  width: 0;
  
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
