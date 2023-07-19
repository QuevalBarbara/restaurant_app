const Footer = () => {
    return (
      <footer className="footer bg-light">
        <div className="container">
          <p className="text-dark text-center">
            Final project for MITxPro © 2023: QUEVAL Barbara
          </p>
        </div>
        
        <style jsx>{`
          .footer {
            padding: 1rem;
            background-color: #f8f9fa;
          }
          
          .container {
            max-width: 960px;
            margin: 0 auto;
          }
          
          .text-dark {
            color: #343a40;
          }
        `}</style>
      </footer>
    );
  };
  
  export default Footer;
  