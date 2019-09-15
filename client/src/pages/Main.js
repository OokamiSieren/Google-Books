import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Book from "../components/Book";
import Card from "../components/Card";
import API from "../utils/API";
import Footer from "../components/Footer";
class Main extends Component {
  state = {
    books: [],
    q: "",
    message: "No results yet. Have you serached for a title?"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron />
          </div>
          <div className="col-md-12">
            <Search
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              q={this.state.q}
            />
          </div>
          <div className="row">
            <div className="col-md-12">
              <Card title="Results">
                {this.state.books.length ? (
                  <ul>
                    {this.state.books.map(book => (
                      <Book
                        key={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        Button={() => (
                          <button
                            onClick={() => this.handleBookSave(book.id)}
                            className="btn btn-primary ml-2"
                          >
                            Save
                          </button>
                        )}
                      />
                    ))}
                  </ul>
                ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
