<template>
    <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
        <h1 class="text-light"><a href="/"><span>DOODLE</span></a></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="active " href="/">Home</a></li>
          <li><a href="about">O nama</a></li>
          <li><a href="services">Usluge</a></li>
          <li><a href="pricing">Cjenik</a></li>
          <li><a href="contact">Kontaktirajte nas</a></li>
          <li><a href="login">Login</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
    </div>
  </header><!-- End Header -->
</template>

<script>
export default {
    name: "AppHeader"
}
</script>

<style scoped>

</style>