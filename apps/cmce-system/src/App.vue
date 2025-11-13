<script setup lang="ts">
  import { Card } from '@cmce/ui'
  import {Button} from '@cmce/ui'
  import { UploadDragger } from 'ant-design-vue';
</script>

<template>
  <h1 class="text-yellow-300">You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <Card/>
  <Button/>
  <UploadDragger
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"

  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </UploadDragger>
</template>

<style scoped></style>
