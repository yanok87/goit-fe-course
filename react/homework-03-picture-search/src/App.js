import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import SearchForm from './components/SearchForm/SearchForm';
import Modal from './components/Modal/Modal';
import * as API from './services/api';

const incrementPageNumber = 1;

class App extends Component {
  state = {
    imagesArr: [],
    pageNumber: 1,
    inputSearch: '',
    isModalOpen: false,
    largeImageURL: '',
  };

  componentDidMount() {
    this.fetchingImg();
    document.addEventListener('keydown', this.closeOnEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    if (e.keyCode === 27) {
      this.setState({
        isModalOpen: false,
      });
    }
  };

  fetchingImg = () => {
    const { pageNumber, inputSearch } = this.state;
    API.fetchPhotos(pageNumber, inputSearch.toLowerCase())
      .then(response =>
        this.setState(
          prevState => ({
            imagesArr: [...prevState.imagesArr, ...response.data.hits],
          }),
          () =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            }),
        ),
      )
      .catch(console.log);
  };

  fetchingNewImg = () => {
    const { pageNumber, inputSearch } = this.state;
    API.fetchPhotos(pageNumber, inputSearch.toLowerCase())
      .then(
        response =>
          this.setState({
            imagesArr: [...response.data.hits],
          }),
        () =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          }),
      )
      .catch(console.log);
  };

  changePageNumber = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + incrementPageNumber,
    }));
    this.fetchingImg();
    // start a function that re-renders amount of pages depending on the number we have
  };

  handleChangeInput = e => {
    this.setState({ inputSearch: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.setState({ pageNumber: 1 });
    this.fetchingNewImg();
  };

  openModalWindow = url => {
    this.setState({
      isModalOpen: true,
      largeImageURL: url,
    });
  };

  closeModalWindow = e => {
    if (e.target.tagName === 'IMG') {
      return;
    }
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { imagesArr, inputSearch, isModalOpen, largeImageURL } = this.state;
    // console.dir(document.documentElement.scrollHeight);
    return (
      <div className="app">
        <SearchForm
          onSubmitForm={this.onSubmitForm}
          onChangeInput={this.handleChangeInput}
          inputSearch={inputSearch}
        />
        {/* <SearchForm /> */}
        <Gallery
          imagesArr={imagesArr}
          onClickBtn={this.changePageNumber}
          openModal={this.openModalWindow}
        />
        {isModalOpen && (
          <Modal largeURL={largeImageURL} closeModal={this.closeModalWindow} />
        )}
      </div>
    );
  }
}

export default App;
