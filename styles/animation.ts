const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  },
  FadeInInfinitely: {
    initial: { opacity: 1 },
    animate: {
      opacity: 0,
      transition: { duration: 3, yoyo: Infinity },
    },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  },
  fadeInUpmost: {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  },
  fadeInUpper: {
    initial: { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
};

export default variants;
