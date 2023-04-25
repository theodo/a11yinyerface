export const activeLightBlurFilter = () => {
  document.body.style.filter = "blur(.1em) brightness(120%)";
};

export const activeHeavyBlurFilter = () => {
  document.body.style.filter = "blur(7px) contrast(70%)";
};

export const removeBlurFilter = () => {
  document.body.style.filter = "";
};
