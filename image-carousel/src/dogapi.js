/**
 * Get cute dog pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */
export const getDogs = async (length = 10) => {
    const res = await fetch(
      `https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json`
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log("==> In getDogs: ", response);
        const dogs = [];
        response.data.children.forEach((c) => {
          const title = c.data.title;
          const url = c.data.preview?.images[0]?.resolutions[2]?.url;
          if (url) {
            dogs.push({ title: title, url: url.replaceAll("&amp;", "&") });
          }
        });
        // console.log(dogs);
        return dogs.slice(0, length); // remove the extra dogs
      });
  
    return res;
  };
  