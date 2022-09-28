<template>
  <section>
    <h2 class="title">PCI P2PE<div class="badge">FlyKey passed PCI P2PE</div></h2>
    <div class="chapter">
      <h3>Introduction of PCI P2PE</h3>
      <p>PCI P2PE standard is to facilitate the development, approval, and deployment of PCI-approved P2PE solutions that will increase the protection of account data by encrypting that data from the point of interaction (POI) within the encryption environment where account data is captured through to the point of decrypting that data inside a decryption environment, effectively removing clear-text account data between these two points.</p>
    </div>
    <div class="chapter">
      <table border="1" class="pci-table">
        <thead>
          <tr>
            <th>Domain</th>
            <th>Overview</th>
            <th>P2PE Validation Requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="first-col">
              Domain 1:
              Encryption Device and Application Management
            </td>
            <td>The secure management of the PCI- approved POI devices and the resident software.</td>
            <td>
              <ul class="list">
                <li>
                  <strong>1A</strong> Account data must be encrypted in equipment that is resistant to physical and logical compromise.
                </li>
                <li>
                  <strong>1B</strong> Logically secure POI devices.
                </li>
                <li>
                  <strong>1C</strong> Use P2PE applications that protect PAN and SAD.
                </li>
                <li>
                  <strong>1D</strong> Implement secure application-management processes.
                </li>
                <li>
                  <strong>1E</strong> Component providers ONLY: report status to solution providers.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="first-col">Domain 2: Application Security</td>
            <td>The secure development of payment applications designed to have access to clear-text account data intended solely for installation on PCI- approved POI devices.</td>
            <td>
              <ul class="list">
                <li>
                  <strong>1A</strong> Protect PAN and SAD.
                </li>
                <li>
                  <strong>2B</strong> Develop and maintain secure applications.
                </li>
                <li>
                  <strong>2C</strong> Implement secure application-management processes.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="first-col">
              Domain 3:
              P2PE Solution Management
            </td>
            <td>Overall management of the P2PE solution by the solution provider, including third-party relationships, incident response, and the P2PE Instruction Manual (PIM)</td>
            <td>
              <ul class="list">
                <li>
                  <strong>3A</strong> P2PE solution management.
                </li>
                <li>
                  <strong>3B</strong> Third-party management.
                </li>
                <li>
                  <strong>3C</strong> reation and maintenance of P2PE Instruction Manual for merchants.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="first-col">
              Domain 4:
              Decryption Environment
            </td>
            <td>The secure management of the environment that receives encrypted account data and decrypts it</td>
            <td>
              <ul class="list">
                <li><strong>4A</strong>  Use approved decryption devices.</li>
                <li>
                  <strong>4B</strong> Secure the decryption environment.
                </li>
                <li>
                  <strong>4C</strong> Monitor the decryption environment and respond to incidents
                </li>
                <li>
                  <strong>4D</strong> Implement secure, hybrid decryption processes.
                </li>
                <li>
                  <strong>4E</strong> Component providers ONLY: report status to solution providers.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="first-col">
              Domain 5:
              P2PE Cryptographic Key Operations and Device Management
            </td>
            <td>Establish and administer key- management operations for account- data encryption POI devices and decryption HSMs.</td>
            <td>
              <ul class="list">
                <li>
                  <strong>Control Objective 1</strong> Account data is processed using equipment and Account data is processed using equipment and methodologies that ensure they are kept secure.
                </li>
                <li>
                  <strong>Control Objective 2</strong> Account data keys and key-management
                  methodologies are created using processes that ensure it is not possible to predict any key or determine that certain keys are more probable than other keys.
                </li>
                <li>
                  <strong>Control Objective 3</strong>
                  Keys are conveyed or transmitted in a secure
                  manner.
                </li>
                <li>
                  <strong>Control Objective 4</strong>
                  Key loading is handled in a secure manner.
                </li>
                <li>
                  <strong>Control Objective 5</strong>
                  Keys are used in a manner that prevents or
                  detects their unauthorized usage.
                </li>
                <li>
                  <strong>Control Objective 6</strong>
                  Keys are administered in a secure manner.
                </li>
                <li>
                  <strong>Control Objective 7</strong>
                  Equipment used to process account data and keys
                  is managed in a secure manner
                </li>
                <li>
                  <strong>5A</strong>
                  Account data is processed using algorithms and methodologies that ensure they are kept secure.
                </li>
                <li>
                  <strong>5H</strong>
                  For hybrid decryption solutions: Implement secure hybrid-key management.
                </li>
                <li>
                  <strong>5I</strong>
                  Component providers ONLY: report status to solution providers.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <img src="~assets/PCI/8.png" class="mb-5 w-full" />
  </section>
</template>
   
<script>
export default {
  layout: "pci",
};
</script>

<style lang="scss" scoped>
.pci-table {
  thead {
    background: #126c84;
    color: #ffffff;
    tr th {
      padding: 10px 0;
    }
  }
  tbody tr td {
    padding: 10px;
    border: 1px solid #000000;
  }
  tbody td.first-col {
    background: #cbd4d5;
    font-weight: 700;
  }
  .list {
    margin-left: 0;
    list-style: none;
    li {
      margin: 0;
    }
  }
}
</style>