export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";


async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  // 204 No Content nu are corp
  return res.status === 204 ? null : res.json();
}

export function fetchAnimale() {
  return request("/animale");
}

export function createAnimal(animal) {
  return request("/animale", {
    method: "POST",
    body: JSON.stringify(animal),
  });
}

export function updateAnimal(id, changes) {
  return request(`/animale/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteAnimal(id) {
  return request(`/animale/${id}`, {
    method: "DELETE",
  });
}