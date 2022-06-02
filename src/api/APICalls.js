
export const getCategories = async(typeFilter, setData) => {
  try {
    const res = await fetch("/data.json")
    const data = await res.json();

    return setData(data.filter(item => item.category === typeFilter)) ;
  } catch (error) {
    console.log(error)
  }

}

export const getItem = async(slug, setData) => {
  try {
    const res = await fetch("/data.json")
    const data = await res.json();

    return setData(data.filter(item => item.slug === slug));

  } catch (error) {
    console.log(error)
  }
}
export const getItems = async(setData) => {
  try {
    const res = await fetch("./data.json")
    const data = await res.json();

    return setData(data);

  } catch (error) {
    console.log(error)
  }
}

