import React from 'react';
import Moment from 'react-moment'
import ReactTooltip from 'react-tooltip'


class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeNote = this.removeNote.bind(this);
    this.setCurrentNote = this.setCurrentNote.bind(this);
    this.selected = this.selected.bind(this);
  }

  removeNote(note) {
    return ((e) => {
      e.preventDefault();
      this.props.setCurrentNote(null);
      this.props.deleteNote(note);
    })
  }

  setCurrentNote(note) {
    return (e) => {
      e.preventDefault();
      this.props.currentNote.className = "";
      this.props.setCurrentNote(note);
      e.currentTarget.className = "selected";
    }
  }

  selected() {
    if (this.props.currentNote && this.props.currentNote.id === this.props.note.id) {
      return "selected";
    }
    return "";
  }

  render () {
    let note = this.props.note;
    let selected = "";

    return (
      <li  className={this.selected()} >
        <div>
          <section onClick={this.setCurrentNote(note)} >
            <div>
              <header>{note.title}</header>
                <img
                  className="delete-note"
                  src="https://res.cloudinary.com/dbf0xwan5/image/upload/q_10/v1490117304/trash_ho5zog.png"
                  data-tip="Delete Note"
                  onClick={this.removeNote(note)}/>

            </div>
            <Moment format="MM/DD/YYYY">{note.created_at}</Moment>
            <p>{note.body.replace(/<(?:.|\n)*?>/gm, '')}</p>
          </section>
          <ReactTooltip />
        </div>
      </li>
    )
  }
}

export default NoteIndexItem;
