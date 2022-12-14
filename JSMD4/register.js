function register() {
    // let gmail = document.getElementById("username").value;
    // let password = document.getElementById("password").value;

    let gmail = $("#gmail").val();
    let password = $("#password").val();

    let account = {
        gmail: gmail,
        password: password,
    };
    $.ajax({
        type: "POST",
        headers: {
            // // kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/registers/register",
        data: JSON.stringify(account),
        //xử lý khi thành công
        success: function (data) {
            alert("Dang ki tai khoan thanh cong")
            localStorage.setItem("token", data.token);
            location.href = "login.html"
        },
        error: function (err) {
            alert("Login fail ! Try again please !");
        }
    })
    event.preventDefault();

    function logout() {
        localStorage.setItem("token", "")
        location.href = "login.html"
    }
}

function checkpass() {
    let x = $("#password").val()
    let y = $("#repassword").val()
    
    if(x == y ){
        document.getElementById("repass-err").innerHTML=""
        return true;

    }else{
        document.getElementById("repass-err").innerHTML=`<p style="color: red">Vui lòng nhập đúng !</p>`
        return false;
    }
}

function dangki() {
    if(!checkpass()){
        checkpass()
    }else {
        register()
    }
}
