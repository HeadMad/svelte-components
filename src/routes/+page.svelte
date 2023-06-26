<script>
  import { Modal } from '$lib';
  let modal;
</script>

<button on:click={modal.open}>Open</button>

<Modal bind:this={modal} >
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia minus cupiditate mollitia laboriosam, libero totam qui magnam, repudiandae iste expedita obcaecati ipsa earum ullam ea aliquam ad dolorem numquam soluta.</p>
  <button on:click={modal.close}>close</button>
</Modal>


<style>
  p {
    max-width: 500px;
  }
</style>
