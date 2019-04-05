export const openModal = (modal, modalPayload = {}) => ({
  type: "OPEN_MODAL",
  payload: { modal, modalPayload },
});

export const closeModal = () => ({
  type: "CLOSE_MODAL",
});
