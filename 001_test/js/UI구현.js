document.querySelector("#id").onfocus = (e) => {
    console.log('#id 포커싱되었습니다.');
  };
  document.querySelector("#id").onblur = (e) => {
    console.log('#id 포커스를 잃었습니다.');
    const {target : { value }} = e;
    console.log(value);
    if(!value) {
      alert("필수 입력 항목입니다.");
    }
  };

document.querySelector("#password").onfocus = (e) => {
    console.log('#password 포커싱되었습니다.');
    if(onclick) {
        console.log('영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자');
      }
  };
  document.querySelector("#password").onblur = (e) => {
    console.log('#password 포커스를 잃었습니다.');
    const {target : { value }} = e;
    console.log(value);
    if(!value) {
      alert("필수 입력 항목입니다.");
    }
  };

document.querySelector("#passwordCheck").onfocus = (e) => {
    console.log('#passwordCheck 포커싱되었습니다.');
  };
  document.querySelector("#passwordCheck").onblur = (e) => {
    console.log('#passwordCheck 포커스를 잃었습니다.');
    const {target : { value }} = e;
    console.log(value);
    if(!value) {
      alert("필수 입력 항목입니다.");
    }
  };