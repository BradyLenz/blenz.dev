import posed from 'react-pose';

export const ImageButton = posed.img({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
});
