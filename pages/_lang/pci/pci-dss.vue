<template>
  <section>
    <h2 class="title">PCI DSS <div class="badge">TOMS passed PCI DSS</div></h2>
    <div class="chapter">
      <h3>1.Introduction of PCI DSS</h3>
      <p
        class="mb-8"
      >The PCI Security Standards Council is a global forum with the aim of establishing security standards for account data protection. The PCI Data Security Standards define operational and technical requirements for entities that store, process or transmit payment card information, including merchants, processors, acquires, issuers and service providers.</p>
    </div>
    <div class="chapter">
      <h3>2. TOMS Complies with PCI DSS</h3>
      <p class="mb-10">PCI DSS comprises with 12 requirements covering 6 categories, including build and maintain a secure network and systems, protect cardholder data, maintain a vulnerability management program, implement strong access control measures, regularly monitor and test networks and maintain an information security policy, for the applicable entities to assess whether they have maintained a secure environment for the protection of their affiliated payment card account data.</p>

      <p>TOMS engaged with PCI SSC Approved Qualified Security Assessor (QSA) to conduct annual onsite assessment, i.e., PCI DSS v3.2.1 certified. The scope of the PCI DSS assessment is TOMS(Terminal Operation Management System).</p>
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