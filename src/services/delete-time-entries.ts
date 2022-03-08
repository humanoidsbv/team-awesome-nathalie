export const removeTimeEntry = async (id?: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries/` + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
