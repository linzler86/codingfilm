document.querySelector("#btn").addEventListener("click", () => {
    const id = "admin";
    const password = "owner";
    
    if(id == document.querySelector("#id").value) {
        if(password == document.querySelector("#pw").value) {
            alert('환영합니다!');
            location.href = 'main/login.html';
        }
        else {
            alert("비밀번호가 맞지 않습니다.");
        }
    }
    else {
        alert("아이디 혹은 비밀번호가 맞지 않습니다.");
    }
});