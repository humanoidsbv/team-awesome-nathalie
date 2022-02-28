export const removeTimeEntry = async (id: number) => {
  const response = await fetch("http://localhost:3004/time-entries/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
