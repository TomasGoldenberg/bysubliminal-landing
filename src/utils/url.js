export const replaceParams = (paramsToReplace, url) => {
  let newUrl = url;

  paramsToReplace.forEach((param) => {
    newUrl = newUrl.replace(param.label, param.value);
  });

  console.log(url, newUrl);
  return newUrl;
};
