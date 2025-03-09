
// Animation utilities for our marketplace application

export const fadeInStaggered = (delay: number = 0.1) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 15,
    delay,
  }
});

export const scaleInStaggered = (delay: number = 0.1) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 15,
    delay,
  }
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Animation utility for intersection observer
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  callback: () => void,
  options = { threshold: 0.1 }
) => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (elementRef.current) {
    observer.observe(elementRef.current);
  }

  return () => {
    if (elementRef.current) {
      observer.unobserve(elementRef.current);
    }
  };
};
