<template>
  <div>
    <section>
      <h2 class="title">{{$t('pci.pci.title')}}</h2>
      <div class="chapter">
        <h3>{{$t('pci.pci.head1')}}</h3>
        <p>{{$t('pci.pci.p1')}}</p>
      </div>
      <div class="chapter">
        <h3>{{$t('pci.pci.head2')}}</h3>
        <p class="mb-10">{{$t('pci.pci.p2')}}</p>
        <ul v-html="$t('pci.pci.list')"></ul>
      </div>
      <img src="~assets/PCI/5.png" class="mb-8 w-full" />
    </section>
  </div>
</template>

<script>
export default {
  layout: "pci",
};
</script>

<style>
</style>