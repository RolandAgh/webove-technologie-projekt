document.addEventListener('DOMContentLoaded', function() {
    const galleryButton = document.getElementById('gallery-button');
    galleryButton.addEventListener('click', function() {
        window.location.href = 'gallery.html';
    });

function showGallery(galleryNumber) {

    var galleries = document.querySelectorAll('.gallery');
    galleries.forEach(function(gallery) {
        gallery.style.display = 'none';
    });

    var selectedGallery = document.getElementById('gallery' + galleryNumber);
    selectedGallery.style.display = 'block';
}


    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('The form was sent successfuly!');
        form.reset();
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-button');
     copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-text');
            const dummyElement = document.createElement('textarea');
            dummyElement.value = textToCopy;
            document.body.appendChild(dummyElement);
            dummyElement.select();
            document.execCommand('copy');
            document.body.removeChild(dummyElement);
            

            console.log('Text bol skopírovaný: ' + textToCopy);
        });
    });
});

$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "ratings.json",
        dataType: "json",
        success: function(data) {
            $.each(data.ratings, function(index, rating) {
                var row = "<tr><td>" + rating.product + "</td><td>" + rating.rating + "</td><td>" + rating.comment + "</td></tr>";
                $('#ratingsBody').append(row);
            });
        },
        error: function(xhr, status, error) {
            console.error(xhr.statusText);
        }
    });
});
