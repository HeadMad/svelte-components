<script>
  let win;
  export let ignoreOutsideClick = false;

  const open = () => win.showModal();
  const close = () => win.close();

  function closeOnBackdropClick(modal, ignore) {
    const click = (e) => {
      if (ignore) return;
      
      const {left, right, bottom, top} = modal.getBoundingClientRect();
      if (e.clientX > right || e.clientY < top ||
        e.clientX < left || e.clientY > bottom )
        modal.close();
    }

    modal.addEventListener('click', click);

    return {
      destroy() {
        modal.removeEventListener('click', click);
      }
    }
  };

  export {open, close};
</script>

<dialog bind:this={win} use:closeOnBackdropClick={ignoreOutsideClick}>
  <slot />
</dialog>


<style>
dialog {
  background-color: #fff;
  padding: 0;
  border: 0;
  box-shadow: 0 5px 9px rgba(0,0,0,.15);
}

dialog::backdrop {
  background-color: rgba(0,0,0,.5)
}
</style>