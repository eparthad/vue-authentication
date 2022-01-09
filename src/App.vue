<template>
<div>
    <div class="wrapper">

    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
    </div> -->

    <!-- Navbar -->
    <nav-bar v-if="auth"></nav-bar>
    <!-- /.navbar -->
    <side-bar v-if="auth"></side-bar>
    <!-- Main Sidebar Container -->
    

    <!-- Content Wrapper. Contains page content -->
    <router-view></router-view>
    <!-- /.content-wrapper -->

    </div>
    <!-- ./wrapper -->
</div>
  <!-- <router-view/> -->
</template>


<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
export default {
    components : { NavBar, SideBar },

    data() {
        return {
            auth: true,
        }
    }
}
</script>

