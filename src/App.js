import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { ModalLoader } from './components/Loader/Loader';
import './App.css';
import Modal from './components/Modal/Modal';
import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    showModal: false,
    loader: false,
    pictureName: '',
    largeImageURL: '',
    imgTags: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  handleImageClick = (largeImageURL, imgTags) => {
    this.setState({ largeImageURL, imgTags, loader: true });
    this.toggleModal();
  };

  hideLoaderInModal = () => this.setState({ loader: false });

  render() {
    const { showModal, largeImageURL, imgTags, loader } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={4000} />
        <ImageGallery
          pictureName={this.state.pictureName}
          handleImageClick={this.handleImageClick}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {loader && <ModalLoader />}
            <img
              src={largeImageURL}
              alt={imgTags}
              onLoad={this.hideLoaderInModal}
            />
          </Modal>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  showModal: PropTypes.bool,
  pictureName: PropTypes.string,
  loader: PropTypes.bool,
};

export default App;
