import React, { useState } from "react";
import certificates from "../data/certificates.json";

const Certificates = () => {
  // State to manage the selected certificate image
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle click on certificate name
  const handleClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>
      <ul className="certificates">
        {certificates.map((certificate, index) => (
          <li key={index} className="certificate-item" onClick={() => handleClick(certificate.image)}>
            <p>{certificate.name}</p>
          </li>
        ))}
      </ul>

      {/* Modal to display the certificate image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Certificate" />
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
