import styles from './contentSES.module.css'



export default function ContentSES() {

  return(
    <section className={styles.main}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>
              AvoChat - simplu, eficient, sigur
             <br/>
            </h2>
            <p>
             AvoChat funcționează pe bază de întrebare-răspuns în format text (chat).
             <br/>
             <br/>
             În platforma AvoChat înrolăm doar avocați cu o etică profesională ireproșabilă și experiență solidă în diverse ramuri de drept. Pentru fiecare avocat sunt prezentate informații profesionale precum studii, experiență, dar și recenzii din partea utilizatorilor care au beneficiat de serviciile lor.
             <br/>
             <br/>
             Întreaga interacțiune din platformă este securizată și confidențială, discuțiile fiind cunoscute doar de către tine și avocatul ales.
            </p>
             <a href="#" className={styles.btn}>
             <strong>Despre AvoChat</strong>
            </a>
          </div> 
          <div className={styles.imgWrap}>
            <img src='/ses1.png'/>
          </div> 
        </div>
      </div>  
    </section>
  )  
}