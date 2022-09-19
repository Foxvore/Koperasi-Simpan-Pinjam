<template>
    <Sidebar />

    <main class="main" id="main">
        <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section dashboard">

        </section>
    </main>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
    name: "Dashboard",
    components : {
        Sidebar
    },
};
</script>

<style scoped>
/*===== Sidebar =====*/
@media (min-width: 1200px) {
    #main,
    #footer {
        margin-left: 300px;
    }
}

/*===== Page Title =====*/
.pagetitle {
    margin-bottom: 10px;
}

.pagetitle h1 {
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 600;
    color: #fece67;
}

/*===== Main =====*/
#main {
  margin-top: 10px;
  padding: 20px 30px;
  transition: all 0.3s;
}

@media (max-width: 1199px) {
  #main {
    padding: 20px;
  }
}

section {
    padding: 20px 0;
}
</style>