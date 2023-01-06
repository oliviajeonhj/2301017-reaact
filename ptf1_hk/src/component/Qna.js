import qnaDBjson from '../json/allDB.json';

const Qna = () => {
  const qnaDb = qnaDBjson.qnaDB;
  return (
    <section className="py-5 text-center" id="notice">
      <h3>자주하는 질문</h3>
      <div className="py-5 container-md text-start">
        <ul>
          {
            qnaDb.map(function (value, index) {
              return (
                <li key={'qna' + index}>
                  <strong className='d-block border-bottom py-2 ' role="button" onClick={e => { console.log(e.target.nextSibling.classList.toggle('d-none')) }}>{value.subject}</strong>
                  <p className='py-5 d-none'>{value.content}</p>
                </li>
              )
            }
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default Qna;