<template>
  <section>
    <h2 class="title">{{$t('pci.pcidss.title')}} <div class="badge">{{$t('pci.pcidss.badge')}}</div></h2>
    <div class="chapter">
      <h3>{{$t('pci.pcidss.header1')}}</h3>
      <p
        class="mb-8"
      >{{$t('pci.pcidss.p1')}}</p>
    </div>
    <div class="chapter">
      <h3>{{$t('pci.pcidss.header2')}}</h3>
      <p class="mb-10">{{$t('pci.pcidss.p2')}}</p>

      <p>{{$t('pci.pcidss.p3')}}</p>
    </div>
    <img src="~assets/PCI/dss.png" class="mb-8 w-full" />
  </section>
</template>

<script>
export default {
  layout: "pci",
};
</script>

<style>
</style>