import { create } from "zustand";

const useFormStore = create((set) => ({
  formRef: null,
  setFormRef: (ref) => set({ formRef: ref }),
  submitForm: () => {
    set((state) => {
      if (state.formRef) {
        state.formRef.requestSubmit();
      }
      return state;
    });
  },
}));

export default useFormStore;
