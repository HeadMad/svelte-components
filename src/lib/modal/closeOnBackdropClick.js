export default function(modal) {
  const click = (e) => {
    const {left, right, bottom, top} = modal.getBoundingClientRect();
    if (
      e.clientX > right ||
      e.clientY < top ||
      e.clientX < left ||
      e.clientY > bottom 
      )
      modal.close();
  }

  modal.addEventListener('click', click);

  return {
    destroy() {
      modal.removeEventListener('click', click);
    }
  }
};

