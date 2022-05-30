export const getCategories = async(typeFilter, setData) => {
  try {
    const res = await fetch("./data.json")
    const data = await res.json();

    return setData(data.filter(item => item.category === typeFilter)) ;
  } catch (error) {
    console.log(error)
  }

}

export const getItem = async(slug) => {
  try {
    const res = await fetch("./data.json")
    const data = await res.json();


  } catch (error) {
    console.log(error)
  }
}