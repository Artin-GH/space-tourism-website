async function cacheImages(imageSrcs: string[]) {
  const promises = await imageSrcs.map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  await Promise.all(promises);
}

export default cacheImages;
