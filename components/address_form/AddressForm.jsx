import React, { useState } from 'react';
import { useRouter } from 'next/router';

const AddressForm = () => {
  const [formData, setFormData] = useState({
    country: "USA",
    addressType: "Residence",
    streetAddress: "",
    aptSteFloor: "",
    aptSteFloorNumber: "",
    zipCode: "",
    // productId: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataToSend = {
      country: formData.country,
      addressType: formData.addressType,
      streetAddress: formData.streetAddress,
      aptSteFloor: formData.aptSteFloor,
      aptSteFloorNumber: formData.aptSteFloorNumber,
      zipCode: formData.zipCode,
      //   productId: formData.productId
    };

    console.log("Data to send:", dataToSend); // Log the data being sent

    try {
      const response = await fetch(
        "https://papa-johns.vercel.app/api/address",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const result = await response.json();

      console.log("API Response:", result); // Log the full API response

      if (response.ok && result.status === "success") {
        setResponseMessage("Form submitted successfully!");
        router.push('/menu');
      } else {
        setResponseMessage(
          result.message || "Failed to submit form. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
        setLoading(false);
      }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Enter Delivery Address</h2>
      <div style={{display: 'flex', gap: '10px', alignItems: 'end',width: '100%' }}>
        <div style={styles.formGroup}>
          <label style={{width: '100%'}}>
            Country
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="USA">USA</option>
              <option value="USA">CANADA</option>
            </select>
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={{width: '100%'}}>
            Address Type
            <select
              name="addressType"
              value={formData.addressType}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="Residence">Residence</option>
              <option value="Business">Business</option>
            </select>
          </label>
        </div>
      </div>
      <div style={styles.formGroup}>
        <label style={{width: '100%'}}>
          Street Address *
          <input
            type="text"
            name="streetAddress"
            placeholder="Example: 123 Main St."
            value={formData.streetAddress}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
      </div>
     <div  style={{display: 'flex', alignItems:'end', gap: '10px', marginBottom: '15px',width: '100%'}}>
     <div style={{width: '100%', }}>
        <label style={{width: '100%'}}>
          Apt / Ste / Floor
          <select
            name="aptSteFloor"
            value={formData.aptSteFloor}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select...</option>
            <option value="Apartment">Apartment</option>
            <option value="Suite">Suite</option>
            <option value="Floor">Floor</option>
            {/* Add other valid enum values as needed */}
          </select>
        </label>
      </div>
      <div style={{width: '100%', }}>
      
          <input
            type="text"
            name="aptSteFloorNumber"
            placeholder="Enter Apt/Ste/Floor number"
            value={formData.aptSteFloorNumber}
            onChange={handleChange}
            style={styles.input}
            required
          />
    
      </div>
     </div>
      <div style={styles.formGroup}>
        <label style={{width: '100%'}}>
          Zip Code *
          <input
            type="text"
            name="zipCode"
            placeholder="Enter zip code"
            value={formData.zipCode}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <a href="#" style={styles.link}>
          Dont know your Zip?
        </a>
      </div>
       <button type="submit" style={styles.submitButton} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {responseMessage && (
        <p style={styles.responseMessage}>{responseMessage}</p>
      )}
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
    width: "60%",
    height: 'fit-content',
    margin: "10px auto",
  },
  heading: {
    marginBottom: "20px",
    color: "#4CAF50",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "15px",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  link: {
    display: "block",
    marginTop: "5px",
    color: "#4CAF50",
    textDecoration: "none",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  responseMessage: {
    marginTop: "20px",
    color: "#4CAF50",
    textAlign: "center",
  },
  label: {
    width: '100%'
  }
};

export default AddressForm;
