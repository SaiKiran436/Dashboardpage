import { create } from 'zustand';

const STORAGE_KEY = 'dashboard_sections';

const getStored = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {
    CSPM: [],
    CWPP: [],
    Registry: []
  };
};

const useWidgetStore = create((set) => ({
  sections: getStored(),
  selectedRange: 'Last 2 days',
  searchTerm: '',

  setSelectedRange: (range) => set({ selectedRange: range }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  addWidget: (category, widget) =>
    set((state) => {
      const updated = {
        ...state.sections,
        [category]: [...(state.sections[category] || []), widget]
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return { sections: updated };
    }),

  removeWidget: (category, id) =>
    set((state) => {
      const updated = {
        ...state.sections,
        [category]: state.sections[category].filter((w) => w.id !== id)
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return { sections: updated };
    }),
}));

export default useWidgetStore;
