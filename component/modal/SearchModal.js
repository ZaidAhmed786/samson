import { NafiabContext } from "@/context/NafiabContext";
import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";

const SearchModal = () => {
  const { showSearchModal, handleSearchClose } = useContext(NafiabContext);
  return (
    <Modal
      show={showSearchModal}
      onHide={handleSearchClose}
      size="xl"
      centered
      className="ba-search-popup"
    >
      {/* <div className="ba-color-layer"></div> */}
      <Modal.Body 
      className="ba-search-popup-inner"
      >
        <form action="#">
          <input
            type="text"
            placeholder="Search here..."
            name="search"
            // id="search-input"
          />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
