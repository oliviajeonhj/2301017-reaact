const Request = () => {
  return (
    <section className="py-5 text-center" id="request">
      <h3 className="pb-3">문의</h3>
      <form class="row g-3 justify-content-center align-items-center">
          <div className="col-sm-7 col-md-7 justify-content-center align-items- px-0">
            <label for="userName" className="form-label visually-hidden">이름</label>
            <input type="text" className="form-control" id="userName" name="userName" placeholder="이름을 입력하세요" required/>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-sm col-md-3">
              <label className="visually-hidden" for="useremail">이메일주소</label>
              <input type="text" className="form-control" id="useremail" name="useremail" placeholder="이메일 주소를 입력하세요" required/>
            </div>
            <div className="col-md-2">
              <label className="visually-hidden" for="chooseemail">이메일선택</label>
              <div className="input-group">
                <div className="input-group-text">@</div>
                <input type="text" class="form-control" id="chooseemail" name="chooseemail" placeholder="직접입력" required/>
              </div>
            </div>
            <div class="col-md-2">
              <label className="visually-hidden" for="emailoptions">Preference</label>
              <select className="form-select" id="emailoptions" name="emailoptions">
                <option selected>선택하기</option>
                <option value="naver.com">naver.com</option>
                <option value="google.com">google.com</option>
                <option value="daum.net">daum.net</option>
                <option value="nate.com">nate.com</option>
                <option value="daum.net">daum.net</option>
                <option value="yahoo.co.kr">yahoo.co.kr</option>
              </select>
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-primary">문의하기</button>
          </div>
      </form>

          <input type="radio" id="agree" /><label for="agree">개인정보정책동의</label>
          <button type="submit">전송</button>

    </section>

  )
}

export default Request;