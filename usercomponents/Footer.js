// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>

            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
            <div>
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
          </div>
          </div>

          
        </div>
        <div>
        <div style={styles.column}>
            <div>
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Our Platform</li>
            <li>Advertise Your Products</li>
            <li>Independently Publish</li>
          </ul>
          </div>

         <div>
          <h4>Help India</h4>
          <ul>
            <li>Donate For Poor Childrens</li>
            <li>Donate For Floods</li>
            <li>Donate For Food</li>
          </ul>
          </div>

          

        
          </div>
        </div>
        <div style={styles.column}>
            <div>
          <h4>Let Us Help You</h4>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Your Orders</li>
          </ul>
          </div>

          <div>
          <h4>Help Center</h4>
          <ul>
            <li>Resgister Complaint</li>
            <li>24*7 Help</li>
            <li>Talk To Our Executive</li>
          </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#232f3e',
    color: '#fff',
    padding: '30px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  h4: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    marginBottom: '5px',
  },
};

export default Footer;


// // Footer.js
// import React from 'react';
// // import './Footer.css'; // Import the CSS file for styling

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
        // <div className="footer-section">
        //   <h3>Company</h3>
        //   <ul>
        //     <li>About Us</li>
        //     <li>Contact Us</li>
        //     <li>Privacy Policy</li>
        //     <li>Terms of Service</li>
        //   </ul>
        // </div>
//         <div className="footer-section">
//           <h3>Categories</h3>
//           <ul>
//             <li>Electronics</li>
//             <li>Home & Kitchen</li>
//             <li>Fashion</li>
//             <li>Beauty</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Support</h3>
//           <ul>
//             <li>FAQs</li>
//             <li>Shipping & Delivery</li>
//             <li>Returns & Refunds</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Subscribe</h3>
//           <p>Subscribe to our newsletter for the latest updates and deals.</p>
//           <form>
//             <input type="email" placeholder="Enter your email" />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
