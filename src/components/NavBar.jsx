import { useEffect, useState, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { HiMenu, HiX } from 'react-icons/hi';





const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();

  // Scroll hide/show behavior
  useEffect(() => {
  if (currentScrollY === 0) {
    // At top of the page, keep nav visible and reset any GSAP changes
    setIsNavVisible(true);
    gsap.set(navContainerRef.current, { clearProps: 'all' }); // reset GSAP styles
    navContainerRef.current.classList.remove('floating-nav');
  } else {
    // After scrolling starts, control nav visibility
    if (currentScrollY > lastScrollY) {
      setIsNavVisible(false); // scrolling down
    } else {
      setIsNavVisible(true); // scrolling up
    }
    navContainerRef.current.classList.add('floating-nav');
  }
  setLastScrollY(currentScrollY);
}, [currentScrollY]);


  // GSAP animation on navbar visibility
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className='fixed  inset-x-0 top-4 z-50 h-16 transition-all duration-700 sm:inset-x-6'
    >
      <header className='absolute  top-1/2 w-full -translate-y-1/2'>
        <nav className='flex bg-black items-center justify-between px-4 py-2  rounded-lg shadow-lg'>

          {/* Left: Title */}
          <h1 className='text-xl font-semibold cursor-pointer hover:text-blue-400 animate-slideInLeft'>
            <a href="#home">Portfolio</a>
          </h1>

          {/* Desktop Links */}
          <div className='hidden md:flex gap-6'>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='nav-hover-btn text-white  hover:text-blue-600 transition-colors duration-200'
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <HiX className='w-6 h-6 text-white' />
              ) : (
                <HiMenu className='w-6 h-6 text-white cursor-pointer hover:text-blue-400' />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className='md:hidden mt-2 bg-neutral-800 rounded-lg shadow-md px-4 py-3 flex flex-col gap-3'>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className='text-white text-base font-medium hover:text-blue-600 transition-colors duration-200'
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
