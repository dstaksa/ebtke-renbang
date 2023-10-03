<template>
  <div class="row justify-content-center">
    <div class="col-sm-6 col-md-4 col-lg-3 mb-6">
      <router-link to="/usulan/form/1">
        <div class="card bg-secondary min-h-250px">
          <div class="card-body text-center">
            <img
              src="/media/jenis-usulan/plts-terpadu.png"
              class="img-card rounded img-fluid"
              alt=""
            />
            <h1 class="fs-3 mt-5">PLTS Terpadu</h1>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-6">
      <router-link to="/usulan/form/1">
        <div class="card bg-secondary min-h-250px">
          <div class="card-body text-center">
            <img
              src="/media/jenis-usulan/plts-atap.png"
              class="img-card rounded img-fluid"
              alt=""
            />
            <h1 class="fs-3 mt-5">
              PLTS ATAP (Pembangkit Listrik Tenaga Surya Atap)
            </h1>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-6">
      <router-link to="/usulan/form/1">
        <div class="card bg-secondary min-h-250px">
          <div class="card-body text-center">
            <img
              src="/media/jenis-usulan/plts.png"
              class="img-card rounded img-fluid"
              alt=""
            />
            <h1 class="fs-3 mt-5">PLTS (Pembangkit Listrik Tenaga Surya)</h1>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-6">
      <router-link to="/usulan/form/1">
        <div class="card bg-secondary min-h-250px">
          <div class="card-body text-center">
            <img
              src="/media/jenis-usulan/pltmh.png"
              class="img-card rounded img-fluid"
              alt=""
            />
            <h1 class="fs-3 mt-5">PLTMH (Pembangkit Listrik Mikro Hidro)</h1>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-6">
      <router-link to="/usulan/form/1">
        <div class="card bg-secondary min-h-250px">
          <div class="card-body text-center">
            <img
              src="/media/jenis-usulan/pjuts.png"
              class="img-card rounded img-fluid"
              alt=""
            />
            <h1 class="fs-3 mt-5">
              PJUTS (Penerangan Jalan Umum Tenaga Surya)
            </h1>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-6">
      <router-link to="/usulan/form/1">
        <div class="card bg-secondary min-h-250px">
          <div class="card-body text-center">
            <img
              src="/media/jenis-usulan/pletb.png"
              class="img-card rounded img-fluid"
              alt=""
            />
            <h1 class="fs-3 mt-5">Revitalisasi PLETB</h1>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-6">
      <router-link to="/usulan/form/1">
        <div class="card bg-secondary min-h-250px">
          <div class="card-body text-center">
            <img
              src="/media/jenis-usulan/biogas.png"
              class="img-card rounded img-fluid"
              alt=""
            />
            <h1 class="fs-3 mt-5">Biogas Komunal</h1>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTHeaderMenu from "@/layouts/main-layout/header/menu/Menu.vue";

export default defineComponent({
  name: "pilih-usulan",
  components: {},
  setup() {},
});
</script>

<style scoped>
.img-card {
  min-height: 120px;
  border-radius: 30px;
}
</style>
