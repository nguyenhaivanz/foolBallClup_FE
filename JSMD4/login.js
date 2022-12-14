    function loginabc() {
        let gmail = document.getElementById("gmail").value;
        let password = document.getElementById("password").value;

        let account = {
            gmail: gmail,
            password: password
        };
        $.ajax({
            type: "POST",
            headers: {
                // // kiểu dữ liệu nhận về
                // 'Accept': 'application/json',
                // // kiểu truyền đi
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/api/login",
            data: JSON.stringify(account),
            //xử lý khi thành công
            success: function (data) {
                alert("thành công")
                localStorage.setItem("token", data.token);
                location.href = "index.html"
            },
            error: function (err) {
                alert("ccccccx")
                document.getElementById('messageLogin').innerHTML = "Login fail ! Try again please !";
            }
        }),
        event.preventDefault();

    }
    function logout() {
    localStorage.setItem("token", "")
    location.href = "login.html"
}



