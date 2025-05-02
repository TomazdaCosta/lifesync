import React from 'react'
import BarraMobile from '../components/BarraMobile'
import { AppContext } from '../contexts/appContext'
import Navigation from '../components/Navigation'
import InputComponent from '../components/InputComponent'
import styles from '../styles/Notes.module.css'

const Notes = () => {
  const { title, addTitle, content, addContent, notesList, addNote, removeNote } = React.useContext(AppContext)
  return (
    <>
      <div className={styles.generalContainer}>
        <div className={styles.notesContainer}>
    <Navigation pageTitle='Notas' classNav={styles.navColor} clasHomeImg={styles.homeImgColor}/>

          <section className={styles.containerForm}>
            <p>Adicione aqui as suas notas.</p>

            <form>
              <InputComponent nameLabel='Título' typeInput='text' nameInput='title' idInput='title' valueInput={title} handleInput={addTitle} placeholderValue='Digite o titulo da nota' required/>

              <label htmlFor="content">Conteúdo</label>
              <textarea
                name="content"
                id="content"
                required
                value={content}
                onChange={(e) => addContent(e.target.value)}
                placeholder='Digite o conteúdo da nota'
              ></textarea>

              <button
                onClick={(e) => addNote(e)}
              >Adicionar</button>
            </form>
          </section>

          <section className={styles.containerNotesBg}>
            <p>Suas notas</p>

            <div className={styles.notesBg}>
              {notesList.length ? notesList.map((note) => (
                <div key={note.id} className={styles.note}>
                  <h2>{note.title}</h2>
                  <p>{note.content}</p>

                  <button
                    onClick={() => removeNote(note.id)}
                  >remover</button>
                </div>
              )) : <div>
                  <p>Você não possui notas adicionadas.</p>
                </div>}
            </div>
          </section>
        </div>

        <div className={styles.barContainer}>
          <BarraMobile />
        </div>
      </div>
    </>
  )
}

export default Notes
