const Footer = () => {
  return (
    <footer className="p-10 bg-[#1A1919] text-[#fff]/70 mt-32">
      <div className="footer max-w-6xl mx-auto">
        <aside>
          <h2 className="text-3xl font-extrabold text-white">CareerHub</h2>
          <p className="md:w-80">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">
            524 Broadway , NYC <br />
            +1 777 - 978 - 5570
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
