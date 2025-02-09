export const getClinics = async () => {
  const res = await fetch("http://localhost:3002/api/clinics");
  if (!res.ok) {
    throw new Error("Failed to fetch clinics");
  }
  return res.json();
};

export const getDetailClinic = async (id) => {
  const res = await fetch(`http://localhost:3002/api/clinics/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch clinics detail");
  }
  return res.json();
};

export const getDetailBooking = async (id) => {
  const res = await fetch(`http://localhost:3002/api/clinics/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch clinics detail booking");
  }
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch("http://localhost:3002/api/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};
