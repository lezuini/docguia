const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

// Helper para fetch
const fetchAPI = async (endpoint, options = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Error en la solicitud");
  }

  return res.json();
};

// 1. Autenticación
export const signUpMedico = async (username, fullname, password) => {
  return fetchAPI("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, fullname, password }),
  });
};

export const signInMedico = async (username, password) => {
  return fetchAPI("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
};

export const signOutMedico = async () => {
  return fetchAPI("/api/auth/logout", {
    method: "POST",
  });
};

export const checkAuth = async () => {
  return fetchAPI("/api/auth/check");
};

// 2. Consultorios
export const createConsultorio = async (consultorioData) => {
  return fetchAPI("/api/consultorios/create", {
    method: "POST",
    body: JSON.stringify(consultorioData),
  });
};

export const getConsultorios = async () => {
  return fetchAPI("/api/consultorios/get");
};
