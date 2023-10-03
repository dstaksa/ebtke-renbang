<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-10">
    <div class="col-md-4 col-xl-3">
      <div class="card border" style="background-color: #d4d4d4">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center me-6">
              <img
                :src="getAssetPath('media/desain/icon-1.svg')"
                class="w-30px"
                alt=""
              />
              <span class="fw-bold mt-4">Total Usulan</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="pb-3">Usulan</span> <br />
              <span class="fs-6">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xl-3">
      <div class="card border" style="background-color: #e9faf4">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center me-6">
              <img
                :src="getAssetPath('media/desain/icon-2.svg')"
                class="w-30px"
                alt=""
              />
              <span class="fw-bold mt-4">Usulan Berjalan</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="pb-3">Usulan</span> <br />
              <span class="fs-6">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xl-3">
      <div class="card border" style="background-color: #e6cdfe">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center me-6">
              <img
                :src="getAssetPath('media/desain/icon-3.svg')"
                class="w-30px"
                alt=""
              />
              <span class="fw-bold mt-4">Usulan Selesai</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="pb-3">Usulan</span> <br />
              <span class="fs-6">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-xl-3">
      <div class="card border" style="background-color: #fbdae5">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center me-6">
              <img
                :src="getAssetPath('media/desain/icon-4.svg')"
                class="w-30px"
                alt=""
              />
              <span class="fw-bold mt-4">Usulan Masuk</span>
            </div>
            <div
              class="text-center ps-8"
              style="border-left: 1.4px solid black"
            >
              <span class="pb-3">Usulan</span> <br />
              <span class="fs-6">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end::Row-->

  <div class="row mt-18">
    <div class="col-md-12 d-flex justify-content-between mb-5">
      <h1 class="fs-1">List Usulan</h1>
    </div>
    <div class="col-md-12">
      <Datatable
        :loading="tableLoading"
        :is-server-side="true"
        :table-header="tableHeader"
        :table-data="tableData"
        :rows-per-page="10"
        :total="tablePagination.total"
        :enable-items-per-page-dropdown="true"
        @items-per-page-change="onItemsPerPageChange"
        @current-change="onPageChange"
      >
        <template v-slot:cell-action="{ row: data }">
          <div v-if="data">
            <template v-if="role == 'ppk'">
              <router-link to="/pengadaan/form/1">
                <button class="btn btn-primary w-150px btn-sm">
                  Buat Pengadaan
                </button>
              </router-link>
            </template>
            <template v-else>
              <router-link to="/usulan/detail/1">
                <button class="btn btn-primary w-150px btn-sm">
                  Lihat Detail
                </button>
              </router-link>
            </template>
          </div>
        </template>
        <template v-slot:cell-nomor_surat="{ row: data }">
          {{ data.nomor_surat }}
        </template>
        <template v-slot:cell-tanggal="{ row: data }">
          {{ data.tanggal }}
        </template>
        <template v-slot:cell-jenis_pembangkit="{ row: data }">
          <div class="badge badge-primary">
            {{ data.jenis_pembangkit }}
          </div>
        </template>
        <template v-slot:cell-provinsi="{ row: data }">
          {{ data.provinsi }}
        </template>
        <template v-slot:cell-jumlah="{ row: data }">
          {{ data.jumlah }}
        </template>
        <template v-slot:cell-nama_pengusul="{ row: data }">
          {{ data.nama_pengusul }}
        </template>
        <template v-slot:cell-status_nadine="{ row: data }">
          <template v-if="data.status_nadine == 'Diterima'">
            <div class="badge badge-success">Diterima</div>
          </template>
          <template v-else-if="data.status_nadine == 'Ditolak'">
            <div class="badge badge-danger">Ditolak</div>
          </template>
          <template v-else-if="data.status_nadine == 'Menunggu'">
            <div class="badge badge-warning">Menunggu</div>
          </template>
        </template>
        <template v-slot:cell-status_anggaran="{ row: data }">
          <template v-if="data.status_anggaran == 'Disetujui'">
            <div class="badge badge-success">Disetujui</div>
          </template>
          <template v-else-if="data.status_anggaran == 'Ditolak'">
            <div class="badge badge-danger">Ditolak</div>
          </template>
          <template v-else-if="data.status_anggaran == 'Menunggu'">
            <div class="badge badge-warning">Menunggu</div>
          </template>
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import UserInfoService from "@/core/services/UserInfoService";

export default defineComponent({
  name: "main-dashboard",
  components: {
    Datatable,
  },
  setup() {
    const user = UserInfoService.getData();
    const role = ref(user.role as string);

    const tableHeader = ref([
      {
        name: "Aksi",
        key: "action",
        style: "min-width: 150px",
      },
      {
        name: "No. Surat",
        key: "nomor_surat",
        style: "min-width: 120px",
      },
      {
        name: "Tanggal",
        key: "tanggal",
        style: "min-width: 120px",
      },
      {
        name: "Jenis Pembangkit",
        key: "jenis_pembangkit",
        style: "min-width: 160px",
      },
      {
        name: "Provinsi",
        key: "provinsi",
        style: "min-width: 160px",
      },
      {
        name: "Jumlah",
        key: "jumlah",
        style: "min-width: 160px",
      },
      {
        name: "Nama Pengusul",
        key: "nama_pengusul",
        style: "min-width: 200px",
      },
      {
        name: "Status Nadine",
        key: "status_nadine",
        style: "min-width: 160px",
      },
      {
        name: "Status Anggaran",
        key: "status_anggaran",
        style: "min-width: 160px",
      },
    ]);
    const tableData = ref([] as any);
    const tablePagination = ref({
      total: 0,
      rowsPerpage: 10,
      currentPage: 1,
    });
    const tableLoading = ref(false);
    const onItemsPerPageChange = (rowsPerPage) => {
      tablePagination.value.rowsPerpage = rowsPerPage;
      getList();
    };
    const onPageChange = (page) => {
      tablePagination.value.currentPage = page;
      getList();
    };
    const getList = () => {
      tableData.value = [
        {
          nomor_surat: "1",
          tanggal: "2023-09-19",
          jenis_pembangkit: "Pembangkit 1",
          provinsi: "Provinsi A",
          jumlah: 10,
          nama_pengusul: "Nama",
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "2",
          tanggal: "2023-09-20",
          jenis_pembangkit: "Pembangkit 2",
          provinsi: "Provinsi B",
          jumlah: 15,
          nama_pengusul: "Nama",
          status_nadine: "Ditolak",
          status_anggaran: "Ditolak",
        },
        {
          nomor_surat: "3",
          tanggal: "2023-09-21",
          jenis_pembangkit: "Pembangkit 3",
          provinsi: "Provinsi C",
          jumlah: 20,
          nama_pengusul: "Nama",
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
        {
          nomor_surat: "4",
          tanggal: "2023-09-22",
          jenis_pembangkit: "Pembangkit 4",
          provinsi: "Provinsi D",
          jumlah: 25,
          nama_pengusul: "Nama",
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "5",
          tanggal: "2023-09-23",
          jenis_pembangkit: "Pembangkit 5",
          provinsi: "Provinsi E",
          jumlah: 30,
          nama_pengusul: "Nama",
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
        {
          nomor_surat: "6",
          tanggal: "2023-09-24",
          jenis_pembangkit: "Pembangkit 6",
          provinsi: "Provinsi F",
          jumlah: 35,
          nama_pengusul: "Nama",
          status_nadine: "Ditolak",
          status_anggaran: "Ditolak",
        },
        {
          nomor_surat: "7",
          tanggal: "2023-09-25",
          jenis_pembangkit: "Pembangkit 7",
          provinsi: "Provinsi G",
          jumlah: 40,
          nama_pengusul: "Nama",
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "8",
          tanggal: "2023-09-26",
          jenis_pembangkit: "Pembangkit 8",
          provinsi: "Provinsi H",
          jumlah: 45,
          nama_pengusul: "Nama",
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
        {
          nomor_surat: "9",
          tanggal: "2023-09-27",
          jenis_pembangkit: "Pembangkit 9",
          provinsi: "Provinsi I",
          jumlah: 50,
          nama_pengusul: "Nama",
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
      ];

      tablePagination.value.total = 100;
    };

    onMounted(() => {
      getList();
    });
    return {
      getAssetPath,
      role,

      tableHeader,
      tableData,
      tableLoading,
      tablePagination,
      onItemsPerPageChange,
      onPageChange,
    };
  },
});
</script>
