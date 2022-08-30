<template>
    <!-- ======= Header ======= -->
	<header id="header" class="fixed-top header-scrolled"> <!-- header-scrolled -->
		<div class="container d-flex align-items-center justify-content-between">
			<h1 class="logo"><a href="#"><b>E-COOP<span>.</span></b></a></h1>
			<nav id="navbar" class="navbar">
				<ul>
					<li><router-link to="/" class="nav-link scrollto">Homepage</router-link></li>
					<li><router-link to="/service" class="nav-link scrollto">Layanan</router-link></li>
					<li><router-link to="/simpan" class="nav-link scrollto">Simpam</router-link></li>
					<li><router-link to="/pinjam" class="nav-link scrollto">Pinjam</router-link></li>
					<li><router-link to="/profile" class="nav-link scrollto">Profile</router-link></li>
					<li><router-link to="/signup" class="nav-link scrollto">Sign Up</router-link></li>
				</ul>
				<i class="bi bi-list mobile-nav-toggle"></i>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
/*===== Header =====*/
#header {
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
}

#header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

#header .logo a {
  color: #fff;
  font-size: 40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 3);
}

#header .logo img {
  max-height: 40px;
}

#header.header-scrolled,
#header.header-inner-pages {
  background: rgba(27, 26, 23, 0.7);
  padding: 12px 0;
}

/*===== Desktop Navigation =====*/
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar>ul>li {
  white-space: nowrap;
  padding: 10px 0 10px 24px;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  color: #fff;
  font-size: 15px;
  padding: 0 4px;
  white-space: nowrap;
  transition: 0.3s;
  letter-spacing: 0.4px;
  position: relative;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar>ul>li>a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -6px;
  left: 0;
  background-color: #FFB037;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.navbar a:hover:before,
.navbar li:hover>a:before,
.navbar .active:before {
  visibility: visible;
  transform: scaleX(1);
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
  color: #fff;
}

/*===== Mobile Navigation =====*/
.mobile-nav-toggle {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

@media (max-width: 768px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 176, 55, 0.7);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile>ul>li {
  padding: 0;
}

.navbar-mobile a:hover:before,
.navbar-mobile li:hover>a:before,
.navbar-mobile .active:before {
  visibility: hidden;
}

.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #000;
}

.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover>a {
  color: #FFB037;
}

.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
  margin: 15px;
}
</style>