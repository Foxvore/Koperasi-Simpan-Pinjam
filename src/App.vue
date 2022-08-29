<template>
  <div id="app">
		<router-view />
    <a href="#" class="back-to-top active d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> 
	</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/*===== Tag =====*/
body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Poppins", sans-serif;
}

span {
  color: #FFB037;
}

#main h2 {
  text-align: center;
  color: black;
  text-shadow: 2px 2px 2px #9A9A9A;
}

/*===== Custom Scrollbar =====*/
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #FFB037;
  border-radius: 10px;
}

/*===== Back to top button =====*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #FFB037;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #000000;
  line-height: 0;
}

.back-to-top:hover {
  background: #FFB037;
  color: #000000;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
</style>