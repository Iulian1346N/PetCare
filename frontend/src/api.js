const BASE_URL = "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  return res.json();
}

export function fetchAnimale() {
  return request("/animale");
}

export function fetchAnimal(id) {
  return request(`/animale/${id}`);
}

export function createAnimal(data) {
  return request("/animale", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function updateAnimal(id, patch) {
  return request(`/animale/${id}`, {
    method: "PATCH",
    body: JSON.stringify(patch),
  });
}

export function deleteAnimal(id) {
  return request(`/animale/${id}`, {
    method: "DELETE",
  });
}

export async function fetchAnimalById(id) {
  const res = await fetch(`${BASE_URL}/animale/${encodeURIComponent(id)}`);
  if (!res.ok) {
    throw new Error("Activitatea nu a fost găsită.");
  }
  return res.json();
}