import React from 'react';
import Modal from 'react-modal';
import NotebookForm from './notebooks_form';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      notebookModal: false,
      newNotebookModal: false
     };

    this.closeModal = this.closeModal.bind(this);
    this.setNotebook = this.setNotebook.bind(this);
  }

  closeModal() {
    this.setState({
      notebookModal: false,
      newNotebookModal: false
    });
  }

  setNotebook(notebook) {
    return (e) => {
      e.preventDefault();
      console.log(notebook);
      this.props.setCurrentNotebook(notebook);
      this.closeModal();
    }
  }

  render() {
    return (
      <section>
        <img className="notebook-icon"
          src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694661/notebook_cdliou.png"
          alt="notebooks"
          onClick={() => this.setState({notebookModal: true})}></img>

        <Modal
          isOpen={this.state.notebookModal}
          contentLabel="Modal"
          className="notebook-modal"
          onRequestClose={this.closeModal}>

          <header className="notes-index-header">Notebooks</header>
          <input type="button" onClick={() => this.setState({newNotebookModal: true})} />

          <ul className="notebook-index">
            {this.props.allNotebooks.map((notebook, idx) => (
              <li key={idx} className="notebook-index-item" onClick={this.setNotebook(notebook)}>
                <h4 className="notebook-title">{notebook.title}</h4>
              </li>
            ))}
          </ul>



          <Modal
            isOpen={this.state.newNotebookModal}
            contentLabel="Modal"
            className="new-notebook-modal"
            onRequestClose={this.closeModal} >
            <NotebookForm close={this.closeModal}
              createNotebook={this.props.createNotebook} />
          </Modal>

        </Modal>
      </section>
    )
  }
}

export default NotebookIndex;