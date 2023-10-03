<template>
  <!--begin::Authentication Layout -->
  <div
    class="d-flex flex-column flex-lg-row flex-column-fluid"
    style="
      background-image: url('media/login/login-1.svg');
      background-size: 85vw;
      background-repeat: no-repeat;
      background-position: right top;
    "
  >
    <!--begin::Body-->
    <div
      class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1"
    >
      <!--begin::Form-->
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <!--begin::Wrapper-->
        <div class="w-lg-450px p-10">
          <router-view></router-view>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Form-->
    </div>
    <!--end::Body-->

    <!--begin::Aside-->
    <div
      class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
      :style="`background-image: url('${getAssetPath(
        '/media/misc/auth-bg.png'
      )}')`"
    >
      <!--begin::Content-->
      <div
        class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100"
      >
        <!--begin::Logo-->
        <!-- <router-link to="/" class="mb-0 mb-lg-12">
          <img
            alt="Logo"
            :src="getAssetPath('media/login/login-1.svg')"
            class="h-60px h-lg-75px"
          />
        </router-link> -->
        <!--end::Logo-->

        <!--begin::Image-->
        <img
          class="d-none d-lg-block mx-auto img-fluid"
          :src="getAssetPath('media/login/login-2.svg')"
          alt=""
        />
        <!--end::Image-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Aside-->
  </div>
  <footer class="bg-dark text-white" id="footer">
    <div class="container py-14">
      <div class="row">
        <div class="col-md-6">
          <div class="d-md-flex text-center text-md-start align-items-center">
            <div class="mt-4 mt-md-0 lh-xl">
              <span class="fw-bold text-primary fs-5"
                >Hak Cipta © 2021 Kementerian Energi dan Sumber Daya Mineral
                <br
              /></span>
              <span class="fw-bold fs-5"
                >Kementerian Energi dan Sumber Daya Mineral <br
              /></span>
              <span class="fw-bold fs-5"
                >Jl. Medan Merdeka Selatan No. 18 <br
              /></span>
              <span class="fw-bold fs-5">Jakarta Pusat 10110 <br /></span>
              <span class="fw-bold fs-5"
                >Telp. 021 3804242 Fax. 021 3507210 <br
              /></span>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4 mt-10 mt-md-0 text-center text-md-start">
          <div class="mt-4 mt-md-0 lh-xl">
            <span class="fw-bold text-primary fs-5">Kontak Kami <br /></span>
            <span class="fw-bold fs-5">contactcenter136@esdm.go.id <br /></span>
            <span class="fw-bold fs-5">Call Center:136 <br /></span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!--end::Authentication Layout -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import { useBodyStore } from "@/stores/body";

export default defineComponent({
  name: "auth-layout",
  components: {},
  setup() {
    const store = useBodyStore();

    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);

      store.addBodyClassname("app-blank");
      store.addBodyClassname("bg-body");
    });

    return {
      getAssetPath,
    };
  },
});
</script>
