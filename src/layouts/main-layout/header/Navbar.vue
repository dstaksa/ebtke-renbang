<template>
  <!--begin::Navbar-->
  <div class="app-navbar flex-shrink-0">
    <!--begin::User menu-->
    <div class="app-navbar-item ms-1 ms-md-3" id="kt_header_user_menu_toggle">
      <div class="d-flex align-item-center">
        <div class="text-end me-3">
          <h4 class="mb-0 text-end">{{ user.name }}</h4>
          <span>{{ user.surname }}</span>
        </div>
        <!--begin::Menu wrapper-->
      </div>
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <img
          :src="getAssetPath('media/avatars/300-1.jpg')"
          class="rounded-circle border border-dark"
          alt="user"
        />
      </div>
      <KTUserMenu />
      <!--end::Menu wrapper-->
    </div>
    <!--end::User menu-->
    <!--begin::Header menu toggle-->
    <!-- <div
      class="app-navbar-item d-lg-none ms-2 me-n3"
      v-tooltip
      title="Show header menu"
    >
      <div
        class="btn btn-icon btn-active-color-primary w-30px h-30px w-md-35px h-md-35px"
        id="kt_app_header_menu_toggle"
      >
        <KTIcon icon-name="text-align-left" icon-class="fs-2 fs-md-1" />
      </div>
    </div> -->
    <!--end::Header menu toggle-->
    <!--end::User menu-->
    <div class="app-navbar-item ms-1 ms-md-3">
      <!--begin::Menu wrapper-->
      <div
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px position-relative"
        id="kt_drawer_chat_toggle"
      >
        <KTIcon icon-name="notification" icon-class="fs-2 fs-md-1" />
        <span
          class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
        ></span>
      </div>
      <!--end::Menu wrapper-->
    </div>
  </div>
  <!--end::Navbar-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent } from /*  "vue"; */
import KTSearch from "@/layouts/main-layout/search/Search.vue";
import KTNotificationMenu from "@/layouts/main-layout/menus/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/layouts/main-layout/menus/QuickLinksMenu.vue";
import KTUserMenu from "@/layouts/main-layout/menus/UserAccountMenu.vue";
import KTThemeModeSwitcher from "@/layouts/main-layout/theme-mode/ThemeModeSwitcher.vue";
import { ThemeModeComponent } from "@/assets/ts/layout";
import { useThemeStore } from "@/stores/theme";
import UserInfoService from "@/core/services/UserInfoService";

export default defineComponent({
  name: "header-navbar",
  components: {
    KTSearch,
    KTNotificationMenu,
    KTQuickLinksMenu,
    KTUserMenu,
    KTThemeModeSwitcher,
  },
  setup() {
    const user = UserInfoService.getData();
    const store = useThemeStore();

    const themeMode = computed(() => {
      if (store.mode === "system") {
        return ThemeModeComponent.getSystemMode();
      }
      return store.mode;
    });

    return {
      themeMode,
      getAssetPath,

      user,
    };
  },
});
</script>
