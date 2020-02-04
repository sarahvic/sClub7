function myNav() {

    document.getElementById('myDropdown').style.display = document.getElementById('myDropdown').style.display =='block' ?   'none' : 'block';
}

document.getElementById("accessNav").addEventListener('click', myNav, false);