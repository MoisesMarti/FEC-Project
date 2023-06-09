import { createContext, useState, useEffect, useRef } from "react";

const MiniNavContext = createContext();

export const MiniNavProvider = ({ children }) => {
  const amenitiesRef = useRef();
  const calendarRef = useRef();
  const locationRef = useRef();
  const miniNavRef = useRef()
  const photosRef = useRef();
  const reviewsRef = useRef();
  const rentalModalFooterRef = useRef();
  const [isMiniNavVisible, setIsMiniNavVisible] = useState()
  const [isMiniNavReserveVisible, setIsMiniNavReserveVisible] = useState()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsMiniNavVisible(!entry.isIntersecting);
    });
    observer.observe(miniNavRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      (entry.isIntersecting) ? setIsMiniNavReserveVisible(true) :setIsMiniNavReserveVisible(false);
    });
    observer.observe(rentalModalFooterRef.current);
  }, []);

  const scrollToPhotos = () => {
    const fixedElementHeight = document.querySelector('#mini-navbar-anchor').offsetHeight;
    const reviewsOffset = photosRef.current.offsetTop - fixedElementHeight;
    window.scrollTo({
      top: reviewsOffset + 60,
      behavior: 'smooth'
    });
  }
  const scrollToAmenities = () => {
    const fixedElementHeight = document.querySelector('#mini-navbar-anchor').offsetHeight;
    const reviewsOffset = amenitiesRef.current.offsetTop - fixedElementHeight;
    window.scrollTo({
      top: reviewsOffset - 45,
      behavior: 'smooth'
    });
  }
  const scrollToReviews = () => {
    const fixedElementHeight = document.querySelector('#mini-navbar-anchor').offsetHeight;
    const reviewsOffset = reviewsRef.current.offsetTop - fixedElementHeight;
    window.scrollTo({
      top: reviewsOffset,
      behavior: 'smooth'
    });
  }
  const scrollToLocation = () => {
    const fixedElementHeight = document.querySelector('#mini-navbar-anchor').offsetHeight;
    const reviewsOffset = locationRef.current.offsetTop - fixedElementHeight;
    window.scrollTo({
      top: reviewsOffset,
      behavior: 'smooth'
    });
  }

  const scrollToCalendar = () => {
    const fixedElementHeight = document.querySelector('#mini-navbar-anchor').offsetHeight;
    const reviewsOffset = calendarRef.current.offsetTop - fixedElementHeight;
    window.scrollTo({
      top: reviewsOffset -45,
      behavior: 'smooth'
    });
  }

  return (
    <MiniNavContext.Provider
      value={{
        isMiniNavVisible,
        isMiniNavReserveVisible,
        setIsMiniNavVisible,
        scrollToPhotos,
        scrollToAmenities,
        scrollToReviews,
        scrollToLocation,
        scrollToCalendar,
        miniNavRef,
        photosRef,
        amenitiesRef,
        reviewsRef,
        locationRef,
        rentalModalFooterRef,
        calendarRef
      }}
    >
      {children}
    </MiniNavContext.Provider>
  );
};

export default MiniNavContext;