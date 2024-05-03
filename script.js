let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let nameField = document.getElementById("nameField");
        let confirmPwd = document.getElementById("confirmPwd");
        let title = document.getElementById("title");
        let passwordInput = document.getElementById("passwordInput");

        signupBtn.onclick = function() {
            
            nameField.style.maxHeight = '60px';
            title.innerHTML = 'Sign Up';
            signupBtn.classList.remove('disable');
            signinBtn.classList.add('disable');

            confirmPwd.style.maxHeight = '60px';
            title.innerHTML = 'Sign Up';
            signupBtn.classList.remove('disable');
            signinBtn.classList.add('disable');
        }

            signinBtn.onclick = function() {
            nameField.style.maxHeight = '0';
            title.innerHTML = 'Sign In';
            signupBtn.classList.add('disable');
            signinBtn.classList.remove('disable');

            
            confirmPwd.style.maxHeight = '0';
                title.innerHTML = 'Sign In';
                signupBtn.classList.add('disable');
                signinBtn.classList.remove('disable');
        }

        // Function to check if a string is alphanumeric
        function isAlphanumeric(str) {
        // Allow letters and numbers
            return /^[a-zA-Z0-9]+$/.test(str);
        }