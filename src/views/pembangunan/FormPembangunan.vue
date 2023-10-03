<template>
  <div class="row">
    <div class="col-md-12">
      <div class="separator mb-4"></div>
      <div
        class="col-md-12 d-flex align-items-center justify-content-between mb-5"
      >
        <h1 class="fs-3">Input Pembangunan</h1>
        <router-link
          v-if="role == 'penyedia' && route.name == 'detail-pembangunan'"
          to="/pembangunan/form/1"
        >
          <button class="btn btn-info btn-sm">Update Pembangunan</button>
        </router-link>
      </div>
    </div>
    <div class="col-md-12">
      <div class="card border">
        <div class="card-body p-6">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="nomor_kontrak" class="fs-6 mb-2"
                  >Nomor kontrak</label
                >
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Nomor kontrak"
                  name="nomor_kontrak"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="nomor_kontrak" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="dusun" class="fs-6 mb-2">Dusun</label>
                <Field
                  :disabled="isDisabledForm"
                  as="select"
                  class="form-control"
                  placeholder="Masukan Dusun"
                  name="dusun"
                >
                  <option value="" selected disabled>Pilih Dusun</option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="dusun" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="provinsi" class="fs-6 mb-2">Provinsi</label>
                <Field
                  :disabled="isDisabledForm"
                  as="select"
                  class="form-control"
                  placeholder="Masukan Provinsi"
                  name="provinsi"
                >
                  <option value="" selected disabled>Pilih Provinsi</option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="provinsi" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="kabupaten" class="fs-6 mb-2">Kabupaten</label>
                <Field
                  :disabled="isDisabledForm"
                  as="select"
                  class="form-control"
                  placeholder="Masukan Kabupaten"
                  name="kabupaten"
                >
                  <option value="" selected disabled>Pilih Kabupaten</option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="kabupaten" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="kecamatan" class="fs-6 mb-2">Kecamatan</label>
                <Field
                  :disabled="isDisabledForm"
                  as="select"
                  class="form-control"
                  placeholder="Masukan Kecamatan"
                  name="kecamatan"
                >
                  <option value="" selected disabled>Pilih Kecamatan</option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="kecamatan" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="desa" class="fs-6 mb-2">Desa</label>
                <Field
                  :disabled="isDisabledForm"
                  as="select"
                  class="form-control"
                  placeholder="Masukan Desa"
                  name="desa"
                >
                  <option value="" selected disabled>Pilih Desa</option>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="desa" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="longitude" class="fs-6 mb-2">Titik Longitude</label>
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Longitude"
                  name="longitude"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="longitude" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="latitude" class="fs-6 mb-2">Titik Latitude</label>
                <Field
                  :disabled="isDisabledForm"
                  type="text"
                  class="form-control"
                  placeholder="Masukan Latitude"
                  name="latitude"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="latitude" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-6">
                <label for="tanggal_pemasangan" class="fs-6 mb-2"
                  >Tanggal Pemasangan</label
                >
                <Field
                  :disabled="isDisabledForm"
                  type="date"
                  class="form-control"
                  placeholder="Masukan Tanggal Pemasangan"
                  name="tanggal_pemasangan"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="tanggal_pemasangan" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template v-if="route.name == 'form-pembangunan'">
      <div class="col-md-12 mt-12">
        <h1 class="fs-3 mb-2">Upload Foto Pembangunan</h1>
      </div>
      <div class="col-md-12">
        <div class="card border">
          <div class="card-body p-6">
            <el-upload
              v-model:file-list="fileList"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>

            <el-dialog v-model="dialogVisible">
              <img
                w-full
                class="img-fluid"
                :src="dialogImageUrl"
                alt="Preview Image"
              />
            </el-dialog>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-6 d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Simpan</button>
      </div>
    </template>
    <template v-else>
      <h1 class="fs-3 mt-8">Foto Pembangunan</h1>
      <div class="row">
        <div class="col">
          <div class="card border">
            <div class="card-body p-6">
              <el-image
                v-for="(file, index) in fileList"
                :key="index"
                :src="file.url"
                style="width: 190px; height: 190px"
                :zoom-rate="1.2"
                :preview-src-list="previewSrcList"
                :initial-index="index"
                fit="cover"
                class="me-3 mb-3"
              />
              <!-- </template> -->
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="route.name == 'verifikasi-pembangunan'">
      <div class="col-md-12 mt-12">
        <h1 class="fs-3 mb-2">Upload Foto Verifikasi</h1>
      </div>
      <div class="col-md-12">
        <div class="card border">
          <div class="card-body p-6">
            <el-upload
              v-model:file-list="fileList"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>

            <el-dialog v-model="dialogVisible">
              <img
                w-full
                class="img-fluid"
                :src="dialogImageUrl"
                alt="Preview Image"
              />
            </el-dialog>

            <div class="row mt-8">
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="tanggal_verifikasi" class="fs-6 mb-2"
                    >Tanggal Verifikasi</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    type="date"
                    class="form-control"
                    placeholder="Masukan Tanggal Verifikasi"
                    name="tanggal_verifikasi"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="tanggal_verifikasi" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group mb-6">
                  <label for="status_verifikasi" class="fs-6 mb-2"
                    >Status Verifikasi</label
                  >
                  <Field
                    :disabled="isDisabledForm"
                    as="select"
                    class="form-control"
                    placeholder="Masukan Status Verifikasi"
                    name="status_verifikasi"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="status_verifikasi" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-6 d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Simpan</button>
      </div>
    </template>
    <template v-else>
      <h1 class="fs-3 mt-8">Foto Verifikasi Pembangunan</h1>
      <div class="row">
        <div class="col">
          <div class="card border">
            <div class="card-body p-6">
              <el-image
                v-for="(file, index) in fileList"
                :key="index"
                :src="file.url"
                style="width: 190px; height: 190px"
                :zoom-rate="1.2"
                :preview-src-list="previewSrcList"
                :initial-index="index"
                fit="cover"
                class="me-3 mb-3"
              />
              <!-- </template> -->

              <div class="row mt-8">
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="tanggal_verifikasi" class="fs-6 mb-2"
                      >Tanggal Verifikasi</label
                    >
                    <Field
                      :disabled="isDisabledForm"
                      type="date"
                      class="form-control"
                      placeholder="Masukan Tanggal Verifikasi"
                      name="tanggal_verifikasi"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="tanggal_verifikasi" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-6">
                    <label for="status_verifikasi" class="fs-6 mb-2"
                      >Status Verifikasi</label
                    >
                    <Field
                      :disabled="isDisabledForm"
                      as="select"
                      class="form-control"
                      placeholder="Masukan Status Verifikasi"
                      name="status_verifikasi"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="status_verifikasi" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
// import { ref } from "vue";
// import ApiService from "@/core/services/ApiService";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps, UploadUserFile } from "element-plus";
import UserInfoService from "@/core/services/UserInfoService";

export default {
  name: "form-pembangunan",
  components: {
    ErrorMessage,
    Field,
    VForm,
    Editor,
    Datatable,
    Plus,
  },
  setup() {
    const user = UserInfoService.getData();
    const role = ref(user.role as string);
    const router = useRouter();
    const route = useRoute();

    const isDisabledForm = ref(false as boolean);
    if (route.name == "detail-pembangunan") {
      isDisabledForm.value = true;
    }

    const fileList = ref<UploadUserFile[]>([
      {
        name: "food.jpeg",
        url: "/media/images/example-pembangunan.png",
      },
      {
        name: "plant-1.png",
        url: "/media/images/example-pembangunan-2.png",
      },
      {
        name: "food.jpeg",
        url: "/media/images/example-pembangunan.png",
      },
      {
        name: "plant-2.png",
        url: "/media/images/example-pembangunan-2.png",
      },
      {
        name: "food.jpeg",
        url: "/media/images/example-pembangunan.png",
      },
      {
        name: "figure-1.png",
        url: "/media/images/example-pembangunan.png",
      },
      {
        name: "food.jpeg",
        url: "/media/images/example-pembangunan.png",
      },
      {
        name: "figure-2.png",
        url: "/media/images/example-pembangunan-2.png",
      },
    ]);
    const previewSrcList = ref(fileList.value.map((file) => file.url));
    // console.log("previewSrcList.value :>> ", previewSrcList.value);

    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);

    const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };

    const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url!;
      dialogVisible.value = true;
    };

    onMounted(() => {
      // getList();
    });

    return {
      router,
      route,
      role,
      isDisabledForm,

      handlePictureCardPreview,
      handleRemove,
      dialogImageUrl,
      dialogVisible,
      fileList,
      previewSrcList,
    };
  },
};
</script>

<style scoped>
.el-upload-list--picture-card .el-upload-list__item {
  width: 190px !important;
  height: 190px !important;
}
</style>
