const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    //handle situation when no domain avaliable
    if (!apiDomain) {
      return [];
    }

    const response = await fetch(`${apiDomain}/properties`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchProperties };
