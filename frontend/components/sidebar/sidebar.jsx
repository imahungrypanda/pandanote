import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter, hashHistory } from 'react-router';

const style = {
  overlay: {
    backgroundColor: "none"
  }
};


class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userModal: false,
      notebookModal: false,
      newNotebookModal: false,
      tagsModal: false,
      newTagModal: false,
      newNotebookName: ""
     };

    this.closeUserModal = this.closeUserModal.bind(this);
    this.closeNotebookModal = this.closeNotebookModal.bind(this);
    this.closeNewNotebookModal = this.closeNewNotebookModal.bind(this);
    this.closeTagsModal = this.closeTagsModal.bind(this);
    this.closeNewTagModal = this.closeNewTagModal.bind(this);
    this.noteLogout = this.noteLogout.bind(this);
    this.notesHome = this.notesHome.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  closeUserModal() {
    this.setState({userModal: false});
  }

  closeNotebookModal() {
    this.setState({notebookModal: false});
  }

  closeNewNotebookModal() {
    this.setState({noteNewbookModal: false});
  }

  closeTagsModal() {
    this.setState({tagsModal: false});
  }

  closeNewTagModal() {
    this.setState({tagModal: false});
  }

  noteLogout() {
    this.props.logout()
      .then(() => hashHistory.replace('/'));
  }

  notesHome() {
    hashHistory.replace('/home');
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

    return (
      <aside className="sidebar">
        <section className="sidebar-logo">
          <img className="logo" src="http://res.cloudinary.com/dbf0xwan5/image/upload/v1489603019/panda_logo_fhv0z7.png" alt="logo"></img>
        </section>

        <section className="sidebar-new-note">
          <img className="new-note-icon" src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489693892/plus_copy_ijh8cy.png" alt="new-note"></img>
        </section>

        <section className="sidebar-actions">
          <img className="notes-icon"
            src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694567/note_tvm6tj.png"
            alt="notes"
            onClick={this.notesHome}></img>



          <img className="notebook-icon"
            src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694661/notebook_cdliou.png"
            alt="notebooks"
            onClick={() => this.setState({notebookModal: true})}></img>

          <Modal
            isOpen={this.state.newNotebookModal}
            contentLabel="Modal"
            className="new-notebook-modal"

            onRequestClose={this.closeNewNotebookModal}>

            <form className="new-notebook-form">
              <p>CREATE NOTEBOOK</p>
              <input type="text"
                className="new-notebook-name"
                value={this.state.newNotebookName}
                onChange={this.update("newNotebookName")}
                placeholder="Notebook Title" />
              <input className="button" type="button" value="Cancel" onClick={this.closeNotebookModal}/>
              <input className="button" type="button" value="Create Notebook" onClick={""}/>
            </form>
          </Modal>



          <img className="tags-icon"
            src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489694744/price-tag_yqofit.png"
            alt="tags"
            onClick={() => this.setState({tagsModal: true})}></img>
          <Modal
            isOpen={this.state.tagsModal}
            contentLabel="Modal"
            className="tags-modal"

            onRequestClose={this.closeTagsModal}>
            <input className="button" type="button" value="Logout" onClick={this.noteLogout} />
          </Modal>

        </section>



        <section className="user-profile">
          <img className="user-profile-icon"
            src="http://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1489696563/user_copy_rfe19e.png"
            alt="profile"
            onClick={() => this.setState({userModal: true})}></img>

          <Modal
            isOpen={this.state.userModal}
            contentLabel="Modal"
            className="user-profile-modal"
            style={style}
            onRequestClose={this.closeUserModal}>
            <input className="button" type="button" value="Logout" onClick={this.noteLogout} />
          </Modal>
        </section>

      </aside>
    )
  }
}


export default Sidebar;