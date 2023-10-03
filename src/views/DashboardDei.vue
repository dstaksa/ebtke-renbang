<template>
  <!--begin::Row-->
  <template v-if="role != 'penyedia'">
    <div class="row g-5 g-xl-10">
      <div class="col-md-4 col-xl-3">
        <div class="card border" style="background-color: #d4d4d4">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-1.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >APDAL <br />
                  <br />
                </span>
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid black"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xl-3">
        <div class="card border" style="background-color: #e9faf4">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-2.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >PJUTS <br />
                  <br />
                </span>
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid black"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xl-3">
        <div class="card border" style="background-color: #e6cdfe">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-3.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >LTSHE <br />
                  <br />
                </span>
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid black"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xl-3">
        <div class="card border" style="background-color: #fbdae5">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-4.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >PLTM <br />
                  <br />
                </span>
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid black"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xl-3">
        <div class="card border" style="background-color: #c6ccfd">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-5.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >PLTS <br />
                  Atap</span
                >
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid black"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xl-3">
        <div class="card border text-white" style="background-color: #030303">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-6.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >PLTMH <br />
                  <br />
                </span>
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid white"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xl-3">
        <div class="card border" style="background-color: #fecdcd">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-7.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >Revitalisasi <br />
                  <br />
                </span>
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid black"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xl-3">
        <div class="card border" style="background-color: #f9f3d3">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-9.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >Biogas <br />
                  Komunal</span
                >
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid black"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-xl-3">
        <div class="card border" style="background-color: #d4d4d4">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-center">
              <div
                class="d-flex flex-column align-items-center justify-content-center me-6"
              >
                <img
                  :src="getAssetPath('media/desain/icon-8.svg')"
                  class="w-30px"
                  alt=""
                />
                <span class="fw-bold text-center mt-4"
                  >PLTS <br />
                  <br />
                </span>
              </div>
              <div
                class="text-center pe-3"
                style="border-right: 1.4px solid black"
              >
                <span class="pb-3">Jumlah</span> <br />
                <span class="fs-6">10 Unit</span>
              </div>
              <div class="text-center ps-3">
                <span>Kapasitas</span> <br />
                <span class="fs-6">10 MW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <!--end::Row-->

  <template v-if="role != 'penyedia'">
    <div class="row mt-18">
      <div class="col-md-8">
        <h1 class="fs-2">Usulan Baru</h1>
        <p>Data usulan yang baru masuk</p>
        <Datatable
          :loading="tableLoading"
          :is-server-side="true"
          :table-header="tableHeader"
          :table-data="tableData"
          :rows-per-page="10"
          :total="5"
          :enable-items-per-page-dropdown="false"
          @items-per-page-change="onItemsPerPageChange"
          @current-change="onPageChange"
        >
          <template v-slot:cell-action="{ row: data }">
            <div v-if="data">
              <router-link to="/usulan/detail/1">
                <button class="btn btn-primary w-150px btn-sm">
                  Lihat Detail
                </button>
              </router-link>
            </div>
          </template>
          <template v-slot:cell-pengusul="{ row: data }">
            <template v-if="data">
              <div class="d-flex align-items-center">
                <el-image
                  style="width: 50px"
                  class="rounded-circle"
                  src="/media/avatars/300-1.jpg"
                ></el-image>
                <div class="ms-4">
                  <h1 class="fs-4">Nama Pengusul</h1>
                  <div class="d-flex gap-3">
                    <div class="badge rounded-pill badge-info">
                      <KTIcon icon-name=""></KTIcon>
                      Pemerintah Daerah
                    </div>
                    <div class="badge rounded-pill badge-dark">
                      <KTIcon icon-name="lightning"></KTIcon>
                      PLTS
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
          <template v-slot:cell-tgl_masuk_usulan="{ row: data }">
            {{ data.tanggal }}
          </template>
          <template v-slot:cell-nilai_proyek> Rp. 40,000,000 </template>
          <template v-slot:cell-provinsi="{ row: data }">
            {{ data.provinsi }}
          </template>
          <template v-slot:cell-jumlah="{ row: data }">
            {{ data.jumlah }}
          </template>
        </Datatable>
      </div>
      <div class="col-md-4">
        <h1 class="fs-2">Aktivitas Baru</h1>
        <p>20 aktivitas baru</p>
        <!--begin::Timeline-->
        <div class="timeline-label mt-6">
          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">08/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-warning fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Text-->
            <div class="fw-mormal timeline-content text-dark ps-3 fw-bold">
              PPK [nama_ppk] telah memberikan [nama paket] kepada
              [nama_penyedia]
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">10/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-success fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Content-->
            <div class="timeline-content d-flex">
              <span class="fw-bold text-gray-800 ps-3"
                >Pengawas [nama_pengawas] telah memverifikasi foto di
                [nama_paket]
              </span>
            </div>
            <!--end::Content-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">14/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-danger fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Desc-->
            <div class="timeline-content fw-bold text-gray-800 ps-3">
              [nama_pengusul] telah mengupload dokumen di [nama_paket]
            </div>
            <!--end::Desc-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">16/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-primary fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Text-->
            <div class="timeline-content fw-bold text-dark ps-3">
              [nama_pengusul] telah mengupload dokumen di [nama_paket]
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">21/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-info fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Desc-->
            <div class="timeline-content fw-bold text-dark ps-3">
              Verifikasi NADINE dan Anggaran pada usulan [nama_paket]
            </div>
            <!--end::Desc-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Timeline-->
      </div>
      <div class="col-md-8 d-flex justify-content-end">
        <router-link to="/usulan">
          <button type="button" class="btn btn-primary btn-sm">
            Lihat lebih banyak
          </button>
        </router-link>
      </div>
    </div>
    <div class="separator separtor-solid my-10"></div>
  </template>

  <div class="row mt-18">
    <div class="col-md-8">
      <h1 class="fs-2">Pembangunan Baru</h1>
      <p>Data pembangunan yang baru masuk</p>
      <Datatable
        :loading="tableLoadingPembangunan"
        :is-server-side="true"
        :table-header="tableHeaderPembangunan"
        :table-data="tableDataPembangunan"
        :rows-per-page="10"
        :total="5"
        :enable-items-per-page-dropdown="false"
        @items-per-page-change="onItemsPerPageChangePembangunan"
        @current-change="onPageChangePembangunan"
      >
        <template v-slot:cell-action="{ row: data }">
          <div v-if="data">
            <router-link to="/usulan/detail/1">
              <button class="btn btn-primary w-150px btn-sm">
                Lihat Detail
              </button>
            </router-link>
          </div>
        </template>
        <template v-slot:cell-nama_paket="{ row: data }">
          <template v-if="data">
            <div class="d-flex align-items-center">
              <el-image
                style="width: 50px"
                class="rounded-circle"
                src="/media/avatars/300-1.jpg"
              ></el-image>
              <div class="ms-4">
                <h1 class="fs-4">Nama Paket</h1>
              </div>
            </div>
          </template>
        </template>
        <template v-slot:cell-tgl_pemasangan="{ row: data }">
          {{ data.tanggal }}
        </template>
        <template v-slot:cell-provinsi="{ row: data }">
          {{ data.provinsi }}
        </template>
        <template v-slot:cell-kabupaten> Bandung Barat </template>
        <template v-slot:cell-kecamatan> Ciasih </template>
        <template v-slot:cell-desa> Wetan </template>
      </Datatable>
    </div>
    <div class="col-md-4">
      <h1 class="fs-2">Aktivitas Baru</h1>
      <p>20 aktivitas baru</p>
      <!--begin::Timeline-->
      <div class="timeline-label mt-6">
        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">08/07</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-warning fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="fw-mormal timeline-content text-dark ps-3 fw-bold">
            PPK [nama_ppk] telah memberikan [nama paket] kepada [nama_penyedia]
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">10/07</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-success fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Content-->
          <div class="timeline-content d-flex">
            <span class="fw-bold text-gray-800 ps-3"
              >Pengawas [nama_pengawas] telah memverifikasi foto di [nama_paket]
            </span>
          </div>
          <!--end::Content-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">14/07</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-danger fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Desc-->
          <div class="timeline-content fw-bold text-gray-800 ps-3">
            [nama_pengusul] telah mengupload dokumen di [nama_paket]
          </div>
          <!--end::Desc-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">16/07</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-primary fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Text-->
          <div class="timeline-content fw-bold text-dark ps-3">
            [nama_pengusul] telah mengupload dokumen di [nama_paket]
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->

        <!--begin::Item-->
        <div class="timeline-item">
          <!--begin::Label-->
          <div class="timeline-label fw-bold text-gray-800 fs-6">21/07</div>
          <!--end::Label-->

          <!--begin::Badge-->
          <div class="timeline-badge">
            <i class="fa fa-genderless text-info fs-1"></i>
          </div>
          <!--end::Badge-->

          <!--begin::Desc-->
          <div class="timeline-content fw-bold text-dark ps-3">
            Verifikasi NADINE dan Anggaran pada usulan [nama_paket]
          </div>
          <!--end::Desc-->
        </div>
        <!--end::Item-->
      </div>
      <!--end::Timeline-->
    </div>
    <div class="col-md-8 d-flex justify-content-end">
      <router-link to="/pembangunan">
        <button type="button" class="btn btn-primary btn-sm">
          Lihat lebih banyak
        </button>
      </router-link>
    </div>
  </div>

  <template v-if="role == 'dei' || role == 'penyedia'">
    <div class="separator separtor-solid my-10"></div>
    <div class="row mt-18">
      <div class="col-md-8">
        <h1 class="fs-2">Pengadaan Baru</h1>
        <p>Data pengadaan yang baru masuk</p>
        <Datatable
          :loading="tableLoadingPengadaan"
          :is-server-side="true"
          :table-header="tableHeaderPengadaan"
          :table-data="tableDataPengadaan"
          :rows-per-page="10"
          :total="5"
          :enable-items-per-page-dropdown="false"
          @items-per-page-change="onItemsPerPageChangePengadaan"
          @current-change="onPageChangePengadaan"
        >
          <template v-slot:cell-pengusul="{ row: data }">
            <template v-if="data">
              <div class="d-flex align-items-center">
                <el-image
                  style="width: 50px"
                  class="rounded-circle"
                  src="/media/avatars/300-1.jpg"
                ></el-image>
                <div class="ms-4">
                  <h1 class="fs-4">Nama Pengusul</h1>
                  <div class="d-flex gap-3">
                    <div class="badge rounded-pill badge-dark">
                      <KTIcon icon-name="lightning"></KTIcon>
                      PLTS
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
          <template v-slot:cell-tgl_kontrak="{ row: data }">
            {{ data.tanggal }}
          </template>
          <template v-slot:cell-nilai_kontrak> Rp. 40,000,000 </template>
          <template v-slot:cell-provinsi="{ row: data }">
            {{ data.provinsi }}
          </template>
          <template v-slot:cell-jumlah="{ row: data }">
            {{ data.jumlah }}
          </template>
          <template v-slot:cell-instansi>
            <div class="badge rounded-pill badge-info">
              <KTIcon icon-name=""></KTIcon>
              Pemerintah Daerah
            </div>
          </template>
          <template v-slot:cell-tahun> 2023 </template>
        </Datatable>
      </div>
      <div class="col-md-4">
        <h1 class="fs-2">Aktivitas Baru</h1>
        <p>20 aktivitas baru</p>
        <!--begin::Timeline-->
        <div class="timeline-label mt-6">
          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">08/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-warning fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Text-->
            <div class="fw-mormal timeline-content text-dark ps-3 fw-bold">
              PPK [nama_ppk] telah memberikan [nama paket] kepada
              [nama_penyedia]
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">10/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-success fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Content-->
            <div class="timeline-content d-flex">
              <span class="fw-bold text-gray-800 ps-3"
                >Pengawas [nama_pengawas] telah memverifikasi foto di
                [nama_paket]
              </span>
            </div>
            <!--end::Content-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">14/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-danger fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Desc-->
            <div class="timeline-content fw-bold text-gray-800 ps-3">
              [nama_pengusul] telah mengupload dokumen di [nama_paket]
            </div>
            <!--end::Desc-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">16/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-primary fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Text-->
            <div class="timeline-content fw-bold text-dark ps-3">
              [nama_pengusul] telah mengupload dokumen di [nama_paket]
            </div>
            <!--end::Text-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="timeline-item">
            <!--begin::Label-->
            <div class="timeline-label fw-bold text-gray-800 fs-6">21/07</div>
            <!--end::Label-->

            <!--begin::Badge-->
            <div class="timeline-badge">
              <i class="fa fa-genderless text-info fs-1"></i>
            </div>
            <!--end::Badge-->

            <!--begin::Desc-->
            <div class="timeline-content fw-bold text-dark ps-3">
              Verifikasi NADINE dan Anggaran pada usulan [nama_paket]
            </div>
            <!--end::Desc-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Timeline-->
      </div>
      <div class="col-md-8 d-flex justify-content-end">
        <router-link to="/pengadaan">
          <button type="button" class="btn btn-primary btn-sm">
            Lihat lebih banyak
          </button>
        </router-link>
      </div>
    </div>
  </template>

  <template v-if="role == 'penyedia'">
    <div class="row mt-12">
      <div class="col">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60965018194!2d107.56075568059532!3d-6.903271953467876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sid!2sid!4v1696115093074!5m2!1sid!2sid"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </template>
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
        name: "Pengusul",
        key: "pengusul",
        style: "min-width: 240px",
      },
      {
        name: "Nilai Proyek",
        key: "nilai_proyek",
        style: "min-width: 130px",
      },
      {
        name: "Tgl. Masuk Usulan",
        key: "tgl_masuk_usulan",
        style: "min-width: 150px",
      },
      {
        name: "Provinsi",
        key: "provinsi",
        style: "min-width: 120px",
      },
      {
        name: "Jumlah",
        key: "jumlah",
        style: "min-width: 120px",
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
          kelengkapan_dokumen: true,
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "2",
          tanggal: "2023-09-20",
          jenis_pembangkit: "Pembangkit 2",
          provinsi: "Provinsi B",
          jumlah: 15,
          kelengkapan_dokumen: false,
          status_nadine: "Ditolak",
          status_anggaran: "Ditolak",
        },
        {
          nomor_surat: "3",
          tanggal: "2023-09-21",
          jenis_pembangkit: "Pembangkit 3",
          provinsi: "Provinsi C",
          jumlah: 20,
          kelengkapan_dokumen: true,
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
        {
          nomor_surat: "4",
          tanggal: "2023-09-22",
          jenis_pembangkit: "Pembangkit 4",
          provinsi: "Provinsi D",
          jumlah: 25,
          kelengkapan_dokumen: false,
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "5",
          tanggal: "2023-09-23",
          jenis_pembangkit: "Pembangkit 5",
          provinsi: "Provinsi E",
          jumlah: 30,
          kelengkapan_dokumen: true,
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
      ];

      tablePagination.value.total = 100;
    };

    const tableHeaderPembangunan = ref([
      {
        name: "Nama Paket",
        key: "nama_paket",
        style: "min-width: 240px",
      },
      {
        name: "Tgl Pemasangan",
        key: "tgl_pemasangan",
        style: "min-width: 140px",
      },
      {
        name: "Provinsi",
        key: "provinsi",
        style: "min-width: 120px",
      },
      {
        name: "Kabupaten",
        key: "kabupaten",
        style: "min-width: 140px",
      },
      {
        name: "Kecamatan",
        key: "kecamatan",
        style: "min-width: 120px",
      },
      {
        name: "Desa",
        key: "desa",
        style: "min-width: 120px",
      },
    ]);
    const tableDataPembangunan = ref([] as any);
    const tablePaginationPembangunan = ref({
      total: 0,
      rowsPerpage: 10,
      currentPage: 1,
    });
    const tableLoadingPembangunan = ref(false);
    const onItemsPerPageChangePembangunan = (rowsPerPage) => {
      tablePaginationPembangunan.value.rowsPerpage = rowsPerPage;
      getListPembangunan();
    };
    const onPageChangePembangunan = (page) => {
      tablePaginationPembangunan.value.currentPage = page;
      getListPembangunan();
    };
    const getListPembangunan = () => {
      tableDataPembangunan.value = [
        {
          nomor_surat: "1",
          tanggal: "2023-09-19",
          jenis_pembangkit: "Pembangkit 1",
          provinsi: "Provinsi A",
          jumlah: 10,
          kelengkapan_dokumen: true,
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "2",
          tanggal: "2023-09-20",
          jenis_pembangkit: "Pembangkit 2",
          provinsi: "Provinsi B",
          jumlah: 15,
          kelengkapan_dokumen: false,
          status_nadine: "Ditolak",
          status_anggaran: "Ditolak",
        },
        {
          nomor_surat: "3",
          tanggal: "2023-09-21",
          jenis_pembangkit: "Pembangkit 3",
          provinsi: "Provinsi C",
          jumlah: 20,
          kelengkapan_dokumen: true,
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
        {
          nomor_surat: "4",
          tanggal: "2023-09-22",
          jenis_pembangkit: "Pembangkit 4",
          provinsi: "Provinsi D",
          jumlah: 25,
          kelengkapan_dokumen: false,
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "5",
          tanggal: "2023-09-23",
          jenis_pembangkit: "Pembangkit 5",
          provinsi: "Provinsi E",
          jumlah: 30,
          kelengkapan_dokumen: true,
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
      ];

      tablePagination.value.total = 100;
    };

    const tableHeaderPengadaan = ref([
      {
        name: "Pengusul",
        key: "pengusul",
        style: "min-width: 240px",
      },
      {
        name: "Nilai Kontrak",
        key: "nilai_kontrak",
        style: "min-width: 130px",
      },
      {
        name: "Tgl. Kontrak",
        key: "tgl_kontrak",
        style: "min-width: 150px",
      },
      {
        name: "Jumlah",
        key: "jumlah",
        style: "min-width: 80px",
      },
      {
        name: "Instansi",
        key: "instansi",
        style: "min-width: 120px",
      },
      {
        name: "Tahun",
        key: "tahun",
        style: "min-width: 120px",
      },
    ]);
    const tableDataPengadaan = ref([] as any);
    const tablePaginationPengadaan = ref({
      total: 0,
      rowsPerpage: 10,
      currentPage: 1,
    });
    const tableLoadingPengadaan = ref(false);
    const onItemsPerPageChangePengadaan = (rowsPerPage) => {
      tablePaginationPengadaan.value.rowsPerpage = rowsPerPage;
      getListPengadaan();
    };
    const onPageChangePengadaan = (page) => {
      tablePaginationPengadaan.value.currentPage = page;
      getListPengadaan();
    };
    const getListPengadaan = () => {
      tableDataPengadaan.value = [
        {
          nomor_surat: "1",
          tanggal: "2023-09-19",
          jenis_pembangkit: "Pembangkit 1",
          provinsi: "Provinsi A",
          jumlah: 10,
          kelengkapan_dokumen: true,
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "2",
          tanggal: "2023-09-20",
          jenis_pembangkit: "Pembangkit 2",
          provinsi: "Provinsi B",
          jumlah: 15,
          kelengkapan_dokumen: false,
          status_nadine: "Ditolak",
          status_anggaran: "Ditolak",
        },
        {
          nomor_surat: "3",
          tanggal: "2023-09-21",
          jenis_pembangkit: "Pembangkit 3",
          provinsi: "Provinsi C",
          jumlah: 20,
          kelengkapan_dokumen: true,
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
        {
          nomor_surat: "4",
          tanggal: "2023-09-22",
          jenis_pembangkit: "Pembangkit 4",
          provinsi: "Provinsi D",
          jumlah: 25,
          kelengkapan_dokumen: false,
          status_nadine: "Diterima",
          status_anggaran: "Disetujui",
        },
        {
          nomor_surat: "5",
          tanggal: "2023-09-23",
          jenis_pembangkit: "Pembangkit 5",
          provinsi: "Provinsi E",
          jumlah: 30,
          kelengkapan_dokumen: true,
          status_nadine: "Menunggu",
          status_anggaran: "Menunggu",
        },
      ];

      tablePaginationPengadaan.value.total = 100;
    };

    onMounted(() => {
      getList();
      getListPembangunan();
      getListPengadaan();
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

      tableHeaderPembangunan,
      tableDataPembangunan,
      tableLoadingPembangunan,
      tablePaginationPembangunan,
      onItemsPerPageChangePembangunan,
      onPageChangePembangunan,

      tableHeaderPengadaan,
      tableDataPengadaan,
      tableLoadingPengadaan,
      tablePaginationPengadaan,
      onItemsPerPageChangePengadaan,
      onPageChangePengadaan,
    };
  },
});
</script>
